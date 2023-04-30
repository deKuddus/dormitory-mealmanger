<?php

namespace App\Http\Controllers\Member;

use App\Enums\DormitoryIdStatic;
use App\Enums\NoticeStatus;
use App\Enums\RuleStatus;
use App\Http\Controllers\Controller;
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
use App\Models\User;
use App\Services\MealService;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(MealService $mealService)
    {
        $dormitoryId = DormitoryIdStatic::DORMITORYID;
        $month = now();
        $userId = auth()->id();

        $dromTotalMeal = $mealService->dormTotalMeal($dormitoryId, $month);
        $totalMeal = $mealService->userTotalMeal($userId, $dormitoryId, $month);
        $balance = $mealService->getUserTotalDeposit($userId, $dormitoryId);
        $bazar = $mealService->getTotalBazar($month, $dormitoryId);
        $mealCharge = $dromTotalMeal === 0 ? 0 : round($bazar / $dromTotalMeal, 2);
        $fixedCost = $mealService->getTotalAdditionalCost($month, $dormitoryId) / $mealService->getTotalUser($dormitoryId);
        return Inertia::render('Member/Index', [
            'mealCharge' => $mealCharge,
            'meals' => $mealService->getUserAllMealForSelectedMonthToCurrentDate($userId, $dormitoryId, $month),
            'fixedCost' => $fixedCost,
            'due' => $totalMeal === 0 ? $balance < 0 ? $balance : ($balance - $fixedCost) : ($balance < 0 ? $balance : ($balance - (($mealCharge * $totalMeal) + $fixedCost))),
            'totalMeal' => $totalMeal,
            'totalCost' => $totalMeal === 0 ? 0 : round($totalMeal * $mealCharge, 2),
            'todaysMeal' => $mealService->getTodaysLunchAndDinner()
        ]);
    }


    public function updateMealStatus(Request $request)
    {
        $request->validate([
            'user_id' => 'required|numeric',
            'status' => 'required|boolean',
        ]);

        $userId = $request->input('user_id');

        if ($userId !== auth()->id()) {
            return back()->with('errors', 'Unauthorized action.');
        }


        $status = $request->input('status') ? 1 : 0;

        $dormitory = Dormitory::with(['users' => function ($query) use ($userId) {
            $query->whereId($userId);
        }])->first();


        $lunchOffStrToTime = strtotime($dormitory->lunch_close);
        $dinnerOffStrToTime = strtotime($dormitory->dinner_close);

        $lunchOff = Carbon::parse(date('Y-m-d H:i', $lunchOffStrToTime))->format('Y-m-d H:i');
        $dinnerOff = Carbon::parse(date('Y-m-d H:i', $dinnerOffStrToTime))->format('Y-m-d H:i');


        $startOfMonth = now()->format('Y-m-d');
        $lastOfMonth = now()->lastOfMonth()->addDay()->format('Y-m-d');


        $mealIds = Meal::whereUserId($userId)->whereBetween('created_at', [$startOfMonth, $lastOfMonth])->pluck('id', 'created_at')->toArray();

        if (now()->gte($lunchOff) && now()->gte($dinnerOff)) {
            Meal::whereIn('id', $mealIds)->whereBetween('created_at', [now()->addDay()->format('Y-m-d 09:00'), now()->lastOfMonth()->format('Y-m-d 09:00')])
                ->update([
                    'break_fast' => $dormitory->has_breakfast ? $status : 0,
                    'lunch' => $dormitory->has_lunch ? $status : 0,
                    'dinner' => $dormitory->has_dinner ? $status : 0,
                ]);
        }

        if (!now()->gte($lunchOff) && now()->gte($dinnerOff)) {
            Meal::whereIn('id', $mealIds)->whereBetween('created_at', [now()->format('Y-m-d 09:00'), now()->lastOfMonth()->format('Y-m-d 09:00')])->update([
                'break_fast' => $dormitory->has_breakfast ? $status : 0,
                'lunch' => $dormitory->has_lunch ? $status : 0,
                'dinner' => $dormitory->has_dinner ? $status : 0,
            ]);
        }

        if (now()->gte($lunchOff) && !now()->gte($dinnerOff)) {
            Meal::whereIn('id', $mealIds)
                ->whereDate('created_at', now()->format('Y-m-d'))
                ->update([
                    'dinner' => $dormitory->has_dinner ? $status : 0,
                ]);

            Meal::whereIn('id', $mealIds)->whereBetween('created_at', [now()->addDay()->format('Y-m-d 09:00'), now()->lastOfMonth()->format('Y-m-d 09:00')])->update([
                'break_fast' => $dormitory->has_breakfast ? $status : 0,
                'lunch' => $dormitory->has_lunch ? $status : 0,
                'dinner' => $dormitory->has_dinner ? $status : 0,
            ]);
        }

        User::whereId($userId)->update(['meal_status' => $status]);

        return back()->with('success', $status ? 'Meal on from today to end of month' : 'Meal off from today to end of month');
    }

    public function deposits()
    {
        $dormitoryId = DormitoryIdStatic::DORMITORYID;
        return Inertia::render('Member/Deposit/Index', [
            'deposits' => Deposit::whereUserId(auth()->id())
                ->whereDormitoryId($dormitoryId)
                ->orderBy('created_at', 'desc')
                ->paginate()
        ]);
    }

    public function createDeposit()
    {
        return Inertia::render('Member/Deposit/Create');
    }

    public function storeDeposit(UserDepositCreateRequest $request)
    {
        Deposit::create($request->validated());
        return to_route('user.deposits.index');
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
        $dormitoryId = DormitoryIdStatic::DORMITORYID;

        $user = auth()->id();
        try {
            if ($request->has('month')) {
                $month = Carbon::parse($request->get('month'));
            } else {
                $month = Carbon::parse(now());
            }

            $meal = Meal::query()
                ->where('dormitory_id', $dormitoryId)
                ->whereUserId($user)
                ->whereMonth('created_at', now()->month)
                ->whereYear('created_at', now()->year)
                ->select('user_id', DB::raw("SUM(break_fast + lunch + dinner) as total_meals"))
                ->groupBy('user_id')
                ->first() ?? 0;

            $userTotalMeal = $meal ? $meal->total_meals : 0;
            $bazar = $mealService->getTotalBazar($month, $dormitoryId);
            $totalMealOfMess = $mealService->getTotalMeal($dormitoryId, $month);
            $mealCost = $bazar === 0 ? 0 : ($userTotalMeal === 0 ? 0 : round($bazar / $totalMealOfMess, 2));
            $additional = $mealService->getTotalAdditionalCost($month, $dormitoryId);
            $member = $mealService->getTotalUser($dormitoryId);
            $balance = $mealService->getUserTotalDeposit($user, $dormitoryId);
            $totalMealCost = $bazar === 0 ? 0 : round($mealCost * $userTotalMeal, 2);
            $fixedCost = $additional == 0 ? 0 : round($additional / $member, 2);

            return Inertia::render('Member/Meal/Show', [
                'user' => $mealService->getUserWithMeal($user, $month, $dormitoryId),
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
        } catch (\Exception $exception) {
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
            if (now()->gte($lunchOff) && now()->gte($dinnerOff)) {
                return back()->with('errors', 'Can not update Meal for today, time is over.');
            }

            if (now()->gte($lunchOff) && !now()->gte($dinnerOff)) {
                Meal::whereUserId(auth()->id())->whereId($request->id)->update([
                    'dinner' => $request->dinner,
                ]);
                return back()->with('success', 'Lunch Time over, only dinner Updated');
            }

            if (now()->gte($lunchOff)) {
                Meal::whereUserId(auth()->id())->whereId($request->id)->update([
                    'break_fast' => $request->break_fast,
                    'lunch' => $request->lunch,
                    'dinner' => $request->dinner,
                ]);
                return back()->with('success', 'Meal Updated');
            }
        } else {
            Meal::whereUserId(auth()->id())->whereId($request->id)->update([
                'break_fast' => $request->break_fast,
                'lunch' => $request->lunch,
                'dinner' => $request->dinner,
            ]);
            return back()->with('success', 'Meal Updated');
        }
    }

    private function isPast($date)
    {
        return strtotime(Carbon::parse($date)->endOfDay()->format('Y-m-d H:i:s')) < strtotime(now()->format('Y-m-d H:i:s'));
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
