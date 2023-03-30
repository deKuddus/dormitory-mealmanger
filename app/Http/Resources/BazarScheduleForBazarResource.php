<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BazarScheduleForBazarResource extends JsonResource
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
            'pair' => $this->getFormatedUserPair()
        ];
    }

    private function getFormatedUserPair()
    {
        $name = '';
        if($this->users->count()){
            $name = implode('&',$this->users->pluck('first_name')->all());
        }

        return $name ?? 'N/A';
    }
}
