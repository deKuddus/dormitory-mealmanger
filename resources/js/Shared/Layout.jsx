import React from "react";
import { Head } from "@inertiajs/react";
import MainMenu from "@/Shared/MainMenu";
import FlashMessages from "@/Shared/FlashMessages";
import TopHeader from "@/Shared/TopHeader";
import BottomHeader from "@/Shared/BottomHeader";

export default function Layout({ title, children }) {
    return (
        <div>
            <Head title={title} />
            <div className="flex flex-col">
                <div className="flex flex-col h-screen">
                    <div className="md:flex">
                        <TopHeader />
                        <BottomHeader />
                    </div>
                    <div className="flex flex-grow overflow-hidden">
                        <MainMenu className="hidden w-56 mx-2 overflow-y-auto bg-white md:block " />
                        <div className="w-full px-2 py-8 overflow-hidden overflow-y-auto md:p-8 bg-background-500">
                            <FlashMessages />
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
