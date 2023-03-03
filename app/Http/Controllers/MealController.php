<?php

namespace App\Http\Controllers;

use App\Models\Deposit;
use App\Models\Meal;
use App\Models\Mess;
use App\Models\User;
use Inertia\Inertia;

class MealController extends Controller
{
    public function index()
    {
        $messId = 1;

        return Inertia::render('Meal/Index', [
            'users' => User::query()->with('mess', function ($q) use ($messId) {
                $q->where('mess_id', $messId);
            })->select('id', 'first_name', 'last_name', 'email', 'status')->withCount('meals')->orderBy('created_at','desc')->get()
        ]);

    }

    public function show($user)
    {
        return Inertia::render('Meal/Show', [
            'user' => User::with('meals')->withCount('meals')->select('id', 'first_name', 'last_name', 'email', 'status')->findOrFail($user),
            'balance' => Deposit::whereUserId($user)->active()->sum('amount'),
        ]);
    }
}
