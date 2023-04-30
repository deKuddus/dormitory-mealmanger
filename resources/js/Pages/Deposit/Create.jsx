import React from "react";
import {useForm, usePage} from "@inertiajs/react";
import Layout from "@/Shared/Layout/AuthenticatedLayout";
import TextInput from "@/Shared/TextInput";
import SelectInput from "@/Shared/SelectInput";
import Datepicker from "@/Shared/Datepicker";
import FromPageLayout from "@/Shared/Layout/FromPageLayout";

const Create = () => {
    const {users} = usePage().props;
    const {data, setData, errors, post, processing} = useForm({
        amount: "",
        deposit_date: "",
        status: 0,
        user_id: users[0].id,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("deposit.store"));
    };
    const setDepositDate = (date) => {
        setData("deposit_date", date);
    };

    return (
        <FromPageLayout
            breadcumb_link={route('deposit.index')}
            breadcumb_name={'Deposit'}
            breadcumb_action={'Create'}
            loading={processing}
            button_text={'Create Deposit'}
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
                        >
                            {user.full_name}
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
                onChange={(e) => setData("status", e.target.value)}
            >
                <option value="1">Active</option>
                <option value="0">InActive</option>
            </SelectInput>
        </FromPageLayout>
    );
};

Create.layout = (page) => <Layout title="Create Deposit" children={page}/>;

export default Create;
