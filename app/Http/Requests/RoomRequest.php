<?php

namespace App\Http\Requests;

use App\Enums\DormitoryIdStatic;
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
        'dormitory_id' => 'required|integer',
        'name' => 'required|string',
        'location' => 'nullable|string',
        'status' => 'required|integer',
        ];
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'dormitory_id' => DormitoryIdStatic::DORMITORYID,
        ]);
    }
}
