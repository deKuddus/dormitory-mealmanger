<?php

namespace App\Services;

class CalculationService
{
    public function getDue($totalMeal, $balance, $fixedCost, $mealCharge)
    {
        if ($totalMeal === 0) {
            if ($balance === 0 && $fixedCost === 0) {
                return 0;
            } else if ($balance === 0 && $fixedCost > 0) {
                return $fixedCost;
            } else if ($balance > 0 && $fixedCost > 0) {
                return $balance < $fixedCost ? $balance - $fixedCost : 0;
            }
        } else {
            $cost = ($mealCharge * $totalMeal) + $fixedCost;

            if ($balance === 0 && $cost > 0) {
                return $cost;
            } else if ($balance > 0 && $cost > 0) {
                return $balance < $cost ? $balance - $cost : 0;
            }
        }
        return 0;
    }

}
