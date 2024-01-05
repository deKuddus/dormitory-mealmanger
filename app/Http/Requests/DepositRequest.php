<?php

    namespace App\Http\Requests;

    use App\Enums\DormitoryInfoStatic;
    use Illuminate\Foundation\Http\FormRequest;

    class DepositRequest extends FormRequest
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
                'user_id' => 'required|integer' ,
                'dormitory_id' => 'required|integer' ,
                'amount' => 'required|numeric|min:1' ,
                'deposit_date' => 'required|date' ,
                'status' => 'required|boolean' ,
                'description' => 'nullable|string|max:255'
            ];
        }

        protected function prepareForValidation()
        {
            $this->merge( [
                'dormitory_id' => DormitoryInfoStatic::DORMITORYID ,
            ] );
        }

        public function messages()
        {
            return [
                'amount.min' => 'Deposit amount can not be zero'
            ];
        }
    }
