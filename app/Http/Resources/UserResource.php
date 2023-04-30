<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'full_name' => $this->full_name,
            'display_name' => $this->display_name,
            'name' => $this->name,
            'email' => $this->email,
            'phone' => $this->phone,
            'present_address' => $this->present_address,
            'permanent_address' => $this->permanent_address,
            'nid' => $this->nid,
            'nid_type' => $this->nid_type,
            'institution' => $this->institution,
            'company' => $this->company,
            'status' => $this->status,
            'roles' => $this->roles,
            'meal_status' => $this->meal_status,
            'is_admin' => $this->is_admin,
            'note' => $this->note,
            'room_id' => $this->room_id,
            'seat_id' => $this->seat_id,
        ];
    }
}
