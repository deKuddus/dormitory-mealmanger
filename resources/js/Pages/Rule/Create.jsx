import React from "react";
import { Link, useForm } from "@inertiajs/react";
import Layout from "@/Shared/Layout/AuthenticatedLayout";
import LoadingButton from "@/Shared/LoadingButton";
import TextInput from "@/Shared/TextInput";
import SelectInput from "@/Shared/SelectInput";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { INACTIVE } from "@/Shared/const/noticeStatus";

const Create = () => {
    const { data, setData, errors, post, processing } = useForm({
        title: "",
        status: INACTIVE,
        description: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("rule.store"));
    };

    return (
        <div>
            <div>
                <h1 className="mb-8 text-3xl font-bold">
                    <Link
                        href={route("rule.index")}
                        className="text-indigo-600 hover:text-indigo-700"
                    >
                        Rule
                    </Link>
                    <span className="font-medium text-indigo-600"> /</span>{" "}
                    Create
                </h1>
            </div>
            <div className="w-full overflow-hidden bg-white rounded shadow">
                <form name="createForm" onSubmit={handleSubmit}>
                    <div className="flex flex-wrap p-8 -mb-8 -mr-6">
                        <TextInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/2"
                            label="Title"
                            name="title"
                            type="text"
                            errors={errors.title}
                            value={data.title}
                            onChange={(e) => setData("title", e.target.value)}
                        />

                        <SelectInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/2"
                            label="Status"
                            name="status"
                            errors={errors.status}
                            value={data.status}
                            onChange={(e) => setData("status", e.target.value)}
                        >
                            <option value="1" defaultValue={data.status}>
                                Active
                            </option>
                            <option value="0" defaultValue={data.status}>
                                InActive
                            </option>
                        </SelectInput>

                        <ReactQuill
                            className="h-48 pr-6 mb-12 w-full"
                            theme="snow"
                            value={data.description}
                            onChange={(e) => setData("description", e)}
                        />
                    </div>
                    <div className="flex items-center justify-end px-8 py-4 bg-gray-100 border-t border-gray-200">
                        <LoadingButton
                            loading={processing}
                            type="submit"
                            className="btn-indigo"
                        >
                            Create Rule
                        </LoadingButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

Create.layout = (page) => <Layout title="Create Rule" children={page} />;

export default Create;
