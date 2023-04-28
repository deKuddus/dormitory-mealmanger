import React from "react";
import { Link, useForm, usePage } from "@inertiajs/react";
import Layout from "@/Shared/Layout/AuthenticatedLayout";
import LoadingButton from "@/Shared/LoadingButton";
import TextInput from "@/Shared/TextInput";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { PENDING } from "@/Shared/const/issueStatus";
import FromPageLayout from "@/Shared/Layout/FromPageLayout";
import TextEditor from "@/Shared/TextEditor";

const Create = () => {
    const { data, setData, errors, post, processing } = useForm({
        title: "",
        description: "",
        status: PENDING,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("issue.store"));
    };

    return (
        <FromPageLayout
            breadcumb_link={route('issue.index')}
            breadcumb_name={'Issue'}
            breadcumb_action={'Create'}
            loading={processing}
            button_text={'Create Issue'}
            handlFormSubmit={handleSubmit}
        >
            <TextInput
                label="Title"
                name="title"
                type="text"
                errors={errors.title}
                value={data.title}
                onChange={(e) => setData("title", e.target.value)}
            />

            <TextEditor value={data.description} name={'description'} onChangeHandler={setData} />
        </FromPageLayout>
    );
};

Create.layout = (page) => <Layout title="Create Issue" children={page} />;

export default Create;
