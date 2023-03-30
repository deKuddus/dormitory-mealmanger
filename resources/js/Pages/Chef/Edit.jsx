import React from "react";
import {Link, useForm, usePage} from "@inertiajs/react";
import Layout from "@/Shared/Layout";
import LoadingButton from "@/Shared/LoadingButton";
import TextInput from "@/Shared/TextInput";
import SelectInput from "@/Shared/SelectInput";

const Edit = () => {
    const {messes,chef} =   usePage().props;
    const { data, setData, errors, post, processing } = useForm({
        name: chef.name || "",
        phone: chef.phone || "",
        status: chef.status || "",
        address: chef.address || "",
        _method:'PUT'
    });

    const handleSubmit = (e) =>{
        e.preventDefault();
        post(route("chef.update",chef.id));
    }

    return (
        <div>
            <div>
                <h1 className="mb-8 text-3xl font-bold">
                    <Link
                        href={route("chef.index")}
                        className="text-indigo-600 hover:text-indigo-700"
                    >
                        Chef
                    </Link>
                    <span className="font-medium text-indigo-600"> /</span>{" "}
                    Edit
                </h1>
            </div>
            <div className="w-full overflow-hidden bg-white rounded shadow">
                <form name="createForm" onSubmit={handleSubmit}>
                    <div className="flex flex-wrap p-8 -mb-8 -mr-6">
                        <TextInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/2"
                            label="Name"
                            name="name"
                            type="text"
                            errors={errors.name}
                            value={data.name}
                            onChange={(e) =>
                                setData("name", e.target.value)
                            }
                        />
                        <TextInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/2"
                            label="Phone"
                            name="phone"
                            type="text"
                            errors={errors.phone}
                            value={data.phone}
                            onChange={(e) =>
                                setData("phone", e.target.value)
                            }
                        />

                        <TextInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/2"
                            label="Address"
                            name="address"
                            type="text"
                            errors={errors.address}
                            value={data.address}
                            onChange={(e) =>
                                setData("address", e.target.value)
                            }
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
                            Edit Chef
                        </LoadingButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

Edit.layout = (page) => <Layout title="Edit Chef" children={page} />;

export default Edit;
