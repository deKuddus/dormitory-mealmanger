<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Services\ExpenseService;
use Exception;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ExpenseController extends Controller
{
    public function index(Request $request, ExpenseService $expenseService)
    {
        $this->authorize('showExpense', User::class);

        try {
            return Inertia::render('Expense/Index', $expenseService->index($request));
        } catch (Exception $exception) {
            return redirect()->back()->with('errors', $exception->getMessage());
        }
    }
}
