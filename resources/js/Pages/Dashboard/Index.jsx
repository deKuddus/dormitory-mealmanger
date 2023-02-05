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
            <h1 className="mb-8 text-3xl font-bold">Dashboard</h1>
            <div className="col-span-full mb-5">
                <div className="grid gap-4 lg:gap-8 md:grid-cols-3">
                    <div className="relative p-6 rounded-2xl bg-white shadow">
                        <div className="space-y-2">
                            <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-800 ">
                                <span>Revenue</span>
                                <Fa500Px />
                            </div>

                            <div className="text-3xl">$192.1k</div>

                            <div className="flex items-center space-x-1 rtl:space-x-reverse text-sm font-medium text-blue-600 ">
                                <span>32k increase</span>
                                <svg
                                    className="w-4 h-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>{" "}
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
