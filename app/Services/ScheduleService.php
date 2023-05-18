<?php

namespace App\Services;

use App\Helper\Helper;
use App\Http\Resources\BazarScheduleCollection;
use App\Http\Resources\BazarScheduleForBazarResource;
use App\Models\BazarSchedule;
use Exception;
use Illuminate\Http\Request;

class ScheduleService
{

    public function index()
    {
        try {
            return [
                'bazarSchedules' => new BazarScheduleCollection(
                    BazarSchedule::query()
                        ->with('users:id,full_name,display_name')
                        ->orderBy('status', 'asc')
                        ->paginate()
                ),
            ];
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }
    }

    public function store(Request $request)
    {
        try {
            $bazarSchedule = BazarSchedule::create(
                $request->validated()
            );

            $bazarSchedule->users()->sync($request->validated()['users_id']);
            return $bazarSchedule;
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }
    }

    public function edit(BazarSchedule $bazarSchedule)
    {
        try {
            return [
                'bazarSchedule' => $bazarSchedule->load('users:id,display_name'),
                ...Helper::usersArray()
            ];
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }

    }

    public function update(BazarSchedule $bazarSchedule, Request $request)
    {
        try {
            $bazarSchedule->update(
                $request->validated()
            );

            $bazarSchedule->users()->sync($request->validated()['users_id']);
            return $bazarSchedule;
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }
    }

    public function delete(BazarSchedule $bazarSchedule)
    {
        try {
            return $bazarSchedule->delete();
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }

    }

    public function prepareBazarSchedule()
    {
        try {
            return [
                'bazarScheduler' => BazarScheduleForBazarResource::collection(
                    BazarSchedule::query()
                        ->whereStatus(0)
                        ->with('users:id,display_name')
                        ->get()
                )
            ];
        } catch (Exception $exception) {
            throw_if(true,$exception->getMessage());
        }
    }
}
