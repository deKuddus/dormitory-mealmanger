<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserProfileUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'full_name' => "required|string|max:50",
            'display_name' => "required|string|max:50",
            'email' => "required|string|email|max:50",
            'password' => "nullable|string",
            'phone' => "required|string",
            'present_address' => "required|string",
            'permanent_address' => "required|string",
            'nid' => "required|string",
            'nid_type' => "required|numeric",
            'institution' => "required|string",
            'company' => "required|string",
        ];
    }
}
