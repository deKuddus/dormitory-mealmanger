import React from "react";
import { Link, useForm, usePage } from "@inertiajs/react";
import Layout from "@/Shared/Layout/AuthenticatedLayout";
import LoadingButton from "@/Shared/LoadingButton";
import TextInput from "@/Shared/TextInput";
import SelectInput from "@/Shared/SelectInput";
import Datepicker from "@/Shared/Datepicker";
import FromPageLayout from "@/Shared/Layout/FromPageLayout";

const Edit = () => {
    const { asset } = usePage().props;
    const { data, setData, errors, post, processing } = useForm({
        title: asset.title || "",
        status: asset.status || "",
        purchase_date: asset.purchase_date || "",
        description: asset.description || "",
        _method: "PUT",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("asset.update", asset.id));
    };

    const setPurchaseDate = (date) => {
        setData("purchase_date", date);
    };

    return (
        <FromPageLayout
            breadcumb_link={route('asset.index')}
            breadcumb_name={'Deposit'}
            breadcumb_action={'Edit'}
            loading={processing}
            button_text={'Update Deposit'}
            handlFormSubmit={handleSubmit}
        >
            <TextInput

                label="Title"
                name="title"
                type="text"
                errors={errors.title}
                value={data.title}
                onChange={(e) => setData("title", e.target.value)}
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

            <Datepicker

                label="Published Date"
                errors={errors.purchase_date}
                value={data.purchase_date}
                handleDateChange={setPurchaseDate}
                startDate={
                    data.purchase_date
                        ? new Date(data.purchase_date)
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

Edit.layout = (page) => <Layout title="Update Asset" children={page} />;

export default Edit;
