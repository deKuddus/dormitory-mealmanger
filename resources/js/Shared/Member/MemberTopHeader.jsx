import React, {useState} from "react";
import {Link, usePage} from "@inertiajs/react";
import Logo from "@/Shared/Logo";
import MainMenu from "@/Shared/MainMenu";
import MenuList from "@/Shared/Member/MenuList";

export default () => {
    const {auth} = usePage().props;
    const [menuOpened, setMenuOpened] = useState(false);
    return (
        <div className="flex items-center justify-between px-6 py-4 bg-white md:w-56 md:justify-center border-b-2">
            <Link className="mt-1" href={auth.user.is_admin ? route('dashboard') : route('user.dashboard')}>
                <Logo/>
            </Link>
            <div className="relative md:hidden">
                <svg
                    onClick={() => setMenuOpened(true)}
                    className="w-6 h-6 text-blue-800 cursor-pointer fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                >
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                </svg>
                <div
                    className={`${
                        menuOpened ? "" : "hidden"
                    } absolute right-0 z-20`}
                >
                    <MenuList className="relative z-20 px-8 py-4 pb-2 mt-2 bg-white rounded shadow-lg"/>
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
