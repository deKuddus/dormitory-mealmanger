import React from "react";
import {Link, useForm, usePage} from "@inertiajs/react";
import Layout from "@/Shared/Layout";
import LoadingButton from "@/Shared/LoadingButton";
import TextInput from "@/Shared/TextInput";
import SelectInput from "@/Shared/SelectInput";
import Datepicker from "@/Shared/Datepicker";


const Create = () => {
    const {users} = usePage().props;
    const {data, setData, errors, post, processing} = useForm({
        bazar_date: "",
        users_id: [],
        status: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("bazar-schedule.store"));
    }

    const setBazarDate = (date) => {
        setData("bazar_date", date)
    }

    const setUsersId = (id) => {
        let prevId = data.users_id;
        prevId.push(id);
        setData("users_id", prevId)
    }

    return (
        <div>
            <div>
                <h1 className="mb-8 text-3xl font-bold">
                    <Link
                        href={route("bazar-schedule.index")}
                        className="text-indigo-600 hover:text-indigo-700"
                    >
                        Bazar Schedule
                    </Link>
                    <span className="font-medium text-indigo-600"> /</span>
                    Create
                </h1>
            </div>
            <div className="w-full overflow-hidden bg-white rounded shadow">
                <form name="createForm" onSubmit={handleSubmit}>
                    <div className="flex flex-wrap p-8 -mb-8 -mr-6">
                        <Datepicker
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="Bazar Date"
                            errors={errors.bazar_date}
                            value={data.bazar_date}
                            handleDateChange={setBazarDate}
                            startDate={data.bazar_date ? new Date(data.bazar_date) : new Date()}
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

                        <SelectInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="Users"
                            multiple={true}
                            name="users_id"
                            errors={errors.users_id}
                            value={data.users_id}
                            onChange={(e) => setUsersId(e.target.value)}
                        >
                            {users?.length > 0 && users.map((user) => (
                                <option key={user.id} value={user.id}>{user.first_name}</option>
                            ))}
                        </SelectInput>

                    </div>
                    <div className="flex items-center justify-end px-8 py-4 bg-gray-100 border-t border-gray-200">
                        <LoadingButton
                            loading={processing}
                            type="submit"
                            className="btn-indigo"
                        >
                            Create Bazar Schedule
                        </LoadingButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

Create.layout = (page) => <Layout title="Create Bazar Schedule" children={page}/>;

export default Create;
