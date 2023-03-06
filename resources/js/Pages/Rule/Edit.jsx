import React from "react";
import {Link, useForm} from "@inertiajs/react";
import Layout from "@/Shared/Layout";
import LoadingButton from "@/Shared/LoadingButton";
import TextInput from "@/Shared/TextInput";
import SelectInput from "@/Shared/SelectInput";
import Datepicker from "@/Shared/Datepicker";

const Edit = () => {
    const { data, setData, errors, post, processing } = useForm({
        title: "",
        status: "",
        mess_id: 1,
        published_date: "",
        _method:'PUT',
    });

    const handleSubmit = (e) =>{
        e.preventDefault();
        post(route("rule.store"));
    }

    const setPublishedDate = (date) => {
        setData("published_date", date)
    }

    return (
        <div>
            <div>
                <h1 className="mb-8 text-3xl font-bold">
                    <Link
                        href={route("rule.index")}
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
                        <TextInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="Title"
                            name="title"
                            type="text"
                            errors={errors.title}
                            value={data.title}
                            onChange={(e) =>
                                setData("title", e.target.value)
                            }
                        />


                        <Datepicker
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="Published Date"
                            errors={errors.published_date}
                            value={data.published_date}
                            handleDateChange={setPublishedDate}
                            startDate={data.published_date?  new Date(data.published_date) : new Date()}
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
                            Edit Rule
                        </LoadingButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

Edit.layout = (page) => <Layout title="Edit Rule" children={page} />;

export default Edit;
