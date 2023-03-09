import React from "react";
import Layout from "@/Shared/Layout";
import {usePage} from "@inertiajs/react";


const Dashboard = () => {
    const {data} = usePage().props;
    return (
        <div>
            <label className="relative inline-flex items-center mb-5 cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                    <div
                        class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Small toggle</span>
            </label>
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
