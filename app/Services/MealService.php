<?php

namespace App\Services;

use App\Enums\DormitoryIdStatic;
use App\Enums\MealStatus;
use App\Http\Resources\MealDetailsResource;
use App\Http\Resources\MemberMealShowCollection;
use App\Http\Resources\MemberMealShowResource;
use App\Models\AdditionalCost;
use App\Models\Bazar;
use App\Models\Deposit;
use App\Models\Meal;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class MealService
{
    public function userTotalMeal($userId, $mssId, $month)
    {
        $totalMeal = Meal::whereUserId($userId)
            ->whereStatus(MealStatus::PENDING)
            ->whereDormitoryId($mssId)
            ->whereBetween(DB::raw('DATE(`created_at`)'), [$month->startOfMonth()->format('Y-m-d'), $month->today()->format('Y-m-d')])
            ->select(DB::raw("SUM(break_fast + lunch + dinner) as total_meals"))
            ->first();

        return $totalMeal->total_meals ?? 0;
    }

    public function dormTotalMeal($dormId,$month){
        $totalMeal = Meal::query()
            ->whereStatus(MealStatus::PENDING)
            ->whereDormitoryId($dormId)
            ->whereBetween(DB::raw('DATE(`created_at`)'), [$month->startOfMonth()->format('Y-m-d'), $month->today()->format('Y-m-d')])
            ->select(DB::raw("SUM(break_fast + lunch + dinner) as total_meals"))
            ->first();

        return $totalMeal->total_meals ?? 0;
    }

    public function allUserTotalMeal($mssId, $month)
    {
        $totalMeal = Meal::query()
            ->whereDormitoryId($mssId)
            ->whereBetween(DB::raw('DATE(`created_at`)'), [$month->startOfMonth()->format('Y-m-d'), $month->lastOfMonth()->format('Y-m-d')])
            ->select(DB::raw("SUM(break_fast + lunch + dinner) as total_meals"))
            ->first();

        return $totalMeal->total_meals ?? 0;
    }

    public function getUserAllMealForSelectedMonthToCurrentDate($userId, $mssId, $month)
    {
        return MemberMealShowResource::collection(
            Meal::query()
                ->whereStatus(MealStatus::PENDING)
                ->with('dormitory')
                ->whereUserId($userId)
                ->whereDormitoryId($mssId)
                ->whereBetween(DB::raw('DATE(`created_at`)'), [$month->startOfMonth()->format('Y-m-d'), $month->lastOfMonth()->format('Y-m-d')])
                ->get()
        );
    }

    public function getUserTotalDeposit($user, $dormitoryId)
    {
        return auth()->user()->deposit;
    }

    public function getTotalAdditionalCost($month, $dormitoryId)
    {
        return AdditionalCost::query()->whereDormitoryId($dormitoryId)->whereBetween(DB::raw('DATE(`created_at`)'), [$month->startOfMonth()->format('Y-m-d'), $month->lastOfMonth()->format('Y-m-d')])->active()->sum('amount');
    }

    public function getTotalUser($dormitoryId)
    {
        return User::query()->with('dormitory', function ($q) use ($dormitoryId) {
            $q->where('dormitory_id', $dormitoryId);
        })->active()->count();
    }

    public function getTotalMeal($dormitoryId, $month)
    {
        $totalMeal = Meal::whereDormitoryId($dormitoryId)
            ->whereBetween(DB::raw('DATE(`created_at`)'), [$month->startOfMonth()->format('Y-m-d'), $month->lastOfMonth()->format('Y-m-d')])
            ->select(DB::raw("SUM(break_fast + lunch + dinner) as total_meals"))
            ->first();
        return $totalMeal->total_meals ?? 0;
    }


    public function getUserWithMeal($user, $month, $dormitoryId)
    {
        return new MealDetailsResource(
            User::with([
                'meals' => function ($query) use ($month, $dormitoryId) {
                    $query->whereDormitoryId($dormitoryId)
                        ->with('dormitory')
                        ->whereStatus(MealStatus::PENDING)
                        ->whereMonth('created_at', '=', $month->month)
                        ->whereYear('created_at', '=', $month->year);

                }
            ])
                ->select('id', 'full_name', 'email', 'status')
                ->findOrFail($user)
        );
    }

    public function getTotalBazar($month, $dormitoryId)
    {
        return Bazar::query()->active()->whereDormitoryId($dormitoryId)
            ->whereBetween(DB::raw('DATE(`created_at`)'), [$month->startOfMonth()->format('Y-m-d'), $month->lastOfMonth()->format('Y-m-d')])
            ->sum('amount');
    }

    public function getTodaysLunchAndDinner()
    {

        $dormitoryId = DormitoryIdStatic::DORMITORYID;
        return Meal::query()
            ->where('status', MealStatus::PENDING)
            ->whereDormitoryId($dormitoryId)
            ->whereDate('created_at', now()->format('Y-m-d'))
            ->select(
                DB::raw("SUM(CASE WHEN break_fast != 0 THEN break_fast ELSE 0 END) AS break_fast_total"),
                DB::raw("SUM(CASE WHEN lunch != 0 THEN lunch ELSE 0 END) AS lunch_total"),
                DB::raw("SUM(CASE WHEN dinner != 0 THEN dinner ELSE 0 END) AS dinner_total"),
                'created_at',
            )
            ->groupBy('created_at')
            ->first();
    }

}
