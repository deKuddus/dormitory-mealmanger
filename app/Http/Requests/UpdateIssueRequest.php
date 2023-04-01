<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateIssueRequest extends FormRequest
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
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'resolved_by' => 'required|integer',
            'assigned_by' => 'required|integer',
            'status' => 'required|integer'
        ];
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'assigned_by' => auth()->id()
        ]);
    }
}
