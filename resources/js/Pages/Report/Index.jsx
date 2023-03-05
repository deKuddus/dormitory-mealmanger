import React, {useState} from "react";
import {Link, router, usePage} from "@inertiajs/react";
import Layout from "@/Shared/Layout";
import SelectInput from "@/Shared/SelectInput";
import moment from 'moment';
import {currentYearMontList} from "@/utils";
import Icon from "@/Shared/Icon";

const Index = () => {
    const {users, balance, member, additional, bazar, totalMeal} = usePage().props;
    const [currentMonth, setCurrentMonth] = useState(moment().format('MMMM-YYYY'));

    const mealCost = parseFloat(bazar / totalMeal.total_meals).toFixed(2);
    const fixedCost = parseFloat(additional / member).toFixed(2);
    const dateOptions = currentYearMontList();

    const handleDateChange = (value) => {
        if (value) {
            return router.get(route('report.index'), {month: value}, {
                replace: true,
                preserveState: true,
            });

        }
    }


    return (
        <div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
                <div className="flex items-center">
                    <h1 className="text-3xl font-bold">Meals</h1>
                </div>
                <div className="flex items-center">
                    <div className="relative z-30 w-64 px-4 py-6 mt-2">
                        <SelectInput
                            label="Month"
                            name="month"
                            value={currentMonth}
                            onChange={(e) => {
                                setCurrentMonth(e.target.value);
                                handleDateChange(e.target.value);
                            }}
                        >
                            {dateOptions && dateOptions.map((row, key) => (<option key={key} value={row}
                                                                                   defaultValue={moment().format('MMMM-YYYY')}>{row}</option>))}
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
                                    <span className="text-xxl font-bold text-gray-900">WP Dormitory </span>
                                    <span className="text-sm text-gray-900">Balance : {balance} BDT</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative p-6 rounded-xl">
                            <div className="space-y-2 text-white">
                                <div
                                    className="flex flex-col items-center space-x-2 rtl:space-x-reverse text-xl font-medium ">
                                    <span className="text-buttonColor-400">Meal Charge: {mealCost} BDT </span>
                                    <span
                                        className="text-gray-900 text-xl font-bold ">Total Meal : {totalMeal.total_meals} </span>
                                    <span
                                        className="text-gray-900 text-xl font-bold">Fixed Cost : {fixedCost} BDT</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative p-6 rounded-xl">
                            <div className="space-y-2 text-white">
                                <div
                                    className="flex flex-col items-center space-x-2 rtl:space-x-reverse text-xl font-medium ">
                                    <span className="text-red-600 text-xl font-bold ">Total Due: 50 BDT </span>
                                    <span
                                        className="text-gray-900 text-xl font-bold ">Total Cost : {bazar} BDT</span>
                                    <span
                                        className="text-gray-900 text-xl font-bold">Total Fixed Cost : {additional} BDT</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <table className="w-full whitespace-nowrap">
                    <thead>
                    <tr className="font-bold text-left">
                        <th className="px-6 pt-5 pb-4 border">No</th>
                        <th className="px-6 pt-5 pb-4 border">Name</th>
                        <th className="px-6 pt-5 pb-4 border">Total Meal</th>
                        <th className="px-6 pt-5 pb-4 border">Total Deposit</th>
                        <th className="px-6 pt-5 pb-4 border">Total Cost</th>
                        <th className="px-6 pt-5 pb-4 border">Due (BDT)</th>
                        <th className="px-6 pt-5 pb-4 border">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users ? users.map(({id, name, meals_total, deposits}, key) => (
                        <tr
                            key={key}
                            className="hover:bg-gray-100 focus-within:bg-gray-100"
                        >
                            <td className="border">
                                <p className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">
                                    {key + 1}
                                </p>
                            </td>
                            <td className="border">
                                <p className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">
                                    {name}
                                </p>
                            </td>
                            <td className="border">
                                <p className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">
                                    {meals_total}
                                </p>
                            </td>
                            <td className="border">
                                <p className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">
                                    {deposits}
                                </p>
                            </td>

                            <td className="border">
                                <p className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">
                                    {parseFloat(mealCost * meals_total).toFixed(2)}
                                </p>
                            </td>

                            <td className="border">
                                <DueText deposit={deposits} cost={mealCost * meals_total}/>
                            </td>


                            <td className="border w-px border-t p-3 whitespace-nowrap">
                                <div className="flex items-center gap-2 justify-end">
                                    <Link
                                        href={route('meals.show',id)}
                                        className="inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline"
                                    >
                                        <Icon
                                            name="FaEye"
                                            className="w-6 h-4 text-gray-400 hover:text-buttonColor-400 fill-current cursor-pointer"
                                        />
                                    </Link>
                                </div>
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

const DueText = ({deposit, cost}) => {
    let result = parseFloat(deposit - cost).toFixed(2);
    if (result < 0) {
        return (<p className="flex items-center text-red-400  px-6 py-4 focus:text-indigo-700 focus:outline-none">
            {result}
        </p>);
    } else {
        return (<p className="flex items-center text-green-400 px-6 py-4 focus:text-indigo-700 focus:outline-none">
            {result}
        </p>);
    }
}

Index.layout = (page) => <Layout title="Meal Report" children={page}/>;

export default Index;
