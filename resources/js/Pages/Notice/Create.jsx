import React from "react";
import {useForm} from "@inertiajs/react";
import Layout from "@/Shared/Layout/AuthenticatedLayout";
import TextInput from "@/Shared/TextInput";
import SelectInput from "@/Shared/SelectInput";
import "react-quill/dist/quill.snow.css";
import {INACTIVE} from "@/Shared/const/noticeStatus";
import FromPageLayout from "@/Shared/Layout/FromPageLayout";
import TextEditor from "@/Shared/TextEditor";

const Create = () => {
    const {data, setData, errors, post, processing} = useForm({
        title: "",
        description: "",
        status: INACTIVE,
        published_date: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("notice.store"));
    };

    return (
        <FromPageLayout
            breadcumb_link={route('notice.index')}
            breadcumb_name={'Notice'}
            breadcumb_action={'Create'}
            loading={processing}
            button_text={'Create Notice'}
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

            <TextEditor value={data.description} name="description" onChangeHandler={setData}/>
        </FromPageLayout>
    );
};

Create.layout = (page) => <Layout title="Create Issue" children={page}/>;

export default Create;
