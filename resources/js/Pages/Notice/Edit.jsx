import React from "react";
import {Link, useForm, usePage} from "@inertiajs/react";
import Layout from "@/Shared/Layout";
import LoadingButton from "@/Shared/LoadingButton";
import TextInput from "@/Shared/TextInput";
import SelectInput from "@/Shared/SelectInput";

const Edit = () => {
    const { notice ,messes } = usePage().props;
    const { data, setData, errors, post, processing } = useForm({
        title: notice.title || "",
        description: notice.description || "",
        status: notice.status || "",
        mess_id: notice.mess_id || "",
        published_date: notice.published_date || "",
        _method: "PUT",
    });

    const handleSubmit = (e) =>{
        e.preventDefault();
        post(route("notice.update", notice.id));
    }

    return (
        <div>
            <div>
                <h1 className="mb-8 text-3xl font-bold">
                    <Link
                        href={route("notice.index")}
                        className="text-indigo-600 hover:text-indigo-700"
                    >
                        Notice
                    </Link>
                    <span className="font-medium text-indigo-600"> /</span>{" "}
                    Edit
                </h1>
            </div>
            <div className="w-full overflow-hidden bg-white rounded shadow">
                <form name="createForm" onSubmit={handleSubmit}>
                    <div className="flex flex-wrap p-8 -mb-8 -mr-6">
                        <TextInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="Title"
                            name="title"
                            errors={errors.title}
                            value={data.title}
                            onChange={(e) =>
                                setData("title", e.target.value)
                            }
                        />
                        <TextInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="Description"
                            name="description"
                            errors={errors.description}
                            value={data.description}
                            onChange={(e) =>
                                setData("description", e.target.value)
                            }
                        />

                        <TextInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="Published Date"
                            name="published_date"
                            type="date"
                            errors={errors.published_date}
                            value={data.published_date}
                            onChange={(e) =>
                                setData("published_date", e.target.value)
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
                            label="Mess"
                            name="mess_id"
                            errors={errors.mess_id}
                            value={data.mess_id}
                            onChange={(e) => setData("mess_id", e.target.value)}
                        >
                            {messes.map((mess) => (<option key={mess.id} {mess.id === data.mess_id ? 'selected' : ''}
                                                          value={mess.id}>{mess.name}</option>))}
                        </SelectInput>
                    </div>
                    <div className="flex items-center justify-end px-8 py-4 bg-gray-100 border-t border-gray-200">
                        <LoadingButton
                            loading={processing}
                            type="submit"
                            className="btn-indigo"
                        >
                            Update Notice
                        </LoadingButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

Edit.layout = (page) => <Layout title="Create User" children={page} />;

export default Edit;
