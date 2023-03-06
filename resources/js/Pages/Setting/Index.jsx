import React, {useEffect, useState} from "react";
import {Link, router, usePage} from "@inertiajs/react";
import Layout from "@/Shared/Layout";
import Datepicker from "@/Shared/Datepicker";
import SelectInput from "@/Shared/SelectInput";
import Select from "react-select";
import LoadingButton from "@/Shared/LoadingButton";
import TextInput from "@/Shared/TextInput";
import DropDownButton from "@/Shared/DropDownButton";

const Index = () => {
    const {settings} = usePage().props;
    const [name, setName] = useState('');
    const [breakFastClose, setBreakFastClose] = useState( '');
    const [lunchClose, setLunchClose] = useState('');
    const [dinnerClose, setDinnerClose] = useState('');

    const hours = ["12:00 AM", "12:30 AM", "1:00 AM", "1:30 AM", "2:00 AM", "2:30 AM", "3:00 AM", "3:30 AM", "4:00 AM", "4:30 AM", "5:00 AM", "5:30 AM", "6:00 AM", "6:30 AM", "7:00 AM", "7:30 AM", "8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM", "10:00 PM", "10:30 PM", "11:00 PM", "11:30 PM"];


    useEffect(()=>{
      if(settings){
          setName(settings.app_name);
          setBreakFastClose(settings.break_fast_close);
          setLunchClose(settings.lunch_close);
          setDinnerClose(settings.dinner_close);
      }
    },[settings])


    const handeSettingSubmit = () =>{
        router.post(route('settings.update'),{
            id:settings.id,
            name,
            breakFastClose,
            lunchClose,
            dinnerClose,
        })
    }

    return (
        <div>
            <h1 className="mb-8 text-3xl font-bold">Settings</h1>
            <div className="overflow-x-auto bg-white rounded shadow p-3">
                <div className="flex flex-wrap p-8 -mb-8 -mr-6">
                    <TextInput
                        className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/2"
                        label="Dormitory Name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />



                </div>
                <div className="flex items-center justify-end px-8 py-4 bg-gray-100 border-t border-gray-200">
                    <LoadingButton
                        type="button"
                        className="btn-indigo"
                        onClick={handeSettingSubmit}
                    >
                        Save Settings
                    </LoadingButton>
                </div>
            </div>

        </div>
    );
};

Index.layout = (page) => <Layout title="Settings" children={page}/>;

export default Index;
