<?php

namespace App\Http\Controllers;

use App\Http\Requests\AssetRequest;
use App\Http\Resources\AssetCollection;
use App\Models\Asset;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AssetController extends Controller
{
    public function index()
    {
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
        return Inertia::render('Asset/Create');
    }

    public function store(AssetRequest $request)
    {
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
        return Inertia::render('Asset/Edit',[
            'asset' => $asset
        ]);
    }

    public function update(AssetRequest $request, Asset $asset)
    {
        $asset->update(
            $request->validated()
        );

        return to_route('asset.index');
    }

    public function destroy(Asset $asset)
    {
        $asset->delete();

        return to_route('asset.index');
    }

    public function restore(Asset $asset)
    {
        $asset->restore();
        return redirect()->back();
    }
}
