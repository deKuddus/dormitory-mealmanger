import React from "react";
import MenuItem from "./MenuItem";

export default ({className}) => {
    const route = [
        {
            name: "Dashboard",
            link: "user.dashboard",
            uri_root: "dashboard",
            icon: "FaRegClock",
        },
        {
            name: "Deposit",
            link: "user.deposits.index",
            uri_root: "deposit",
            icon: "FaRegClock",
        },
        {
            name: "Bazar",
            link: "user.bazar.index",
            uri_root: "bazar",
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
