<?php

namespace App\Http\Controllers;

use App\Helper\Helper;
use App\Http\Requests\RoomRequest;
use App\Http\Resources\RoomCollection;
use App\Models\Room;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RoomController extends Controller
{
    public function index()
    {
        $this->authorize('showRoom',Room::class);

        return Inertia::render('Room/Index', [
            'rooms' => new RoomCollection(
                Room::query()
                    ->orderBy('created_at', 'desc')
                    ->paginate()
                    ->appends(request()->all())
            ),
        ]);
    }

    public function create()
    {
        $this->authorize('createRoom',Room::class);


        return Inertia::render('Room/Create');
    }

    public function store(RoomRequest $request)
    {
        $this->authorize('createRoom',Room::class);

        Room::create(
            $request->validated()
        );

        return to_route('room.index');
    }

    public function show($id)
    {

    }


    public function edit(Room $room)
    {
        $this->authorize('editRoom',Room::class);

        return Inertia::render('Room/Edit',[
            'room' => $room
        ]);
    }

    public function update(RoomRequest $request, Room $room)
    {
        $this->authorize('editRoom',Room::class);

        $room->update(
            $request->validated()
        );

        return to_route('room.index');
    }

    public function destroy(Room $room)
    {
        $this->authorize('deleteRoom',Room::class);

        $room->delete();

        return to_route('room.index');
    }

    public function restore(Room $room)
    {
        $room->restore();
        return redirect()->back();
    }
}
