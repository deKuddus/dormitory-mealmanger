<?php

namespace App\Http\Controllers;

use App\Http\Requests\MealUpdateRequest;
use App\Http\Resources\MealDetailsResource;
use App\Models\AdditionalCost;
use App\Models\Bazar;
use App\Models\Deposit;
use App\Models\Meal;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class MealController extends Controller
{
    public function index()
    {
        $messId = 1;

        return Inertia::render('Meal/Index', [
            'users' => User::query()->with('mess', function ($q) use ($messId) {
                $q->where('mess_id', $messId);
            })->select('id', 'first_name', 'last_name', 'email', 'status')->withCount('meals')->orderBy('created_at', 'desc')->get()
        ]);

    }

    public function show($user, Request $request)
    {
        $messId = 1;

        try {

            if ($request->has('month')) {
                $month = Carbon::parse($request->get('month'));
            } else {
                $month = Carbon::parse(now());
            }

            return Inertia::render('Meal/Show', [
                'user' => $this->getUserWithMeal($user, $month, $messId),
                'balance' => $this->getUserTotalDeposit($user, $messId),
                'additional' => $this->getTotalAdditionalCost($month, $messId),
                'member' => $this->getTotalUser($messId),
                'totalMeal' => $this->getTotalMeal($messId, $month),
                'bazar' => $this->getTotalBazar($month, $messId)
            ]);

        } catch (\Exception $exception) {
            return redirect()->back()->with('error', $exception->getMessage());
        }
    }


    private function getUserWithMeal($user, $month, $messId)
    {
        return new MealDetailsResource(
            User::with([
                'meals' => function ($query) use ($month, $messId) {
                    $query->whereMessId($messId)->whereMonth('created_at', '=', $month->month)->whereYear('created_at', '=', $month->year);
                }
            ])
                ->select('id', 'first_name', 'last_name', 'email', 'status')
                ->findOrFail($user)
        );
    }

    private function getUserTotalDeposit($user, $messId)
    {
        return Deposit::whereUserId($user)->whereMessId($messId)->active()->sum('amount');
    }

    private function getTotalAdditionalCost($month, $messId)
    {
        return AdditionalCost::query()->whereMessId($messId)->whereMonth('created_at', '=', $month->month)->whereYear('created_at', '=', $month->year)->active()->sum('amount');
    }

    private function getTotalUser($messId)
    {
        return User::query()->with('mess', function ($q) use ($messId) {
            $q->where('mess_id', $messId);
        })->active()->count();
    }

    private function getTotalMeal($messId, $month)
    {
        return Meal::whereMessId($messId)->whereMonth('created_at', '=', $month->month)->whereYear('created_at', '=', $month->year)->select(DB::raw("SUM(break_fast + lunch + dinner) as total_meals"))->first();
    }

    private function getTotalBazar($month, $messId)
    {
        return Bazar::query()->active()->whereMessId($messId)->whereMonth('created_at', '=', $month->month)->whereYear('created_at', '=', $month->year)->sum('amount');
    }


    public function update(MealUpdateRequest $request)
    {
        $data = $request->validated();
        $meal = Meal::whereUserId($data['user_id'])->findOrFail($data['id']);
        $meal->break_fast = $data['break_fast'];
        $meal->lunch = $data['lunch'];
        $meal->dinner = $data['dinner'];
        $meal->save();
        return to_route('meals.show', $data['user_id']);
    }
}
