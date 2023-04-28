import React from "react";
import {useForm, usePage} from "@inertiajs/react";
import Layout from "@/Shared/Layout/AuthenticatedLayout";
import TextInput from "@/Shared/TextInput";
import SelectInput from "@/Shared/SelectInput";
import FromPageLayout from "@/Shared/Layout/FromPageLayout";

const Edit = () => {
    const {messes, chef} = usePage().props;
    const {data, setData, errors, post, processing} = useForm({
        name: chef.name || "",
        phone: chef.phone || "",
        status: chef.status || "",
        address: chef.address || "",
        _method: "PUT",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("chef.update", chef.id));
    };

    return (
        <FromPageLayout
            breadcumb_link={route('chef.index')}
            breadcumb_name={'Chef'}
            breadcumb_action={'Edit'}
            loading={processing}
            button_text={'Update Chef'}
            handlFormSubmit={handleSubmit}
        >
            <TextInput
                className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/2"
                label="Name"
                name="name"
                type="text"
                errors={errors.name}
                value={data.name}
                onChange={(e) => setData("name", e.target.value)}
            />
            <TextInput
                className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/2"
                label="Phone"
                name="phone"
                type="text"
                errors={errors.phone}
                value={data.phone}
                onChange={(e) => setData("phone", e.target.value)}
            />

            <TextInput
                className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/2"
                label="Address"
                name="address"
                type="text"
                errors={errors.address}
                value={data.address}
                onChange={(e) => setData("address", e.target.value)}
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
        </FromPageLayout>
    );
};

Edit.layout = (page) => <Layout title="Edit Chef" children={page}/>;

export default Edit;
