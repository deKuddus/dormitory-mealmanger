<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BazarRequest extends FormRequest
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
            'description' => 'nullable|string',
            'amount' => 'numeric|required',
            'mess_id' => 'required|integer',
            'bazar_schedule_id' => 'required|numeric',
            'status' => 'required'
        ];
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'mess_id' => 1,
            'status' => auth()->user()->isAdmin() ? 1 : 0
        ]);
    }
}
