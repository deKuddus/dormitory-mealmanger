<?php

namespace App\Http\Controllers;

use App\Http\Requests\NoticeCreateRequest;
use App\Http\Resources\NoticeCollection;
use App\Models\Mess;
use App\Models\Notice;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NoticeController extends Controller
{

    public function index()
    {
        $requestParam = \request()->all('search', 'trashed');
        return Inertia::render('Notice/Index', [
            'filters' => $requestParam,
            'notices' => new NoticeCollection(
                Notice::query()
                    ->orderBy('created_at', 'desc')
                    ->filter($requestParam)
                    ->paginate()
                    ->appends(request()->all())
            ),
        ]);
    }

    public function create()
    {
        return Inertia::render('Notice/Create', [
            'messes' => Mess::get(['id', 'name'])->toArray(),
        ]);
    }

    public function store(NoticeCreateRequest $request)
    {
        Notice::create(
            $request->validated()
        );

        return to_route('notice.index');
    }

    public function show($id)
    {

    }


    public function edit(Notice $notice)
    {
        return Inertia::render('Notice/Create', [
            'messes' => Mess::get(['id', 'name'])->toArray(),
            'notice' => $notice,
        ]);
    }

    public function update(NoticeCreateRequest $request, Notice $notice)
    {
        $notice->update(
            $request->validated()
        );

        return to_route('notice.index');
    }

    public function destroy(Notice $notice)
    {
        $notice->delete();

        return to_route('notice.index');
    }

    public function restore(Notice $notice)
    {
        $notice->restore();
        return redirect()->back();
    }
}
