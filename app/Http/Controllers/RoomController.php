<?php

namespace App\Http\Controllers;

use App\Http\Requests\RoomRequest;
use App\Models\Room;
use App\Services\RoomService;
use Exception;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class RoomController extends Controller
{
    public function index(RoomService $roomService): Response|RedirectResponse
    {
        $this->authorize('showRoom', Room::class);

        try {
            return Inertia::render('Room/Index', [
                'rooms' => $roomService->list()
            ]);
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    public function store(RoomRequest $request, RoomService $roomService): RedirectResponse
    {
        $this->authorize('createRoom', Room::class);

        try {
            $roomService->store($request);
            return to_route('room.index');
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }

    }

    public function create(): Response|RedirectResponse
    {
        $this->authorize('createRoom', Room::class);
        try {
            return Inertia::render('Room/Create');
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


    public function edit(Room $room): Response|RedirectResponse
    {
        $this->authorize('editRoom', Room::class);

        try {
            return Inertia::render('Room/Edit', [
                'room' => $room
            ]);
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    public function update(RoomRequest $request, Room $room, RoomService $roomService): Response|RedirectResponse
    {
        $this->authorize('editRoom', Room::class);

        try {
            $roomService->update($room, $request);
            return to_route('room.index');
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    public function destroy(Room $room, RoomService $roomService): RedirectResponse
    {
        $this->authorize('deleteRoom', Room::class);

        try {
            $roomService->delete($room);
            return to_route('room.index');
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }

    }
}
