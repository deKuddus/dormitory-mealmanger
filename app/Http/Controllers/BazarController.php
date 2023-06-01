<?php

namespace App\Http\Controllers;

use App\Http\Requests\BazarRequest;
use App\Models\Bazar;
use App\Services\BazarService;
use App\Services\ScheduleService;
use Exception;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BazarController extends Controller
{
    public function index(BazarService $bazarService)
    {
        try {
            return Inertia::render('Bazar/Index', [
                'bazars' => $bazarService->list()
            ]);
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    public function create(ScheduleService $scheduleService)
    {
        try {
            return Inertia::render('Bazar/Create', $scheduleService->prepareBazarSchedule());
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    public function store(BazarRequest $request, BazarService $bazarService)
    {
        try {
            $bazarService->store($request);
            return to_route('bazar.index');
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    public function show($id)
    {
        return back(301);

    }


    public function edit(Bazar $bazar, ScheduleService $scheduleService)
    {
        try {
            return Inertia::render('Bazar/Edit', [
                'bazar' => $bazar,
                $scheduleService->prepareBazarSchedule()
            ]);
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    public function update(BazarRequest $request, Bazar $bazar, BazarService $bazarService)
    {

        try {
            $bazarService->update($bazar, $request);
            return to_route('bazar.index');
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    public function destroy(Bazar $bazar, BazarService $bazarService)
    {
        try {
            $bazarService->delete($bazar);
            return to_route('bazar.index');
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }


    public function approveBazar(Request $request, BazarService $bazarService)
    {
        try {
            $bazarService->approveBazar($request);
            return back()->with('success', 'Bazar approved and deposit decreases');
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }
}
