import React from "react";
import {useForm, usePage} from "@inertiajs/react";
import Layout from "@/Shared/Layout/AuthenticatedLayout";
import TextInput from "@/Shared/TextInput";
import SelectInput from "@/Shared/SelectInput";
import FromPageLayout from "@/Shared/Layout/FromPageLayout";

const Create = () => {
    const {messes} = usePage().props;
    const {data, setData, errors, post, processing} = useForm({
        name: "",
        phone: "",
        status: 0,
        address: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("chef.store"));
    };

    return (
        <FromPageLayout
            breadcumb_link={route('chef.index')}
            breadcumb_name={'Chef'}
            breadcumb_action={'Create'}
            loading={processing}
            button_text={'Create Chef'}
            handlFormSubmit={handleSubmit}
        >
            <TextInput

                label="Name"
                name="name"
                type="text"
                errors={errors.name}
                value={data.name}
                onChange={(e) => setData("name", e.target.value)}
            />
            <TextInput

                label="Phone"
                name="phone"
                type="text"
                errors={errors.phone}
                value={data.phone}
                onChange={(e) => setData("phone", e.target.value)}
            />

            <TextInput

                label="Address"
                name="address"
                type="text"
                errors={errors.address}
                value={data.address}
                onChange={(e) => setData("address", e.target.value)}
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

Create.layout = (page) => <Layout title="Create Chef" children={page}/>;

export default Create;
