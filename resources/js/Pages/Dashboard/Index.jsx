import React from "react";
import Layout from "@/Shared/Layout";
import { Fa500Px } from "react-icons/fa";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "top",
        },
        title: {
            display: true,
            text: "Chart.js Line Chart",
        },
    },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
    labels,
    datasets: [
        {
            label: "Dataset 1",
            data: [12, 15, 20, 5, 45, 200, 60],
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
        {
            label: "Dataset 2",
            data: [10, 25, 80, 45, 95, 150, 90],
            borderColor: "rgb(53, 162, 235)",
            backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
    ],
};

const Dashboard = () => {
    return (
        <div>
            <div className="col-span-full mb-5">
                <h6 className="mb-4 text-xl font-bold border-b">Meal</h6>
                <div className="grid gap-4 lg:gap-8 md:grid-cols-3">
                    <div className="relative p-6 rounded-xl bg-buttonColor-100 shadow">
                        <div className="space-y-2 text-white text-center">
                            <div className="flex items-center space-x-2 rtl:space-x-reverse text-xl font-medium ">
                                <span>Today's Meal : 100 </span>
                            </div>
                        </div>
                    </div>
                    <div className="relative p-6 rounded-xl bg-buttonColor-200 shadow">
                        <div className="space-y-2 text-white">
                            <div className="flex items-center space-x-2 rtl:space-x-reverse text-xl font-medium ">
                                <span>Total Meal : 100 </span>
                            </div>
                        </div>
                    </div>
                    <div className="relative p-6 rounded-xl bg-buttonColor-300 shadow">
                        <div className="space-y-2 text-white">
                            <div className="flex items-center space-x-2 rtl:space-x-reverse text-xl font-medium ">
                                <span>Average Meal : 100 </span>
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
                                <span>Meal Charge : 100 BDT</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative p-6 rounded-xl bg-buttonColor-500 shadow">
                        <div className="space-y-2 text-white">
                            <div className="flex items-center space-x-2 rtl:space-x-reverse text-xl font-medium ">
                                <span>Total Deposit : 100 BDT</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative p-6 rounded-xl bg-buttonColor-600 shadow">
                        <div className="space-y-2 text-white">
                            <div className="flex items-center space-x-2 rtl:space-x-reverse text-xl font-medium ">
                                <span>Total Cost : 100 BDT </span>
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
                                <span>Active : 50</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative p-6 rounded-xl bg-buttonColor-800 shadow">
                        <div className="space-y-2 text-white">
                            <div className="flex items-center space-x-2 rtl:space-x-reverse text-xl font-medium ">
                                <span>Inactive : 10 </span>
                            </div>
                        </div>
                    </div>
                    <div className="relative p-6 rounded-xl bg-buttonColor-900 shadow">
                        <div className="space-y-2 text-white">
                            <div className="flex items-center space-x-2 rtl:space-x-reverse text-xl font-medium ">
                                <span>Total : 100 </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:gap-8 lg:grid-cols-2 mb-6">
                <div className="p-2 space-y-2 bg-white rounded-xl shadow ">
                    <div className="space-y-2">
                        <div className="px-4 py-2 space-y-4">
                            <div className="flex items-center justify-between gap-8">
                                <h2 className="text-xl font-semibold">
                                    Orders per month
                                </h2>
                            </div>
                            <div
                                aria-hidden="true"
                                className="filament-hr border-t dark:border-gray-700"
                            ></div>
                            <Line options={options} data={data} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Persistent layout
// Docs: https://inertiajs.com/pages#persistent-layouts
Dashboard.layout = (page) => <Layout title="Dashboard" children={page} />;

export default Dashboard;
