<?php

namespace App\Http\Controllers\Member;

use App\Http\Controllers\Controller;
use App\Models\Meal;
use App\Models\Mess;
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

        $now = Carbon::now();
        $lunchOff = Carbon::parse($mess->lunch_close);
        $dinnerOff = Carbon::parse($mess->dinner_close);

        $mealUpdatableArray = [
            'lunch' => $status,
            'dinner' => $status,
            'break_fast' => $status
        ];

        $startOfMonth = $now->format('Y-m-d');
        $lastOfMonth = $now->lastOfMonth()->addDay()->format('Y-m-d');

        $dateRangeFromNextDay = [$now->addDay()->format('Y-m-d'), $now->lastOfMonth()->format('Y-m-d')];
        $dateRangeFromToday = [$now->format('Y-m-d'), $now->lastOfMonth()->format('Y-m-d')];

        $mealIds = Meal::whereUserId($userId)->whereBetween('created_at', [$startOfMonth, $lastOfMonth])->pluck('id')->toArray();

        if ($now->gte($lunchOff)) {
            Meal::whereIn('id', $mealIds)->whereBetween('created_at', $dateRangeFromNextDay)->update($mealUpdatableArray);
            Meal::whereUserId($userId)->whereDate('created_at', $now->format('Y-m-d'))->update(['dinner' => $status]);
        } else {
            Meal::whereIn('id', $mealIds)->whereBetween('created_at', $dateRangeFromToday)->update($mealUpdatableArray);
        }


        if ($now->gte($dinnerOff)) {
            Meal::whereIn('id', $mealIds)->whereBetween('created_at', $dateRangeFromNextDay)->update($mealUpdatableArray);
        } else {
            Meal::whereIn('id', $mealIds)->whereBetween('created_at', $dateRangeFromToday)->update(['dinner' => $status]);
        }

        User::whereId($userId)->update(['meal_status' => $status]);

        return back()->with('success', $status ? 'Meal on from today to end of month' : 'Meal off from today to end of month');
    }
}
