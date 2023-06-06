<?php

namespace App\Http\Controllers\Member;

use App\Http\Controllers\Controller;
use App\Http\Requests\BazarRequest;
use App\Services\BazarService;
use App\Services\ScheduleService;
use Exception;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class BazarController extends Controller
{
    public function index(\App\Services\BazarService $bazarService): Response
    {
        return Inertia::render('Member/Bazar/Index', [
            'bazars' => $bazarService->list(),
        ]);
    }

    public function create(ScheduleService $scheduleService): Response|RedirectResponse
    {
        try {
            return Inertia::render('Member/Bazar/Create', [
                'schedules' => $scheduleService->prepareBazarSchedule()
            ]);
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    public function store(BazarRequest $request, BazarService $bazarService): RedirectResponse
    {
        try {
            $bazarService->store($request);
            return to_route('user.bazar.index');
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }
}
