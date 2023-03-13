import React from "react";
import MenuItem from "./MenuItem";

export default ({className}) => {
    const route = [
        {
            name: "Dashboard",
            link: "dashboard",
            uri_root: "dashboard",
            icon: "FaRegClock",
        },
        {
            name: "Meals",
            link: "meals.index",
            uri_root: "meal",
            icon: "FaRegClock",
        },
    ];
    return (
        <div className={className}>
            {route.map((item, key) => (
                <MenuItem {...item} key={key}/>
            ))}
        </div>
    );
};
