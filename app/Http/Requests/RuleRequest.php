<?php

namespace App\Http\Requests;

use App\Enums\DormitoryInfoStatic;
use Illuminate\Foundation\Http\FormRequest;

class RuleRequest extends FormRequest
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
            'dormitory_id' => 'required',
            'title' => 'required|string',
            'status' => 'required|boolean',
            'description' => 'required|string'
        ];
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'dormitory_id' => DormitoryInfoStatic::DORMITORYID
        ]);
    }
}
