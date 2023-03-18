import React from "react";
import MainMenuItem from "@/Shared/MainMenuItem";

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
        {
            name: "Deposit",
            link: "deposit.index",
            uri_root: "deposit",
            icon: "FaListAlt",
        },
        {
            name: "Expenses",
            link: "expense.index",
            uri_root: "expense",
            icon: "FaListAlt",
        },
        {
            name: "Bazar",
            link: "bazar.index",
            uri_root: "bazar",
            icon: "FaListAlt",
        },
        {
            name: "Additional",
            link: "additional.index",
            uri_root: "additional",
            icon: "FaListAlt",
        },
        {
            name: "Menu",
            link: "menu.index",
            uri_root: "menu",
            icon: "FaListAlt",
        },
        {
            name: "Bazar Schedule",
            link: "bazar-schedule.index",
            uri_root: "bazar-schedule",
            icon: "FaListAlt",
        },
        {
            name: "Users",
            link: "user.index",
            uri_root: "user",
            icon: "FaUsers",
        },
        {
            name: "Messes",
            link: "mess.index",
            uri_root: "mess",
            icon: "FaTiktok",
        },
        {
            name: "Notices",
            link: "notice.index",
            uri_root: "notice",
            icon: "FaAlignJustify",
        },
        {
            name: "Rules",
            link: "rule.index",
            uri_root: "rule",
            icon: "FaListAlt",
        },
        {
            name: "RuleItems",
            link: "ruleItem.index",
            uri_root: "ruleItem",
            icon: "FaListAlt",
        },
        {
            name: "Asset",
            link: "asset.index",
            uri_root: "asset",
            icon: "FaListAlt",
        },
        {
            name: "Room",
            link: "room.index",
            uri_root: "room",
            icon: "FaListAlt",
        },
        {
            name: "Seat",
            link: "seat.index",
            uri_root: "seat",
            icon: "FaListAlt",
        },
        {
            name: "Chef",
            link: "chef.index",
            uri_root: "chef",
            icon: "FaListAlt",
        },
        {
            name: "Report",
            link: "report.index",
            uri_root: "reports",
            icon: "FaListAlt",
        },
        {
            name: "Token",
            link: 'tokens.index',
            uri_root: 'token',
            icon: "FaListAlt",
        },
        {
            name: "Roles",
            link: "role.index",
            uri_root: "role",
            icon: "FaListAlt",
        },
        {
            name: "Permissions",
            link: "permissions.index",
            uri_root: "permissions",
            icon: "FaListAlt",
        },

    ];
    return (
        <div className={className}>
            {route.map((item, key) => (
                <MainMenuItem {...item} key={key}/>
            ))}
        </div>
    );
};
