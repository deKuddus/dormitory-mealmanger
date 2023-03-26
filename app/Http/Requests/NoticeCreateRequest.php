<?php

namespace App\Http\Requests;

use App\Enums\MessIdStatic;
use Illuminate\Foundation\Http\FormRequest;

class NoticeCreateRequest extends FormRequest
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
            'title' => ['required', 'string', 'max:255'],
            'description' => ['required', 'string'],
            'mess_id' => ['required', 'integer'],
            'status' => ['required', 'integer'],
        ];
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'mess_id' => MessIdStatic::MESSID
        ]);
    }
}
