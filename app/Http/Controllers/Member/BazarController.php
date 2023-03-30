<?php

namespace App\Http\Controllers\Member;

use App\Http\Controllers\Controller;
use App\Http\Requests\BazarRequest;
use App\Http\Resources\BazarCollection;
use App\Http\Resources\BazarScheduleForBazarResource;
use App\Models\Bazar;
use App\Models\BazarSchedule;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BazarController extends Controller
{
    public function index()
    {
        return Inertia::render('Member/Bazar/Index', [
            'bazars' => new BazarCollection(
                Bazar::query()
                    ->with('bazarSchedule', function ($q) {
                        $q->select('id')->with('users:id,first_name,last_name');
                    })
                    ->orderBy('created_at', 'desc')
                    ->paginate()
            ),
        ]);
    }

    public function create()
    {
//        dd( BazarScheduleForBazarResource::collection(BazarSchedule::query()->with('users:id,first_name,last_name')->get('id')));
        return Inertia::render('Member/Bazar/Create', [
            'schedules' => BazarScheduleForBazarResource::collection(BazarSchedule::query()->with('users:id,first_name,last_name')->get('id'))
        ]);
    }

    public function store(BazarRequest $request)
    {
        $bazar = Bazar::create(
            $request->validated()
        );

        $bazar->dormitory()->decrement('deposit', $bazar->amount);

        return to_route('user.bazar.index');
    }
}
