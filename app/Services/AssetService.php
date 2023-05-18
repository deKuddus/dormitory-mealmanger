<?php

namespace App\Services;

use App\Http\Resources\AssetCollection;
use App\Models\Asset;
use Exception;
use Illuminate\Http\Request;

class AssetService
{
    public function index()
    {
        try {
            return [
                'assets' => new AssetCollection(
                    Asset::query()
                        ->orderBy('created_at', 'desc')
                        ->paginate()
                ),
            ];
        } catch (Exception $exception) {
            throw_if(true,$exception->getMessage());
        }
    }

    public function store(Request $request)
    {
        try {
            return Asset::create(
                $request->validated()
            );
        } catch (Exception $exception) {
            throw_if(true,$exception->getMessage());
        }
    }

    public function update(Asset $asset, Request $request)
    {
        try {
            return $asset->update(
                $request->validated()
            );
        } catch (Exception $exception) {
            throw_if(true,$exception->getMessage());
        }
    }

    public function delete(Asset $asset)
    {
        try {
            return $asset->delete();
        } catch (Exception $exception) {
            throw_if(true,$exception->getMessage());
        }
    }
}
