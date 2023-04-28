import React from "react";
import { Link, useForm, usePage } from "@inertiajs/react";
import Layout from "@/Shared/Layout/AuthenticatedLayout";
import LoadingButton from "@/Shared/LoadingButton";
import TextInput from "@/Shared/TextInput";
import SelectInput from "@/Shared/SelectInput";

const Edit = () => {
    const { users, rooms, seat } = usePage().props;
    const { data, setData, errors, post, processing } = useForm({
        seat_no: seat.seat_no || "",
        status: seat.status || "",
        room_id: seat.room_id || "",
        _method: "PUT",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("seat.update", seat.id));
    };

    return (
        <div>
            <div>
                <h1 className="mb-8 text-3xl font-bold">
                    <Link
                        href={route("seat.index")}
                        className="text-indigo-600 hover:text-indigo-700"
                    >
                        Seat
                    </Link>
                    <span className="font-medium text-indigo-600"> /</span> Edit
                </h1>
            </div>
            <div className="w-full overflow-hidden bg-white rounded shadow">
                <form name="createForm" onSubmit={handleSubmit}>
                    <div className="flex flex-wrap p-8 -mb-8 -mr-6">
                        <SelectInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="Room"
                            name="room_id"
                            errors={errors.room_id}
                            value={data.room_id}
                            onChange={(e) => setData("room_id", e.target.value)}
                        >
                            {rooms &&
                                rooms.map(({ id, name }) => (
                                    <option
                                        key={id}
                                        defaultValue={seat.room_id}
                                        value={id}
                                    >
                                        {name}
                                    </option>
                                ))}
                        </SelectInput>

                        <TextInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="Seat No"
                            name="seat_no"
                            type="text"
                            errors={errors.seat_no}
                            value={data.seat_no}
                            onChange={(e) => setData("seat_no", e.target.value)}
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
                            Edit Seat
                        </LoadingButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

Edit.layout = (page) => <Layout title="Edit Seat" children={page} />;

export default Edit;
