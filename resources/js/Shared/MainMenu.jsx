import React from "react";
import MainMenuItem from "@/Shared/MainMenuItem";

export default ({className}) => {
    const routes = [
        {
            name: "Dashboard",
            link: route("dashboard"),
            uri_root: "dashboard",
            icon: "FaRegClock",
            canShow: "access::dashboard-show",
        },
        {
            name: "Meals",
            link: route("meals.index"),
            uri_root: "meal",
            icon: "FaRegClock",
            canShow: "access::meal-show",
        },
        {
            name: "Calendar View",
            link: route("calender.view.meal", 1),
            uri_root: "calendar",
            icon: "FaRegClock",
            canShow: "access::calender-show",
        },
        {
            name: "Deposit",
            link: route("deposit.index"),
            uri_root: "deposit",
            icon: "FaListAlt",
            canShow: "access::deposit-show",
        },
        {
            name: "Expenses",
            link: route("expense.index"),
            uri_root: "expense",
            icon: "FaListAlt",
            canShow: "access::expense-show",
        },
        {
            name: "Bazar",
            link: route("bazar.index"),
            uri_root: "bazar",
            icon: "FaListAlt",
            canShow: "access::bazar-show",
        },
        {
            name: "Additional",
            link: route("additional.index"),
            uri_root: "additional",
            icon: "FaListAlt",
            canShow: "access::additional-show",
        },
        {
            name: "Menu",
            link: route("menu.index"),
            uri_root: "menu",
            icon: "FaListAlt",
        },
        {
            name: "Bazar Schedule",
            link: route("bazar-schedule.index"),
            uri_root: "bazar-schedule",
            icon: "FaListAlt",
            canShow: "access::bazarschedule-show",
        },
        {
            name: "Members",
            link: route("user.index"),
            uri_root: "member",
            icon: "FaUsers",
            canShow: "access::user-show",
        },
        {
            name: "Issues",
            link: route("issue.index"),
            uri_root: "issue",
            icon: "FaTiktok",
            canShow: "access::issue-show",
        },
        {
            name: "Notices",
            link: route("notice.index"),
            uri_root: "notice",
            icon: "FaAlignJustify",
            canShow: "access::notice-show",
        },
        {
            name: "Rules",
            link: route("rule.index"),
            uri_root: "rule",
            icon: "FaListAlt",
            canShow: "access::rule-show",
        },
        {
            name: "Asset",
            link: route("asset.index"),
            uri_root: "asset",
            icon: "FaListAlt",
            canShow: "access::asset-show",
        },
        {
            name: "Dormitory",
            link: route("dormitory.index"),
            uri_root: "dormitory",
            icon: "FaListAlt",
            canShow: "access::dormitory-show",
        },
        {
            name: "Room",
            link: route("room.index"),
            uri_root: "room",
            icon: "FaListAlt",
            canShow: "access::room-show",
        },
        {
            name: "Seat",
            link: route("seat.index"),
            uri_root: "seat",
            icon: "FaListAlt",
            canShow: "access::seat-show",
        },
        {
            name: "Chef",
            link: route("chef.index"),
            uri_root: "chef",
            icon: "FaListAlt",
            canShow: "access::chef-show",
        },
        {
            name: "Report",
            link: route("report.index"),
            uri_root: "reports",
            icon: "FaListAlt",
            canShow: "access::report-show",
        },
        {
            name: "Closings",
            link: route("report.closed.index"),
            uri_root: "closings",
            icon: "FaListAlt",
            canShow: "access::closing-show",
        },
        {
            name: "Token",
            link: route("tokens.index"),
            uri_root: "token",
            icon: "FaListAlt",
            canShow: "access::token-show",
        },
        {
            name: "Roles",
            link: route("role.index"),
            uri_root: "role",
            icon: "FaListAlt",
            canShow: "access::role-show",
        },
        {
            name: "Permissions",
            link: route("permissions.index"),
            uri_root: "permissions",
            icon: "FaListAlt",
            canShow: "access::permission-show",
        },
    ];
    return (
        <div className={className}>
            {routes.map((item, key) => (
                <MainMenuItem {...item} key={key}/>
            ))}
        </div>
    );
};
