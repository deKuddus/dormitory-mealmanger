import React from "react";
import {Link, useForm, usePage} from "@inertiajs/react";
import MemberLayout from "@/Shared/Member/MemberLayout";
import LoadingButton from "@/Shared/LoadingButton";
import TextInput from "@/Shared/TextInput";
import SelectInput from "@/Shared/SelectInput";

const Create = () => {
    const {schedules} = usePage().props;
    const {data, setData, errors, post, processing} = useForm({
        amount: "",
        description: "",
        bazar_schedule_id: "",
        status:0,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("user.bazar.store"));
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
                            label="Select Schedule Pair"
                            name="bazar_schedule_id"
                            errors={errors.bazar_schedule_id}
                            value={data.bazar_schedule_id}
                            onChange={(e) => setData("bazar_schedule_id", e.target.value)}
                        >
                            {schedules && schedules.map(({id, pair},key) => (<option key={key} value={id}>{pair}</option>))}

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

Create.layout = (page) => <MemberLayout title="Add New Bazar" children={page}/>;

export default Create;
