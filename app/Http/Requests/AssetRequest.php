<?php

namespace App\Http\Requests;

use App\Enums\DormitoryInfoStatic;
use Illuminate\Foundation\Http\FormRequest;

class AssetRequest extends FormRequest
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
        'description' => 'nullable|string',
        'purchase_date' => 'nullable|date',
        'status' => 'required|integer',
        'dormitory_id' => 'required|integer',
        ];
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'dormitory_id' =>  DormitoryInfoStatic::DORMITORYID,
        ]);
    }
}
