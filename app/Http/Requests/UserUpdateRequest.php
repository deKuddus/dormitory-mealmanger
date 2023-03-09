<?php

namespace App\Http\Requests;

use App\Trait\LockedDemoUser;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Foundation\Http\FormRequest;

class UserUpdateRequest extends FormRequest
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
            'email' => ['required', 'max:50', 'email',
                Rule::unique('users')->ignore($this->route('user')->id)
            ],
            'password' => ['nullable', 'min:6', 'max:50'],
            'phone' => ['required', 'max:11'],
            'present_address' => ['required', 'max:255'],
            'permanent_address' => ['required', 'max:255'],
            'nid' => ['required', 'max:50'],
            'nid_type' => ['required', 'max:50'],
            'institution' => ['nullable', 'max:50'],
            'company' => ['nullable', 'max:50'],
            'status' => ['required', 'boolean'],
            'photo' => ['nullable', 'image'],
            'mess_id' => ['required', 'integer'],
            'roles' => ['required','array']
        ];
    }

    public function prepareForValidation()
    {
        return $this->merge([
            'mess_id' => 1,
        ]);
    }
}
