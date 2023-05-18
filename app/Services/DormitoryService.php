<?php

namespace App\Services;

use App\Http\Resources\DormitoryCollection;
use App\Models\Dormitory;
use Exception;
use Illuminate\Http\Request;

class DormitoryService
{
    public function index()
    {
        try {
            return [
                'dormitories' => new DormitoryCollection(
                    Dormitory::query()
                        ->orderBy('created_at', 'desc')
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
            return Dormitory::create(
                $request->validated()
            );
        } catch (Exception $exception) {
            throw_if(true,$exception->getMessage());
        }
    }

    public function update(Dormitory $dormitory, Request $request)
    {
        try {
            $dormitory->update(
                $request->validated()
            );
            return $dormitory;
        } catch (Exception $exception) {
            throw_if(true,$exception->getMessage());
        }
    }

    public function delete(Dormitory $dormitory)
    {
        try {
            $dormitory->delete();
            return $dormitory;
        } catch (Exception $exception) {
            throw_if(true,$exception->getMessage());
        }
    }

}
