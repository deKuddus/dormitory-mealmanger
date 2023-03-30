<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DormitoryCreateRequest extends FormRequest
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
            'status' => 'required|integer',
            'address' => 'required|string',
            'user_id' => 'required|integer',
            'is_fixed_meal_rate' => 'required|boolean',
            'break_fast_close' => 'nullable|string',
            'lunch_close' => 'nullable|string',
            'dinner_close' => 'nullable|string',
            'is_automeal' => 'nullable|integer',
            'has_breakfast' => 'nullable|integer',
            'has_lunch' => 'nullable|integer',
            'has_dinner' => 'nullable|integer'
        ];
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'user_id' => 1
        ]);
    }
}
