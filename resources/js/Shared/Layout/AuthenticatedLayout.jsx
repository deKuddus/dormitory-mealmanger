import React, { useState } from 'react';
import Sidebar from '@/Shared/Layout/Sidebar';
import Header from '@/Shared/Layout/Header';
import {Head} from "@inertiajs/react";

const AuthenticationLayout = ({title,children}) => {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <>
        <Head title={title} />
        <div className='dark:bg-boxdark-2 dark:text-bodydark'>
            {/* <!-- ===== Page Wrapper Start ===== --> */}
            <div className='flex h-screen overflow-hidden'>
                {/* <!-- ===== Sidebar Start ===== --> */}
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                {/* <!-- ===== Sidebar End ===== --> */}

                {/* <!-- ===== Content Area Start ===== --> */}
                <div className='relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden'>
                    {/* <!-- ===== Header Start ===== --> */}
                    <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                    {/* <!-- ===== Header End ===== --> */}

                    {/* <!-- ===== Main Content Start ===== --> */}
                    <main>
                        <div className='mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10'>
                            {children}
                        </div>
                    </main>
                    {/* <!-- ===== Main Content End ===== --> */}
                    {/*<footer className="sm:hidden fixed bottom-0 w-full bg-white border-t border-gray-200 ">*/}
                    {/*    <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8 flex justify-between items-center">*/}
                    {/*        <div className="text-gray-600">*/}
                    {/*            <p className="text-sm">Your App Name</p>*/}
                    {/*            <p className="text-xs">Version 1.0.0</p>*/}
                    {/*        </div>*/}
                    {/*        <div className="text-gray-400 text-xs">*/}
                    {/*            <p>Copyright © 2023</p>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</footer>*/}

                </div>
                {/* <!-- ===== Content Area End ===== --> */}


            </div>
            {/* <!-- ===== Page Wrapper End ===== --> */}
        </div>
        </>
    )
}

export default AuthenticationLayout;
