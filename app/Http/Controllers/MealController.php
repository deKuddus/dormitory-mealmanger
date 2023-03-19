<?php

namespace App\Http\Controllers;

use App\Http\Requests\MealUpdateRequest;
use App\Http\Resources\MealDetailsResource;
use App\Models\AdditionalCost;
use App\Models\Bazar;
use App\Models\Deposit;
use App\Models\Meal;
use App\Models\User;
use App\Services\MealService;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class MealController extends Controller
{
    public function index()
    {
        $this->authorize('showMeal',User::class);


        $messId = 1;

        return Inertia::render('Meal/Index', [
            'users' => User::query()->with('mess', function ($q) use ($messId) {
                $q->where('mess_id', $messId);
            })->select('id', 'first_name', 'last_name', 'email', 'status')->withCount('meals')->orderBy('created_at', 'desc')->get()
        ]);

    }

    public function show($user, Request $request,MealService $mealService)
    {
        $this->authorize('detailsMeal',User::class);


        $messId = 1;

        try {

            if ($request->has('month')) {
                $month = Carbon::parse($request->get('month'));
            } else {
                $month = Carbon::parse(now());
            }

            return Inertia::render('Meal/Show', [
                'user' => $mealService->getUserWithMeal($user, $month, $messId),
                'balance' => $mealService->getUserTotalDeposit($user, $messId),
                'additional' => $mealService->getTotalAdditionalCost($month, $messId),
                'member' => $mealService->getTotalUser($messId),
                'totalMeal' => $mealService->getTotalMeal($messId, $month),
                'bazar' => $mealService->getTotalBazar($month, $messId)
            ]);

        } catch (\Exception $exception) {
            return redirect()->back()->with('error', $exception->getMessage());
        }
    }



    public function update(MealUpdateRequest $request)
    {
        $this->authorize('editMeal',User::class);

        $data = $request->validated();
        $meal = Meal::whereUserId($data['user_id'])->findOrFail($data['id']);
        $meal->break_fast = $data['break_fast'];
        $meal->lunch = $data['lunch'];
        $meal->dinner = $data['dinner'];
        $meal->save();
        return to_route('meals.show', $data['user_id']);
    }
}
