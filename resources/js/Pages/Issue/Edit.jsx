import React from "react";
import {Link, useForm, usePage} from "@inertiajs/react";
import Layout from "@/Shared/Layout";
import LoadingButton from "@/Shared/LoadingButton";
import TextInput from "@/Shared/TextInput";
import SelectInput from "@/Shared/SelectInput";
import 'react-quill/dist/quill.snow.css';
import ReactQuill from "react-quill";
import {ASSIGNED, PENDING,RESOLVED} from "@/Shared/const/issueStatus";

const Edit = () => {
    const {issue,resolvers} = usePage().props;
    const {data, setData, errors, post, processing} = useForm({
        title: issue.title || "",
        description: issue.description || "",
        status: issue.status,
        resolved_by: issue.resolved_by,
        _method: "PUT",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("issue.update", issue.id));
    }

    return (
        <div>
            <div>
                <h1 className="mb-8 text-3xl font-bold">
                    <Link
                        href={route("issue.index")}
                        className="text-indigo-600 hover:text-indigo-700"
                    >
                        Issue
                    </Link>
                    <span className="font-medium text-indigo-600"> /</span>{" "}
                    Edit
                </h1>
            </div>
            <div className="w-full overflow-hidden bg-white rounded shadow">
                <form name="createForm" onSubmit={handleSubmit}>
                    <div className="flex flex-wrap p-8 -mb-8 -mr-6">
                        <TextInput
                            className="w-full pb-8 pr-6"
                            label="Title"
                            name="title"
                            errors={errors.title}
                            value={data.title}
                            onChange={(e) =>
                                setData("title", e.target.value)
                            }
                        />

                        <SelectInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/2"
                            label="Assign Resolver"
                            name="resolver"
                            errors={errors.resolved_by}
                            value={data.resolved_by}
                            onChange={(e) => setData("resolved_by", e.target.value)}
                        >
                            {resolvers && resolvers.map(({id,first_name,last_name},key)=>(<option key={key} value={id} defaultValue={data.resolved_by}>{first_name} {last_name}</option>))}

                        </SelectInput>

                        <SelectInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/2"
                            label="Status"
                            name="status"
                            errors={errors.status}
                            value={data.status}
                            onChange={(e) => setData("status", e.target.value)}
                        >
                            <option value={PENDING} defaultValue={data.status}>Pending</option>
                            <option value={ASSIGNED} defaultValue={data.status}>Assigned</option>
                            <option value={RESOLVED} defaultValue={data.status}>Resolved</option>
                        </SelectInput>

                        <ReactQuill className="h-48 pr-6 mb-12 w-full" theme="snow" value={data.description}
                                    onChange={(e) => setData('description', e)}/>

                    </div>
                    <div className="flex items-center justify-end px-8 py-4 bg-gray-100 border-t border-gray-200">
                        <LoadingButton
                            loading={processing}
                            type="submit"
                            className="btn-indigo"
                        >
                            Update Issue
                        </LoadingButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

Edit.layout = (page) => <Layout title="Create User" children={page}/>;

export default Edit;
