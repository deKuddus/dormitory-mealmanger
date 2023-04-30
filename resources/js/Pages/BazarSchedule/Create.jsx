import React, { useState } from "react";
import { Link, useForm, usePage } from "@inertiajs/react";
import Layout from "@/Shared/Layout/AuthenticatedLayout";
import LoadingButton from "@/Shared/LoadingButton";
import TextInput from "@/Shared/TextInput";
import SelectInput from "@/Shared/SelectInput";
import Datepicker from "@/Shared/Datepicker";
import Select from "react-select";
import MultiSelect from "@/Shared/MultiSelect";
import FromPageLayout from "@/Shared/Layout/FromPageLayout";

const Create = () => {
    const { users } = usePage().props;
    const { data, setData, errors, post, processing } = useForm({
        bazar_date: "",
        users_id: [],
        status: 0,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("bazar-schedule.store"));
    };

    const setBazarDate = (date) => {
        setData("bazar_date", date);
    };

    const setUsersId = (id) => {
        let prevId = data.users_id;
        prevId.push(id);
        setData("users_id", prevId);
    };

    const options =
        users && users.length
            ? users.map((row) => ({
                  value: row.id,
                  label: row.full_name,
              }))
            : [];

    return (
       <FromPageLayout
           breadcumb_link={route('bazar-schedule.index')}
           breadcumb_name={'Bazar Schedule'}
           breadcumb_action={'Create'}
           loading={processing}
           button_text={'Create Bazar Schedule'}
           handlFormSubmit={handleSubmit}
       >
           <Datepicker

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

           <MultiSelect label={'Users'} options={options} column={'users_id'} name={''} onChangeHandler={setData}/>
       </FromPageLayout>
    );
};

Create.layout = (page) => (
    <Layout title="Create Bazar Schedule" children={page} />
);

export default Create;
