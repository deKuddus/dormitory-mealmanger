import React from "react";
import {useForm, usePage} from "@inertiajs/react";
import Layout from "@/Shared/Layout/AuthenticatedLayout";
import TextInput from "@/Shared/TextInput";
import SelectInput from "@/Shared/SelectInput";
import {APPROVED, APPROVED_TEXT, PENDING, PENDING_TEXT,} from "@/Shared/const/additionalCostStatus";
import FromPageLayout from "@/Shared/Layout/FromPageLayout";

const Create = () => {
    const {messes} = usePage().props;
    const {data, setData, errors, post, processing} = useForm({
        amount: "",
        description: "",
        status: PENDING,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("additional.store"));
    };

    return (
        <FromPageLayout
            breadcumb_link={route('additional.index')}
            breadcumb_name={'Additional'}
            breadcumb_action={'Create'}
            loading={processing}
            button_text={'Create Additional'}
            handlFormSubmit={handleSubmit}
        >
            <TextInput

                label="Amount"
                name="amount"
                type="number"
                errors={errors.amount}
                value={data.amount}
                onChange={(e) => setData("amount", e.target.value)}
            />

            <TextInput

                label="Description"
                name="description"
                type="text"
                errors={errors.description}
                value={data.description}
                onChange={(e) =>
                    setData("description", e.target.value)
                }
            />

            <SelectInput

                label="Status"
                name="status"
                errors={errors.status}
                value={data.status}
                onChange={(e) => setData("status", e.target.value)}
            >
                <option value={APPROVED}>{APPROVED_TEXT}</option>
                <option value={PENDING}>{PENDING_TEXT}</option>
            </SelectInput>
        </FromPageLayout>
    );
};

Create.layout = (page) => (
    <Layout title="Create Additional Cost" children={page}/>
);

export default Create;
