<?php

namespace App\Http\Controllers;

use App\Enums\DepositStatus;
use App\Helper\Helper;
use App\Http\Requests\DepositRequest;
use App\Http\Requests\WithDrawRequest;
use App\Http\Resources\DepositCollection;
use App\Models\Deposit;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class DepositController extends Controller
{
    public function index()
    {
        $this->authorize('showDeposit',Deposit::class);

        $requestParam = \request()->all('search', 'trashed');
        return Inertia::render('Deposit/Index', [
            'filters' => $requestParam,
            'usersWithDeposit' => new DepositCollection(
                User::query()
                    ->active()
                    ->with(
                        'deposits', function ($query) {
                        $query->select(
                            'user_id',
                            DB::raw('SUM(CASE WHEN status = 1 THEN amount ELSE 0 END) as deposit_amount'),
                            DB::raw('SUM(CASE WHEN status = 3 THEN amount ELSE 0 END) as withdraw_amount'),
                            DB::raw('SUM(CASE WHEN status = 0 THEN amount ELSE 0 END) as pending_amount'),
                        )->groupBy('user_id');
                    })
                    ->select('id', 'first_name', 'deposit','last_name')
                    ->orderBy('created_at', 'desc')
                    ->paginate()
                    ->appends(request()->all())
            ),
        ]);
    }

    public function create()
    {
        $this->authorize('createDeposit',Deposit::class);

        return Inertia::render('Deposit/Create', [
            ...Helper::usersArray()
        ]);
    }

    public function store(DepositRequest $request)
    {
        $this->authorize('createDeposit',Deposit::class);


        $deposit = Deposit::create(
            $request->validated()
        );

        $deposit->user()->increment('deposit', $deposit->amount);
        $deposit->mess()->increment('deposit', $deposit->amount);


        return redirect()->back()->with('success', 'New Deposit Added');
    }

    public function show($userId)
    {
        $this->authorize('showDeposit',Deposit::class);

        return Inertia::render('Deposit/Show', [
            'user' => User::find($userId),
            'approvedDeposit' => Deposit::whereUserId($userId)->where('status', '!=', 0)->get(),
            'pendingDeposit' => Deposit::whereUserId($userId)->whereStatus(0)->get(),
        ]);

    }


    public function edit(Deposit $deposit)
    {
        $this->authorize('editDeposit',Deposit::class);


        return Inertia::render('Deposit/Edit', [
            'deposit' => $deposit,
            ...Helper::usersArray()
        ]);
    }

    public function update(DepositRequest $request, Deposit $deposit)
    {
        $this->authorize('editDeposit',User::class);

        $deposit->update(
            $request->validated()
        );

        return to_route('deposit.index');
    }

    public function destroy(Deposit $deposit)
    {
        $this->authorize('deleteDeposit',Deposit::class);

        $deposit->user()->decrement('deposit', $deposit->amount);
        $deposit->mess()->decrement('deposit', $deposit->amount);
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
        $this->authorize('approveDeposit',Deposit::class);


        $deposit->status = DepositStatus::APPROVED;
        $deposit->save();
        $deposit->user()->increment('deposit', $deposit->amount);
        $deposit->mess()->increment('deposit', $deposit->amount);
        return redirect()->back()->with('success', 'Deposit approved');
    }

    public function reject(Deposit $deposit)
    {
        $this->authorize('rejectDeposit',Deposit::class);


        $deposit->forceDelete();
        return redirect()->back()->with('success', 'Deposit Deleted');
    }

    public function withdraw(WithDrawRequest $request)
    {
        $this->authorize('withdrawDeposit',Deposit::class);

        $user = User::find($request->user_id);

        if($request->amount > $user->deposit){
            return back()->with('errors','Withdraw amount is greater than deposit amount');
        }
        $deposit = Deposit::create(
            $request->validated()
        );

        $user->decrement('deposit', $deposit->amount);
        $deposit->mess()->decrement('deposit', $deposit->amount);

        return redirect()->back()->with('success', 'New Withdrawal added');
    }
}
