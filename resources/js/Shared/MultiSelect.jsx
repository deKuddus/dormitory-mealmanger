import React from "react";
import Select from "react-select";

const MultiSelect = ({label,name,column,options,value=[],onChangeHandler}) => {
    return (
        <div className="flex flex-col">
            <label className="mb-3 block text-black dark:text-white">{label}</label>
            <Select
                isMulti
                isClearable
                classNamePrefix={"react-select"}
                options={options}
                value={value}
                name={name}
                onChange={(selected) =>
                    onChangeHandler(
                        column,
                        (selected &&
                            selected.map(
                                (select) => select.value
                            )) ||
                        []
                    )
                }
            />
        </div>
    );
}

export default MultiSelect;
