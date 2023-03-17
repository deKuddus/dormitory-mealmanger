<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserMealUpdateRequest extends FormRequest
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
            'break_fast' => 'required|numeric',
            'lunch' => 'required|numeric',
            'dinner' => 'required|numeric',
            'id' => 'required|numeric',
            'created_at' => 'required'
        ];
    }
}
