import React from "react";
import {Link} from "@inertiajs/react";
import classNames from "classnames";
import {usePage} from '@inertiajs/react'


export default ({icon, link, name, uri_root}) => {
    const {url} = usePage()
    const isActive = url.startsWith('/' + uri_root.toLowerCase());
    const itemClass = classNames({
        "bg-background-300": isActive,
    });

    return (
        <div
            className={`m-2 text-left pl-3 hover:bg-background-300 py-3 rounded ${itemClass}`}
        >
            <Link href={link}>
                <div className="text-gray-800">{name}</div>
            </Link>
        </div>
    );
};
