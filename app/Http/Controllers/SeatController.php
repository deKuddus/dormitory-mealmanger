<?php

namespace App\Http\Controllers;

use App\Http\Requests\SeatRequest;
use App\Models\Seat;
use App\Services\RoomService;
use App\Services\SeatService;
use Exception;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class SeatController extends Controller
{
    public function index(SeatService $seatService): Response|RedirectResponse
    {
        $this->authorize('showSeat', Seat::class);

        try {
            return Inertia::render('Seat/Index', [
                'seats' => $seatService->list()
            ]);
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    public function store(SeatRequest $request, SeatService $seatService): RedirectResponse
    {
        $this->authorize('createSeat', Seat::class);
        try {
            $seatService->store($request);
            return to_route('seat.index');
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }

    }

    public function create(RoomService $roomService): Response|RedirectResponse
    {
        $this->authorize('createSeat', Seat::class);

        try {
            return Inertia::render('Seat/Create', [
                'rooms' => $roomService->getRoomBasic()
            ]);
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }


    public function show($id): RedirectResponse
    {
        try {
            return back();
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }

    }

    public function edit(Seat $seat, RoomService $roomService): Response|RedirectResponse
    {
        $this->authorize('editSeat', Seat::class);

        try {
            return Inertia::render('Seat/Edit', [
                'seat' => $seat,
                'rooms' => $roomService->getRoomBasic()
            ]);
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    public function update(SeatRequest $request, Seat $seat, SeatService $seatService): RedirectResponse
    {
        $this->authorize('editSeat', Seat::class);

        try {
            $seatService->update($seat, $request);
            return to_route('seat.index');
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    public function destroy(Seat $seat, SeatService $seatService): RedirectResponse
    {
        $this->authorize('deleteSeat', Seat::class);

        try {
            $seatService->delete($seat);
            return to_route('seat.index');
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }
}
