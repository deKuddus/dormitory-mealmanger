import React from "react";
import { usePage } from "@inertiajs/react";
import { toast} from 'react-toastify';



export default () => {
    const { flash, errors } = usePage().props;
    const numOfErrors = Object.keys(errors).length;

    if(flash.success){
        return toast.success(flash.success);
    }

    if(numOfErrors > 0){
        return toast.error('There was an error!');
    }
    return <></>
};
