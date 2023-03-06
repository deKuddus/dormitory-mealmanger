import React from "react";
import { usePage } from "@inertiajs/react";
import { toast} from 'react-toastify';



export default () => {
    const { flash, errors } = usePage().props;

    if(flash.success){
         toast.success(flash.success);
    }

    if(errors && errors.length){
         toast.error('There was an error!');
    }
    return <></>
};
