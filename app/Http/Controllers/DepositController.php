<?php

namespace App\Http\Controllers;

use App\Helper\Helper;
use App\Http\Requests\DepositRequest;
use App\Http\Requests\WithDrawRequest;
use App\Http\Resources\DepositCollection;
use App\Models\Deposit;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DepositController extends Controller
{
    public function index()
    {
        $requestParam = \request()->all('search', 'trashed');
        return Inertia::render('Deposit/Index', [
            'filters' => $requestParam,
            'usersWithDeposit' => new DepositCollection(
                User::query()
                    ->active()
                    ->select('id', 'first_name', 'last_name')
                    ->withSum('deposits', 'amount')
                    ->orderBy('created_at', 'desc')
                    ->paginate()
                    ->appends(request()->all())
            ),
        ]);
    }

    public function create()
    {
        return Inertia::render('Deposit/Create', [
            ...Helper::usersArray()
        ]);
    }

    public function store(DepositRequest $request)
    {
        Deposit::create(
            $request->validated()
        );

        return redirect()->back()->with('success', 'New Deposit Added');
    }

    public function show($userId)
    {
        $queryModel = Deposit::whereUserId($userId)->where('status', '!=', 0);
        return Inertia::render('Deposit/Show', [
            'user' => User::find($userId),
            'approvedDeposit' => $queryModel->get(),
            'total' => $queryModel->sum('amount'),
            'pendingDeposit' => Deposit::whereUserId($userId)->whereStatus(0)->get(),
        ]);

    }


    public function edit(Deposit $deposit)
    {
        return Inertia::render('Deposit/Edit', [
            'deposit' => $deposit,
            ...Helper::usersArray()
        ]);
    }

    public function update(DepositRequest $request, Deposit $deposit)
    {
        $deposit->update(
            $request->validated()
        );

        return to_route('deposit.index');
    }

    public function destroy(Deposit $deposit)
    {
        $deposit->delete();

        return redirect()->back()->with('success', 'Deposit deleted successfully');
    }

    public function restore(Deposit $deposit)
    {
        $deposit->restore();
        return redirect()->back();
    }


    public function accept(Deposit $deposit)
    {
        $deposit->status = 1;
        $deposit->save();
        return redirect()->back()->with('success', 'Deposit approved');
    }

    public function reject(Deposit $deposit)
    {
        $deposit->forceDelete();
        return redirect()->back()->with('success', 'Deposit Deleted');
    }

    public function withdraw(WithDrawRequest $request)
    {
        Deposit::create(
            $request->validated()
        );

        return redirect()->back()->with('success', 'New Withdrawal added');
    }
}
