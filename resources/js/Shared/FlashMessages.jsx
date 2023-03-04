import React from "react";
import { usePage } from "@inertiajs/react";
import { toast} from 'react-toastify';



export default () => {
    const { flash, errors } = usePage().props;

    if(flash.success){
        return toast.success(flash.success);
    }
// console.log(errors)
    if(errors){
        return toast.error('There was an error!');
    }
    return <></>
};
