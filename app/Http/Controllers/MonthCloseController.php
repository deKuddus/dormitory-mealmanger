<?php

namespace App\Http\Controllers;

use App\Helper\Helper;
use App\Services\MonthCloseService;
use Exception;
use Illuminate\Http\RedirectResponse;

class MonthCloseController extends Controller
{
    public function index(MonthCloseService $closeService): RedirectResponse
    {

        try {
            $closeService->handleMonthClose();
            return back()->with('success', 'Month Closed');
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }


    public function startNewMonth(): RedirectResponse
    {
        try {
            Helper::createMeal();
            return back()->with('success', 'New month started');
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }
}
