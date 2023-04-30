<?php

namespace App\Http\Controllers;

use App\Enums\DormitoryIdStatic;
use App\Services\MealService;
use App\Trait\Stats;
use Inertia\Inertia;

class DashboardController extends Controller
{
    use Stats;

    public function __invoke(MealService $mealService)
    {
        $dormitoryId = DormitoryIdStatic::DORMITORYID;
        $month = now();

        $data = [
            'users' => $this->getUsersByStatus($dormitoryId),
            'balance' => $this->getTotalDeposit($dormitoryId),
            'additional' => $this->getTotalAdditionalCost($dormitoryId, $month),
            'member' => $this->totalMember($dormitoryId),
            'totalMeal' => $this->getTotalMeal($dormitoryId, $month),
            'bazar' => $this->totalBazar($dormitoryId, $month),
            'todaysTotalMeal' => $this->todaysMeal($dormitoryId),
            'todaysMeal' => $mealService->getTodaysLunchAndDinner()
        ];
        return Inertia::render('Dashboard/Index', [
            'data' => $data
        ]);
    }
}
