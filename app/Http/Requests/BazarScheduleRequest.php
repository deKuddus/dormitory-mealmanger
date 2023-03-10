<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BazarScheduleRequest extends FormRequest
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
            'mess_id'    => 'required|integer',
            'bazar_date' => 'required|date',
            'status'     => 'required|integer',
            'users_id'    => 'required|array'
        ];
    }

    protected function prepareForValidation()
    {
        $this->merge([
           'mess_id' => 1
        ]);
    }
}
