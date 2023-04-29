import React from "react";
import {useForm} from "@inertiajs/react";
import MemberLayout from "@/Shared/Layout/AuthenticatedLayout";
import TextInput from "@/Shared/TextInput";
import "react-quill/dist/quill.snow.css";
import {PENDING} from "@/Shared/const/issueStatus";
import FromPageLayout from "@/Shared/Layout/FromPageLayout";
import TextEditor from "@/Shared/TextEditor";

const Create = () => {
    const {data, setData, errors, post, processing} = useForm({
        title: "",
        description: "",
        status: PENDING,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("user.issue.store"));
    };

    return (
        <FromPageLayout
            breadcumb_link={route('user.issue.index')}
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

            <TextEditor
                label={'Description'}
                value={data.description}
                name={'description'}
                onChangeHandler={setData}
            />
        </FromPageLayout>
    );
};

Create.layout = (page) => <MemberLayout title="Create Issue" children={page}/>;

export default Create;
