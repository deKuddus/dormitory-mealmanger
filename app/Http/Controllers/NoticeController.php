<?php

namespace App\Http\Controllers;

use App\Enums\NoticeStatus;
use App\Events\SendNoticeNotificationEvent;
use App\Http\Requests\NoticeCreateRequest;
use App\Http\Resources\NoticeCollection;
use App\Models\Notice;
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

    public function store(NoticeCreateRequest $request)
    {
        $this->authorize('showNotice', Notice::class);


        $notice = Notice::create(
            $request->validated()
        );

        if ($notice->status == NoticeStatus::ACTIVE) {
            event(new SendNoticeNotificationEvent($notice));
        }


        return to_route('notice.index');
    }

    public function create()
    {
        $this->authorize('createNotice', Notice::class);

        return Inertia::render('Notice/Create');
    }

    public function show(Notice $notice,Request $request)
    {
        if($request->has('nid') && !blank($request->get('nid'))){
            auth()->user()->unreadNotifications->where('id', $request->get('nid'))->markAsRead();
        }
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
