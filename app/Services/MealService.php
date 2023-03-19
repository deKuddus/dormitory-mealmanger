<?php

namespace App\Services;

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
            ->whereMessId($mssId)
            ->whereBetween(DB::raw('DATE(`created_at`)'), [$month->startOfMonth()->format('Y-m-d'), $month->lastOfMonth()->format('Y-m-d')])
            ->select(DB::raw("SUM(break_fast + lunch + dinner) as total_meals"))
            ->first();

        return $totalMeal->total_meals;
    }

    public function getUserAllMealForSelectedMonth($userId, $mssId, $month)
    {
        return  Meal::whereUserId($userId)
            ->whereMessId($mssId)
            ->whereBetween(DB::raw('DATE(`created_at`)'), [$month->startOfMonth()->format('Y-m-d'), $month->lastOfMonth()->format('Y-m-d')])
            ->get(['id', 'lunch', 'dinner', 'break_fast', 'created_at']);
    }

    public function getUserTotalDeposit($user, $messId)
    {
        return Deposit::whereUserId($user)->whereMessId($messId)->active()->sum('amount');
    }

    public function getTotalAdditionalCost($month, $messId)
    {
        return AdditionalCost::query()->whereMessId($messId)->whereBetween(DB::raw('DATE(`created_at`)'), [$month->startOfMonth()->format('Y-m-d'), $month->lastOfMonth()->format('Y-m-d')])->active()->sum('amount');
    }

    public function getTotalUser($messId)
    {
        return User::query()->with('mess', function ($q) use ($messId) {
            $q->where('mess_id', $messId);
        })->active()->count();
    }

    public function getTotalMeal($messId, $month)
    {
        $totalMeal = Meal::whereMessId($messId)
            ->whereBetween(DB::raw('DATE(`created_at`)'), [$month->startOfMonth()->format('Y-m-d'), $month->lastOfMonth()->format('Y-m-d')])
            ->select(DB::raw("SUM(break_fast + lunch + dinner) as total_meals"))
            ->first();
        return $totalMeal->total_meals ? $totalMeal : collect(['total_meals' => 0]);
    }


    public function getUserWithMeal($user, $month, $messId)
    {
        return new MealDetailsResource(
            User::with([
                'meals' => function ($query) use ($month, $messId) {
                    $query->whereMessId($messId)
                        ->whereMonth('created_at', '=', $month->month)
                        ->whereYear('created_at', '=', $month->year)
                        ->with('mess');
                }
            ])
                ->select('id', 'first_name', 'last_name', 'email', 'status')
                ->findOrFail($user)
        );
    }

    public function getTotalBazar($month, $messId)
    {
        return Bazar::query()->active()->whereMessId($messId)
            ->whereBetween(DB::raw('DATE(`created_at`)'), [$month->startOfMonth()->format('Y-m-d'), $month->lastOfMonth()->format('Y-m-d')])
            ->sum('amount');
    }

}
