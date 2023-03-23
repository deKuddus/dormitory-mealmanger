<?php

namespace App\Helper;

use App\Enums\MealStatus;
use App\Models\Meal;
use App\Models\Mess;
use App\Models\Role;
use App\Models\Rule;
use App\Models\User;
use Carbon\Carbon;

class Helper
{
    public static function messArray()
    {
        return [
            'messes' => Mess::get(['id', 'name'])->toArray(),
        ];
    }

    public static function usersArray()
    {
        return [
            'users' => User::get(['id', 'first_name','last_name'])->toArray(),
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
        $autoMealGenerationForMess = Mess::with('users:id,mess_id')->active()->get();
        $today = (int)date('d');
        $lastDayOfMonth = (int)date('t');

        $autoMealGenerationForMess->each(function ($mess) use ($lastDayOfMonth,$today) {
            if ($mess->is_automeal == 1) {
                $mess->users->each(function ($user) use ($mess, $lastDayOfMonth,$today) {
                    $dataArray = [];
                    for ($i = $today; $i <= $lastDayOfMonth; $i++) {
                        $dataArray[] = [
                            'user_id'    => $user->id,
                            'mess_id'    => $mess->id,
                            'break_fast' => $mess->has_breakfast ? 1 : 0,
                            'lunch'      => $mess->has_lunch ? 1 : 0,
                            'dinner'     => $mess->has_dinner ? 1 : 0,
                            'status'     => MealStatus::PENDING,
                            'created_at' => Carbon::parse(date('Y-m-' . $i.' 09:00'))->format('Y-m-d h:i'),
                            'updated_at' => Carbon::parse(date('Y-m-' . $i.' 09:00'))->format('Y-m-d h:i'),
                        ];
                    }
                    Meal::insert($dataArray);
                });
            }
        });
    }

    public static function getUserPermission(){
            $permissions = array_values(auth()->user()->roles->pluck('permissions')->map(function ($row,$key){
                return $row->map(function ($l){
                    return $l->name;
                });
            })->toArray())[0] ?? [];
            $requiredPermission = [
                'access::dashboard-show',
                'access::meal-show',
                'access::deposit-show',
            ];
        return [
            'dashboard'=> auth()->user()->roles->pluck('permissions')->map->only('name'),
        ];
    }
}
