<?php

namespace App\Http\Requests;

use App\Enums\DormitoryInfoStatic;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

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
            'full_name' => ['required', 'max:50'],
            'display_name' => ['required', 'max:50'],
            'email' => ['required', 'max:50', 'email',
                Rule::unique('users')->ignore($this->route('user')->id)
            ],
            'password' => ['nullable', 'min:6', 'max:50'],
            'phone' => ['required', 'max:11'],
            'present_address' => ['nullable', 'string', 'max:255'],
            'permanent_address' => ['nullable', 'string', 'max:255'],
            'nid' => ['required', 'max:50'],
            'nid_type' => ['required', 'max:50'],
            'institution' => ['nullable', 'max:50'],
            'company' => ['nullable', 'max:50'],
            'status' => ['required', 'boolean'],
            'photo' => ['nullable', 'image'],
            'dormitory_id' => ['required', 'integer'],
            'roles' => ['nullable', 'array'],
            'is_admin' => ['nullable', 'integer'],
            'note' => ['nullable', 'string'],
            'room_id' => ['nullable', 'integer'],
            'seat_id' => ['nullable', 'integer']
        ];
    }

    public function prepareForValidation()
    {
        return $this->merge([
            'dormitory_id' => DormitoryInfoStatic::DORMITORYID,
            'password' => auth()->user()->can('access::password-change') ? $this->input('password') : null
        ]);
    }
}
