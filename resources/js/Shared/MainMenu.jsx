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
    ];
    return (
        <div className={className}>
            {route.map((item, key) => (
                <MainMenuItem {...item} key={key} />
            ))}
        </div>
    );
};
