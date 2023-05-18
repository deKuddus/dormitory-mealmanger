<?php

namespace App\Services;

use App\Enums\MealStatus;
use App\Http\Resources\UserCollection;
use App\Models\Dormitory;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;

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
                        ->paginate()
                ),
                'totalMemberActive' => (int)$result->totalMemberActive,
                'totalMemberInActive' => (int)$result->totalMemberInActive
            ];
        } catch (Exception $exception) {
            throw_if(true,$exception->getMessage());
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
            throw_if(true,$exception->getMessage());
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
            throw_if(true,$exception->getMessage());
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
            throw_if(true,$exception->getMessage());
        }
    }

    public function getBasicsOfUsers($dormitoryId = null, $count = false)
    {
        try {
            $query = User::query()
                ->when($dormitoryId, function ($query) use ($dormitoryId) {
                    $query->whereId($dormitoryId)->select('id', 'name');
                });

            if ($count) {
                return $query->count();
            }
            return $query->get(['id', 'display_name'])
                ->toArray();
        } catch (Exception $exception) {
            throw_if(true,$exception->getMessage());
        }
    }

    public function getUsersWithMeal($dormitoryId = null)
    {
        try {
            $month = now();
            return User::query()
                ->whereDormitoryId($dormitoryId)
                ->with([
                    'meals' => function ($query) use ($month) {
                        $query->whereMonth('created_at', '=', $month->month)
                            ->whereYear('created_at', '=', $month->year)
                            ->whereStatus(MealStatus::PENDING);
                    },
                ])
                ->select('id', 'display_name')
                ->get();
        } catch (Exception $exception) {
            throw_if(true,$exception->getMessage());
        }
    }

}
