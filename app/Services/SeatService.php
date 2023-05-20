<?php

namespace App\Services;

use App\Http\Resources\SeatCollection;
use App\Models\Seat;
use Exception;
use Illuminate\Http\Request;

class SeatService
{
    public function list(): SeatCollection
    {
        try {
            return new SeatCollection(
                Seat::query()
                    ->orderBy('created_at', 'desc')
                    ->paginate()
            );
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }
    }

    public function store(Request $request): Seat
    {
        try {
            return Seat::create(
                $request->validated()
            );
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }
    }

    public function update(Seat $seat, Request $request): Seat
    {
        try {
            $seat->update(
                $request->validated()
            );
            return $seat;
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }
    }

    public function delete(Seat $seat): Seat
    {
        try {
            $seat->delete();
            return $seat;
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }
    }

}
