import React from "react";
import {Link, useForm, usePage} from "@inertiajs/react";
import Layout from "@/Shared/Layout";
import LoadingButton from "@/Shared/LoadingButton";
import TextInput from "@/Shared/TextInput";
import SelectInput from "@/Shared/SelectInput";

const Create = () => {
    const{users} = usePage().props;
    const { data, setData, errors, post, processing } = useForm({
        name: "",
        status: "",
        location: "",
        user_id: "",
    });

    const handleSubmit = (e) =>{
        e.preventDefault();
        post(route("room.store"));
    }

    return (
        <div>
            <div>
                <h1 className="mb-8 text-3xl font-bold">
                    <Link
                        href={route("room.index")}
                        className="text-indigo-600 hover:text-indigo-700"
                    >
                        Room
                    </Link>
                    <span className="font-medium text-indigo-600"> /</span>{" "}
                    Create
                </h1>
            </div>
            <div className="w-full overflow-hidden bg-white rounded shadow">
                <form name="createForm" onSubmit={handleSubmit}>
                    <div className="flex flex-wrap p-8 -mb-8 -mr-6">

                        <SelectInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="User"
                            name="user_id"
                            errors={errors.user_id}
                            value={data.user_id}
                            onChange={(e) => setData("user_id", e.target.value)}
                        >
                            {users && users.map(({id,first_name})=>( <option key={id} value={id}>{first_name}</option>))}
                        </SelectInput>

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
                            label="Location"
                            name="location"
                            type="text"
                            errors={errors.location}
                            value={data.location}
                            onChange={(e) =>
                                setData("location", e.target.value)
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

                    </div>
                    <div className="flex items-center justify-end px-8 py-4 bg-gray-100 border-t border-gray-200">
                        <LoadingButton
                            loading={processing}
                            type="submit"
                            className="btn-indigo"
                        >
                            Create Room
                        </LoadingButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

Create.layout = (page) => <Layout title="Create Room" children={page} />;

export default Create;
