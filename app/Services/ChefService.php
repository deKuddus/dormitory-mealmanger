<?php

namespace App\Services;

use App\Helper\Helper;
use App\Http\Resources\ChefCollection;
use App\Models\Chef;
use Exception;
use Illuminate\Http\Request;

class ChefService
{
    public function index()
    {
        try {
            return [
                'chefs' => new ChefCollection(
                    Chef::query()
                        ->orderBy('created_at', 'desc')
                        ->paginate()
                        ->appends(request()->all())
                ),
            ];
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }
    }

    public function store(Request $request)
    {
        try {
            return Chef::create(
                $request->validated()
            );
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }

    }

    public function edit(Chef $chef)
    {
        try {
            return [
                ...Helper::messArray(),
                'chef' => $chef,
            ];
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }
    }

    public function update(Chef $chef, Request $request)
    {
        try {
            $chef->update($request->validated());
            return $chef;
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }
    }

    public function delete(Chef $chef)
    {
        try {
            $chef->delete();
            return $chef;
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }
    }

}
