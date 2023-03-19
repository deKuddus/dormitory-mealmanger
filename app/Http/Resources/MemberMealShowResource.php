<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class MemberMealShowResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'lunch' => $this->lunch,
            'dinner' => $this->dinner,
            'break_fast' => $this->break_fast,
            'created_at' => $this->created_at,
            'is_editable' => $this->canUpdateMeal()
        ];
    }

    private function canUpdateMeal()
    {

        $lunchOffStrToTime = strtotime($this->mess->lunch_close);
        $dinnerOffStrToTime = strtotime($this->mess->dinner_close);

        $lunchOff = Carbon::parse(date('Y-m-d H:i', $lunchOffStrToTime))->format('Y-m-d H:i');
        $dinnerOff = Carbon::parse(date('Y-m-d H:i', $dinnerOffStrToTime))->format('Y-m-d H:i');


        if ($this->isPast($this->created_at)) {
            return false;
        } else if (Carbon::parse($this->created_at)->isToday()) {
            if (now()->gte($lunchOff) && now()->gte($dinnerOff)) {
                return false;
            }
            return true;
        } else {
            return true;
        }
    }

    private function isPast($date)
    {

        return strtotime(Carbon::parse($date)->endOfDay()->format('Y-m-d H:i:s')) < strtotime(now()->format('Y-m-d H:i:s'));

    }
}
