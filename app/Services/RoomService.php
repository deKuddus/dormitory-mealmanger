<?php

namespace App\Services;

use App\Enums\DormitoryIdStatic;
use App\Http\Resources\RoomCollection;
use App\Models\Room;
use Exception;
use Illuminate\Http\Request;

class RoomService
{

    public function list(): RoomCollection
    {
        try {
            return new RoomCollection(
                Room::query()
                    ->orderBy('created_at', 'desc')
                    ->paginate()
                    ->appends(request()->all())
            );
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }
    }

    public function store(Request $request): Room
    {
        try {
            return Room::create(
                $request->validated()
            );
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }
    }

    public function update(Room $room, Request $request): Room
    {
        try {
            $room->update(
                $request->validated()
            );
            return $room;
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }
    }

    public function delete(Room $room): Room
    {
        try {
            $room->delete();
            return $room;
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }
    }

    public function getRoomBasic()
    {
        try {
            return Room::query()->where('dormitory_id', DormitoryIdStatic::DORMITORYID)->get(['id', 'name'])->toArray();
        }catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }
    }

}
