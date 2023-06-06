<?php

namespace App\Http\Controllers;

use App\Enums\DormitoryInfoStatic;
use App\Enums\MealStatus;
use App\Http\Resources\MealCollection;
use App\Models\Meal;
use App\Models\Seat;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class CalendarController extends Controller
{
    public function showCalender($dormitoryId = null)
    {
        return Inertia::render('Calender/Index', [
            'messId' => $dormitoryId
        ]);
    }

    public function getMeals(Request $request, $dormitoryId)
    {
        $request->validate([
            'month' => 'nullable|date'
        ]);
        if ($request->get('month')) {
            $month = Carbon::parse($request->get('month'));
        } else {
            $month = (new DormitoryInfoStatic())->getMonth();
        }
        return new MealCollection(
            Meal::query()
                ->where('status', MealStatus::PENDING)
                ->whereDormitoryId($dormitoryId)
                ->whereMonth('created_at', '=', $month->month)
                ->whereYear('created_at', '=', $month->year)
                ->select(
                    DB::raw("SUM(CASE WHEN break_fast = 1 THEN break_fast ELSE 0 END) AS break_fast_total"),
                    DB::raw("SUM(CASE WHEN lunch = 1 THEN lunch ELSE 0 END) AS lunch_total"),
                    DB::raw("SUM(CASE WHEN dinner = 1 THEN dinner ELSE 0 END) AS dinner_total"),
                    'created_at',
                )
                ->groupBy('created_at')
                ->get()
        );
    }

    public function getSeatByRoom($roomId)
    {
        return Seat::query()->whereRoomId($roomId)->where('booking_status', 0)->get()->toArray();
    }
}
