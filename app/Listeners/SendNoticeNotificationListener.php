<?php

namespace App\Listeners;

use App\Enums\DormitoryInfoStatic;
use App\Models\User;
use App\Notifications\NewNoticeCreateNotification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Notification;

class SendNoticeNotificationListener
{


    public function handle($event)
    {
        $dormitoryID = DormitoryInfoStatic::DORMITORYID;

        $users = User::whereHas('dormitory', function ($query) use($dormitoryID){
            $query->where('id', $dormitoryID);
        })->get();

        Notification::send($users, new NewNoticeCreateNotification($event->notice));
    }
}
