<?php

namespace App\Http\Controllers;

use App\Helper\Helper;
use App\Http\Requests\DepositRequest;
use App\Http\Requests\WithDrawRequest;
use App\Models\Deposit;
use App\Models\User;
use App\Services\DepositService;
use Exception;
use Inertia\Inertia;

class DepositController extends Controller
{
    public function index(DepositService $depositService)
    {
        $this->authorize('showDeposit', Deposit::class);
        try {
            return Inertia::render('Deposit/Index', $depositService->index());
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }

    }

    public function store(DepositRequest $request, DepositService $depositService)
    {
        $this->authorize('createDeposit', Deposit::class);

        try {
            $depositService->store($request);
            return to_route('deposit.index')->with('success', 'Deposit Added');
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }


    }

    public function show($userId, DepositService $depositService)
    {
        $this->authorize('showDeposit', Deposit::class);

        try {
            return Inertia::render('Deposit/Show', $depositService->show($userId));
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }

    }

    public function edit(Deposit $deposit, DepositService $depositService)
    {
        $this->authorize('editDeposit', Deposit::class);

        try {
            return Inertia::render('Deposit/Edit', $depositService->edit($deposit));
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    public function update(DepositRequest $request, Deposit $deposit, DepositService $depositService)
    {
        $this->authorize('editDeposit', User::class);

        try {
            $depositService->update($deposit, $request);
            return to_route('deposit.index');
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }

    }

    public function destroy(Deposit $deposit, DepositService $depositService)
    {
        $this->authorize('deleteDeposit', Deposit::class);

        try {
            $depositService->delete($deposit);
            return redirect()->back()->with('success', 'Deposit deleted successfully');
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }

    }

    public function accept(Deposit $deposit, DepositService $depositService)
    {
        $this->authorize('approveDeposit', Deposit::class);

        try {
            $depositService->acceptDeposit($deposit);
            return redirect()->back()->with('success', 'Deposit approved');
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    public function reject(Deposit $deposit, DepositService $depositService)
    {
        $this->authorize('rejectDeposit', Deposit::class);
        try {
            $depositService->reject($deposit);
            return redirect()->back()->with('success', 'Deposit Deleted');
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    public function withdraw(WithDrawRequest $request, DepositService $depositService)
    {
        $this->authorize('withdrawDeposit', Deposit::class);

        try {
            $depositService->withdraw($request);
            return redirect()->back()->with('success', 'New Withdrawal added');
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    public function create()
    {
        $this->authorize('createDeposit', Deposit::class);

        try {
            return Inertia::render('Deposit/Create', [
                ...Helper::usersArray()
            ]);
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }
}
