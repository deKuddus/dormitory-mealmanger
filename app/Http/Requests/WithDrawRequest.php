<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class WithDrawRequest extends FormRequest
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
            'user_id' => 'required|integer',
            'deposit_date' => 'required',
            'status' => 'required',
            'amount' => 'required|numeric|min:1',
            'dormitory_id' => 'required|integer',
            'description' => 'nullable|string|max:255'
        ];
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'dormitory_id' => 1
        ]);
    }

    public function messages()
    {
        return [
            'amount.min' => 'Withdraw amount can not be zero'
        ];
    }
}
