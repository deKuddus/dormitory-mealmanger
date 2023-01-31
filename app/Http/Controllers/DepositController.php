<?php

namespace App\Http\Controllers;

use App\Helper\Helper;
use App\Http\Requests\DepositRequest;
use App\Http\Resources\DepositCollection;
use App\Models\Deposit;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DepositController extends Controller
{
    public function index()
    {
        $requestParam = \request()->all('search', 'trashed');
        return Inertia::render('Deposit/Index', [
            'filters' => $requestParam,
            'deposits' => new DepositCollection(
                Deposit::query()
                    ->orderBy('created_at', 'desc')
                    ->paginate()
                    ->appends(request()->all())
            ),
        ]);
    }

    public function create()
    {
        return Inertia::render('Deposit/Create',[
            ...Helper::usersArray(),
            ...Helper::messArray()
        ]);
    }

    public function store(DepositRequest $request)
    {
        Deposit::create(
            $request->validated()
        );

        return to_route('deposit.index');
    }

    public function show($id)
    {

    }


    public function edit(Deposit $deposit)
    {
        return Inertia::render('Deposit/Edit', [
            'deposit' => $deposit,
            ...Helper::usersArray(),
            ...Helper::messArray()
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

        return to_route('deposit.index');
    }

    public function restore(Deposit $deposit)
    {
        $deposit->restore();
        return redirect()->back();
    }
}
