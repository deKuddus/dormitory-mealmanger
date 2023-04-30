<?php

namespace App\Http\Controllers;

use App\Helper\Helper;
use App\Http\Requests\BazarScheduleRequest;
use App\Http\Resources\BazarScheduleCollection;
use App\Models\BazarSchedule;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BazarScheduleController extends Controller
{
    public function index()
    {
        $requestParam = \request()->all('search', 'trashed');
        return Inertia::render('BazarSchedule/Index', [
            'filters' => $requestParam,
            'bazarSchedules' => new BazarScheduleCollection(
                BazarSchedule::query()
                    ->with('users:id,full_name,display_name')
                    ->orderBy('status','asc')
                    ->paginate()
            ),
        ]);
    }

    public function create()
    {
        return Inertia::render('BazarSchedule/Create',[
            ...Helper::usersArray()
        ]);
    }

    public function store(BazarScheduleRequest $request)
    {
        $bazarSchedule = BazarSchedule::create(
            $request->validated()
        );

        $bazarSchedule->users()->sync($request->validated()['users_id']);

        return to_route('bazar-schedule.index');
    }

    public function show($id)
    {

    }


    public function edit(BazarSchedule $bazarSchedule)
    {
        return Inertia::render('BazarSchedule/Edit',[
            'bazarSchedule' => $bazarSchedule->load('users:id,full_name'),
            ...Helper::usersArray()
        ]);
    }

    public function update(BazarScheduleRequest $request, BazarSchedule $bazarSchedule)
    {
        $bazarSchedule->update(
            $request->validated()
        );

        $bazarSchedule->users()->sync($request->validated()['users_id']);

        return to_route('bazar-schedule.index');
    }

    public function destroy(BazarSchedule $bazarSchedule)
    {
        $bazarSchedule->delete();

        return to_route('bazar-schedule.index');
    }

    public function restore(BazarSchedule $bazarSchedule)
    {
        $bazarSchedule->restore();
        return redirect()->back();
    }
}
