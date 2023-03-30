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
        $this->authorize('showSeat',Seat::class);

        return Inertia::render('Seat/Index', [
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
        $this->authorize('createSeat',Seat::class);

        return Inertia::render('Seat/Create',[
            ...$this->getRoom()
        ]);
    }

    public function store(SeatRequest $request)
    {
        $this->authorize('createSeat',Seat::class);

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
        $this->authorize('editSeat',Seat::class);

        return Inertia::render('Seat/Edit', [
            'seat' => $seat,
            ...$this->getRoom()
        ]);
    }

    public function update(SeatRequest $request, Seat $seat)
    {
        $this->authorize('editSeat',Seat::class);

        $seat->update(
            $request->validated()
        );

        return to_route('seat.index');
    }

    public function destroy(Seat $seat)
    {
        $this->authorize('deleteSeat',Seat::class);

        $seat->delete();

        return to_route('seat.index');
    }

    public function restore(Seat $seat)
    {
        $seat->restore();
        return redirect()->back();
    }

    private function getRoom(){
        return [
            'rooms' => Room::get(['id', 'name'])->toArray(),
        ];
    }
}
