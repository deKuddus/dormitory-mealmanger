import React from "react";

export default ({ label, name, className, errors = undefined, ...props }) => {
    return (
        <div className="flex flex-col">
            {label && (
                <label className='mb-3 block text-black dark:text-white' htmlFor={name}>
                    {label}
                </label>
            )}
            <input
                id={name}
                name={name}
                {...props}
                className={`w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-4 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary`}
            />
            {errors && <div className="text-danger mt-2">{errors}</div>}
        </div>
        // <div className={className}>
        //     {label && (
        //         <label className="mb-3 form-label block text-black dark:text-white" htmlFor={name}>
        //             {label}:
        //         </label>
        //     )}
        //     <input
        //         id={name}
        //         name={name}
        //         {...props}
        //         className={`w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary ${errors ? "error" : ""}`}
        //     />
        //     {errors && <div className="form-error">{errors}</div>}
        // </div>
    );
};
