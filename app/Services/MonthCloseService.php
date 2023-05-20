<?php

namespace App\Services;

use App\Enums\AdditionalCostType;
use App\Enums\BazarStatus;
use App\Enums\DormitoryIdStatic;
use App\Enums\MealStatus;
use App\Models\AdditionalCost;
use App\Models\Bazar;
use App\Models\Calculation;
use App\Models\Meal;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\DB;

class MonthCloseService
{
    public function handleMonthClose(): void
    {
        try {
            $bazarService = new BazarService();
            $additionalCostService = new AdditonalCostService();
            $mealService = new MealService();
            $userService = new UserService();

            $dormitoryId = DormitoryIdStatic::DORMITORYID;

            $bazar = $bazarService->getBazarsListOrSum($dormitoryId, true);

            $additional = $additionalCostService->getTotalCost($dormitoryId);

            $meal = $mealService->getMealsWithCount($dormitoryId);

            $member = $userService->getBasicsOfUsers($dormitoryId, true);


            DB::beginTransaction();

            $mealCost = round($bazar / $meal->total_meals, 2);

            $additionalCost = round($additional / $member, 2);

            $this->getUserAndMealCount($dormitoryId, $mealCost, $additionalCost);

            // update all additional status to 2 , that means closed.
            $this->closeAllAdditionalCost($dormitoryId);

            // update all meal status to 2 , that means closed.
            $this->closeAllMeal($dormitoryId);

            // update all bazar status to 2 , that means closed.
            $this->closeAllBazar($dormitoryId);

            DB::commit();

        } catch (Exception $exception) {
            DB::rollBack();
            throw_if(true,$exception->getMessage());
        }
    }

    private function getUserAndMealCount($dormitoryId, $mealCost, $additionalCost): void
    {
        User::query()->with([
            'dormitory' => function ($q) use ($dormitoryId) {
                $q->where('dormitory_id', $dormitoryId);
            },
            'meals' => function ($query) use ($dormitoryId) {
                $query->where('dormitory_id', $dormitoryId)
                    ->whereStatus(MealStatus::PENDING)
                    ->whereMonth('created_at', now()->month)
                    ->whereYear('created_at', now()->year)
                    ->select('user_id', DB::raw("SUM(break_fast + lunch + dinner) as total_meals"))
                    ->groupBy('user_id');
            }
        ])
            ->select('id')
            ->orderBy('created_at', 'desc')
            ->each(function ($user) use ($dormitoryId, $mealCost, $additionalCost) {
                $cost = count($user->meals) ? round((($mealCost * (int)$user->meals[0]->total_meals) + $additionalCost), 2) : $additionalCost;
                $insert = [
                    'deposit_time_of_calculation' => $user->deposit ?? 0,
                    'dormitory_id' => $dormitoryId,
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
    }

    private function closeAllAdditionalCost($dormitoryId): void
    {
        AdditionalCost::query()
            ->where('dormitory_id', $dormitoryId)
            ->whereStatus(AdditionalCostType::APPROVED)
            ->whereMonth('created_at', now()->month)
            ->whereYear('created_at', now()->year)
            ->update(['status' => AdditionalCostType::CLOSED]);
    }

    private function closeAllMeal($dormitoryId): void
    {
        Meal::query()
            ->where('dormitory_id', $dormitoryId)
            ->whereStatus(MealStatus::PENDING)
            ->whereMonth('created_at', now()->month)
            ->whereYear('created_at', now()->year)
            ->update(['status' => MealStatus::CLOSED]);
    }

    private function closeAllBazar($dormitoryId): void
    {
        Bazar::query()
            ->where('dormitory_id', $dormitoryId)
            ->whereStatus(BazarStatus::APPROVED)
            ->whereMonth('created_at', now()->month)
            ->whereYear('created_at', now()->year)
            ->update(['status' => BazarStatus::CLOSED]);
    }
}
