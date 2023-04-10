<?php

namespace App\Helper;

use App\Enums\DormitoryIdStatic;
use App\Enums\MealStatus;
use App\Models\Dormitory;
use App\Models\Meal;
use App\Models\Role;
use App\Models\Room;
use App\Models\Rule;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

class Helper
{
    public static function messArray()
    {
        return [
            'messes' => Dormitory::get(['id', 'name'])->toArray(),
        ];
    }

    public static function roomArray()
    {
        return [
            'rooms' => Room::query()->where('dormitory_id',DormitoryIdStatic::DORMITORYID)->get(['id', 'name'])->toArray(),
        ];
    }

    public static function usersArray()
    {
        return [
            'users' => User::query()->with(['dormitory' => function ($q) {
                $q->whereId(DormitoryIdStatic::DORMITORYID)->select('name');
            }])->get(['id', 'first_name', 'last_name'])->toArray(),
        ];
    }

    public static function rulesArray()
    {
        return [
            'rules' => Rule::get(['id', 'title'])->toArray(),
        ];
    }

    public static function rolesArray()
    {
        return [
            'roles' => Role::get(['id', 'name'])->toArray(),
        ];
    }

    public static function createMeal()
    {
        $autoMealGenerationForMess = Dormitory::query()->whereId(DormitoryIdStatic::DORMITORYID)->with('users:id,dormitory_id')->active()->get();


        $autoMealGenerationForMess->each(function ($dormitory) {
            if ($dormitory->is_automeal == 1) {
                $dormitory->users->each(function ($user) use ($dormitory) {
                    self::insertMeal($user, $dormitory);
                });
            }
        });
    }

    public static function insertMeal($user, $dormitory)
    {
        $today = (int)date('d');
        $lastDayOfMonth = (int)date('t');
        $dataArray = [];
        for ($i = $today; $i <= $lastDayOfMonth; $i++) {
            $dataArray[] = [
                'user_id' => $user->id,
                'dormitory_id' => $dormitory->id,
                'break_fast' => $dormitory->has_breakfast ? $dormitory->default_meal : 0,
                'lunch' => $dormitory->has_lunch ? $dormitory->default_meal : 0,
                'dinner' => $dormitory->has_dinner ? $dormitory->default_meal : 0,
                'status' => MealStatus::PENDING,
                'created_at' => Carbon::parse(date('Y-m-' . $i . ' 09:00'))->format('Y-m-d h:i'),
                'updated_at' => Carbon::parse(date('Y-m-' . $i . ' 09:00'))->format('Y-m-d h:i'),
            ];
        }
        Meal::insert($dataArray);
    }

    public static function getUserPermission()
    {
        if (auth::check() && auth()->user()->isAdmin()) {
            $permissions = auth()->user()->load('roles.permissions')->roles->flatMap(function ($role) {
                return $role->permissions;
            })->pluck('name')->toArray();
        } else {
            $permissions = [];
        }

        return $permissions;
    }
}
