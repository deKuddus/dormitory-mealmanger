import React from "react";
import {Link, useForm, usePage} from "@inertiajs/react";
import Layout from "@/Shared/Layout";
import LoadingButton from "@/Shared/LoadingButton";
import TextInput from "@/Shared/TextInput";
import SelectInput from "@/Shared/SelectInput";
import Datepicker from "@/Shared/Datepicker";


const Edit = () => {
    const {users,deposit} =   usePage().props;
    const { data, setData, errors, post, processing } = useForm({
        amount: deposit.amount ||  "",
        deposit_date: deposit.deposit_date || "",
        status: deposit.status || "",
        user_id: deposit.user_id || "",
        _method:'PUT'
    });

    const handleSubmit = (e) =>{
        e.preventDefault();
        post(route("deposit.update",deposit.id));
    }
    const setDepositDate = (date) => {
        setData("deposit_date", date)
    }

    return (
        <div>
            <div>
                <h1 className="mb-8 text-3xl font-bold">
                    <Link
                        href={route("deposit.index")}
                        className="text-indigo-600 hover:text-indigo-700"
                    >
                        Deposit
                    </Link>
                    <span className="font-medium text-indigo-600"> /</span>{" "}
                    Edit
                </h1>
            </div>
            <div className="w-full overflow-hidden bg-white rounded shadow">
                <form name="createForm" onSubmit={handleSubmit}>
                    <div className="flex flex-wrap p-8 -mb-8 -mr-6">

                        <SelectInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/2"
                            label="User"
                            name="user_id"
                            errors={errors.user_id}
                            value={data.user_id}
                            onChange={(e) => setData("user_id", e.target.value)}
                        >
                            {users?.length > 0 && users.map((user) => (<option key={user.id} defaultValue={deposit.user_id} value={user.id}>{user.first_name} {user.last_name}</option>))}
                        </SelectInput>

                        <TextInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/2"
                            label="Amount"
                            name="amount"
                            type="number"
                            errors={errors.amount}
                            value={data.amount}
                            onChange={(e) =>
                                setData("amount", e.target.value)
                            }
                        />

                        <Datepicker
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/2"
                            label="Deposit Date"
                            errors={errors.deposit_date}
                            value={data.deposit_date}
                            handleDateChange={setDepositDate}
                            startDate={data.deposit_date ? new Date(data.deposit_date) :  new Date()}
                        />

                        <SelectInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/2"
                            label="Status"
                            name="status"
                            errors={errors.status}
                            value={data.status}
                            onChange={(e) => setData("status", e.target.value)}
                        >
                            <option value="1">Active</option>
                            <option value="0">InActive</option>
                        </SelectInput>



                    </div>
                    <div className="flex items-center justify-end px-8 py-4 bg-gray-100 border-t border-gray-200">
                        <LoadingButton
                            loading={processing}
                            type="submit"
                            className="btn-indigo"
                        >
                            Edit Deposit
                        </LoadingButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

Edit.layout = (page) => <Layout title="Edit Deposit" children={page} />;

export default Edit;
