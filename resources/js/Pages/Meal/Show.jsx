import React from "react";
import {Link, router, usePage} from "@inertiajs/react";
import Layout from "@/Shared/Layout";
import SelectInput from "@/Shared/SelectInput";
import moment from 'moment';



const Index = () => {
    const {user,balance} = usePage().props;


    return (
        <div>
            <h1 className="mb-8 text-3xl font-bold">Meals</h1>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
                <div className="flex items-center"></div>
                <div className="flex items-center">
                    <div className="relative z-30 w-64 px-4 py-6 mt-2">
                        <SelectInput
                            label="Month"
                            name="month"
                            value={0}
                            onChange={() => alert(3)}
                        >
                            <option value=""></option>
                            <option value="with">With Trashed</option>
                            <option value="only">Only Trashed</option>
                        </SelectInput>
                    </div>
                </div>
            </div>
            <div className="overflow-x-auto bg-white rounded shadow p-3">

                <div className="col-span-full mb-5">
                    <div className="grid gap-4 lg:gap-8 md:grid-cols-3">
                        <div className="relative p-6 rounded-xl">
                            <div className="space-y-2 text-white text-center">
                                <div
                                    className="flex flex-col items-center space-x-2 rtl:space-x-reverse text-xl font-medium ">
                                    <span className="text-xxl font-bold text-gray-900"> {user.first_name} {user.last_name}</span>
                                    <span className="text-sm text-gray-900">Balance {balance} BDT</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative p-6 rounded-xl">
                            <div className="space-y-2 text-white">
                                <div
                                    className="flex flex-col items-center space-x-2 rtl:space-x-reverse text-xl font-medium ">
                                    <span className="text-buttonColor-400">Meal Charge: 50 BDT </span>
                                    <span className="text-gray-900 text-xl font-bold ">Total Meal : 50 </span>
                                    <span className="text-gray-900 text-xl font-bold">Fixed Cost : 50 BDT</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative p-6 rounded-xl">
                            <div className="space-y-2 text-white">
                                <div
                                    className="flex flex-col items-center space-x-2 rtl:space-x-reverse text-xl font-medium ">
                                    <span className="text-red-600 text-xl font-bold ">Total Due: 50 BDT </span>
                                    <span className="text-gray-900 text-xl font-bold ">Total Cost : 50 </span>
                                    <span className="text-gray-900 text-xl font-bold">Total Fixed Cost : 50 BDT</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <table className="w-full whitespace-nowrap">
                    <thead>
                    <tr className="font-bold text-left">
                        <th className="px-6 pt-5 pb-4 border">Date</th>
                        <th className="px-6 pt-5 pb-4 border">Break Fast</th>
                        <th className="px-6 pt-5 pb-4 border">Lunch</th>
                        <th className="px-6 pt-5 pb-4 border">Dinner</th>
                    </tr>
                    </thead>
                    <tbody>
                    {user.meals ? user.meals.map(({id, break_fast, lunch, dinner, created_at}, key) => (
                        <tr
                            key={key}
                            className="hover:bg-gray-100 focus-within:bg-gray-100"
                        >
                            <td className="border">
                                <p className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">
                                    {moment(created_at).format('Do MMMM YYYY')}
                                </p>
                            </td>
                            <td className="border">
                                <p className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">
                                    {break_fast}
                                </p>
                            </td>
                            <td className="border">
                                <p className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">
                                    {lunch}
                                </p>
                            </td>

                            <td className="border">
                                {dinner}
                            </td>
                        </tr>
                    )) : (
                        <tr>
                            <td className="px-6 py-4 border-t" colSpan="6">
                                No Meal found.
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

Index.layout = (page) => <Layout title="Meal details" children={page}/>;

export default Index;
