<?php

namespace App\Http\Controllers;

use App\Enums\DepositStatus;
use App\Enums\MealStatus;
use App\Enums\DormitoryIdStatic;
use App\Http\Resources\ClosedCalculationCollection;
use App\Http\Resources\ReportCollection;
use App\Models\AdditionalCost;
use App\Models\Bazar;
use App\Models\Calculation;
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
        $this->authorize('showReport', User::class);


        $dormitoryId = DormitoryIdStatic::DORMITORYID;

        try {
            if ($request->has('month')) {
                $month = Carbon::parse($request->get('month'));
            } else {
                $month = Carbon::parse(now());
            }

            $bazar = $this->totalBazar($dormitoryId, $month);
            $totalMeal = $this->getTotalMeal($dormitoryId, $month);
            $additional = $this->getTotalAdditionalCost($dormitoryId, $month);
            $members = $this->totalMember($dormitoryId);


            return Inertia::render('Report/Index', [
                'users' => $this->getUsersAndDepositWithMeal($dormitoryId, $month),
                'balance' => $this->getTotalDeposit($dormitoryId),
                'additional' => $additional,
                'member' => $members,
                'totalMeal' => $totalMeal,
                'bazar' => $bazar,
                'fixedCost' => $additional <= 0 ? 0 : round($additional / $members, 2),
                'mealCost' => $bazar === 0 ? 0 : round($bazar / $totalMeal, 2),
            ]);
        } catch (\Exception $exception) {
            return redirect()->back()->with('errors', $exception->getMessage());
        }
    }

    public function getUsersAndDepositWithMeal($dormitoryId, $month)
    {
        return new ReportCollection(
            User::query()
                ->with([
                    'dormitory' => fn ($q) => $q->where('dormitory_id', $dormitoryId),
                    'meals' => function ($query) use ($month) {
                        $query->whereMonth('created_at', '=', $month->month)
                            ->whereYear('created_at', '=', $month->year)
                            ->whereStatus(MealStatus::PENDING)
                            ->select(
                                'user_id',
                                DB::raw("SUM(CASE WHEN break_fast = 1 THEN break_fast ELSE 0 END) AS break_fast_total"),
                                DB::raw("SUM(CASE WHEN lunch = 1 THEN lunch ELSE 0 END) AS lunch_total"),
                                DB::raw("SUM(CASE WHEN dinner = 1 THEN dinner ELSE 0 END) AS dinner_total"),
                            )
                            ->groupBy('user_id');
                    },
                    'deposits' => fn ($q) => $q->whereStatus(DepositStatus::APPROVED),
                ])
                ->select('id', 'first_name', 'last_name', 'email', 'status')
                ->get(),
        );
    }

    public function closedCalculation()
    {
        $this->authorize('showClosing', User::class);

        return Inertia::render('Report/Calculation', [
            'calculations' => new ClosedCalculationCollection(
                Calculation::query()
                    ->with('user')
                    ->orderBy('calculate_date', 'desc')
                    ->paginate()
            )
        ]);
    }
}
