<?php

namespace App\Trait;

use App\Enums\DormitoryInfoStatic;
use App\Enums\MealStatus;
use App\Models\AdditionalCost;
use App\Models\Bazar;
use App\Models\Dormitory;
use App\Models\Meal;
use App\Models\User;
use Illuminate\Support\Facades\DB;

trait Stats
{
    private function getTotalMeal($dormitoryId, $month)
    {
        $meals = Meal::whereDormitoryId($dormitoryId)
            ->whereStatus(MealStatus::PENDING)
            ->whereMonth('created_at', '=', $month->month)
            ->whereYear('created_at', '=', $month->year)
            ->select(
                DB::raw("SUM(break_fast + lunch + dinner) as total_meals")
            )->first();

        return $meals->total_meals ?? 0;
    }

    private function totalBazar($dormitoryId, $month)
    {
        return Bazar::query()
            ->whereDormitoryId($dormitoryId)
            ->active()
            ->whereMonth('created_at', '=', $month->month)
            ->whereYear('created_at', '=', $month->year)
            ->sum('amount') ?? 0;
    }

    private function totalMember($dormitoryId)
    {
        return User::query()
            ->with('dormitory', function ($q) use ($dormitoryId) {
                $q->where('dormitory_id', $dormitoryId);
            })
            ->active()
            ->count();
    }

    private function getTotalAdditionalCost($dormitoryId, $month)
    {
        return AdditionalCost::query()
            ->whereDormitoryId($dormitoryId)
            ->whereMonth('created_at', '=', $month->month)
            ->whereYear('created_at', '=', $month->year)
            ->active()
            ->sum('amount');
    }

    private function getTotalDeposit($dormitoryId)
    {
        return Dormitory::query()->whereId(DormitoryInfoStatic::DORMITORYID)->value('deposit');
    }

    private function todaysMeal($dormitoryId)
    {
        $meals = Meal::whereDormitoryId($dormitoryId)
            ->whereStatus(MealStatus::PENDING)
            ->whereDate('created_at', '=', (new DormitoryInfoStatic())->getMonth())
            ->select(
                DB::raw("SUM(break_fast + lunch + dinner) as total_meals")
            )->first();
        return $meals->total_meals ?? 0;
    }


    private function getUsersByStatus($dormitoryId)
    {
        return User::query()->whereHas('dormitory', function ($q) use ($dormitoryId) {
            $q->whereId($dormitoryId);
        })->select(
            DB::raw('COUNT(CASE WHEN status = 1 THEN 1 END) as active'),
            DB::raw('COUNT(CASE WHEN status = 0 THEN 1 END) as inactive')
        )->first();
    }
}
