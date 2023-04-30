import React from "react";
import {useForm, usePage} from "@inertiajs/react";
import Layout from "@/Shared/Layout/AuthenticatedLayout";
import SelectInput from "@/Shared/SelectInput";
import Datepicker from "@/Shared/Datepicker";
import FromPageLayout from "@/Shared/Layout/FromPageLayout";
import MultiSelect from "@/Shared/MultiSelect";

const Edit = () => {
    const {users, bazarSchedule} = usePage().props;
    const {data, setData, errors, post, processing} = useForm({
        bazar_date: bazarSchedule.bazar_date || "",
        users_id:
            (bazarSchedule.users &&
                bazarSchedule.users.map(
                    ({id, full_name}, key) => id
                )) ||
            [],
        status: bazarSchedule.status,
        _method: "PUT",
    });

    const options =
        users && users.length
            ? users.map((row) => ({
                value: row.id,
                label: row.full_name,
            }))
            : [];

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("bazar-schedule.update", bazarSchedule.id));
    };

    const setBazarDate = (date) => {
        setData("bazar_date", date);
    };

    const setUsersId = (id) => {
        let prevId = data.users_id;
        prevId.push(id);
        setData("users_id", prevId);
    };

    return (
        <FromPageLayout
            breadcumb_link={route('bazar-schedule.index')}
            breadcumb_name={'Bazar Schedule'}
            breadcumb_action={'Edit'}
            loading={processing}
            button_text={'Update Bazar Schedule'}
            handlFormSubmit={handleSubmit}
        >
            <Datepicker
                className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                label="Bazar Date"
                errors={errors.bazar_date}
                value={data.bazar_date}
                handleDateChange={setBazarDate}
                startDate={
                    data.bazar_date
                        ? new Date(data.bazar_date)
                        : new Date()
                }
            />

            <SelectInput
                className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                label="Status"
                name="status"
                errors={errors.status}
                value={data.status}
                onChange={(e) => setData("status", e.target.value)}
            >
                <option value="1" defaultValue={data.status}>
                    Bazar Done
                </option>
                <option value="0" defaultValue={data.status}>
                    Bazar Pending
                </option>
            </SelectInput>

            <MultiSelect
                label={'Users'}
                options={options}
                value={options.filter((option) =>
                    data.users_id.includes(option.value)
                )}
                column={'users_id'}
                onChangeHandler={setData}
                name="users_id[]"
            />
        </FromPageLayout>
    );
};

Edit.layout = (page) => <Layout title="Edit Bazar Schedule" children={page}/>;

export default Edit;
