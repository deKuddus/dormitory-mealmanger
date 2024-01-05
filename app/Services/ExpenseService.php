<?php

    namespace App\Services;

    use App\Enums\DormitoryInfoStatic;
    use App\Models\AdditionalCost;
    use App\Models\Bazar;
    use App\Models\Deposit;
    use Carbon\Carbon;
    use Exception;
    use Illuminate\Http\Request;

    class ExpenseService
    {

        public function index( Request $request )
        {
            try {
                $dormitoryId = DormitoryInfoStatic::DORMITORYID;

                if ( $request->has( 'month' ) ) {
                    $month = Carbon::parse( $request->get( 'month' ) );
                } else {
                    $month = ( new DormitoryInfoStatic() )->getMonth();
                }

                $bazarModel = Bazar::query()->active()->whereDormitoryId( $dormitoryId )->whereMonth( 'created_at' , '=' , $month->month )->whereYear( 'created_at' , '=' , $month->year );
                $additionalCostModel = AdditionalCost::query()->active()->whereDormitoryId( $dormitoryId )->whereMonth( 'created_at' , '=' , $month->month )->whereYear( 'created_at' , '=' , $month->year );

//
                return [
                    'bazar' => $bazarModel->orderBy( 'created_at' , 'desc' )->get() ,
                    'bazarTotal' => $bazarModel->sum( 'amount' ) ,
                    'alltimeBazar' => Bazar::query()->whereDormitoryId( $dormitoryId )->sum( 'amount' ) ,
                    'additionalCost' => $additionalCostModel->get() ,
                    'additionalCostTotal' => $additionalCostModel->sum( 'amount' ) ,
                    'alltimeAdditonalCost' => AdditionalCost::query()->sum( 'amount' ) ,
                    'deposit' => Deposit::query()->active()->sum( 'amount' )
                ];
            } catch ( Exception $exception ) {
                throw_if( true , $exception->getMessage() );
            }
        }

    }
