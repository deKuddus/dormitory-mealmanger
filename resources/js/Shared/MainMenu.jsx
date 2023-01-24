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
            link: "users",
            icon: "FaUsers",
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
