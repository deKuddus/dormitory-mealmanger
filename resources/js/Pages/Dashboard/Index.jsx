import React, {useState} from "react";
import Layout from "@/Shared/Layout";
import {router, usePage} from "@inertiajs/react";


const Dashboard = () => {
    const {data} = usePage().props;

    const handleMonthCloseRequest = () => {
        return router.post(route("month.close"))
    }

    return (
        <div>
            <div className="col-span-full mb-5">
               <div className="flex items-center justify-end">
                   <button  className="btn-indigo" onClick={handleMonthCloseRequest}>
                       Close Month
                   </button>
               </div>
            </div>
            <div className="col-span-full mb-5">
                <h6 className="mb-4 text-xl font-bold border-b">Meal</h6>
                <div className="grid gap-4 lg:gap-8 md:grid-cols-3">
                    <div className="relative p-6 rounded-xl bg-buttonColor-100 shadow">
                        <div className="space-y-2 text-white text-center">
                            <div className="flex items-center space-x-2 rtl:space-x-reverse text-xl font-medium ">
                                <span>Today's Meal : {data.todaysMeal}</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative p-6 rounded-xl bg-buttonColor-200 shadow">
                        <div className="space-y-2 text-white">
                            <div className="flex items-center space-x-2 rtl:space-x-reverse text-xl font-medium ">
                                <span>Total Meal : {data.totalMeal} </span>
                            </div>
                        </div>
                    </div>
                    <div className="relative p-6 rounded-xl bg-buttonColor-300 shadow">
                        <div className="space-y-2 text-white">
                            <div className="flex items-center space-x-2 rtl:space-x-reverse text-xl font-medium ">
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
                            <div className="flex items-center space-x-2 rtl:space-x-reverse text-xl font-medium ">
                                <span>Meal Charge : {parseFloat(data.bazar / data.totalMeal).toFixed(2)} BDT</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative p-6 rounded-xl bg-buttonColor-500 shadow">
                        <div className="space-y-2 text-white">
                            <div className="flex items-center space-x-2 rtl:space-x-reverse text-xl font-medium ">
                                <span>Total Deposit : {parseFloat(data.bazar).toFixed(2)} BDT</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative p-6 rounded-xl bg-buttonColor-600 shadow">
                        <div className="space-y-2 text-white">
                            <div className="flex items-center space-x-2 rtl:space-x-reverse text-xl font-medium ">
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
                            <div className="flex items-center space-x-2 rtl:space-x-reverse text-xl font-medium ">
                                <span>Active : {data.users.active}</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative p-6 rounded-xl bg-buttonColor-800 shadow">
                        <div className="space-y-2 text-white">
                            <div className="flex items-center space-x-2 rtl:space-x-reverse text-xl font-medium ">
                                <span>Inactive : {data.users.inactive} </span>
                            </div>
                        </div>
                    </div>
                    <div className="relative p-6 rounded-xl bg-buttonColor-900 shadow">
                        <div className="space-y-2 text-white">
                            <div className="flex items-center space-x-2 rtl:space-x-reverse text-xl font-medium ">
                                <span>Total : {data.users.active + data.users.inactive} </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Persistent layout
// Docs: https://inertiajs.com/pages#persistent-layouts
Dashboard.layout = (page) =>
    <Layout title="Dashboard" children={page}/>
;

export default Dashboard;
