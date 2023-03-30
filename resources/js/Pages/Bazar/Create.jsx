import React from "react";
import {Link, useForm, usePage} from "@inertiajs/react";
import Layout from "@/Shared/Layout";
import LoadingButton from "@/Shared/LoadingButton";
import TextInput from "@/Shared/TextInput";
import SelectInput from "@/Shared/SelectInput";

const Create = () => {
    const {bazarScheduler} = usePage().props;
    const { data, setData, errors, post, processing } = useForm({
        amount: "",
        description: "",
    });

    const handleSubmit = (e) =>{
        e.preventDefault();
        post(route("bazar.store"));
    }

    return (
        <div>
            <div>
                <h1 className="mb-8 text-3xl font-bold">
                    <Link
                        href={route("bazar.index")}
                        className="text-indigo-600 hover:text-indigo-700"
                    >
                        Bazar
                    </Link>
                    <span className="font-medium text-indigo-600"> /</span>{" "}
                    Add
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
                            label="Select Pair"
                            name="bazar_schedule_id"
                            errors={errors.bazar_schedule_id}
                            value={data.bazar_schedule_id}
                            onChange={(e) => setData("bazar_schedule_id", e.target.value)}
                        >
                            <option>Select Pair</option>
                            {bazarScheduler && bazarScheduler.map((row)=>(<option value={row.id} defaultValue={data.bazar_schedule_id}>{row.pair}</option>))}
                        </SelectInput>

                    </div>
                    <div className="flex items-center justify-end px-8 py-4 bg-gray-100 border-t border-gray-200">
                        <LoadingButton
                            loading={processing}
                            type="submit"
                            className="btn-indigo"
                        >
                            Add Bazar
                        </LoadingButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

Create.layout = (page) => <Layout title="Create Bazar" children={page} />;

export default Create;
