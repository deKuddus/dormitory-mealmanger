<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MessCreateRequest extends FormRequest
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
            'name' => 'required|string',
            'status' => 'required|boolean',
            'address' => 'required|string',
            'user_id' => 'required|integer',
            'is_fixed_meal_rate' => 'required|boolean',
        ];
    }
}
