<?php

namespace App\Services;

use App\Enums\DepositStatus;
use App\Enums\DormitoryInfoStatic;
use App\Enums\MealStatus;
use App\Http\Resources\MealDetailsResource;
use App\Http\Resources\ReportCollection;
use App\Http\Resources\UserCollection;
use App\Models\Dormitory;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserService
{
    public function index()
    {
        try {
            $result = User::query()
                ->selectRaw("
                SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS totalMemberActive,
                SUM(CASE WHEN status = 0 THEN 1 ELSE 0 END) AS totalMemberInActive
            ")
                ->first();

            return [
                'users' => new UserCollection(
                    User::query()
                        ->select('id', 'full_name', 'email', 'phone', 'status', 'is_admin')
                        ->orderBy('created_at', 'desc')
                        ->paginate(\request()->get('per_page') ?? 50)
                ),
                'totalMemberActive' => (int)$result->totalMemberActive,
                'totalMemberInActive' => (int)$result->totalMemberInActive
            ];
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }
    }

    public function store(Request $request)
    {
        try {
            $user = User::create(
                $request->validated()
            );

            $user->dormitory()->sync($request->dormitory_id);
            $user->syncRoles($request->validated('roles'));

            return $user;
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }
    }

    public function update(User $user, Request $request)
    {
        try {
            $user->update($request->validated());

            $user->dormitory()->sync($request->dormitory_id);
            $user->syncRoles($request->validated('roles'));
            return $user;

        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }
    }


    public function delete(User $user, Request $request)
    {
        try {
            Dormitory::query()->whereHas('users', function ($query) use ($user) {
                $query->whereId($user->id);
            })->decrement('deposit', $user->deposit);

            return $user->delete();
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }
    }

    public function getBasicsOfUsers($dormitoryId = null, $count = false)
    {
        try {
            $query = User::query()
                ->active()
                ->whereHas('dormitory', function ($query) use ($dormitoryId) {
                    $query->whereId($dormitoryId)->select('id', 'name');
                });

            if ($count) {
                return $query->count();
            }
            return $query->get(['id', 'display_name'])
                ->toArray();
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }
    }

    public function getUsersWithMeal(int $dormitoryId,)
    {
        try {
            $month = (new DormitoryInfoStatic())->getMonth();
            return User::query()
                ->active()
                ->with([
                    'meals' => function ($query) use ($month) {
                        $query->whereMonth('created_at', '=', $month->month)
                            ->whereYear('created_at', '=', $month->year)
                            ->whereStatus(MealStatus::PENDING);
                    }
                ])
                ->whereHas('dormitory', function ($query) use ($dormitoryId) {
                    $query->whereId($dormitoryId);
                })
                ->select('id', 'display_name')
                ->get();
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }
    }

    public function getUserWithMeal($userId, $month,$dormitoryId)
    {
        try {
            return new MealDetailsResource(
                User::query()
                    ->with([
                        'meals' => function ($query) use ($month, $dormitoryId) {
                            $query->whereDormitoryId($dormitoryId)
                                ->with('dormitory')
                                ->whereStatus(MealStatus::PENDING)
                                ->whereMonth('created_at', '=', $month->month)
                                ->whereYear('created_at', '=', $month->year);

                        }
                    ])
                    ->whereHas('dormitory', function ($query) use ($dormitoryId) {
                        $query->whereId($dormitoryId);
                    })
                    ->select('id', 'full_name', 'email', 'status')
                    ->findOrFail($userId)
            );
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }
    }

    public function getUsersWithDepositAndMeal($dormitoryId, $month)
    {
        try {
            return new ReportCollection(
                User::query()
                    ->with([
                        'dormitory' => fn($q) => $q->where('dormitory_id', $dormitoryId),
                        'meals' => function ($query) use ($month) {
                            $query->whereMonth('created_at', '=', $month->month)
                                ->whereYear('created_at', '=', $month->year)
                                ->whereStatus(MealStatus::PENDING)
                                ->select(
                                    'user_id',
                                    DB::raw("SUM(CASE WHEN break_fast != 0 THEN break_fast ELSE 0 END) AS break_fast_total"),
                                    DB::raw("SUM(CASE WHEN lunch != 0 THEN lunch ELSE 0 END) AS lunch_total"),
                                    DB::raw("SUM(CASE WHEN dinner != 0 THEN dinner ELSE 0 END) AS dinner_total"),
                                )
                                ->groupBy('user_id');
                        },
                        'deposits' => fn($q) => $q->whereStatus(DepositStatus::APPROVED),
                    ])
                    ->select('id', 'full_name', 'email', 'status')
                    ->get(),
            );
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }
    }

    public function getUserInfo($userId, $column): string|float
    {
        try {
            return User::query()->whereId($userId)->value($column);
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }
    }

    public function getUserAndDormitoryBasic(): array
    {
        try {
            return User::query()
                ->active()
                ->with(['dormitory' => function ($q) {
                    $q->whereId(DormitoryInfoStatic::DORMITORYID)->select('name');
                }])
                ->get(['id', 'full_name', 'display_name'])
                ->toArray();
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }
    }
}
