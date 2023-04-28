import React from "react";
import { Link, useForm, usePage } from "@inertiajs/react";
import Layout from "@/Shared/Layout/AuthenticatedLayout";
import LoadingButton from "@/Shared/LoadingButton";
import TextInput from "@/Shared/TextInput";
import SelectInput from "@/Shared/SelectInput";
import Datepicker from "@/Shared/Datepicker";
import Breadcrumb from "@/Shared/Layout/Breadcrumb";
import FromPageLayout from "@/Shared/Layout/FromPageLayout";

const Edit = () => {
    const { users, deposit } = usePage().props;
    const { data, setData, errors, post, processing } = useForm({
        amount: deposit.amount || "",
        deposit_date: deposit.deposit_date || "",
        status: deposit.status || "",
        user_id: deposit.user_id || "",
        _method: "PUT",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("deposit.update", deposit.id));
    };
    const setDepositDate = (date) => {
        setData("deposit_date", date);
    };

    return (
       <FromPageLayout
           breadcumb_link={route('deposit.index')}
           breadcumb_name={'Deposit'}
           breadcumb_action={'Edit'}
           loading={processing}
           button_text={'Update Deposit'}
           handlFormSubmit={handleSubmit}
       >
           <SelectInput

               label="User"
               name="user_id"
               errors={errors.user_id}
               value={data.user_id}
               onChange={(e) => setData("user_id", e.target.value)}
           >
               {users?.length > 0 &&
                   users.map((user) => (
                       <option
                           key={user.id}
                           value={user.id}
                           defaultValue={deposit.user_id}
                       >
                           {user.first_name} {user.last_name}
                       </option>
                   ))}
           </SelectInput>

           <TextInput
               label="Amount"
               name="amount"
               type="number"
               errors={errors.amount}
               value={data.amount}
               onChange={(e) => setData("amount", e.target.value)}
           />

           <Datepicker

               label="Deposit Date"
               errors={errors.deposit_date}
               value={data.deposit_date}
               handleDateChange={setDepositDate}
               startDate={
                   data.deposit_date
                       ? new Date(data.deposit_date)
                       : new Date()
               }
           />

           <SelectInput

               label="Status"
               name="status"
               errors={errors.status}
               value={data.status}
               defaultValue={data.status}
               onChange={(e) => setData("status", e.target.value)}
           >
               <option value="1">Active</option>
               <option value="0">InActive</option>
           </SelectInput>
       </FromPageLayout>
    );
};

Edit.layout = (page) => <Layout title="Edit Deposit" children={page} />;

export default Edit;
