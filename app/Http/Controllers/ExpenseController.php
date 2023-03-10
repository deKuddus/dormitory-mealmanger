<?php

namespace App\Http\Controllers;

use App\Models\AdditionalCost;
use App\Models\Bazar;
use App\Models\Deposit;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ExpenseController extends Controller
{
    public function index(Request $request)
    {
        $messId = 1;

        try {

            if ($request->has('month')) {
                $month = Carbon::parse($request->get('month'));
            } else {
                $month = Carbon::parse(now());
            }
            $bazarModel = Bazar::query()->active()->whereMessId($messId)->whereMonth('created_at', '=', $month->month)->whereYear('created_at', '=', $month->year);
            $additionalCostModel = AdditionalCost::query()->active()->whereMessId($messId)->whereMonth('created_at', '=', $month->month)->whereYear('created_at', '=', $month->year);
            return Inertia::render('Expense/Index', [
                'bazar' => $bazarModel->get(),
                'bazarTotal' => $bazarModel->sum('amount'),
                'additionalCost' => $additionalCostModel->get(),
                'additionalCostTotal' => $additionalCostModel->sum('amount'),
                'deposit' => Deposit::query()->active()->sum('amount')
            ]);
        } catch (\Exception $exception) {
            return redirect()->back()->with('error', $exception->getMessage());
        }
    }
}
