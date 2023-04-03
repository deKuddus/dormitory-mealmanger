import React, {useEffect, useState} from "react";
import {Head, Link, router, useForm, usePage} from "@inertiajs/react";
import Layout from "@/Shared/Layout";
import LoadingButton from "@/Shared/LoadingButton";
import TextInput from "@/Shared/TextInput";
import SelectInput from "@/Shared/SelectInput";
import Select from "react-select";
import {isUserPermittedToPerformAction} from "@/utils";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import {defaultApi} from "@/api";
import {toast} from "react-toastify";

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
        roles: user.roles && user.roles.map(({id, name}, key) => (id)) || [],
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
    }

    const destroy = () => {
        if (confirm("Are you sure you want to delete this user?")) {
            router.delete(route("user.destroy", user.id));
        }
    }

    const restore = () => {
        if (confirm("Are you sure you want to restore this user?")) {
            router.put(route("user.restore", user.id));
        }
    }

    const options = roles && roles.length ? roles.map((row) => ({
        value: row.id,
        label: `${row.name}`
    })) : [];


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
        }else{
            setSeatOptions([]);
        }
    }

    useEffect(()=>{
        if(rooms && rooms.length){
            if(user.room_id){
                getSeatByRoom(user.room_id);
            }else{
                getSeatByRoom(rooms[0]?.id);
            }

        }
    },[rooms])

    return (
        <div>
            <Head title={`${data.first_name} ${data.last_name}`}/>
            <div className="flex justify-start max-w-lg mb-8">
                <h1 className="text-3xl font-bold">
                    <Link
                        href={route("user.index")}
                        className="text-indigo-600 hover:text-indigo-700"
                    >
                        Members
                    </Link>
                    <span className="mx-2 font-medium text-indigo-600">/</span>
                    {data.first_name} {data.last_name}
                </h1>
            </div>
            <div className="w-full overflow-hidden bg-white rounded shadow">
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-wrap p-8 -mb-8 -mr-6">
                        <TextInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="First Name"
                            name="first_name"
                            errors={errors.first_name}
                            value={data.first_name}
                            onChange={(e) =>
                                setData("first_name", e.target.value)
                            }
                        />
                        <TextInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="Last Name"
                            name="last_name"
                            errors={errors.last_name}
                            value={data.last_name}
                            onChange={(e) =>
                                setData("last_name", e.target.value)
                            }
                        />
                        <TextInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="Email"
                            name="email"
                            type="email"
                            errors={errors.email}
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                        />
                        {isUserPermittedToPerformAction('access::password-change', user_permissions) &&
                            (<TextInput
                                className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                                label="Password"
                                name="password"
                                type="password"
                                errors={errors.password}
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                            />)
                        }
                        <TextInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="Phone"
                            name="phone"
                            type="number"
                            errors={errors.phone}
                            value={data.phone}
                            onChange={(e) => setData("phone", e.target.value)}
                        />

                        <TextInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="Present Address"
                            name="present_address"
                            type="text"
                            errors={errors.present_address}
                            value={data.present_address}
                            onChange={(e) => setData("present_address", e.target.value)}
                        />

                        <TextInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="Permanent Address"
                            name="permanent_address"
                            type="text"
                            errors={errors.permanent_address}
                            value={data.permanent_address}
                            onChange={(e) => setData("permanent_address", e.target.value)}
                        />

                        <TextInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="NID"
                            name="nid"
                            type="text"
                            errors={errors.nid}
                            value={data.nid}
                            onChange={(e) => setData("nid", e.target.value)}
                        />
                        <SelectInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="NID Type"
                            name="nid_type"
                            errors={errors.nid_type}
                            value={data.nid_type}
                            onChange={(e) => setData("nid_type", e.target.value)}
                        >
                            <option value="1">National ID</option>
                            <option value="0">Birth Certificate</option>
                        </SelectInput>

                        <TextInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="Institution"
                            name="institution"
                            type="text"
                            errors={errors.institution}
                            value={data.institution}
                            onChange={(e) => setData("institution", e.target.value)}
                        />

                        <TextInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="Company"
                            name="company"
                            type="text"
                            errors={errors.company}
                            value={data.company}
                            onChange={(e) => setData("company", e.target.value)}
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
                            label="Is Admin"
                            name="is_admin"
                            errors={errors.is_admin}
                            value={data.is_admin}
                            onChange={(e) => setData("is_admin", e.target.value)}
                        >
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                        </SelectInput>

                        <SelectInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="Room"
                            name="room_id"
                            errors={errors.room_id}
                            value={data.room_id}
                            onChange={(e) => {
                                setData("room_id", e.target.value);
                                getSeatByRoom(e.target.value)
                            }}
                        >
                            {rooms && rooms.map((room, key) => (
                                <option key={key} defaultValue={data.room_id} value={room.id}>{room.name}</option>))}
                        </SelectInput>

                        <SelectInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="Seat"
                            name="seat_id"
                            errors={errors.seat_id}
                            value={data.seat_id}
                            onChange={(e) => {
                                setData("seat_id", e.target.value);
                            }}
                        >
                            <option>Select Seat</option>
                            {seatOption && seatOption.map((seat, key) => (
                                <option key={key} defaultValue={data.seat_id} value={seat.id}>{seat.seat_no}</option>))}
                        </SelectInput>

                        <div className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3">
                            <label className="form-label">Roles</label>
                            <Select
                                isMulti
                                isClearable
                                classNamePrefix={"react-select"}
                                options={options}
                                value={options.filter((option) => data.roles.includes(option.value))}
                                onChange={(selected) =>
                                    setData('roles',
                                        (selected && selected.map((select) => select.value)) || []
                                    )
                                }
                            />
                            {errors && errors.roles && <div className="form-error">{errors.roles}</div>}
                        </div>


                        {isUserPermittedToPerformAction('access::user-note-edit', user_permissions) &&
                            <div className="w-full pb-8 pr-6 mb-12">
                                <label className="form-label">Notes</label>
                                <ReactQuill className="h-48 " theme="snow" value={data.note}
                                            onChange={(e) => setData('note', e)}/>
                            </div>
                        }

                    </div>
                    <div className="flex items-center justify-end px-8 py-4 bg-gray-100 border-t border-gray-200">
                        <LoadingButton
                            loading={processing}
                            type="submit"
                            className="btn-indigo"
                        >
                            Update User
                        </LoadingButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

Edit.layout = (page) => <Layout children={page}/>;

export default Edit;
