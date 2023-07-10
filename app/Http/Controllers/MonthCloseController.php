<?php

namespace App\Http\Controllers;

use App\Helper\Helper;
use App\Services\MonthCloseService;
use Exception;
use Illuminate\Http\RedirectResponse;
use App\Models\Dormitory;
use App\Enums\DormitoryInfoStatic;

class MonthCloseController extends Controller
{
    public function index(MonthCloseService $closeService): RedirectResponse
    {

        try {
            $closeService->handleMonthClose();
            Dormitory::whereId(DormitoryInfoStatic::DORMITORYID)->update([
                'is_month_running' => 0
            ]);
            return back()->with('success', 'Month Closed');
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }


    public function startNewMonth(): RedirectResponse
    {
        try {
            Helper::createMeal();
            Dormitory::whereId(DormitoryInfoStatic::DORMITORYID)->update([
                'is_month_running' => 1
            ]);
            return back()->with('success', 'New month started');
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }
}
