import React, { useEffect, useState } from "react";
import { Link, useForm, usePage } from "@inertiajs/react";
import Layout from "@/Shared/Layout/AuthenticatedLayout";
import LoadingButton from "@/Shared/LoadingButton";
import TextInput from "@/Shared/TextInput";
import SelectInput from "@/Shared/SelectInput";
import Select from "react-select";
import { defaultApi } from "@/api";
import { toast } from "react-toastify";
import FromPageLayout from "@/Shared/Layout/FromPageLayout";
import MultiSelect from "@/Shared/MultiSelect";
// import FileInput from "@/Shared/FileInput";

const Create = () => {
    const [seatOption, setSeatOptions] = useState([]);
    const { roles, rooms } = usePage().props;
    const { data, setData, errors, post, processing } = useForm({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        owner: "0",
        phone: "",
        present_address: "",
        permanent_address: "",
        nid: "",
        nid_type: "0",
        institution: "",
        company: "",
        status: "0",
        roles: [],
        is_admin: 0,
        room_id: "",
        seat_id: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("user.store"));
    };

    const options =
        roles && roles.length
            ? roles.map((row) => ({
                  value: row.id,
                  label: `${row.name}`,
              }))
            : [];

    const getSeatByRoom = async (roomId) => {
        const { response, error } = await defaultApi(
            `/api/v1/seat/${roomId}`,
            "get"
        );

        if (error) {
            toast.error(error.data.message);
            setSeatOptions([]);
        } else if (response.data && response.data.length > 0) {
            setSeatOptions(response.data);
        } else {
            setSeatOptions([]);
        }
    };

    useEffect(() => {
        if (rooms && rooms.length) {
            getSeatByRoom(rooms[0]?.id);
        }
    }, [rooms]);

    return (
        <FromPageLayout
            breadcumb_link={route('user.index')}
            breadcumb_name={'Member'}
            breadcumb_action={'Create'}
            loading={processing}
            button_text={'Create Member'}
            handlFormSubmit={handleSubmit}
        >
            <TextInput

                label="First Name"
                name="first_name"
                errors={errors.first_name}
                value={data.first_name}
                onChange={(e) =>
                    setData("first_name", e.target.value)
                }
            />
            <TextInput

                label="Last Name"
                name="last_name"
                errors={errors.last_name}
                value={data.last_name}
                onChange={(e) =>
                    setData("last_name", e.target.value)
                }
            />
            <TextInput

                label="Email"
                name="email"
                type="email"
                errors={errors.email}
                value={data.email}
                onChange={(e) => setData("email", e.target.value)}
            />
            <TextInput

                label="Password"
                name="password"
                type="password"
                errors={errors.password}
                value={data.password}
                onChange={(e) =>
                    setData("password", e.target.value)
                }
            />
            <TextInput

                label="Phone"
                name="phone"
                type="number"
                errors={errors.phone}
                value={data.phone}
                onChange={(e) => setData("phone", e.target.value)}
            />

            <TextInput

                label="Present Address"
                name="present_address"
                type="text"
                errors={errors.present_address}
                value={data.present_address}
                onChange={(e) =>
                    setData("present_address", e.target.value)
                }
            />

            <TextInput

                label="Permanent Address"
                name="permanent_address"
                type="text"
                errors={errors.permanent_address}
                value={data.permanent_address}
                onChange={(e) =>
                    setData("permanent_address", e.target.value)
                }
            />

            <TextInput

                label="NID"
                name="nid"
                type="text"
                errors={errors.nid}
                value={data.nid}
                onChange={(e) => setData("nid", e.target.value)}
            />
            <SelectInput

                label="NID Type"
                name="nid_type"
                errors={errors.nid_type}
                value={data.nid_type}
                onChange={(e) =>
                    setData("nid_type", e.target.value)
                }
            >
                <option value="1">National ID</option>
                <option value="0">Birth Certificate</option>
            </SelectInput>

            <TextInput

                label="Institution"
                name="institution"
                type="text"
                errors={errors.institution}
                value={data.institution}
                onChange={(e) =>
                    setData("institution", e.target.value)
                }
            />

            <TextInput

                label="Company"
                name="company"
                type="text"
                errors={errors.company}
                value={data.company}
                onChange={(e) => setData("company", e.target.value)}
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

            <SelectInput

                label="Room"
                name="room_id"
                errors={errors.room_id}
                value={data.room_id}
                onChange={(e) => {
                    setData("room_id", e.target.value);
                    getSeatByRoom(e.target.value);
                }}
            >
                <option>Select Room</option>
                {rooms &&
                    rooms.map((room, key) => (
                        <option
                            key={key}
                            defaultValue={data.room_id}
                            value={room.id}
                        >
                            {room.name}
                        </option>
                    ))}
            </SelectInput>

            <SelectInput

                label="Seat"
                name="seat_id"
                errors={errors.seat_id}
                value={data.seat_id}
                onChange={(e) => {
                    setData("seat_id", e.target.value);
                }}
            >
                <option>Select Seat</option>
                {seatOption &&
                    seatOption.map((seat, key) => (
                        <option
                            key={key}
                            defaultValue={data.seat_id}
                            value={seat.id}
                        >
                            {seat.seat_no}
                        </option>
                    ))}
            </SelectInput>
            <SelectInput

                label="Is Admin"
                name="is_admin"
                errors={errors.is_admin}
                value={data.is_admin}
                onChange={(e) =>
                    setData("is_admin", e.target.value)
                }
            >
                <option value="1">Yes</option>
                <option value="0">No</option>
            </SelectInput>

            <MultiSelect label={'Roles'} options={options} column={'roles'} name={''} onChangeHandler={setData}/>

        </FromPageLayout>
    );
};

Create.layout = (page) => <Layout title="Create User" children={page} />;

export default Create;
