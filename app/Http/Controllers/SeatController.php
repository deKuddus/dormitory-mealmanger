<?php

namespace App\Http\Controllers;

use App\Http\Requests\SeatRequest;
use App\Http\Resources\SeatCollection;
use App\Models\Room;
use App\Models\Seat;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SeatController extends Controller
{
    public function index()
    {
        $this->authorize('showSeat',User::class);

        $requestParam = \request()->all('search', 'trashed');
        return Inertia::render('Seat/Index', [
            'filters' => $requestParam,
            'seats' => new SeatCollection(
                Seat::query()
                    ->orderBy('created_at', 'desc')
                    ->paginate()
                    ->appends(request()->all())
            ),
        ]);
    }

    public function create()
    {
        $this->authorize('createSeat',User::class);

        return Inertia::render('Seat/Create',[
            ...$this->getRoomAndUser()
        ]);
    }

    public function store(SeatRequest $request)
    {
        $this->authorize('createSeat',User::class);

        Seat::create(
            $request->validated()
        );

        return to_route('seat.index');
    }

    public function show($id)
    {

    }


    public function edit(Seat $seat)
    {
        $this->authorize('editSeat',User::class);

        return Inertia::render('Seat/Edit', [
            'seat' => $seat,
            ...$this->getRoomAndUser()
        ]);
    }

    public function update(SeatRequest $request, Seat $seat)
    {
        $this->authorize('editSeat',User::class);

        $seat->update(
            $request->validated()
        );

        return to_route('seat.index');
    }

    public function destroy(Seat $seat)
    {
        $this->authorize('deleteSeat',User::class);

        $seat->delete();

        return to_route('seat.index');
    }

    public function restore(Seat $seat)
    {
        $seat->restore();
        return redirect()->back();
    }

    private function getRoomAndUser(){
        return [
            'rooms' => Room::get(['id', 'name'])->toArray(),
            'users' => User::get(['id', 'first_name'])->toArray(),
        ];
    }
}
