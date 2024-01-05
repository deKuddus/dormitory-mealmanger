import React from "react";
import {useForm} from "@inertiajs/react";
import MemberLayout from "@/Shared/Layout/AuthenticatedLayout";
import FromPageLayout from "@/Shared/Layout/FromPageLayout";
import TextInput from "@/Shared/TextInput";

const Create = () => {
    const {data, setData, errors, post, processing} = useForm({
        amount: "",
        description: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("user.deposits.store"));
    };

    return (
        <FromPageLayout
            breadcumb_link={route('user.deposits.index')}
            breadcumb_name={'Deposit'}
            breadcumb_action={'Create'}
            loading={processing}
            button_text={'Create Deposit'}
            handlFormSubmit={handleSubmit}
        >
            <TextInput
                className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/2"
                label="Description"
                name="description"
                type="text"
                errors={errors.description}
                value={data.description}
                onChange={(e) => setData("description", e.target.value)}
            />
            <TextInput
                className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/2"
                label="Amount"
                name="amount"
                type="number"
                errors={errors.amount}
                value={data.amount}
                onChange={(e) => setData("amount", e.target.value)}
            />
        </FromPageLayout>
    );
};

Create.layout = (page) => (
    <MemberLayout title="Create Deposit" children={page}/>
);

export default Create;
