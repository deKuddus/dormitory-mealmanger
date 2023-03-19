<?php

namespace App\Http\Controllers;

use App\Http\Requests\AssetRequest;
use App\Http\Resources\AssetCollection;
use App\Models\Asset;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AssetController extends Controller
{
    public function index()
    {
        $this->authorize('showAsset',User::class);

        $requestParam = \request()->all('search', 'trashed');
        return Inertia::render('Asset/Index', [
            'filters' => $requestParam,
            'assets' => new AssetCollection(
                Asset::query()
                    ->orderBy('created_at', 'desc')
                    ->paginate()
                    ->appends(request()->all())
            ),
        ]);
    }

    public function create()
    {
        $this->authorize('createAsset',User::class);

        return Inertia::render('Asset/Create');
    }

    public function store(AssetRequest $request)
    {
        $this->authorize('createAsset',User::class);

        Asset::create(
            $request->validated()
        );

        return to_route('asset.index');
    }

    public function show($id)
    {

    }


    public function edit(Asset $asset)
    {
        $this->authorize('editAsset',User::class);

        return Inertia::render('Asset/Edit',[
            'asset' => $asset
        ]);
    }

    public function update(AssetRequest $request, Asset $asset)
    {
        $this->authorize('editAsset',User::class);

        $asset->update(
            $request->validated()
        );

        return to_route('asset.index');
    }

    public function destroy(Asset $asset)
    {
        $this->authorize('deleteAsset',User::class);

        $asset->delete();

        return to_route('asset.index');
    }

    public function restore(Asset $asset)
    {
        $asset->restore();
        return redirect()->back();
    }
}
