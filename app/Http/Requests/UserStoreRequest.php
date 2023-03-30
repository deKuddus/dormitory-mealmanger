<?php

namespace App\Http\Requests;

use App\Enums\DormitoryIdStatic;
use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class UserStoreRequest extends FormRequest
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
     * @return array
     */
    public function rules()
    {
        return [
            'first_name' => ['required', 'max:50'],
            'last_name' => ['required', 'max:50'],
            'email' => ['required', 'max:50', 'unique:users,email'],
            'password' => ['nullable'],
            'phone' => ['required', 'max:11'],
            'present_address' => ['required', 'max:255'],
            'permanent_address' => ['required', 'max:255'],
            'nid' => ['required', 'max:50'],
            'nid_type' => ['required', 'max:50'],
            'institution' => ['nullable', 'max:50'],
            'company' => ['nullable', 'max:50'],
            'status' => ['required', 'boolean'],
            'photo' => ['nullable', 'image'],
            'dormitory_id' => ['required', 'integer'],
            'roles' => ['required', 'array'],
            'is_admin' => ['required', 'boolean']
        ];
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'dormitory_id' => DormitoryIdStatic::DORMITORYID,
        ]);
    }
}
