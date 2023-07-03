<?php

namespace App\Http\Controllers;

use App\Enums\DormitoryInfoStatic;
use App\Http\Requests\MealUpdateRequest;
use App\Http\Requests\NewMealAddToUserRequest;
use App\Models\Meal;
use App\Services\MealService;
use App\Services\UserService;
use Exception;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MealController extends Controller
{
    public function index(MealService $mealService)
    {
        $this->authorize('showMeal', Meal::class);


        $dormitoryId = DormitoryInfoStatic::DORMITORYID;
        $month = (new DormitoryInfoStatic())->getMonth();

        try {
            return Inertia::render('Meal/Index', [
                'users' => $mealService->getUsersWithMeal($dormitoryId,$month)
            ]);
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    public function show($user, Request $request, MealService $mealService)
    {
        $this->authorize('detailsMeal', Meal::class);

        try {
            return Inertia::render('Meal/Show', $mealService->show($user, $request));
        } catch (Exception $exception) {
            return redirect()->back()->with('errors', $exception->getMessage());
        }
    }


    public function update(MealUpdateRequest $request, MealService $mealService)
    {
        $this->authorize('editMeal', Meal::class);

        try {
            [$_, $userId] = $mealService->update($request);
            return to_route('meals.show', $userId)->with('success', 'Meal Updated');
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    public function addNewMeal(NewMealAddToUserRequest $request, MealService $mealService)
    {
        try {
            $mealService->addNewMealToUser($request);
            return back()->with('success', 'Meal Added');
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    public function calendarView(UserService $userService)
    {
        try {
            $dormitoryId = DormitoryInfoStatic::DORMITORYID;

            return Inertia::render('Meal/Calendar', [
                'usersAndMeal' => $userService->getUsersWithMeal($dormitoryId),
                'daysInMonth' => (new DormitoryInfoStatic())->getMonth()->daysInMonth
            ]);
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }
}
