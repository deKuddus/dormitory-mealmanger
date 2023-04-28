import React from "react";
import Layout from "@/Shared/Layout/AuthenticatedLayout";
import {router, usePage} from "@inertiajs/react";
import {isUserPermittedToPerformAction} from "@/utils";
import Card from '@/Shared/Card'


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
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="col-span-full mb-5">
                    <span className="font-bold">Today's Meal: <span className="text-indigo-700">{data?.todaysMeal?.lunch_total || 0} Lunch</span> & <span className="text-pink-600">{data?.todaysMeal?.dinner_total || 0} Dinner</span> </span>
                </div>

                <div className="flex gap-2 col-span-full mb-5">
                    {isUserPermittedToPerformAction('access::month-close', user_permissions) && (
                        <button className="inline-flex items-center justify-center bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10" onClick={handleMonthCloseRequest}>
                            Close Month
                        </button>

                    )}
                    {isUserPermittedToPerformAction('access::month-start', user_permissions) && (
                        <button className="inline-flex items-center justify-center bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10" onClick={handleMonthStart}>
                            Start New Month
                        </button>
                    )}
                </div>
            </div>
            {isUserPermittedToPerformAction('access::dashboard-show', user_permissions) ?
                (<>
                    <div className="col-span-full mb-5">
                        <h6 className="mb-4 text-xl font-bold">Meal</h6>

                        <div className='grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 xl:grid-cols-3 2xl:gap-7.5'>
                            <Card value={data.todaysTotalMeal} text="Today's Meal" icon={'FaRegSnowflake'}/>
                            <Card value={data.totalMeal} text="Total Meal" icon={'FaRegSnowflake'}/>
                            <Card value={parseFloat(data.totalMeal / data.member).toFixed(2)} text="Average Meal" icon={'FaRegSnowflake'}/>
                        </div>
                    </div>
                    <div className="col-span-full mb-5">
                        <h6 className="mb-4 text-xl font-bold ">Cash</h6>
                        <div className='grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 xl:grid-cols-3 2xl:gap-7.5'>
                            <Card value={`${parseFloat(data.bazar / data.totalMeal).toFixed(2)} BDT`} text="Meal Charge" icon={'FaRegSnowflake'}/>
                            <Card value={`${parseFloat(data.balance).toFixed(2)} BDT`} text="Total Deposit" icon={'FaRegSnowflake'}/>
                            <Card value={`${parseFloat(data.bazar + data.additional).toFixed(2)} BDT`} text="Total Cost" icon={'FaRegSnowflake'}/>
                        </div>
                    </div>
                    <div className="col-span-full mb-5">
                        <h6 className="mb-4 text-xl font-bold ">Members</h6>

                        <div className='grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 xl:grid-cols-3 2xl:gap-7.5'>
                            <Card value={data.users.active} text="Active" icon={'FaRegSnowflake'}/>
                            <Card value={data.users.inactive} text="Inactive" icon={'FaRegSnowflake'}/>
                            <Card value={data.users.active + data.users.inactive} text="Total" icon={'FaRegSnowflake'}/>
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
    <Layout title="Dashboard" children={page}/>
;

export default Dashboard;
