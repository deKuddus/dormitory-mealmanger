<?php

namespace App\Http\Controllers;

use App\Http\Resources\MealCollection;
use App\Models\Meal;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class CalendarController extends Controller
{
    public function showCalender($messId = null)
    {
        return Inertia::render('Calender/Index', [
            'meals' => new MealCollection(
                Meal::query()
                    ->where('status', 1)
                    ->whereMessId($messId)
                    ->select(
                        DB::raw("SUM(CASE WHEN break_fast = 1 THEN break_fast ELSE 0 END) AS break_fast_total"),
                        DB::raw("SUM(CASE WHEN lunch = 1 THEN lunch ELSE 0 END) AS lunch_total"),
                        DB::raw("SUM(CASE WHEN dinner = 1 THEN dinner ELSE 0 END) AS dinner_total"),
                        'created_at',
                    )
                    ->groupBy('created_at')
                    ->get()
            )]);
    }
}
