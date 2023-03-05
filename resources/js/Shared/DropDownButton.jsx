import React from "react";

export default ({label, name, className, ...props}) => {
    return (
        <div className={className}>
            {label && (
                <label className="form-label" htmlFor={name}>
                    {label}:
                </label>
            )}
            <div className="dropdown">
                <label className="btn m-1">
                    Click
                    <div className="dropdown">
                        <label tabIndex={0} className="btn m-1">Click</label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>
                </label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </div>
        </div>
    );
};
