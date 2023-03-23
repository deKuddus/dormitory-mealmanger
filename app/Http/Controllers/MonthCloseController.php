<?php

namespace App\Http\Controllers;

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
        $messId = 1;
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

        $mealCost = round($bazar / $meal->total_meals,2);

        $additionalCost = round($additional / $member,2);

        $this->getUserAndMeal($messId)->each(function ($user) use ($messId, $mealCost, $additionalCost) {
            $insert = [
                'mess_id' => $messId,
                'user_id' => $user->id,
                'amount' => count($user->meals) ? ($mealCost * (int)$user->meals[0]->total_meals) + $additionalCost : $additionalCost,
                'description' => 'month closed for ' . now()->format('F, d Y') . '. Meal cost ' . $mealCost . ' and Additional cost ' . $additionalCost,
                'total_meal' => count($user->meals) ? $user->meals[0]->total_meals : 0,
                'calculate_date' => now()
            ];
            dump($insert);
//            Calculation::query()->create($insert);
        });

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
