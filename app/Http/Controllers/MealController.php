<?php

namespace App\Http\Controllers;

use App\Enums\MealStatus;
use App\Enums\MessIdStatic;
use App\Helper\Helper;
use App\Http\Requests\MealUpdateRequest;
use App\Http\Resources\MealDetailsResource;
use App\Http\Resources\UserMealShowResource;
use App\Models\AdditionalCost;
use App\Models\Bazar;
use App\Models\Deposit;
use App\Models\Meal;
use App\Models\Mess;
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
        $this->authorize('showMeal', Meal::class);


        $messId = MessIdStatic::MESSID;

        return Inertia::render('Meal/Index', [
            'users' => UserMealShowResource::collection(
                User::query()->with(['mess' => function ($q) use ($messId) {
                    $q->where('mess_id', $messId);
                },
                    'meals' => function ($query) use ($messId) {
                        $query->where('mess_id', $messId)
                            ->whereStatus(MealStatus::PENDING)
                            ->whereMonth('created_at', now()->month)
                            ->whereYear('created_at', now()->year)
                            ->select('user_id', DB::raw("SUM(break_fast + lunch + dinner) as total_meals"))
                            ->groupBy('user_id');
                    }
                ])
                    ->select('id', 'first_name', 'last_name', 'email', 'status')
                    ->orderBy('created_at', 'desc')
                    ->get()
            )
        ]);

    }

    public function show($user, Request $request, MealService $mealService)
    {
        $this->authorize('detailsMeal', Meal::class);


        $messId = MessIdStatic::MESSID;

        try {

            if ($request->has('month')) {
                $month = Carbon::parse($request->get('month'));
            } else {
                $month = Carbon::parse(now());
            }

            $meal = Meal::query()
                ->where('mess_id', $messId)
                ->whereUserId($user)
                ->whereStatus(MealStatus::PENDING)
                ->whereMonth('created_at', now()->month)
                ->whereYear('created_at', now()->year)
                ->select('user_id', DB::raw("SUM(break_fast + lunch + dinner) as total_meals"))
                ->groupBy('user_id')
                ->first() ?? 0;


            $userTotalMeal = $meal ? $meal->total_meals : 0;
            $bazar = $mealService->getTotalBazar($month, $messId);
            $totalMealOfMess = $mealService->getTotalMeal($messId, $month);
            $mealCost = $bazar === 0 ? 0 : ($userTotalMeal === 0 ? 0 : round($bazar / $totalMealOfMess, 2));
            $additional = $mealService->getTotalAdditionalCost($month, $messId);
            $member = $mealService->getTotalUser($messId);
            $balance = $mealService->getUserTotalDeposit($user, $messId);
            $totalMealCost = $bazar === 0 ? 0 : round($mealCost * $userTotalMeal, 2);
            $fixedCost = $additional == 0 ? 0 : round($additional / $member, 2);

            return Inertia::render('Meal/Show', [
                'user' => $mealService->getUserWithMeal($user, $month, $messId),
                'balance' => $balance,
                'additional' => $additional,
                'member' => $member,
                'totalMeal' => $userTotalMeal,
                'bazar' => $bazar,
                'mealCost' => $mealCost,
                'totalMealCost' => $totalMealCost,
                'fixedCost' => $fixedCost,
                'due' => ($fixedCost + $totalMealCost) > $balance ? round(($fixedCost + $totalMealCost) - $balance, 2) : 0
            ]);
        } catch (\Exception $exception) {
            return redirect()->back()->with('errors', $exception->getMessage());
        }
    }


    public function update(MealUpdateRequest $request)
    {
        $this->authorize('editMeal', Meal::class);

        $data = $request->validated();
        $meal = Meal::whereUserId($data['user_id'])->findOrFail($data['id']);
        $meal->break_fast = $data['break_fast'];
        $meal->lunch = $data['lunch'];
        $meal->dinner = $data['dinner'];
        $meal->save();
        return to_route('meals.show', $data['user_id'])->with('success', 'Meal Updated');
    }

    public function addNewMeal(Request $request)
    {
        try {
            $request->validate(['userId' => 'required']);

            $mess = Mess::find(MessIdStatic::MESSID);
            $user = User::findOrFail($request->get('userId'));
            Helper::insertMeal($user, $mess);
            return back()->with('success', 'Meal Added');
        } catch (\Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }

    }
}
