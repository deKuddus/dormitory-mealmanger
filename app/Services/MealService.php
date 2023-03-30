<?php

namespace App\Services;

use App\Enums\MealStatus;
use App\Http\Resources\MealDetailsResource;
use App\Http\Resources\MemberMealShowCollection;
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
            ->whereDormitoryId($mssId)
            ->whereBetween(DB::raw('DATE(`created_at`)'), [$month->startOfMonth()->format('Y-m-d'), $month->lastOfMonth()->format('Y-m-d')])
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

    public function getUserAllMealForSelectedMonth($userId, $mssId, $month)
    {
        return Meal::query()
            ->whereUserId($userId)
            ->whereDormitoryId($mssId)
            ->whereBetween(DB::raw('DATE(`created_at`)'), [$month->startOfMonth()->format('Y-m-d'), $month->lastOfMonth()->format('Y-m-d')])
            ->get(['id', 'lunch', 'dinner', 'break_fast', 'created_at']);
    }

    public function getUserTotalDeposit($user, $messId)
    {
        return Deposit::whereUserId($user)->whereDormitoryId($messId)->active()->sum('amount');
    }

    public function getTotalAdditionalCost($month, $messId)
    {
        return AdditionalCost::query()->whereDormitoryId($messId)->whereBetween(DB::raw('DATE(`created_at`)'), [$month->startOfMonth()->format('Y-m-d'), $month->lastOfMonth()->format('Y-m-d')])->active()->sum('amount');
    }

    public function getTotalUser($messId)
    {
        return User::query()->with('dormitory', function ($q) use ($messId) {
            $q->where('dormitory_id', $messId);
        })->active()->count();
    }

    public function getTotalMeal($messId, $month)
    {
        $totalMeal = Meal::whereDormitoryId($messId)
            ->whereBetween(DB::raw('DATE(`created_at`)'), [$month->startOfMonth()->format('Y-m-d'), $month->lastOfMonth()->format('Y-m-d')])
            ->select(DB::raw("SUM(break_fast + lunch + dinner) as total_meals"))
            ->first();
        return $totalMeal->total_meals ?? 0;
    }


    public function getUserWithMeal($user, $month, $messId)
    {
        return new MealDetailsResource(
            User::with([
                'meals' => function ($query) use ($month, $messId) {
                    $query->whereDormitoryId($messId)
                        ->with('dormitory')
                        ->whereStatus(MealStatus::PENDING)
                        ->whereMonth('created_at', '=', $month->month)
                        ->whereYear('created_at', '=', $month->year);

                }
            ])
                ->select('id', 'first_name', 'last_name', 'email', 'status')
                ->findOrFail($user)
        );
    }

    public function getTotalBazar($month, $messId)
    {
        return Bazar::query()->active()->whereDormitoryId($messId)
            ->whereBetween(DB::raw('DATE(`created_at`)'), [$month->startOfMonth()->format('Y-m-d'), $month->lastOfMonth()->format('Y-m-d')])
            ->sum('amount');
    }

}
