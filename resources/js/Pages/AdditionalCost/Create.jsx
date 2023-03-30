import React from "react";
import {Link, useForm, usePage} from "@inertiajs/react";
import Layout from "@/Shared/Layout";
import LoadingButton from "@/Shared/LoadingButton";
import TextInput from "@/Shared/TextInput";
import SelectInput from "@/Shared/SelectInput";
import {APPROVED, APPROVED_TEXT, PENDING, PENDING_TEXT} from "@/Shared/const/additionalCostStatus";


const Create = () => {
    const {messes} = usePage().props;
    const {data, setData, errors, post, processing} = useForm({
        amount: "",
        description: "",
        status: PENDING,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("additional.store"));
    }

    return (
        <div>
            <div>
                <h1 className="mb-8 text-3xl font-bold">
                    <Link
                        href={route("additional.index")}
                        className="text-indigo-600 hover:text-indigo-700"
                    >
                        Additional Cost
                    </Link>
                    <span className="font-medium text-indigo-600"> /</span>
                    Create
                </h1>
            </div>
            <div className="w-full overflow-hidden bg-white rounded shadow">
                <form name="createForm" onSubmit={handleSubmit}>
                    <div className="flex flex-wrap p-8 -mb-8 -mr-6">
                        <TextInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="Amount"
                            name="amount"
                            type="number"
                            errors={errors.amount}
                            value={data.amount}
                            onChange={(e) =>
                                setData("amount", e.target.value)
                            }
                        />

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
                            <option value={APPROVED}>{APPROVED_TEXT}</option>
                            <option value={PENDING}>{PENDING_TEXT}</option>
                        </SelectInput>

                    </div>
                    <div className="flex items-center justify-end px-8 py-4 bg-gray-100 border-t border-gray-200">
                        <LoadingButton
                            loading={processing}
                            type="submit"
                            className="btn-indigo"
                        >
                            Create AdditionalCost
                        </LoadingButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

Create.layout = (page) => <Layout title="Create Additional Cost" children={page}/>;

export default Create;
