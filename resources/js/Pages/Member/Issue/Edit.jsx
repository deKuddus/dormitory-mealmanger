import React from "react";
import {useForm, usePage} from "@inertiajs/react";
import MemberLayout from "@/Shared/Layout/AuthenticatedLayout";
import TextInput from "@/Shared/TextInput";
import "react-quill/dist/quill.snow.css";
import FromPageLayout from "@/Shared/Layout/FromPageLayout";
import TextEditor from "@/Shared/TextEditor";

const Edit = () => {
    const {issue, resolvers} = usePage().props;
    const {data, setData, errors, post, processing} = useForm({
        title: issue.title || "",
        description: issue.description || "",
        _method: "PUT",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("user.issue.update", issue.id));
    };

    return (
        <FromPageLayout
            breadcumb_link={route('user.issue.index')}
            breadcumb_name={'Issue'}
            breadcumb_action={'Edit'}
            loading={processing}
            button_text={'Update Issue'}
            handlFormSubmit={handleSubmit}
        >
            <TextInput
                className="w-full pb-8 pr-6"
                label="Title"
                name="title"
                errors={errors.title}
                value={data.title}
                onChange={(e) => setData("title", e.target.value)}
            />

            <TextEditor
                label={'Description'}
                name={'description'}
                value={data.description}
                onChangeHandler={setData}
            />
        </FromPageLayout>
    );
};

Edit.layout = (page) => <MemberLayout title="Update Issue" children={page}/>;

export default Edit;
