<?php

namespace App\Http\Requests;

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
            'mess_id'        => 'required|exists:messes,id',
            'title'          => 'required|string',
            'status'         => 'required|boolean',
            'published_date' => 'required|date',
        ];
    }
}
