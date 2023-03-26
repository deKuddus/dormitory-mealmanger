<?php

namespace App\Http\Controllers;

use App\Enums\AdditionalCostType;
use App\Enums\BazarStatus;
use App\Enums\MealStatus;
use App\Enums\MessIdStatic;
use App\Models\AdditionalCost;
use App\Models\Bazar;
use App\Models\Calculation;
use App\Models\Meal;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class MonthCloseController extends Controller
{
    public function __invoke()
    {
        $messId = MessIdStatic::MESSID;
        $bazar = Bazar::query()
            ->where('mess_id', $messId)
            ->whereMonth('created_at', now()->month)
            ->whereYear('created_at', now()->year)
            ->sum('amount');
        $additional = AdditionalCost::query()
            ->where('mess_id', $messId)
            ->whereMonth('created_at', now()->month)
            ->whereYear('created_at', now()->year)
            ->sum('amount');

        $meal = Meal::query()
            ->where('mess_id', $messId)
            ->whereMonth('created_at', now()->month)
            ->whereYear('created_at', now()->year)
            ->select(DB::raw("SUM(break_fast + lunch + dinner) as total_meals"))
            ->first();

        $member = User::query()->with('mess', function ($q) use ($messId) {
            $q->where('mess_id', $messId);
        })->active()->count();

        $mealCost = round($bazar / $meal->total_meals, 2);

        $additionalCost = round($additional / $member, 2);

        $this->getUserAndMeal($messId)->each(function ($user) use ($messId, $mealCost, $additionalCost) {
            $cost = count($user->meals) ? round((($mealCost * (int)$user->meals[0]->total_meals) + $additionalCost), 2) : $additionalCost;
            $insert = [
                'deposit_time_of_calculation' => $user->deposit ?? 0,
                'mess_id' => $messId,
                'user_id' => $user->id,
                'amount' => $cost,
                'description' => 'month closed for ' . now()->format('F, d Y') . '. Meal cost ' . $mealCost . ' and Additional cost ' . $additionalCost,
                'total_meal' => count($user->meals) ? $user->meals[0]->total_meals : 0,
                'calculate_date' => now(),
                'carry' => $cost > $user->deposit ? $user->deposit - $cost : $user->deposit,
                'meal_rate' => $mealCost,
            ];
            Calculation::query()->create($insert);
            $user->decrement('deposit', $cost);
        });

        // update all additional status to 2 , that means closed.
        AdditionalCost::query()
            ->where('mess_id', $messId)
            ->whereStatus(AdditionalCostType::APPROVED)
            ->whereMonth('created_at', now()->month)
            ->whereYear('created_at', now()->year)
            ->update(['status' => AdditionalCostType::CLOSED]);

        // update all meal status to 2 , that means closed.
        Meal::query()
            ->where('mess_id', $messId)
            ->whereStatus(MealStatus::PENDING)
            ->whereMonth('created_at', now()->month)
            ->whereYear('created_at', now()->year)
            ->update(['status' => MealStatus::CLOSED]);

        // update all bazar status to 2 , that means closed.
        Bazar::query()
            ->where('mess_id', $messId)
            ->whereStatus(BazarStatus::APPROVED)
            ->whereMonth('created_at', now()->month)
            ->whereYear('created_at', now()->year)
            ->update(['status' => BazarStatus::CLOSED]);

        dd(4);
        return '';
    }

    private function getUserAndMeal($messId)
    {
        return User::query()->with([
            'mess' => function ($q) use ($messId) {
                $q->where('mess_id', $messId);
            },
            'meals' => function ($query) use ($messId) {
                $query->where('mess_id', $messId)
                    ->whereStatus(MealStatus::PENDING)
                    ->whereMonth('created_at', now()->month)
                    ->whereYear('created_at', now()->year)
                    ->select('user_id', DB::raw("SUM(break_fast + lunch + dinner) as total_meals"))
                    ->groupBy('user_id');
            }
        ])
            ->select('id')
            ->orderBy('created_at', 'desc')
            ->get();
    }
}
