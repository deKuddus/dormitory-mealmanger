<?php

namespace App\Services;

use App\Enums\NoticeStatus;
use App\Events\SendNoticeNotificationEvent;
use App\Http\Resources\NoticeCollection;
use App\Models\Notice;
use Exception;
use Illuminate\Http\Request;

class NoticeService
{

    public function lists(): NoticeCollection
    {
        try {
            return new NoticeCollection(
                Notice::query()
                    ->orderBy('created_at', 'desc')
                    ->paginate()
            );
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }
    }

    public function store(Request $request): Notice
    {
        try {
            $notice = Notice::create(
                $request->validated()
            );

            if ((int)$notice->status === NoticeStatus::ACTIVE) {
                event(new SendNoticeNotificationEvent($notice));
            }
            return $notice;
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }
    }

    public function show(Notice $notice, Request $request)
    {
        try {
            if ($request->has('nid') && !blank($request->get('nid'))) {
                auth()->user()->unreadNotifications->where('id', $request->get('nid'))->markAsRead();
            }
            return $notice;
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }
    }

    public function update(Notice $notice, Request $request): Notice
    {
        try {
            $notice->update(
                $request->validated()
            );
            return $notice;
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }
    }

    public function delete(Notice $notice)
    {
        try {
            $notice->delete();
            return $notice;
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }
    }
}
