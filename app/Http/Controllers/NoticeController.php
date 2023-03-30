<?php

namespace App\Http\Controllers;

use App\Helper\Helper;
use App\Http\Requests\NoticeCreateRequest;
use App\Http\Resources\NoticeCollection;
use App\Models\Dormitory;
use App\Models\Notice;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NoticeController extends Controller
{
    public function index()
    {
        $this->authorize('showNotice', Notice::class);

        return Inertia::render('Notice/Index', [
            'notices' => new NoticeCollection(
                Notice::query()
                    ->orderBy('created_at', 'desc')
                    ->paginate()
                    ->appends(request()->all())
            ),
        ]);
    }

    public function create()
    {
        $this->authorize('createNotice', Notice::class);

        return Inertia::render('Notice/Create');
    }

    public function store(NoticeCreateRequest $request)
    {
        $this->authorize('showNotice', Notice::class);


        Notice::create(
            $request->validated()
        );

        return to_route('notice.index');
    }

    public function show(Notice $notice)
    {
        return Inertia::render('Notice/Show', [
            'notice' => $notice
        ]);
    }


    public function edit(Notice $notice)
    {
        $this->authorize('editNotice', Notice::class);

        return Inertia::render('Notice/Edit', [
            'notice' => $notice,
        ]);
    }

    public function update(NoticeCreateRequest $request, Notice $notice)
    {
        $this->authorize('editNotice', Notice::class);

        $notice->update(
            $request->validated()
        );

        return to_route('notice.index');
    }

    public function destroy(Notice $notice)
    {
        $this->authorize('deleteNotice', Notice::class);

        $notice->delete();

        return to_route('notice.index');
    }

    public function restore(Notice $notice)
    {
        $notice->restore();
        return redirect()->back();
    }
}
