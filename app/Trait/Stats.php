<?php

namespace App\Trait;

use App\Enums\MessIdStatic;
use App\Models\AdditionalCost;
use App\Models\Bazar;
use App\Models\Deposit;
use App\Models\Meal;
use App\Models\Mess;
use App\Models\User;
use Illuminate\Support\Facades\DB;

trait Stats
{
    private function getTotalMeal($messId, $month)
    {
        $meals = Meal::whereMessId($messId)
            ->whereMonth('created_at', '=', $month->month)
            ->whereYear('created_at', '=', $month->year)
            ->select(
                DB::raw("SUM(break_fast + lunch + dinner) as total_meals")
            )->first();

        return $meals->total_meals ?? 0;
    }

    private function totalBazar($messId, $month)
    {
        return Bazar::query()
            ->whereMessId($messId)
            ->active()
            ->whereMonth('created_at', '=', $month->month)
            ->whereYear('created_at', '=', $month->year)
            ->sum('amount');
    }

    private function totalMember($messId)
    {
        return User::query()
            ->with('mess', function ($q) use ($messId) {
                $q->where('mess_id', $messId);
            })
            ->active()
            ->count();
    }

    private function getTotalAdditionalCost($messId, $month)
    {
        return AdditionalCost::query()
            ->whereMessId($messId)
            ->whereMonth('created_at', '=', $month->month)
            ->whereYear('created_at', '=', $month->year)
            ->active()
            ->sum('amount');
    }

    private function getTotalDeposit($messId)
    {
        return Mess::query()->whereId(MessIdStatic::MESSID)->value('deposit');
    }

    private function totdaysMeal($messId)
    {
        $meals = Meal::whereMessId($messId)
            ->whereDate('created_at', '=', now())
            ->select(
                DB::raw("SUM(break_fast + lunch + dinner) as total_meals")
            )->first();
        return $meals->total_meals;
    }


    private function getUsersByStatus($messId){
        return  User::query()->whereHas('mess',function ($q)use($messId){
            $q->whereId($messId);
        })->select(
            DB::raw('COUNT(CASE WHEN status = 1 THEN 1 END) as active'),
            DB::raw('COUNT(CASE WHEN status = 0 THEN 1 END) as inactive')
        )->first();

    }
}
