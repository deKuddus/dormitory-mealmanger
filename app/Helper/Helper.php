<?php

namespace App\Helper;

use App\Enums\DormitoryInfoStatic;
use App\Enums\MealStatus;
use App\Http\Resources\UserResource;
use App\Models\Dormitory;
use App\Models\Meal;
use App\Services\DormitoryService;
use App\Services\PermissionService;
use Carbon\Carbon;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

class Helper
{
    public static function createMeal()
    {
        $autoMealGenerationForMess = Dormitory::query()
            ->whereId(DormitoryInfoStatic::DORMITORYID)
            ->with('users:id,dormitory_id')
            ->active()
            ->get();


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
                'lunch' => self::isTodyaFridayOrSaturday(date('Y-m-' . $i)) && $dormitory->has_lunch ? $dormitory->default_meal : 0,
                'dinner' => $dormitory->has_dinner ? $dormitory->default_meal : 0,
                'status' => MealStatus::PENDING,
                'created_at' => Carbon::parse(date('Y-m-' . $i . ' 09:00'))->format('Y-m-d h:i'),
                'updated_at' => Carbon::parse(date('Y-m-' . $i . ' 09:00'))->format('Y-m-d h:i'),
            ];
        }
        Meal::insert($dataArray);
    }

    public static function isTodyaFridayOrSaturday($date)
    {
        $today = Carbon::parse($date);
        $dayOfWeek = $today->dayOfWeek;

        if ($dayOfWeek === Carbon::FRIDAY or $dayOfWeek === Carbon::SATURDAY) {
            return true;
        }
        return false;
    }

    public static function getUserPermission(): array
    {
        try {
            return (new PermissionService())->getUserPermissionAsArray();
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }
    }

    public static function getUserUnreadNotification()
    {
        if (!auth()->check()) {
            return [
                'count' => 0,
                'data' => [],
            ];
        }
        return [
            'count' => auth()->user()->unreadNotifications->count(),
            'data' => auth()->user()->unreadNotifications ?? [],
        ];
    }


    public static function getDormitoryDeposit()
    {
        return Auth::check() ? auth()->user()->isAdmin() ?
            (new DormitoryService())->getDormitoryInfo(DormitoryInfoStatic::DORMITORYID,'deposit')
            : 0 : 0;
    }

    public static function getUserDeposit()
    {
        $currentRoute = Route::current();
        $prefix = $currentRoute->getPrefix();

        if ($prefix === '/master') {
            return auth()->check() ? auth()->user()->deposit : 0;
        }
        return 0;
    }

    public static function getLoggedInUser()
    {
        return Auth::check() ? new UserResource(Auth::user()) : null;
    }
}
