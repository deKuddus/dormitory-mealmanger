<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;

class NewNoticeCreateNotification extends Notification
{
    use Queueable;

    public $notice;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($notice)
    {
        $this->notice = $notice;
    }

    public function via($notifiable)
    {
        return ['database'];
    }

    public function toArray($notifiable)
    {
        return [
            'title' => $this->notice->title,
            'type' => 'notice',
            'id' => $this->notice->id,
        ];
    }
}
