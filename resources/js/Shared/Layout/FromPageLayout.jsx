import React from "react";
import Breadcrumb from "@/Shared/Layout/Breadcrumb";
import LoadingButton from "@/Shared/LoadingButton";

const FromPageLayout = ({children, breadcumb_link, breadcumb_name, breadcumb_action,handlFormSubmit,button_text,loading,className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-2 2xl:gap-7.5"}) =>{

    return (
        <>
            <Breadcrumb pageName={breadcumb_name} link={breadcumb_link} action={breadcumb_action}/>
            <div
                className='rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark'>
                <form onSubmit={handlFormSubmit}>
                    <div className='flex flex-col gap-5.5 p-6.5'>
                        <div className={className}>
                            {children}
                        </div>
                    </div>
                    <div className="flex items-center justify-end px-8 py-4 rounded-b-lg bg-gray-2 border-t border-gray">
                        <LoadingButton
                            loading={loading}
                            type="submit"
                            className="rounded bg-primary p-3 font-medium text-gray"
                        >
                            {button_text}
                        </LoadingButton>
                    </div>
                </form>
            </div>
        </>
    );
}

export default FromPageLayout;
