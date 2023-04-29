import React, {useEffect, useState} from "react";
import {router, useForm, usePage} from "@inertiajs/react";
import Layout from "@/Shared/Layout/AuthenticatedLayout";
import TextInput from "@/Shared/TextInput";
import SelectInput from "@/Shared/SelectInput";
import {isUserPermittedToPerformAction} from "@/utils";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {defaultApi} from "@/api";
import {toast} from "react-toastify";
import FromPageLayout from "@/Shared/Layout/FromPageLayout";
import MultiSelect from "@/Shared/MultiSelect";
import TextEditor from "@/Shared/TextEditor";

const Edit = () => {
    const {user, roles, rooms, user_permissions} = usePage().props;
    const [seatOption, setSeatOptions] = useState([]);
    const {data, setData, errors, post, processing} = useForm({
        first_name: user.first_name || "",
        last_name: user.last_name || "",
        email: user.email || "",
        password: "",
        phone: user.phone || "",
        present_address: user.present_address || "",
        permanent_address: user.permanent_address || "",
        nid: user.nid || "",
        nid_type: user.nid_type || "0",
        institution: user.institution || "",
        company: user.company || "",
        status: user.status || "0",
        roles: (user.roles && user.roles.map(({id, name}, key) => id)) || [],
        _method: "PUT",
        is_admin: user.is_admin,
        room_id: user.room_id,
        seat_id: user.seat_id,
        note: user.note,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        // NOTE: We are using POST method here, not PUT/PACH. See comment above.
        post(route("user.update", user.id));
    };

    const destroy = () => {
        if (confirm("Are you sure you want to delete this user?")) {
            router.delete(route("user.destroy", user.id));
        }
    };

    const restore = () => {
        if (confirm("Are you sure you want to restore this user?")) {
            router.put(route("user.restore", user.id));
        }
    };

    const options =
        roles && roles.length
            ? roles.map((row) => ({
                value: row.id,
                label: `${row.name}`,
            }))
            : [];

    const getSeatByRoom = async (roomId) => {
        const {response, error} = await defaultApi(
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
            if (user.room_id) {
                getSeatByRoom(user.room_id);
            } else {
                getSeatByRoom(rooms[0]?.id);
            }
        }
    }, [rooms]);

    return (
        <FromPageLayout
            breadcumb_link={route('user.index')}
            breadcumb_name={'Member'}
            breadcumb_action={'Create'}
            loading={processing}
            button_text={'Update Member'}
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
            {isUserPermittedToPerformAction(
                "access::password-change",
                user_permissions
            ) && (
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
            )}
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


            <MultiSelect
                label={'Roles'}
                value={options.filter((option) =>
                    data.roles.includes(option.value)
                )}
                options={options}
                column={'roles'}
                name={'roles'}
                onChangeHandler={setData}
            />

            {isUserPermittedToPerformAction(
                "access::user-note-edit",
                user_permissions
            ) && (
                <TextEditor value={data.note} onChangeHandler={setData} name="note" label="Note"/>
            )}

        </FromPageLayout>
    );
};

Edit.layout = (page) => <Layout title={'Edit Member'} children={page}/>;

export default Edit;
