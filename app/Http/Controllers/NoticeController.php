<?php

namespace App\Http\Controllers;

use App\Helper\Helper;
use App\Http\Requests\NoticeCreateRequest;
use App\Http\Resources\NoticeCollection;
use App\Models\Mess;
use App\Models\Notice;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NoticeController extends Controller
{

    public function index()
    {
        $this->authorize('showNotice',User::class);

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
        $this->authorize('createNotice',User::class);

        return Inertia::render('Notice/Create', [
            ...Helper::messArray(),
        ]);
    }

    public function store(NoticeCreateRequest $request)
    {
        $this->authorize('showNotice',User::class);


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
        $this->authorize('editNotice',User::class);

        return Inertia::render('Notice/Edit', [
            ...Helper::messArray(),
            'notice' => $notice,
        ]);
    }

    public function update(NoticeCreateRequest $request, Notice $notice)
    {
        $this->authorize('editNotice',User::class);

        $notice->update(
            $request->validated()
        );

        return to_route('notice.index');
    }

    public function destroy(Notice $notice)
    {
        $this->authorize('deleteNotice',User::class);

        $notice->delete();

        return to_route('notice.index');
    }

    public function restore(Notice $notice)
    {
        $notice->restore();
        return redirect()->back();
    }
}
