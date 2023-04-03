import React from "react";
import MenuItem from "./MenuItem";

export default ({className}) => {
    const routes = [
        {
            name: "Dashboard",
            link: route("user.dashboard"),
            uri_root: "dashboard",
            icon: "FaRegClock",
        },
        {
            name: "Deposit",
            link: route("user.deposits.index"),
            uri_root: "deposit",
            icon: "FaRegClock",
        },
        {
            name: "Bazar",
            link: route("user.bazar.index"),
            uri_root: "bazar",
            icon: "FaRegClock",
        },
        {
            name: "Menus",
            link: route("user.menu.index"),
            uri_root: "menu",
            icon: "FaRegClock",
        },
        {
            name: "Schedule",
            link: route("user.schedule.index"),
            uri_root: "schedule",
            icon: "FaRegClock",
        },
        {
            name: "Notice",
            link: route("user.notices.index"),
            uri_root: "notice",
            icon: "FaRegClock",
        },
        {
            name: "Rule",
            link: route("user.rules.index"),
            uri_root: "rule",
            icon: "FaRegClock",
        },
        {
            name: "Issue",
            link: route("user.issue.index"),
            uri_root: "issue",
            icon: "FaRegClock",
        },
    ];
    return (
        <div className={className}>
            {routes.map((item, key) => (
                <MenuItem {...item} key={key}/>
            ))}
        </div>
    );
};
