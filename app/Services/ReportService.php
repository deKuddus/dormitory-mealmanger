<?php

namespace App\Services;

use App\Enums\DepositStatus;
use App\Enums\DormitoryIdStatic;
use App\Enums\MealStatus;
use App\Http\Resources\ReportCollection;
use App\Models\User;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class ReportService
{

    public function getReport(Request $request)
    {
        $dormitoryId = DormitoryIdStatic::DORMITORYID;
        $userService = new UserService();


        try {
            if ($request->has('month')) {
                $month = Carbon::parse($request->get('month'));
            } else {
                $month = Carbon::parse(now());
            }

            $bazar = (new BazarService())->getBazarsListOrSum($dormitoryId, true);
            $totalMeal = (new MealService())->getTotalMeal($dormitoryId, $month);
            $additional = (new AdditonalCostService())->getTotalCost($dormitoryId);
            $members = $userService->getBasicsOfUsers($dormitoryId, true);


            return Inertia::render('Report/Index', [
                'users' => $userService->getUsersWithDepositAndMeal($dormitoryId, $month),
                'balance' => (new DepositService())->totalDeposit($dormitoryId),
                'additional' => $additional,
                'member' => $members,
                'totalMeal' => $totalMeal,
                'bazar' => $bazar,
                'fixedCost' => $additional <= 0 ? 0 : round($additional / $members, 2),
                'mealCost' => $bazar === 0 ? 0 : round($bazar / $totalMeal, 2),
            ]);
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }

    }



}
