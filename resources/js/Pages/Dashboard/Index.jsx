import React from "react";
import Layouts from "@/Shared/Layouts";
import {router, usePage} from "@inertiajs/react";
import {isUserPermittedToPerformAction} from "@/utils";


const Dashboard = () => {
    const {data, user_permissions} = usePage().props;

    const handleMonthCloseRequest = () => {
        return router.post(route("month.close"))
    }

    const handleMonthStart = () => {
        router.post(route('new.month.start'));
    }

    return (
        <div>
            <div className="flex items-center gap-2 justify-between">
                <div className="col-span-full mb-5">
                    <span className="font-bold">Today's Meal: <span className="text-indigo-700">{data?.todaysMeal?.lunch_total || 0} Lunch</span> & <span className="text-pink-600">{data?.todaysMeal?.dinner_total || 0} Dinner</span> </span>
                </div>
                <div className="col-span-full mb-5">
                    {isUserPermittedToPerformAction('access::month-close', user_permissions) && (
                        <button className="btn-indigo mr-3" onClick={handleMonthCloseRequest}>
                            Close Month
                        </button>
                    )}
                    {isUserPermittedToPerformAction('access::month-start', user_permissions) && (
                        <button className="btn-indigo" onClick={handleMonthStart}>
                            Start New Month
                        </button>
                    )}
                </div>
            </div>
            {isUserPermittedToPerformAction('access::dashboard-show', user_permissions) ?
                (<>
                    <div className="col-span-full mb-5">
                        <h6 className="mb-4 text-xl font-bold border-b">Meal</h6>
                        <div className="grid gap-4 lg:gap-8 md:grid-cols-3">
                            <div className="relative p-6 rounded-xl bg-buttonColor-100 shadow">
                                <div className="space-y-2 text-white text-center">
                                    <div
                                        className="flex items-center space-x-2 rtl:space-x-reverse text-xl font-medium ">
                                        <span>Today's Meal : {data.todaysTotalMeal}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="relative p-6 rounded-xl bg-buttonColor-200 shadow">
                                <div className="space-y-2 text-white">
                                    <div
                                        className="flex items-center space-x-2 rtl:space-x-reverse text-xl font-medium ">
                                        <span>Total Meal : {data.totalMeal} </span>
                                    </div>
                                </div>
                            </div>
                            <div className="relative p-6 rounded-xl bg-buttonColor-300 shadow">
                                <div className="space-y-2 text-white">
                                    <div
                                        className="flex items-center space-x-2 rtl:space-x-reverse text-xl font-medium ">
                                        <span>Average Meal : {parseFloat(data.totalMeal / data.member).toFixed(2)} </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-full mb-5">
                        <h6 className="mb-4 text-xl font-bold border-b">Cash</h6>
                        <div className="grid gap-4 lg:gap-8 md:grid-cols-3">
                            <div className="relative p-6 rounded-xl bg-buttonColor-400 shadow">
                                <div className="space-y-2 text-white">
                                    <div
                                        className="flex items-center space-x-2 rtl:space-x-reverse text-xl font-medium ">
                                        <span>Meal Charge : {parseFloat(data.bazar / data.totalMeal).toFixed(2)} BDT</span>
                                    </div>
                                </div>
                            </div>
                            <div className="relative p-6 rounded-xl bg-buttonColor-500 shadow">
                                <div className="space-y-2 text-white">
                                    <div
                                        className="flex items-center space-x-2 rtl:space-x-reverse text-xl font-medium ">
                                        <span>Total Deposit : {parseFloat(data.balance).toFixed(2)} BDT</span>
                                    </div>
                                </div>
                            </div>
                            <div className="relative p-6 rounded-xl bg-buttonColor-600 shadow">
                                <div className="space-y-2 text-white">
                                    <div
                                        className="flex items-center space-x-2 rtl:space-x-reverse text-xl font-medium ">
                                        <span>Total Cost : {parseFloat(data.bazar + data.additional).toFixed(2)} BDT </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-full mb-5">
                        <h6 className="mb-4 text-xl font-bold border-b">Members</h6>
                        <div className="grid gap-4 lg:gap-8 md:grid-cols-3">
                            <div className="relative p-6 rounded-xl bg-buttonColor-700 shadow">
                                <div className="space-y-2 text-white">
                                    <div
                                        className="flex items-center space-x-2 rtl:space-x-reverse text-xl font-medium ">
                                        <span>Active : {data.users.active}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="relative p-6 rounded-xl bg-buttonColor-800 shadow">
                                <div className="space-y-2 text-white">
                                    <div
                                        className="flex items-center space-x-2 rtl:space-x-reverse text-xl font-medium ">
                                        <span>Inactive : {data.users.inactive} </span>
                                    </div>
                                </div>
                            </div>
                            <div className="relative p-6 rounded-xl bg-buttonColor-900 shadow">
                                <div className="space-y-2 text-white">
                                    <div
                                        className="flex items-center space-x-2 rtl:space-x-reverse text-xl font-medium ">
                                        <span>Total : {data.users.active + data.users.inactive} </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>) : (<>
                    <div className="col-span-full mb-5">
                        <div className="grid gap-4 text-center  md:grid-cols-1">
                            <div className="relative p-6 rounded-xl bg-white shadow">
                                <span className="text-xl font-bold"> You are not allowed to see dashboard Card. 🫣</span>
                            </div>
                        </div>
                    </div>
                </>)
            }
        </div>
    );
};


Dashboard.layout = (page) =>
    <Layouts title="Dashboard" children={page}/>
;

export default Dashboard;
