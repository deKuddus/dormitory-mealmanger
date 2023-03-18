<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserDepositCreateRequest extends FormRequest
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
            'amount' => 'required|numeric|min:1',
            'user_id' => 'required',
            'status' => 'required',
            'mess_id' => 'required',
            'deposit_date' => 'required|date'
        ];
    }

    protected function prepareForValidation()
    {
        $messId = 1;
        $this->merge([
            'user_id' => auth()->id(),
            'status' => 0,
            'mess_id' => $messId,
            'deposit_date' => now()->format('Y-m-d 09:00:00')
        ]);
    }
}