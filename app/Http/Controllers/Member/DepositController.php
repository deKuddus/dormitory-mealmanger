<?php

namespace App\Http\Controllers\Member;

use App\Enums\DormitoryIdStatic;
use App\Http\Controllers\Controller;
use App\Http\Requests\UserDepositCreateRequest;
use App\Models\Deposit;
use App\Models\Dormitory;
use App\Services\DepositService;
use Exception;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class DepositController extends Controller
{
    public function deposits(DepositService $depositService): Response|RedirectResponse
    {
        try {
            $dormitoryId = DormitoryIdStatic::DORMITORYID;
            $userId = auth()->id();
            return Inertia::render('Member/Deposit/Index', [
                'deposits' => $depositService->userDeposits($userId, $dormitoryId)
            ]);
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    public function createDeposit(): Response|RedirectResponse
    {
        try {
            return Inertia::render('Member/Deposit/Create');
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    public function storeDeposit(UserDepositCreateRequest $request)
    {
        $data = $request->validated();

        $dormitory = Dormitory::find($data['dormitory_id']);

        if ($data['amount'] > $dormitory->max_deposit_limit) {
            return back()->with('error', 'Max deposit limit ' . $dormitory->max_deposit_limit . ' BDT');
        }

        Deposit::create($request->validated());
        return to_route('user.deposits.index');
    }
}
