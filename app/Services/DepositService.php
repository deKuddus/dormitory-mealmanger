<?php

namespace App\Services;

use App\Enums\DepositStatus;
use App\Http\Resources\DepositCollection;
use App\Models\Deposit;
use App\Models\Dormitory;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DepositService
{
    public function index()
    {
        try {
            return [
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
                        ->select('id', 'full_name', 'deposit')
                        ->orderBy('created_at', 'desc')
                        ->paginate(\request()->get('per_page') || 50)
                ),
            ];
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }
    }

    public function store(Request $request)
    {
        try {
            $data = $request->validated();
            $dormitory = Dormitory::find($data['dormitory_id']);

            if ($data['amount'] > $dormitory->max_deposit_limit) {
                return back()->with('error', 'Max deposit limit' . $dormitory->max_deposit_limit);
            }

            $deposit = Deposit::create(
                $request->validated()
            );

            $deposit->user()->increment('deposit', $deposit->amount);
            $deposit->dormitory()->increment('deposit', $deposit->amount);
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }

    }

    public function show($userId)
    {
        try {
            return [
                'user' => User::find($userId),
                'approvedDeposit' => Deposit::whereUserId($userId)->where('status', '!=', 0)->get(),
                'pendingDeposit' => Deposit::whereUserId($userId)->whereStatus(0)->get(),
            ];
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }
    }

    public function edit(Deposit $deposit, UserService $userService)
    {
        try {
            return [
                'deposit' => $deposit,
                'users' => $userService->getUserAndDormitoryBasic()
            ];
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }
    }

    public function update(Deposit $deposit, Request $request)
    {
        try {
            $deposit->update(
                $request->validated()
            );
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }
    }

    public function delete(Deposit $deposit)
    {
        try {
            if ($deposit->status === DepositStatus::WITHDRAWN) {
                $deposit->user()->increment('deposit', $deposit->amount);
                $deposit->dormitory()->increment('deposit', $deposit->amount);
            } else {
                $deposit->user()->decrement('deposit', $deposit->amount);
                $deposit->dormitory()->decrement('deposit', $deposit->amount);
            }
            $deposit->delete();
            return $deposit;
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }
    }

    public function acceptDeposit(Deposit $deposit)
    {
        try {
            $deposit->status = DepositStatus::APPROVED;
            $deposit->save();
            $deposit->user()->increment('deposit', $deposit->amount);
            $deposit->dormitory()->increment('deposit', $deposit->amount);
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }
    }

    public function reject(Deposit $deposit)
    {
        try {
            $deposit->forceDelete();
            return $deposit;
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }
    }

    public function withdraw(Request $request)
    {
        try {
            $user = User::find($request->get('user_id'));

            throw_if($request->amount > $user->deposit, 'Withdraw amount can not greater than deposit amount.');

            $deposit = Deposit::create(
                $request->validated()
            );

            $user->decrement('deposit', $deposit->amount);
            $deposit->dormitory()->decrement('deposit', $deposit->amount);
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }
    }

    public function totalDeposit(int $dormitoryId): float
    {
        try {
            return Dormitory::query()->find($dormitoryId)->value('deposit');
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }
    }

    public function userDeposits(int $userId, $dormitoryId)
    {
        try {
            return Deposit::whereUserId($userId)
                ->whereDormitoryId($dormitoryId)
                ->orderBy('created_at', 'desc')
                ->paginate();
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }
    }
}
