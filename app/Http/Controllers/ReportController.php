<?php

namespace App\Http\Controllers;

use App\Http\Resources\ReportCollection;
use App\Models\AdditionalCost;
use App\Models\Bazar;
use App\Models\Deposit;
use App\Models\Meal;
use App\Models\User;
use App\Trait\Stats;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class ReportController extends Controller
{
    use Stats;
    public function index(Request $request)
    {

        $this->authorize('showReport',User::class);


        $messId = 1;

        try {

            if ($request->has('month')) {
                $month = Carbon::parse($request->get('month'));
            } else {
                $month = Carbon::parse(now());
            }


            return Inertia::render('Report/Index', [
                'users' => $this->getUsersAndDepositWithMeal($messId, $month),
                'balance' => $this->getTotalDeposit($messId),
                'additional' => $this->getTotalAdditionalCost($messId, $month),
                'member' => $this->totalMember($messId),
                'totalMeal' => $this->getTotalMeal($messId, $month),
                'bazar' => $this->totalBazar($messId, $month),
            ]);
        } catch (\Exception $exception) {
            return redirect()->back()->with('error', $exception->getMessage());
        }
    }

    public function getUsersAndDepositWithMeal($messId, $month)
    {
        return new ReportCollection(
            User::query()
                ->with([
                    'mess' => fn($q) => $q->where('mess_id', $messId),
                    'meals' => function ($query) use ($month) {
                        $query->whereMonth('created_at', '=', $month->month)
                            ->whereYear('created_at', '=', $month->year)
                            ->select(
                                'user_id',
                                DB::raw("SUM(CASE WHEN break_fast = 1 THEN break_fast ELSE 0 END) AS break_fast_total"),
                                DB::raw("SUM(CASE WHEN lunch = 1 THEN lunch ELSE 0 END) AS lunch_total"),
                                DB::raw("SUM(CASE WHEN dinner = 1 THEN dinner ELSE 0 END) AS dinner_total"),
                            )
                            ->groupBy('user_id');
                    },
                    'deposits' => fn($q) => $q->whereStatus(1),
                ])
                ->select('id', 'first_name', 'last_name', 'email', 'status')
                ->get(),
        );
    }
}
