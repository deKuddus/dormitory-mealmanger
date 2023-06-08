<?php

namespace App\Http\Controllers\Member;

use App\Enums\DormitoryInfoStatic;
use App\Enums\NoticeStatus;
use App\Enums\RuleStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\QuickMealOnOFFRequest;
use App\Http\Requests\UserDepositCreateRequest;
use App\Http\Requests\UserMealUpdateRequest;
use App\Http\Requests\UserProfileUpdateRequest;
use App\Http\Resources\BazarScheduleCollection;
use App\Http\Resources\NoticeCollection;
use App\Models\BazarSchedule;
use App\Models\Deposit;
use App\Models\Dormitory;
use App\Models\Meal;
use App\Models\Menu;
use App\Models\Notice;
use App\Models\Rule;
use App\Services\AdditonalCostService;
use App\Services\BazarService;
use App\Services\CalculationService;
use App\Services\DepositService;
use App\Services\MealService;
use App\Services\UserService;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function index(MealService $mealService, CalculationService $calculationService)
    {
        $dormitoryId = DormitoryInfoStatic::DORMITORYID;
        $month = (new DormitoryInfoStatic())->getMonth();
        $userId = auth()->id();

        $totalFixedCost = (new AdditonalCostService())->getTotalCost($dormitoryId);
        $dromTotalMeal = $mealService->dormTotalMeal($dormitoryId, $month);
        $totalMeal = $mealService->userTotalMeal($userId, $dormitoryId, $month);
        $balance = (new UserService())->getUserInfo($userId, 'deposit');
        $bazar = (new BazarService())->getBazarsListOrSum($dormitoryId, true);
        $mealCharge = $dromTotalMeal === 0 ? 0 : round($bazar / $dromTotalMeal, 2);
        $totalUser = (new UserService())->getBasicsOfUsers($dormitoryId, true);
        $fixedCost = $totalUser === 0 ? $totalFixedCost : $totalFixedCost / $totalUser;
        return Inertia::render('Member/Index', [
            'mealCharge' => $mealCharge,
            'meals' => $mealService->getUserAllMealForSelectedMonthToCurrentDate($userId, $dormitoryId, $month),
            'fixedCost' => $fixedCost,
            'due' => round($calculationService->getDue($totalMeal, $balance, $fixedCost, $mealCharge),2),
            'totalMeal' => $totalMeal,
            'totalCost' => $totalMeal === 0 ? 0 : round($totalMeal * $mealCharge, 2),
            'todaysMeal' => $mealService->getTodaysLunchAndDinner()
        ]);
    }


    public function quickMealOnOff(QuickMealOnOFFRequest $request, MealService $mealService): RedirectResponse
    {

        try {
            $userId = auth()->id();

            $status = $mealService->quickMealOnOff($userId, $request);

            return back()->with('success', $status ? 'Meal on from today to end of month' : 'Meal off from today to end of month');
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    public function editProfile()
    {
        return Inertia::render('Member/Profile', [
            'user' => auth()->user()
        ]);
    }

    public function updateProfile(UserProfileUpdateRequest $request)
    {
        auth()->user()->update($request->validated());
        return back()->with('success', 'Profile updated');
    }

    public function mealDetails(Request $request, MealService $mealService)
    {
        $dormitoryId = DormitoryInfoStatic::DORMITORYID;

        $user = auth()->id();
        try {
            if ($request->has('month')) {
                $month = Carbon::parse($request->get('month'));
            } else {
                $month = (new DormitoryInfoStatic())->getMonth();
            }

            $meal = Meal::query()
                ->where('dormitory_id', $dormitoryId)
                ->whereUserId($user)
                ->whereMonth('created_at', (new DormitoryInfoStatic())->getMonth()->month)
                ->whereYear('created_at', (new DormitoryInfoStatic())->getMonth()->year)
                ->select('user_id', DB::raw("SUM(break_fast + lunch + dinner) as total_meals"))
                ->groupBy('user_id')
                ->first() ?? 0;

            $userTotalMeal = $meal ? $meal->total_meals : 0;
            $bazar = (new BazarService())->getBazarsListOrSum($dormitoryId, true);
            $totalMealOfMess = $mealService->getTotalMeal($dormitoryId, $month);
            $mealCost = $bazar === 0 ? 0 : ($userTotalMeal === 0 ? 0 : round($bazar / $totalMealOfMess, 2));
            $additional = (new AdditonalCostService())->getTotalCost($dormitoryId);
            $member = (new UserService())->getBasicsOfUsers($dormitoryId, true);
            $balance = (new UserService())->getUserInfo($user, 'deposit');
            $totalMealCost = $bazar === 0 ? 0 : round($mealCost * $userTotalMeal, 2);
            $fixedCost = $additional == 0 ? 0 : round($additional / $member, 2);

            return Inertia::render('Member/Meal/Show', [
                'user' => (new UserService())->getUserWithMeal($user, $month, $dormitoryId),
                'balance' => $balance,
                'additional' => $additional,
                'member' => $member,
                'totalMeal' => $userTotalMeal,
                'bazar' => $bazar,
                'mealCost' => $mealCost,
                'totalMealCost' => $totalMealCost,
                'fixedCost' => $fixedCost,
                'due' => ($fixedCost + $totalMealCost) > $balance ? round(($fixedCost + $totalMealCost) - $balance, 2) : 0
            ]);
        } catch (Exception $exception) {
            return redirect()->back()->with('errors', $exception->getMessage());
        }
    }

    public function mealUpdate(UserMealUpdateRequest $request)
    {
        $dormitory = Dormitory::query()->select(['lunch_close', 'dinner_close', 'break_fast_close'])->first();

        $lunchOffStrToTime = strtotime($dormitory->lunch_close);
        $dinnerOffStrToTime = strtotime($dormitory->dinner_close);

        $lunchOff = Carbon::parse(date('Y-m-d H:i', $lunchOffStrToTime))->format('Y-m-d H:i');
        $dinnerOff = Carbon::parse(date('Y-m-d H:i', $dinnerOffStrToTime))->format('Y-m-d H:i');


        if ($this->isPast($request->created_at)) {
            return back()->with('errors', 'Can not update previous meal');
        } elseif (Carbon::parse($request->created_at)->isToday()) {
            if ((new DormitoryInfoStatic())->getMonth()->gte($lunchOff) && (new DormitoryInfoStatic())->getMonth()->gte($dinnerOff)) {
                return back()->with('errors', 'Can not update Meal for today, time is over.');
            }

            if ((new DormitoryInfoStatic())->getMonth()->gte($lunchOff) && !(new DormitoryInfoStatic())->getMonth()->gte($dinnerOff)) {
                Meal::whereUserId(auth()->id())->whereId($request->id)->update([
                    'dinner' => $request->dinner,
                    'lock_for_quick_update' => true,
                ]);
                return back()->with('success', 'Lunch Time over, only dinner Updated');
            }

            if (!(new DormitoryInfoStatic())->getMonth()->gte($lunchOff)) {
                Meal::whereUserId(auth()->id())->whereId($request->id)->update([
                    'break_fast' => $request->break_fast,
                    'lunch' => $request->lunch,
                    'dinner' => $request->dinner,
                    'lock_for_quick_update' => true,
                ]);
                return back()->with('success', 'Meal Updated');
            }
        } else {
            Meal::whereUserId(auth()->id())->whereId($request->id)->update([
                'break_fast' => $request->break_fast,
                'lunch' => $request->lunch,
                'dinner' => $request->dinner,
                'lock_for_quick_update' => true,
            ]);
            return back()->with('success', 'Meal Updated');
        }
        return back()->with('errors', 'Something went wrong!');
    }

    private function isPast($date)
    {
        return strtotime(Carbon::parse($date)->endOfDay()->format('Y-m-d H:i:s')) < strtotime((new DormitoryInfoStatic())->getMonth()->format('Y-m-d H:i:s'));
    }


    public function menus()
    {
        return Inertia::render('Member/Menu/Index', [
            'menus' => Menu::query()->get()
        ]);
    }

    public function updateMenu(Request $request)
    {
        Menu::whereId($request->id)->update($request->all());
        return back()->with('success', 'menu updated');
    }


    public function schedule()
    {
        return Inertia::render('Member/Schedule', [
            'bazarSchedules' => new BazarScheduleCollection(
                BazarSchedule::query()
                    ->with('users:id,full_name')
                    ->orderBy('status', 'asc')
                    ->paginate()
            )
        ]);
    }

    public function notices()
    {
        return Inertia::render('Member/Notice/Index', [
            'notices' => new NoticeCollection(
                Notice::query()
                    ->orderBy('created_at', 'desc')
                    ->whereStatus(NoticeStatus::ACTIVE)
                    ->paginate()
            ),
        ]);
    }

    public function noticeDetails($id, Request $request)
    {
        if ($request->has('nid') && !blank($request->get('nid'))) {
            auth()->user()->unreadNotifications->where('id', $request->get('nid'))->markAsRead();
        }

        $notice = Notice::query()
            ->whereStatus(NoticeStatus::ACTIVE)
            ->findOrFail($id);
        return Inertia::render('Member/Notice/Show', [
            'notice' => $notice
        ]);
    }

    public function rules()
    {
        return Inertia::render('Member/Rule/Index', [
            'rules' => new NoticeCollection(
                Rule::query()
                    ->orderBy('created_at', 'desc')
                    ->whereStatus(RuleStatus::ACTIVE)
                    ->paginate()
            ),
        ]);
    }

    public function ruleDetails($id)
    {
        $notice = Rule::query()
            ->whereStatus(RuleStatus::ACTIVE)
            ->findOrFail($id);

        return Inertia::render('Member/Rule/Show', [
            'rule' => $notice
        ]);
    }
}
