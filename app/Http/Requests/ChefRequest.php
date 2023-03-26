<?php

namespace App\Http\Requests;

use App\Enums\MessIdStatic;
use Illuminate\Foundation\Http\FormRequest;

class ChefRequest extends FormRequest
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
            'name'    => 'required|string|max:255',
            'phone'   => 'required|string|max:20',
            'address' => 'nullable|string|max:300',
            'status'  => 'required|boolean'
        ];
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'mess_id' => MessIdStatic::MESSID
        ]);
    }
}
