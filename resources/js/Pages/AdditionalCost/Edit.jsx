import React from "react";
import {useForm, usePage} from "@inertiajs/react";
import Layout from "@/Shared/Layout/AuthenticatedLayout";
import TextInput from "@/Shared/TextInput";
import SelectInput from "@/Shared/SelectInput";
import {APPROVED, APPROVED_TEXT, PENDING, PENDING_TEXT,} from "@/Shared/const/additionalCostStatus";
import FromPageLayout from "@/Shared/Layout/FromPageLayout";

const Edit = () => {
    const {additional} = usePage().props;
    const {data, setData, errors, post, processing} = useForm({
        amount: additional.amount || "",
        description: additional.description || "",
        status: additional.status || "",
        _method: "PUT",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("additional.update", additional.id));
    };

    return (
        <FromPageLayout
            breadcumb_link={route('additional.index')}
            breadcumb_name={'Additional'}
            breadcumb_action={'Edit'}
            loading={processing}
            button_text={'Update Additional'}
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
                <option defaultValue={data.status} value={APPROVED}>
                    {APPROVED_TEXT}
                </option>
                <option defaultValue={data.status} value={PENDING}>
                    {PENDING_TEXT}
                </option>
            </SelectInput>
        </FromPageLayout>
    );
};

Edit.layout = (page) => <Layout title="Edit Additional Cost" children={page}/>;

export default Edit;
