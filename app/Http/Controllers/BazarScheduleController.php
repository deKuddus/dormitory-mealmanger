<?php

namespace App\Http\Controllers;

use App\Helper\Helper;
use App\Http\Requests\BazarScheduleRequest;
use App\Models\BazarSchedule;
use App\Services\ScheduleService;
use App\Services\UserService;
use Exception;
use Inertia\Inertia;

class BazarScheduleController extends Controller
{
    public function index(ScheduleService $scheduleService)
    {
        try {
            return Inertia::render('BazarSchedule/Index', $scheduleService->index());
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    public function create(UserService $userService)
    {
        try {
            return Inertia::render('BazarSchedule/Create', [
               'users' => $userService->getUserAndDormitoryBasic()
            ]);
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    public function store(BazarScheduleRequest $request, ScheduleService $scheduleService)
    {
        try {
            $scheduleService->store($request);
            return to_route('bazar-schedule.index');
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    public function show($id)
    {
        return back();
    }


    public function edit(BazarSchedule $bazarSchedule, ScheduleService $scheduleService)
    {
        try {
            return Inertia::render('BazarSchedule/Edit', $scheduleService->edit($bazarSchedule));
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    public function update(BazarScheduleRequest $request, BazarSchedule $bazarSchedule, ScheduleService $scheduleService)
    {
        try {
            $scheduleService->update($bazarSchedule, $request);
            return to_route('bazar-schedule.index');
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }


    }

    public function destroy(BazarSchedule $bazarSchedule, ScheduleService $scheduleService)
    {
        try {
            $scheduleService->delete($bazarSchedule);
            return to_route('bazar-schedule.index');
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }

    }
}
