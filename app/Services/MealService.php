<?php

namespace App\Services;

use App\Enums\DormitoryIdStatic;
use App\Enums\MealStatus;
use App\Helper\Helper;
use App\Http\Resources\MemberMealShowCollection;
use App\Http\Resources\MemberMealShowResource;
use App\Http\Resources\UserMealShowResource;
use App\Models\Dormitory;
use App\Models\Meal;
use App\Models\User;
use Carbon\Carbon;
use Exception;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Facades\DB;

class MealService
{

    public function getUsersWithMeal($dormitoryId)
    {
        try {
            return UserMealShowResource::collection(
                User::query()->with(['dormitory' => function ($q) use ($dormitoryId) {
                    $q->where('dormitory_id', $dormitoryId);
                },
                    'meals' => function ($query) use ($dormitoryId) {
                        $query->where('dormitory_id', $dormitoryId)
                            ->whereStatus(MealStatus::PENDING)
                            ->whereMonth('created_at', now()->month)
                            ->whereYear('created_at', now()->year)
                            ->select('user_id', DB::raw("SUM(break_fast + lunch + dinner) as total_meals"))
                            ->groupBy('user_id');
                    }
                ])
                    ->select('id', 'display_name', 'email', 'status')
                    ->orderBy('created_at', 'desc')
                    ->get()
            );
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }
    }

    public function addNewMealToUser(Request $request)
    {
        try {
            $dormitory = Dormitory::query()->find(DormitoryIdStatic::DORMITORYID);
            $user = User::query()->findOrFail($request->get('userId'));
            Helper::insertMeal($user, $dormitory);
            return $user;
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }
    }

    public function show($userId, Request $request)
    {
        try {

            $dormitoryId = DormitoryIdStatic::DORMITORYID;
            $bazarService = new BazarService();
            $userService = new UserService();

            if ($request->has('month')) {
                $month = Carbon::parse($request->get('month'));
            } else {
                $month = Carbon::parse(now());
            }

            $meal = Meal::query()
                ->where('dormitory_id', $dormitoryId)
                ->whereUserId($userId)
                ->whereStatus(MealStatus::PENDING)
                ->whereMonth('created_at', now()->month)
                ->whereYear('created_at', now()->year)
                ->select('user_id', DB::raw("SUM(break_fast + lunch + dinner) as total_meals"))
                ->groupBy('user_id')
                ->first() ?? 0;


            $userTotalMeal = $meal ? $meal->total_meals : 0;
            $bazar = $bazarService->getBazarsListOrSum($dormitoryId, true);
            $totalMealOfMess = $this->getTotalMeal($dormitoryId, $month);
            $mealCost = $bazar === 0 ? 0 : ($userTotalMeal === 0 ? 0 : round($bazar / $totalMealOfMess, 2));
            $additional = (new AdditonalCostService())->getTotalCost($dormitoryId);
            $member = $userService->getBasicsOfUsers($dormitoryId, true);
            $balance = $userService->getUser($userId, 'deposit');
            $totalMealCost = $bazar === 0 ? 0 : round($mealCost * $userTotalMeal, 2);
            $fixedCost = $additional == 0 ? 0 : round($additional / $member, 2);

            return [
                'user' => $userService->getUserWithMeal($userId, $month, $dormitoryId),
                'balance' => $balance,
                'additional' => $additional,
                'member' => $member,
                'totalMeal' => $userTotalMeal,
                'bazar' => $bazar,
                'mealCost' => $mealCost,
                'totalMealCost' => $totalMealCost,
                'fixedCost' => $fixedCost,
                'due' => ($fixedCost + $totalMealCost) > $balance ? round(($fixedCost + $totalMealCost) - $balance, 2) : 0
            ];
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }
    }

    public function getTotalMeal($dormitoryId, $month): int
    {
        try {
            $totalMeal = Meal::whereDormitoryId($dormitoryId)
                ->whereBetween(DB::raw('DATE(`created_at`)'), [$month->startOfMonth()->format('Y-m-d'), $month->lastOfMonth()->format('Y-m-d')])
                ->select(DB::raw("SUM(break_fast + lunch + dinner) as total_meals"))
                ->first();
            return $totalMeal->total_meals ?? 0;
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }
    }

    public function update(Request $request)
    {
        try {
            $data = $request->validated();
            $meal = Meal::where(['user_id' => $data['user_id'], 'id' => $data['id']])->update([
                'break_fast' => $data['break_fast'],
                'lunch' => $data['lunch'],
                'dinner' => $data['dinner']
            ]);
            return [$meal, $data['id']];
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }
    }

    public function userTotalMeal($userId, $mssId, $month): int
    {
        try {
            $totalMeal = Meal::whereUserId($userId)
                ->whereStatus(MealStatus::PENDING)
                ->whereDormitoryId($mssId)
                ->whereBetween(DB::raw('DATE(`created_at`)'), [$month->startOfMonth()->format('Y-m-d'), $month->today()->format('Y-m-d')])
                ->select(DB::raw("SUM(break_fast + lunch + dinner) as total_meals"))
                ->first();

            return $totalMeal->total_meals ?? 0;
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }
    }

    public function dormTotalMeal($dormId, $month): int
    {
        try {
            $totalMeal = Meal::query()
                ->whereStatus(MealStatus::PENDING)
                ->whereDormitoryId($dormId)
                ->whereBetween(DB::raw('DATE(`created_at`)'), [$month->startOfMonth()->format('Y-m-d'), $month->today()->format('Y-m-d')])
                ->select(DB::raw("SUM(break_fast + lunch + dinner) as total_meals"))
                ->first();

            return $totalMeal->total_meals ?? 0;
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }
    }


    public function getUserAllMealForSelectedMonthToCurrentDate($userId, $mssId, $month): AnonymousResourceCollection
    {
        try {
            return MemberMealShowResource::collection(
                Meal::query()
                    ->whereStatus(MealStatus::PENDING)
                    ->with('dormitory')
                    ->whereUserId($userId)
                    ->whereDormitoryId($mssId)
                    ->whereBetween(DB::raw('DATE(`created_at`)'), [$month->startOfMonth()->format('Y-m-d'), $month->lastOfMonth()->format('Y-m-d')])
                    ->get()
            );
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }
    }

    public function getTodaysLunchAndDinner()
    {

        try {
            $dormitoryId = DormitoryIdStatic::DORMITORYID;
            return Meal::query()
                ->where('status', MealStatus::PENDING)
                ->whereDormitoryId($dormitoryId)
                ->whereDate('created_at', now()->format('Y-m-d'))
                ->select(
                    DB::raw("SUM(CASE WHEN break_fast != 0 THEN break_fast ELSE 0 END) AS break_fast_total"),
                    DB::raw("SUM(CASE WHEN lunch != 0 THEN lunch ELSE 0 END) AS lunch_total"),
                    DB::raw("SUM(CASE WHEN dinner != 0 THEN dinner ELSE 0 END) AS dinner_total"),
                    'created_at',
                )
                ->groupBy('created_at')
                ->first();
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }
    }


    public function getMealsWithCount(int $dormitoryId): Model
    {
        try {
            return Meal::query()
                ->where('dormitory_id', $dormitoryId)
                ->whereMonth('created_at', now()->month)
                ->whereYear('created_at', now()->year)
                ->select(DB::raw("SUM(break_fast + lunch + dinner) as total_meals"))
                ->first();
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }
    }

}
