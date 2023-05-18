<?php

namespace App\Services;

use App\Enums\DormitoryIdStatic;
use App\Models\AdditionalCost;
use App\Models\Bazar;
use App\Models\Deposit;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;

class ExpenseService
{

    public function index(Request $request)
    {
        try {
            $dormitoryId = DormitoryIdStatic::DORMITORYID;

            if ($request->has('month')) {
                $month = Carbon::parse($request->get('month'));
            } else {
                $month = Carbon::parse(now());
            }

            $bazarModel = Bazar::query()->active()->whereDormitoryId($dormitoryId)->whereMonth('created_at', '=', $month->month)->whereYear('created_at', '=', $month->year);
            $additionalCostModel = AdditionalCost::query()->active()->whereDormitoryId($dormitoryId)->whereMonth('created_at', '=', $month->month)->whereYear('created_at', '=', $month->year);

            return [
                'bazar' => $bazarModel->get(),
                'bazarTotal' => $bazarModel->sum('amount'),
                'additionalCost' => $additionalCostModel->get(),
                'additionalCostTotal' => $additionalCostModel->sum('amount'),
                'deposit' => Deposit::query()->active()->sum('amount')
            ];
        } catch (Exception $exception) {
            throw_if(true,$exception->getMessage());
        }
    }

}
