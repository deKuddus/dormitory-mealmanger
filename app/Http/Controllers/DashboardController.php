<?php

namespace App\Http\Controllers;

use App\Enums\DormitoryIdStatic;
use App\Trait\Stats;
use Inertia\Inertia;

class DashboardController extends Controller
{
    use Stats;

    public function __invoke()
    {
        $messId = DormitoryIdStatic::DORMITORYID;
        $month = now();

        $data = [
            'users' => $this->getUsersByStatus($messId),
            'balance' => $this->getTotalDeposit($messId),
            'additional' => $this->getTotalAdditionalCost($messId, $month),
            'member' => $this->totalMember($messId),
            'totalMeal' => $this->getTotalMeal($messId, $month),
            'bazar' => $this->totalBazar($messId, $month),
            'todaysMeal' => Inertia::lazy(fn () => $this->totdaysMeal($messId))
        ];
        return Inertia::render('Dashboard/Index', [
            'data' => $data
        ]);
    }
}
