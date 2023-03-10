<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MealUpdateRequest extends FormRequest
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
            'id' => 'required',
            'user_id' => 'required',
            'break_fast' => 'nullable|numeric',
            'lunch' => 'required|numeric',
            'dinner' => 'required|numeric',
        ];
    }
}
