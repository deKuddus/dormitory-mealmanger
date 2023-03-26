<?php

namespace App\Http\Requests;

use App\Enums\MessIdStatic;
use Illuminate\Foundation\Http\FormRequest;

class AdditionalCostRequest extends FormRequest
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
            'description' => 'nullable|string|max:255',
            'amount' => 'numeric|required|gt:0',
            'mess_id' => 'required|integer',
            'status' => 'integer|required',
        ];
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'mess_id' => MessIdStatic::MESSID,
            'status' => (int)$this->status
        ]);
    }
}
