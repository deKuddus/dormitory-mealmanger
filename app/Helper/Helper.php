<?php

namespace App\Helper;

use App\Models\Meal;
use App\Models\Mess;
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
            'users' => User::get(['id', 'first_name'])->toArray(),
        ];
    }

    public static function rulesArray()
    {
        return [
            'rules' => Rule::get(['id', 'title'])->toArray(),
        ];
    }

    public static function createMeal(): void
    {
        $autoMealGenerationForMess = Mess::with('users:id,mess_id')->active()->get();
        $lastDayOfMonth = date('Y-m-t');
        $today = now()->format('Y-m-d');
        $difference = Carbon::parse($lastDayOfMonth)->diffInDays($today);
        $autoMealGenerationForMess->each(function ($mess) use ($difference) {
            if ($mess->is_automeal == 1) {
                $mess->users->each(function ($user) use ($mess, $difference) {
                    $dataArray = [];
                    for ($i = 1; $i <= $difference; $i++) {
                        $dataArray[] = [
                            'user_id'    => $user->id,
                            'mess_id'    => $mess->id,
                            'break_fast' => $mess->has_breakfast ? 1 : 0,
                            'lunch'      => $mess->has_lunch ? 1 : 0,
                            'dinner'     => $mess->has_dinner ? 1 : 0,
                            'status'     => 1,
                            'created_at' => now()->format('Y-m-' . $i),
                            'updated_at' => now()->format('Y-m-' . $i),
                        ];
                    }
                    Meal::insert($dataArray);
                });
            }
        });
    }
}
