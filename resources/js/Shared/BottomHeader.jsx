import React, {useState} from "react";
import {Link, usePage} from "@inertiajs/react";
import Icon from "@/Shared/Icon";

export default () => {
    const {auth,deposit} = usePage().props;
    const [menuOpened, setMenuOpened] = useState(false);
    return (
        <div
            className="flex items-center justify-between w-full p-4 text-sm bg-white border-b md:py-0 md:px-12 d:text-md">
            <div className="mt-1 mr-4">Current Balance : {deposit} BDT</div>
            <div className="relative">
                <div
                    className="flex items-center cursor-pointer select-none group"
                    onClick={() => setMenuOpened(true)}
                >
                    <div
                        className="mr-1 text-gray-800 whitespace-nowrap group-hover:text-background-200 focus:text-indigo-600">
                        <span>{auth.user.first_name}</span>
                        <span className="hidden ml-1 md:inline">
                            {auth.user.last_name}
                        </span>
                    </div>
                    <Icon
                        className="w-5 h-5 text-gray-800 fill-current group-hover:text-background-200 focus:text-indigo-600"
                        name="FaAngleDown"
                    />
                </div>
                <div className={menuOpened ? "" : "hidden"}>
                    <div
                        className="absolute top-0 right-0 left-auto z-20 py-2 mt-8 text-sm whitespace-nowrap bg-white rounded shadow-xl">
                        <Link
                            href={route("user.edit", auth.user.id)}
                            className="block px-6 py-2 hover:bg-background-200 hover:text-white"
                            onClick={() => setMenuOpened(false)}
                        >
                            My Profile
                        </Link>

                        {auth.user.is_admin && (<Link
                            href={route("user.index")}
                            className="block px-6 py-2 hover:bg-background-200 hover:text-white"
                            onClick={() => setMenuOpened(false)}
                        >
                            Manage Users
                        </Link>)}
                        <Link
                            as="button"
                            href={route("logout")}
                            className="block w-full px-6 py-2 text-left focus:outline-none hover:bg-background-200 hover:text-white"
                            method="post"
                        >
                            Logout
                        </Link>
                    </div>
                    <div
                        onClick={() => {
                            setMenuOpened(false);
                        }}
                        className="fixed inset-0 z-10 bg-black opacity-25"
                    ></div>
                </div>
            </div>
        </div>
    );
};
