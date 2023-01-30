<?php

namespace App\Http\Controllers;

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
        return Inertia::render('Room/Create',[
            'users' => User::query()->get(['id', 'first_name'])->toArray(),
        ]);
    }

    public function store(RoomRequest $request)
    {
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
        return Inertia::render('Room/Edit',[
            'room' => $room,
            'users' => User::query()->get(['id', 'first_name'])->toArray(),
        ]);
    }

    public function update(RoomRequest $request, Room $room)
    {
        $room->update(
            $request->validated()
        );

        return to_route('room.index');
    }

    public function destroy(Room $room)
    {
        $room->delete();

        return to_route('room.index');
    }

    public function restore(Room $room)
    {
        $room->restore();
        return redirect()->back();
    }
}
