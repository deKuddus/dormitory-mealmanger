import React from "react";
import {useForm, usePage} from "@inertiajs/react";
import Layout from "@/Shared/Layout/AuthenticatedLayout";
import TextInput from "@/Shared/TextInput";
import SelectInput from "@/Shared/SelectInput";
import "react-quill/dist/quill.snow.css";
import {ASSIGNED, PENDING, RESOLVED} from "@/Shared/const/issueStatus";
import TextEditor from "@/Shared/TextEditor";
import FromPageLayout from "@/Shared/Layout/FromPageLayout";

const Edit = () => {
    const {issue, resolvers} = usePage().props;
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
                errors={errors.title}
                value={data.title}
                onChange={(e) => setData("title", e.target.value)}
            />

            <SelectInput

                label="Assign Resolver"
                name="resolver"
                errors={errors.resolved_by}
                value={data.resolved_by}
                onChange={(e) =>
                    setData("resolved_by", e.target.value)
                }
            >
                {resolvers &&
                    resolvers.map(
                        ({id, full_name}, key) => (
                            <option
                                key={key}
                                value={id}
                                defaultValue={data.resolved_by}
                            >
                                {full_name}
                            </option>
                        )
                    )}
            </SelectInput>

            <SelectInput

                label="Status"
                name="status"
                errors={errors.status}
                value={data.status}
                onChange={(e) => setData("status", e.target.value)}
            >
                <option value={PENDING} defaultValue={data.status}>
                    Pending
                </option>
                <option value={ASSIGNED} defaultValue={data.status}>
                    Assigned
                </option>
                <option value={RESOLVED} defaultValue={data.status}>
                    Resolved
                </option>
            </SelectInput>

            <TextEditor value={data.description} name={'description'} onChangeHandler={setData}/>
        </FromPageLayout>
    );
};

Edit.layout = (page) => <Layout title="Create User" children={page}/>;

export default Edit;
