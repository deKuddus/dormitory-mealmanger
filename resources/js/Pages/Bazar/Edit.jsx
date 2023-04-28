import React from "react";
import { Link, useForm, usePage } from "@inertiajs/react";
import Layout from "@/Shared/Layout/AuthenticatedLayout";
import LoadingButton from "@/Shared/LoadingButton";
import TextInput from "@/Shared/TextInput";
import SelectInput from "@/Shared/SelectInput";
import FromPageLayout from "@/Shared/Layout/FromPageLayout";

const Edit = () => {
    const { bazar, bazarScheduler } = usePage().props;
    const { data, setData, errors, post, processing } = useForm({
        amount: bazar.amount || "",
        description: bazar.description || "",
        bazar_schedule_id: bazar.bazar_schedule_id,
        _method: "PUT",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("bazar.update", bazar.id));
    };

    return (
        <FromPageLayout
            breadcumb_link={route('bazar.index')}
            breadcumb_name={'Bazar'}
            breadcumb_action={'Create'}
            loading={processing}
            button_text={'Create Bazar'}
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

                label="Select Pair"
                name="bazar_schedule_id"
                errors={errors.bazar_schedule_id}
                value={data.bazar_schedule_id}
                onChange={(e) =>
                    setData("bazar_schedule_id", e.target.value)
                }
            >
                <option>Select Pair</option>
                {bazarScheduler &&
                    bazarScheduler.map((row) => (
                        <option
                            value={row.id}
                            defaultValue={data.bazar_schedule_id}
                        >
                            {row.pair}
                        </option>
                    ))}
            </SelectInput>
        </FromPageLayout>
    );
};

Edit.layout = (page) => <Layout title="Edit Bazar" children={page} />;

export default Edit;
