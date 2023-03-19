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
        {
            name: "Menus",
            link: "user.menu.index",
            uri_root: "menu",
            icon: "FaRegClock",
        },
        {
            name: "Schedule",
            link: "user.schedule.index",
            uri_root: "schedule",
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
