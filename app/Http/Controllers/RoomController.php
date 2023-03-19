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
        $this->authorize('showRoom',User::class);

        $requestParam = \request()->all('search', 'trashed');
        return Inertia::render('Room/Index', [
            'filters' => $requestParam,
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
        $this->authorize('createRoom',User::class);


        return Inertia::render('Room/Create',[
            ...Helper::usersArray()
        ]);
    }

    public function store(RoomRequest $request)
    {
        $this->authorize('createRoom',User::class);

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
        $this->authorize('editRoom',User::class);

        return Inertia::render('Room/Edit',[
            'room' => $room,
            ...Helper::usersArray()
        ]);
    }

    public function update(RoomRequest $request, Room $room)
    {
        $this->authorize('editRoom',User::class);

        $room->update(
            $request->validated()
        );

        return to_route('room.index');
    }

    public function destroy(Room $room)
    {
        $this->authorize('deleteRoom',User::class);

        $room->delete();

        return to_route('room.index');
    }

    public function restore(Room $room)
    {
        $room->restore();
        return redirect()->back();
    }
}
