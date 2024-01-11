<?php

    namespace App\Http\Controllers;

    use App\Enums\DepositStatus;
    use App\Enums\MealStatus;
    use App\Enums\DormitoryInfoStatic;
    use App\Http\Resources\ClosedCalculationCollection;
    use App\Http\Resources\ReportCollection;
    use App\Models\AdditionalCost;
    use App\Models\Bazar;
    use App\Models\Calculation;
    use App\Models\Deposit;
    use App\Models\Meal;
    use App\Models\User;
    use App\Services\ReportService;
    use App\Trait\Stats;
    use Carbon\Carbon;
    use Exception;
    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\DB;
    use Inertia\Inertia;

    class ReportController extends Controller
    {
        use Stats;

        public function index( Request $request , ReportService $reportService )
        {
            $this->authorize( 'showReport' , User::class );

            try {
                $reportService->getReport( $request );

                return Inertia::render( 'Report/Index' , $reportService->getReport( $request ) );
            } catch ( Exception $exception ) {
                return redirect()->back()->with( 'errors' , $exception->getMessage() );
            }
        }


        public function closedCalculation()
        {
            $this->authorize( 'showClosing' , User::class );

            return Inertia::render( 'Report/Calculation' , [
                'calculations' => new ClosedCalculationCollection(
                    Calculation::query()
                        ->with(
                            'user' ,
                            fn ( $q ) => $q->withTrashed()
                         )
                        ->orderBy( 'calculate_date' , 'desc' )
                        ->paginate()
                )
            ] );
        }
    }
