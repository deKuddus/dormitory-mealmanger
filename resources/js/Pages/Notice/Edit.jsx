import React from "react";
import { Link, useForm, usePage } from "@inertiajs/react";
import Layout from "@/Shared/Layout/AuthenticatedLayout";
import LoadingButton from "@/Shared/LoadingButton";
import TextInput from "@/Shared/TextInput";
import SelectInput from "@/Shared/SelectInput";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import FromPageLayout from "@/Shared/Layout/FromPageLayout";

const Edit = () => {
    const { notice } = usePage().props;
    const { data, setData, errors, post, processing } = useForm({
        title: notice.title || "",
        description: notice.description || "",
        status: notice.status,
        published_date: notice.published_date || "",
        _method: "PUT",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("notice.update", notice.id));
    };

    const setPublishedDate = (date) => {
        setData("published_date", date);
    };

    return (
        <FromPageLayout
            breadcumb_link={route('notice.index')}
            breadcumb_name={'Notice'}
            breadcumb_action={'Edit'}
            loading={processing}
            button_text={'Update Notice'}
            handlFormSubmit={handleSubmit}
        >
            <TextInput

                label="Title"
                name="title"
                errors={errors.title}
                value={data.title}
                onChange={(e) => setData("title", e.target.value)}
            />

            <SelectInput

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
        </FromPageLayout>
    );
};

Edit.layout = (page) => <Layout title="Edit Notice" children={page} />;

export default Edit;
