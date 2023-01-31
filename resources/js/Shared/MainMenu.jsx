import React from "react";
import MainMenuItem from "@/Shared/MainMenuItem";

export default ({ className }) => {
    const route = [
        {
            name: "Dashboard",
            link: "dashboard",
            icon: "FaRegClock",
        },
        {
            name: "Users",
            link: "users.index",
            icon: "FaUsers",
        },
        {
            name: "Messes",
            link: "mess.index",
            icon: "FaTiktok",
        },
        {
            name: "Notices",
            link: "notice.index",
            icon: "FaAlignJustify",
        },
        {
            name: "Rules",
            link: "rule.index",
            icon: "FaListAlt",
        },
        {
            name: "RuleItems",
            link: "ruleItem.index",
            icon: "FaListAlt",
        },
        {
            name: "Asset",
            link: "asset.index",
            icon: "FaListAlt",
        },
        {
            name: "Room",
            link: "room.index",
            icon: "FaListAlt",
        },
        {
            name: "Seat",
            link: "seat.index",
            icon: "FaListAlt",
        },
        {
            name: "Chef",
            link: "chef.index",
            icon: "FaListAlt",
        },
    ];
    return (
        <div className={className}>
            {route.map((item, key) => (
                <MainMenuItem {...item} key={key} />
            ))}
        </div>
    );
};
