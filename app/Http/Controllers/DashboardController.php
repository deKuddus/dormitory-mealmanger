<?php

namespace App\Http\Controllers;

use App\Enums\DormitoryInfoStatic;
use App\Services\MealService;
use App\Services\DormitoryService;
use App\Trait\Stats;
use Inertia\Inertia;

class DashboardController extends Controller
{
    use Stats;

    public function __invoke(MealService $mealService,DormitoryService $dormitoryService)
    {
        $dormitoryId = DormitoryInfoStatic::DORMITORYID;
        $month = (new DormitoryInfoStatic())->getMonth();


        $data = [
            'users' => $this->getUsersByStatus($dormitoryId),
            'balance' => $this->getTotalDeposit($dormitoryId),
            'additional' => $this->getTotalAdditionalCost($dormitoryId, $month),
            'member' => $this->totalMember($dormitoryId),
            'totalMeal' => $this->getTotalMeal($dormitoryId, $month),
            'bazar' => $this->totalBazar($dormitoryId, $month),
            'todaysTotalMeal' => $this->todaysMeal($dormitoryId),
            'todaysMeal' => $mealService->getTodaysLunchAndDinner(),
            'isDormitoryRunning' => $dormitoryService->isRunningMonth($dormitoryId)
        ];

        return Inertia::render('Dashboard/Index', [
            'data' => $data
        ]);
    }
}
