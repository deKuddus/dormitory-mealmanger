import React from "react";
import MainMenuItem from "@/Shared/MainMenuItem";



export default ({className}) => {

    const route = [
        {
            name: "Dashboard",
            link: "dashboard",
            uri_root: "dashboard",
            icon: "FaRegClock",
            canShow: 'access::dashboard-show'
        },
        {
            name: "Meals",
            link: "meals.index",
            uri_root: "meal",
            icon: "FaRegClock",
            canShow: 'access::meal-show'
        },
        {
            name: "Deposit",
            link: "deposit.index",
            uri_root: "deposit",
            icon: "FaListAlt",
            canShow: 'access::deposit-show'
        },
        {
            name: "Expenses",
            link: "expense.index",
            uri_root: "expense",
            icon: "FaListAlt",
            canShow: 'access::expense-show'
        },
        {
            name: "Bazar",
            link: "bazar.index",
            uri_root: "bazar",
            icon: "FaListAlt",
            canShow: 'access::bazar-show'
        },
        {
            name: "Additional",
            link: "additional.index",
            uri_root: "additional",
            icon: "FaListAlt",
            canShow: 'access::additional-show'
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
            canShow: 'access::bazarschedule-show'
        },
        {
            name: "Users",
            link: "user.index",
            uri_root: "user",
            icon: "FaUsers",
            canShow: 'access::user-show'
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
            canShow: 'access::notice-show'
        },
        {
            name: "Rules",
            link: "rule.index",
            uri_root: "rule",
            icon: "FaListAlt",
            canShow: 'access::rule-show'
        },
        {
            name: "Asset",
            link: "asset.index",
            uri_root: "asset",
            icon: "FaListAlt",
            canShow: 'access::asset-show'
        },
        {
            name: "Room",
            link: "room.index",
            uri_root: "room",
            icon: "FaListAlt",
            canShow: 'access::room-show'
        },
        {
            name: "Seat",
            link: "seat.index",
            uri_root: "seat",
            icon: "FaListAlt",
            canShow: 'access::seat-show'
        },
        {
            name: "Chef",
            link: "chef.index",
            uri_root: "chef",
            icon: "FaListAlt",
            canShow: 'access::chef-show'
        },
        {
            name: "Report",
            link: "report.index",
            uri_root: "reports",
            icon: "FaListAlt",
            canShow: 'access::report-show'
        },
        {
            name: "Closings",
            link: 'report.closed.index',
            uri_root: 'closings',
            icon: "FaListAlt",
            canShow: 'access::closing-show'
        },
        {
            name: "Token",
            link: 'tokens.index',
            uri_root: 'token',
            icon: "FaListAlt",
            canShow: 'access::token-show'
        },
        {
            name: "Roles",
            link: "role.index",
            uri_root: "role",
            icon: "FaListAlt",
            canShow: 'access::role-show'
        },
        {
            name: "Permissions",
            link: "permissions.index",
            uri_root: "permissions",
            icon: "FaListAlt",
            canShow: 'access::permission-show'
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
