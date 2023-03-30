import React from "react";
import {Link, useForm, usePage} from "@inertiajs/react";
import MemberLayout from "@/Shared/Member/MemberLayout";
import LoadingButton from "@/Shared/LoadingButton";
import TextInput from "@/Shared/TextInput";
import SelectInput from "@/Shared/SelectInput";
import Datepicker from "@/Shared/Datepicker";


const Create = () => {
    const { data, setData, errors, post, processing } = useForm({
        amount: "",
    });

    const handleSubmit = (e) =>{
        e.preventDefault();
        post(route("user.deposits.store"));
    }


    return (
        <div>
            <div>
                <h1 className="mb-8 text-3xl font-bold">
                    <Link
                        href={route("user.deposits.index")}
                        className="text-indigo-600 hover:text-indigo-700"
                    >
                        Deposit
                    </Link>
                    <span className="font-medium text-indigo-600"> /</span>{" "}
                    Create
                </h1>
            </div>
            <div className="w-full overflow-hidden bg-white rounded shadow">
                <form name="createForm" onSubmit={handleSubmit}>
                    <div className="flex flex-wrap p-8 -mb-8 -mr-6">



                        <TextInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/2"
                            label="Amount"
                            name="amount"
                            type="number"
                            errors={errors.amount}
                            value={data.amount}
                            onChange={(e) =>
                                setData("amount", e.target.value)
                            }
                        />



                    </div>
                    <div className="flex items-center justify-end px-8 py-4 bg-gray-100 border-t border-gray-200">
                        <LoadingButton
                            loading={processing}
                            type="submit"
                            className="btn-indigo"
                        >
                            Create Deposit
                        </LoadingButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

Create.layout = (page) => <MemberLayout title="Create Deposit" children={page} />;

export default Create;
