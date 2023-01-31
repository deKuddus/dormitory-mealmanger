import React from "react";
import {Link, useForm, usePage} from "@inertiajs/react";
import Layout from "@/Shared/Layout";
import LoadingButton from "@/Shared/LoadingButton";
import TextInput from "@/Shared/TextInput";
import SelectInput from "@/Shared/SelectInput";


const Edit = () => {
    const {rules,ruleItem} = usePage().props;
    const { data, setData, errors, post, processing } = useForm({
        description: ruleItem.description || "",
        status: ruleItem.status || "",
        rule_id: ruleItem.rule_id || "",
        _method: "PUT",
    });

    const handleSubmit = (e) =>{
        e.preventDefault();
        post(route("ruleItem.update",ruleItem.id));
    }

    return (
        <div>
            <div>
                <h1 className="mb-8 text-3xl font-bold">
                    <Link
                        href={route("ruleItem.index")}
                        className="text-indigo-600 hover:text-indigo-700"
                    >
                        Rule
                    </Link>
                    <span className="font-medium text-indigo-600"> /</span>{" "}
                    Edit
                </h1>
            </div>
            <div className="w-full overflow-hidden bg-white rounded shadow">
                <form name="createForm" onSubmit={handleSubmit}>
                    <div className="flex flex-wrap p-8 -mb-8 -mr-6">
                        <SelectInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="Rule"
                            name="rule_id"
                            errors={errors.rule_id}
                            value={data.rule_id}
                            onChange={(e) => setData("rule_id", e.target.value)}
                        >
                            {rules && rules.map(({id,title})=>( <option key={id} defaultValue={ruleItem.id} value={id}>{title}</option>))}
                        </SelectInput>

                        <TextInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="Description"
                            name="description"
                            type="text"
                            errors={errors.description}
                            value={data.description}
                            onChange={(e) =>
                                setData("description", e.target.value)
                            }
                        />


                        <SelectInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="Status"
                            name="status"
                            errors={errors.status}
                            value={data.status}
                            onChange={(e) => setData("status", e.target.value)}
                        >
                            <option value="1">Active</option>
                            <option value="0">InActive</option>
                        </SelectInput>


                    </div>
                    <div className="flex items-center justify-end px-8 py-4 bg-gray-100 border-t border-gray-200">
                        <LoadingButton
                            loading={processing}
                            type="submit"
                            className="btn-indigo"
                        >
                            Update Rule Item
                        </LoadingButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

Edit.layout = (page) => <Layout title="Edit Rule Item" children={page} />;

export default Edit;
