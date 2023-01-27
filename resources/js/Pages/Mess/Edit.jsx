import React from "react";
import {Link, useForm, usePage} from "@inertiajs/react";
import Layout from "@/Shared/Layout";
import LoadingButton from "@/Shared/LoadingButton";
import TextInput from "@/Shared/TextInput";
import SelectInput from "@/Shared/SelectInput";

const Edit = () => {
    const {mess, users} = usePage().props;
    const {data, setData, errors, post, processing} = useForm({
        name: mess.name || "",
        address: mess.address || "",
        status: mess.status || "",
        user_id: mess.user_id || "",
        is_fixed_meal_rate: mess.is_fixed_meal_rate || "",
        _method: "PUT",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("mess.update", mess.id));
    }

    return (
        <div>
            <div>
                <h1 className="mb-8 text-3xl font-bold">
                    <Link
                        href={route("mess.index")}
                        className="text-indigo-600 hover:text-indigo-700"
                    >
                        Mess
                    </Link>
                    <span className="font-medium text-indigo-600"> /</span>{" "}
                    Create
                </h1>
            </div>
            <div className="w-full overflow-hidden bg-white rounded shadow">
                <form name="createForm" onSubmit={handleSubmit}>
                    <div className="flex flex-wrap p-8 -mb-8 -mr-6">
                        <TextInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
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
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
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
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="Status"
                            name="status"
                            errors={errors.status}
                            value={data.status}
                            onChange={(e) => setData("status", e.target.value)}
                        >
                            <option value="1">Active</option>
                            <option value="0">InActive</option>
                        </SelectInput>

                        <SelectInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="User"
                            name="user_id"
                            errors={errors.user_id}
                            value={data.user_id}
                            onChange={(e) => setData("user_id", e.target.value)}
                        >
                            {users.map((user) => (<option key={user.id} {user.id == data.user_id ? 'selected' : ''}
                                                          value={user.id}>{user.name}</option>))}
                        </SelectInput>

                        <SelectInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="Is Fixed Meal Rate"
                            name="is_fixed_meal_rate"
                            errors={errors.is_fixed_meal_rate}
                            value={data.is_fixed_meal_rate}
                            onChange={(e) => setData("is_fixed_meal_rate", e.target.value)}
                        >
                            <option value="1">Yes</option>
                            <option value="2">No</option>
                        </SelectInput>
                    </div>
                    <div className="flex items-center justify-end px-8 py-4 bg-gray-100 border-t border-gray-200">
                        <LoadingButton
                            loading={processing}
                            type="submit"
                            className="btn-indigo"
                        >
                            Create Mess
                        </LoadingButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

Edit.layout = (page) => <Layout title="Edit Mess" children={page}/>;

export default Edit;
