import React from "react";
import {useForm, usePage} from "@inertiajs/react";
import Layout from "@/Shared/Layout/AuthenticatedLayout";
import FromPageLayout from "@/Shared/Layout/FromPageLayout";
import SelectInput from "@/Shared/SelectInput";
import TextInput from "@/Shared/TextInput";

const Edit = () => {
    const {users, rooms, seat} = usePage().props;
    const {data, setData, errors, post, processing} = useForm({
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
        <FromPageLayout
            breadcumb_link={route('rule.index')}
            breadcumb_name={'Rule'}
            breadcumb_action={'Edit'}
            loading={processing}
            button_text={'Update Rule'}
            handlFormSubmit={handleSubmit}
        >
            <SelectInput

                label="Room"
                name="room_id"
                errors={errors.room_id}
                value={data.room_id}
                onChange={(e) => setData("room_id", e.target.value)}
            >
                {rooms &&
                    rooms.map(({id, name}) => (
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

                label="Seat No"
                name="seat_no"
                type="text"
                errors={errors.seat_no}
                value={data.seat_no}
                onChange={(e) => setData("seat_no", e.target.value)}
            />

            <SelectInput

                label="Status"
                name="status"
                errors={errors.status}
                value={data.status}
                onChange={(e) => setData("status", e.target.value)}
            >
                <option value="1">Active</option>
                <option value="0">InActive</option>
            </SelectInput>
        </FromPageLayout>
    );
};

Edit.layout = (page) => <Layout title="Edit Seat" children={page}/>;

export default Edit;
