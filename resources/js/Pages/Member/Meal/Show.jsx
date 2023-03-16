import React, {useEffect, useState} from "react";
import {Link, router, usePage} from "@inertiajs/react";
import MemberLayout from "@/Shared/Member/MemberLayout";
import SelectInput from "@/Shared/SelectInput";
import moment from 'moment';
import {currentYearMontList} from "@/utils";
import Icon from "@/Shared/Icon";
import MealEditModal from "@/Pages/Meal/MealEditModal";


const Show = () => {
    const {user, balance, member, additional, bazar, totalMeal} = usePage().props;
    const [currentMonth, setCurrentMonth] = useState(moment().format('MMMM-YYYY'));
    const mealEditInitialObject = {
        id: undefined,
        break_fast: 0,
        lunch: 0,
        dinner: 0,
        created_at: '',
        user: '',
        user_id: 0
    };
    const [mealData, setMealData] = useState(mealEditInitialObject);
    const [open, setOpen] = useState(false);
    const mealCost = parseFloat(bazar / totalMeal.total_meals).toFixed(2);
    const totalMealCost = parseFloat(user.total_meals * mealCost).toFixed(2);
    const fixedCost = parseFloat(additional / member).toFixed(2);
    const dateOptions = currentYearMontList();

    const handleDateChange = (value) => {
        if (value) {
            return router.get(route('user.meal.show'), {month: value}, {
                replace: true,
                preserveState: true,
            });

        }
    }


    const handleMealEdit = (id, break_fast, lunch, dinner, created_at) => {
        setMealData({
            id,
            break_fast,
            lunch,
            dinner,
            created_at,

        })
        setOpen(true);
    }


    const handleUpdateMela = () => {
        router.post(route('user.meal.update.each'), mealData);
        setOpen(false);
        setMealData(mealEditInitialObject);
    }


    return (
        <div>
            <MealEditModal mealData={mealData} setOpen={setOpen} setMealData={setMealData} open={open}
                           handleConfirm={handleUpdateMela}/>
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
                                    <span className="text-xxl font-bold text-gray-900"> {user.name}</span>
                                    <span className="text-sm text-gray-900">Balance {balance} BDT</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative p-6 rounded-xl">
                            <div className="space-y-2 text-white">
                                <div
                                    className="flex flex-col items-center space-x-2 rtl:space-x-reverse text-xl font-medium ">
                                    <span className="text-buttonColor-400">Meal Charge: {mealCost} BDT </span>
                                    <span
                                        className="text-gray-900 text-xl font-bold ">Total Meal : {user.total_meals} </span>
                                    <span
                                        className="text-gray-900 text-xl font-bold">Fixed Cost : {fixedCost} BDT</span>
                                    <span
                                        className="text-gray-900 text-xl font-bold">Bazar : {bazar} BDT</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative p-6 rounded-xl">
                            <div className="space-y-2 text-white">
                                <div
                                    className="flex flex-col items-center space-x-2 rtl:space-x-reverse text-xl font-medium ">
                                    <span className="text-red-600 text-xl font-bold ">Total Due: 50 BDT </span>
                                    <span
                                        className="text-gray-900 text-xl font-bold ">Total Cost : {totalMealCost} </span>
                                    <span
                                        className="text-gray-900 text-xl font-bold">Total Fixed Cost : {fixedCost} BDT</span>
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
                        <th className="px-6 pt-5 pb-4 border">Action</th>
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

                            <td className="border w-px border-t p-3 whitespace-nowrap">
                                <div className="flex items-center gap-2 justify-end">
                                    <button
                                        onClick={() => handleMealEdit(id, break_fast, lunch, dinner, created_at)}
                                        className="inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline"
                                    >
                                        <Icon
                                            name="FaEdit"
                                            className="w-6 h-4 text-gray-400 hover:text-buttonColor-400 fill-current cursor-pointer"
                                        />
                                    </button>
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

Show.layout = (page) => <MemberLayout title="Meal details" children={page}/>;

export default Show;
