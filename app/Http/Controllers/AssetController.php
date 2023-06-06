<?php

namespace App\Http\Controllers;

use App\Http\Requests\AssetRequest;
use App\Models\Asset;
use App\Services\AssetService;
use Exception;
use Inertia\Inertia;

class AssetController extends Controller
{
    public function index(AssetService $assetService)
    {
        $this->authorize('showAsset', Asset::class);

        try {
            $assetService->index();
            return Inertia::render('Asset/Index',);
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    public function store(AssetRequest $request, AssetService $assetService)
    {
        $this->authorize('createAsset', Asset::class);

        try {
            $assetService->store($request);

            return to_route('asset.index');
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    public function create()
    {
        $this->authorize('createAsset', Asset::class);

        try {
            return Inertia::render('Asset/Create');
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    public function show($id)
    {
        return back();
    }


    public function edit(Asset $asset)
    {
        $this->authorize('editAsset', Asset::class);

        try {
            return Inertia::render('Asset/Edit', [
                'asset' => $asset
            ]);
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    public function update(AssetRequest $request, Asset $asset, AssetService $assetService)
    {
        $this->authorize('editAsset', Asset::class);

        try {
            $assetService->update($asset, $request);
            return to_route('asset.index');
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }

    }

    public function destroy(Asset $asset, AssetService $assetService)
    {
        $this->authorize('deleteAsset', Asset::class);

        try {
            $assetService->delete($asset);
            return to_route('asset.index');
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }

    }

}
