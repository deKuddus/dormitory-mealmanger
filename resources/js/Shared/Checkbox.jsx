import React from "react";

const Checkbox = ({label,name,isChecked,onChangeHandler}) => {
    return (
        <div className="flex flex-col">
            <label
                htmlFor='checkboxLabelOne'
                className='flex cursor-pointer select-none items-center'
            >
                <div className='relative'>
                    <input
                        type='checkbox'
                        id='checkboxLabelOne'
                        className='sr-only'
                        checked={isChecked}
                        onChange={(e) =>
                            onChangeHandler(name, e.target.checked)
                        }
                    />
                    <div
                        className={`mr-4 flex h-5 w-5 items-center justify-center rounded border ${
                            isChecked && 'border-primary bg-gray dark:bg-transparent'
                        }`}
                    >
            <span
                className={`h-2.5 w-2.5 rounded-sm ${isChecked && 'bg-primary'}`}
            ></span>
                    </div>
                </div>
                {label}
            </label>
        </div>
    );
}

export default Checkbox;
