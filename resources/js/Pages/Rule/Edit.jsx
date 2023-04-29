import React from "react";
import { Link, useForm, usePage } from "@inertiajs/react";
import Layout from "@/Shared/Layout/AuthenticatedLayout";
import LoadingButton from "@/Shared/LoadingButton";
import TextInput from "@/Shared/TextInput";
import SelectInput from "@/Shared/SelectInput";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import FromPageLayout from "@/Shared/Layout/FromPageLayout";
import TextEditor from "@/Shared/TextEditor";

const Edit = () => {
    const { rule } = usePage().props;
    const { data, setData, errors, post, processing } = useForm({
        title: rule.title,
        status: rule.status,
        description: rule.description,
        _method: "PUT",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("rule.update", rule.id));
    };

    return (
            <FromPageLayout
                breadcumb_link={route('rule.index')}
                breadcumb_name={'Rule'}
                breadcumb_action={'Create'}
                loading={processing}
                button_text={'Create Rule'}
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

                <TextEditor value={data.description} name='description' onChangeHandler={setData}/>
            </FromPageLayout>
    );
};

Edit.layout = (page) => <Layout title="Edit Rule" children={page} />;

export default Edit;
