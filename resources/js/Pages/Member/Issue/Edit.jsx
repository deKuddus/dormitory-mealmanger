import React from "react";
import {Link, useForm, usePage} from "@inertiajs/react";
import MemberLayout from "@/Shared/Member/MemberLayout";
import LoadingButton from "@/Shared/LoadingButton";
import TextInput from "@/Shared/TextInput";
import 'react-quill/dist/quill.snow.css';
import ReactQuill from "react-quill";


const Edit = () => {
    const {issue,resolvers} = usePage().props;
    const {data, setData, errors, post, processing} = useForm({
        title: issue.title || "",
        description: issue.description || "",
        _method: "PUT",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("user.issue.update", issue.id));
    }

    return (
        <div>
            <div>
                <h1 className="mb-8 text-3xl font-bold">
                    <Link
                        href={route("user.issue.index")}
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

Edit.layout = (page) => <MemberLayout title="Update Issue" children={page}/>;

export default Edit;
