import React, {useState} from "react";
import MemberLayout from "@/Shared/Member/MemberLayout";
import {Link, router, usePage} from "@inertiajs/react";
import Icon from "@/Shared/Icon";
import moment from "moment";


const Index = () => {
    const {auth, meals, mealCharge, due,totalCost, fixedCost,totalMeal} = usePage().props;
    const [isCheck, setIsCheck] = useState(auth.user.meal_status === 1)

    const handleMealStatusUpdate = (value) => {
        setIsCheck(value);
        return router.post(route('user.meal.update'), {
            user_id: auth.user.id,
            status: value,
        })
    }

    return (
        <div>
            <div className="col-span-full mb-5">
                <h6 className="mb-4 text-xl font-bold border-b">Meal</h6>
                <div className="grid gap-4 lg:gap-8 md:grid-cols-1">
                    <div className="relative p-6 rounded-xl bg-white shadow">
                        <div className="space-y-2 text-white text-center">
                            <div className="flex items-center justify-between space-x-2 ">
                                <span className="flex flex-col justify-left text-gray-900">
                                    <span className="text-xl font-medium">Meal Status</span>
                                    <Link className="text-sm text-left p-2" href={'/'}>Manual plan</Link>
                                </span>
                                <span>
                                    <label className="relative inline-flex items-center mb-5 cursor-pointer">
                                        <input type="checkbox"
                                               onChange={(e) => handleMealStatusUpdate(e.target.checked)}
                                               defaultChecked={isCheck} className="sr-only peer"/>
                                            <div
                                                className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    </label>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-full mb-5 rounded-xl bg-white shadow">
                <div className="flex items-center justify-between p-2">
                    <div>
                        <h6 className="mb-4 text-xl font-bold pt-4 px-4">Stats of <span className="text-2xl">{moment().format('MMMM YYYY')}</span></h6>
                        <Link href={route("user.meal.show")} className="mb-4 text-sm text-blue-400 pb-2 px-4">See Details</Link>
                    </div>
                    <button className="rounded border shadow p-4">
                        <Icon name={'FaEye'}/>
                    </button>
                </div>
                <div className="grid gap-4 lg:gap-8 md:grid-cols-2 lg:grid-cols-2 p-5">
                    <div className="relative p-4 lg:p-6 rounded-xl bg-boxColor-100 ">
                        <div
                            className="flex items-center space-x-2 space-y-2 text-gray-900 text-sm md:text-md lg:text-xl font-medium ">
                            <span>Total Meal : {totalMeal}</span>
                        </div>
                    </div>

                    <div className="relative p-4 lg:p-6 rounded-xl bg-boxColor-200 ">
                        <div
                            className="flex items-center space-y-2 text-gray-900 space-x-2 text-sm md:text-md lg:text-xl font-medium ">
                            <span>Meal Charge : {mealCharge} BDT</span>
                        </div>
                    </div>
                    <div className="relative p-4 lg:p-6 rounded-xl bg-boxColor-300 ">
                        <div
                            className="flex items-center space-y-2 text-gray-900 space-x-2 text-sm md:text-md lg:text-xl font-medium ">
                            <span>Total Cost : {totalCost} BDT</span>
                        </div>
                    </div>
                    <div className="relative p-4 lg:p-6 rounded-xl bg-boxColor-400 ">
                        <div
                            className="flex space-y-2 text-gray-900 items-center space-x-2  text-sm md:text-md lg:text-xl font-medium ">
                            <span>Fixed Cost : {fixedCost} BDT</span>
                        </div>
                    </div>
                    <div className="relative p-4 lg:p-6 rounded-xl bg-boxColor-100 ">
                        <div
                            className="flex space-y-2 text-red-600 items-center space-x-2 text-sm md:text-md lg:text-xl font-medium ">
                            <span>Total Due : {due} BDT</span>
                        </div>
                    </div>
                </div>

            </div>
            <div className="col-span-full mb-5 rounded-xl bg-white shadow">
                <div className="grid gap-4 lg:gap-8 grid-cols-1 p-5">
                    <div className="overflow-x-auto">
                        <table className="w-full whitespace-nowrap">
                            <thead>
                            <tr className="font-bold text-left">
                                <th className="px-6 pt-5 pb-4">Date</th>
                                <th className="px-6 pt-5 pb-4">Breakfast</th>
                                <th className="px-6 pt-5 pb-4">Lunch</th>
                                <th className="px-6 pt-5 pb-4">Dinner</th>
                            </tr>
                            </thead>
                            <tbody>

                            {meals && meals.map(({lunch, dinner, break_fast, created_at},key) => (
                                <tr
                                    key={key}
                                    className="hover:bg-gray-100 focus-within:bg-gray-100"
                                >
                                    <td className="border">
                                        <p
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                        >
                                            {moment(created_at).format('Do MMMM YYYY')}
                                        </p>
                                    </td>
                                    <td className="border">
                                        <p
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                        >
                                            {break_fast}
                                        </p>
                                    </td>
                                    <td className="border">
                                        <p
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                        >
                                            {lunch}
                                        </p>
                                    </td>
                                    <td className="border">
                                        <p
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                        >
                                            {dinner}
                                        </p>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

Index.layout = (page) =>
    <MemberLayout title="Dashboard" children={page}/>
;

export default Index;
