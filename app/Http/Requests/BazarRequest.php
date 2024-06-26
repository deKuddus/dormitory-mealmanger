<?php

namespace App\Http\Requests;

use App\Enums\DormitoryInfoStatic;
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
            'dormitory_id' => 'required|integer',
            'bazar_schedule_id' => 'required|numeric',
            'status' => 'required',
            'created_at' => 'required|date'
        ];
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'dormitory_id' => DormitoryInfoStatic::DORMITORYID,
            'status' => auth()->user()->isAdmin() ? 1 : 0,
            'created_at' => $this->input('bazar_date'),
        ]);
    }
}
