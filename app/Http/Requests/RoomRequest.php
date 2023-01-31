<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RoomRequest extends FormRequest
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
        'mess_id' => 'required|integer',
        'user_id' => 'required|integer',
        'name' => 'required|string',
        'location' => 'nullable|string',
        'status' => 'required|integer',
        ];
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'mess_id' => 1,
        ]);
    }
}
