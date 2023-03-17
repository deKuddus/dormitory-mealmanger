<?php

namespace App\Http\Controllers\Member;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserDepositCreateRequest;
use App\Http\Requests\UserMealUpdateRequest;
use App\Http\Requests\UserProfileUpdateRequest;
use App\Models\Deposit;
use App\Models\Meal;
use App\Models\Mess;
use App\Models\User;
use App\Services\MealService;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rules\In;
use Inertia\Inertia;

class HomeController extends Controller
{

    public function index(MealService $mealService)
    {
        $messId = 1;
        $month = now();
        $userId = auth()->id();
        return Inertia::render('Member/Index', [
            'meals' => $mealService->getUserAllMealForSelectedMonth($userId, $messId, $month),
            'totalMeal' => $mealService->userTotalMeal($userId, $messId, $month),
            'balance' => $mealService->getUserTotalDeposit($userId, $messId),
            'additional' => $mealService->getTotalAdditionalCost($month, $messId),
            'member' => $mealService->getTotalUser($messId),
            'bazar' => $mealService->getTotalBazar($month, $messId)
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
            return back()->with('error', 'Unauthorized action.');
        }


        $status = $request->input('status') ? 1 : 0;

        $mess = Mess::with(['users' => function ($query) use ($userId) {
            $query->whereId($userId);
        }])->first();


        $lunchOffStrToTime = strtotime($mess->lunch_close);
        $dinnerOffStrToTime = strtotime($mess->dinner_close);

        $lunchOff = Carbon::parse(date('Y-m-d H:i', $lunchOffStrToTime))->format('Y-m-d H:i');
        $dinnerOff = Carbon::parse(date('Y-m-d H:i', $dinnerOffStrToTime))->format('Y-m-d H:i');



        $startOfMonth = now()->format('Y-m-d');
        $lastOfMonth = now()->lastOfMonth()->addDay()->format('Y-m-d');


        $mealIds = Meal::whereUserId($userId)->whereBetween('created_at', [$startOfMonth, $lastOfMonth])->pluck('id', 'created_at')->toArray();

        if (now()->gte($lunchOff) && now()->gte($dinnerOff)) {
            Meal::whereIn('id', $mealIds)->whereBetween('created_at', [now()->addDay()->format('Y-m-d 09:00'), now()->lastOfMonth()->format('Y-m-d 09:00')])
                ->update([
                    'break_fast' => $status,
                    'lunch' => $status,
                    'dinner' => $status,
                ]);
        }

        if (!now()->gte($lunchOff) && now()->gte($dinnerOff)) {
            Meal::whereIn('id', $mealIds)->whereBetween('created_at', [now()->format('Y-m-d 09:00'), now()->lastOfMonth()->format('Y-m-d 09:00')])->update([
                'break_fast' => $status,
                'lunch' => $status,
                'dinner' => $status,
            ]);
        }

        if (now()->gte($lunchOff) && !now()->gte($dinnerOff)) {

           Meal::whereIn('id', $mealIds)
               ->whereDate('created_at', now()->format('Y-m-d'))
               ->update([
                    'dinner' => $status,
               ]);

            Meal::whereIn('id', $mealIds)->whereBetween('created_at', [now()->addDay()->format('Y-m-d 09:00'), now()->lastOfMonth()->format('Y-m-d 09:00')])->update([
                'break_fast' => $status,
                'lunch' => $status,
                'dinner' => $status,
            ]);
        }

        User::whereId($userId)->update(['meal_status' => $status]);

        return back()->with('success', $status ? 'Meal on from today to end of month' : 'Meal off from today to end of month');
    }

    public function deposits()
    {
        $messId = 1;
        return Inertia::render('Member/Deposit/Index', [
            'deposits' => Deposit::whereUserId(auth()->id())
                ->whereMessId($messId)
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
        $messId = 1;

        try {

            if ($request->has('month')) {
                $month = Carbon::parse($request->get('month'));
            } else {
                $month = Carbon::parse(now());
            }

            $user = auth()->id();

            return Inertia::render('Member/Meal/Show', [
                'user' => $mealService->getUserWithMeal($user, $month, $messId),
                'balance' => $mealService->getUserTotalDeposit($user, $messId),
                'additional' => $mealService->getTotalAdditionalCost($month, $messId),
                'member' => $mealService->getTotalUser($messId),
                'totalMeal' => $mealService->getTotalMeal($messId, $month),
                'bazar' => $mealService->getTotalBazar($month, $messId),
            ]);

        } catch (\Exception $exception) {
            return redirect()->back()->with('error', $exception->getMessage());
        }
    }

    public function mealUpdate(UserMealUpdateRequest $request)
    {

        $mess = Mess::query()->select(['lunch_close', 'dinner_close', 'break_fast_close'])->first();

        $lunchOffStrToTime = strtotime($mess->lunch_close);
        $dinnerOffStrToTime = strtotime($mess->dinner_close);

        $lunchOff = Carbon::parse(date('Y-m-d H:i', $lunchOffStrToTime))->format('Y-m-d H:i');
        $dinnerOff = Carbon::parse(date('Y-m-d H:i', $dinnerOffStrToTime))->format('Y-m-d H:i');


        if ($this->isPast($request->created_at)) {
            return back()->with('error', 'Can not update previous meal');
        }
        else if (Carbon::parse($request->created_at)->isToday()) {
            if (now()->gte($lunchOff) && now()->gte($dinnerOff)) {
                return back()->with('error', 'Error');
            }

            if (now()->gte($lunchOff)) {

                Meal::whereUserId(auth()->id())->whereId($request->id)->update([
                    'break_fast' => $request->break_fast,
                    'lunch' => $request->lunch,
                    'dinner' => $request->dinner,
                ]);
                return back()->with('success', 'Meal Updated');
            }

            if (now()->gte($lunchOff) && !now()->gte($dinnerOff)) {

                Meal::whereUserId(auth()->id())->whereId($request->id)->update([
                    'dinner' => $request->dinner,
                ]);
                return back()->with('success', 'Lunch Time over, only dinner Updated');
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

    private function isPast($date){

        return strtotime(Carbon::parse($date)->endOfDay()->format('Y-m-d H:i:s')) < strtotime(now()->format('Y-m-d H:i:s'));

    }

}
