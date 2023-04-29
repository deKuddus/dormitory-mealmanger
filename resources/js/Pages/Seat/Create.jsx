import React from "react";
import {useForm, usePage} from "@inertiajs/react";
import Layout from "@/Shared/Layout/AuthenticatedLayout";
import TextInput from "@/Shared/TextInput";
import SelectInput from "@/Shared/SelectInput";
import FromPageLayout from "@/Shared/Layout/FromPageLayout";

const Create = () => {
    const {rooms} = usePage().props;
    const {data, setData, errors, post, processing} = useForm({
        seat_no: "",
        status: 0,
        room_id: rooms[0]?.id,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("seat.store"));
    };

    return (
        <FromPageLayout
            breadcumb_link={route('seat.index')}
            breadcumb_name={'Seats'}
            breadcumb_action={'Create'}
            loading={processing}
            button_text={'Create Seat'}
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
                        <option key={id} value={id}>
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

Create.layout = (page) => <Layout title="Create Seat" children={page}/>;

export default Create;
