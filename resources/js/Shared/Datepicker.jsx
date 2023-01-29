import React, {useEffect} from "react";
import DatePicker from "react-datepicker";

export default ({label, name, className, errors = [], handleDateChange, startDate}) => {

    return (
        <div className={className}>
            {label && (
                <label className="form-label" htmlFor={name}>
                    {label}:
                </label>
            )}

            <DatePicker
                className={`form-input ${errors.length ? "error" : ""}`}
                selected={startDate}
                onChange={(date) => handleDateChange(date)}
            />

            {errors && <div className="form-error">{errors}</div>}
        </div>
    );
};
