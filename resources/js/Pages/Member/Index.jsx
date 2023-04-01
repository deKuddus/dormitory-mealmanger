import React, {useState} from "react";
import MemberLayout from "@/Shared/Member/MemberLayout";
import {Link, router, usePage} from "@inertiajs/react";
import Icon from "@/Shared/Icon";
import moment from "moment";
import MealEditModal from "@/Pages/Meal/MealEditModal";


const Index = () => {
    const {auth, meals, mealCharge, due, totalCost, fixedCost, totalMeal,todaysMeal} = usePage().props;
    const [isCheck, setIsCheck] = useState(auth.user.meal_status === 1)
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


    const handleMealStatusUpdate = (value) => {
        setIsCheck(value);
        return router.post(route('user.meal.update'), {
            user_id: auth.user.id,
            status: value,
        })
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
            <div className="col-span-full mb-5">
                <h6 className="mb-4 text-xl font-bold border-b">Meal</h6>
                <div className="grid gap-4 lg:gap-8 md:grid-cols-1">
                    <div className="relative p-6 rounded-xl bg-white shadow">
                        <div className="space-y-2 text-white text-center">
                            <div className="flex items-center justify-between space-x-2 ">
                                <span className="flex flex-col justify-left text-gray-900">
                                    <span className="text-xl font-medium">Meal Status</span>
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
                        <h6 className="mb-4 text-xl font-bold pt-4 px-4">Stats of <span
                            className="text-2xl">{moment().format('MMMM YYYY')}</span></h6>
                    </div>
                    <Link href={route("user.meal.show")} className="rounded border shadow p-4">
                        <Icon name={'FaEye'}/>
                    </Link>
                </div>
                <div className="grid gap-4 lg:gap-8 md:grid-cols-2 lg:grid-cols-2 p-5">
                    <div className="relative p-4 lg:p-6 rounded-xl bg-boxColor-300 ">
                        <div
                            className="flex items-center space-x-2 space-y-2 text-gray-900 text-sm md:text-md lg:text-xl font-medium ">
                            <div className="text-xl px-4">
                                <span className="font-bold">Today's Meal</span>
                                <span className="text-blue-600 mr-4 ml-3">Lunch : {todaysMeal.lunch_total}</span>
                                <span className="text-pink-600">Dinner: {todaysMeal.dinner_total}</span>
                            </div>
                        </div>
                    </div>

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
                                <th className="px-6 pt-5 pb-4">Lunch</th>
                                <th className="px-6 pt-5 pb-4">Dinner</th>
                                <th className="px-6 pt-5 pb-4">Action</th>
                            </tr>
                            </thead>
                            <tbody>

                            {meals && meals.map(({id,lunch, dinner, break_fast,is_editable, created_at}, key) => (
                                <tr
                                    key={key}
                                    className="hover:bg-gray-100 focus-within:bg-gray-100"
                                >
                                    <td className="border">
                                        <p
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                        >
                                            {moment(created_at).format('D MMM YY')}
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
                                    <td className="border w-px border-t p-3 whitespace-nowrap">
                                        <div className="flex items-center gap-2 justify-end">
                                            <button
                                                disabled={!is_editable}
                                                onClick={() => handleMealEdit(id, break_fast, lunch, dinner, created_at)}
                                                className={`inline-flex ${!is_editable ? ' opacity-10' : ''} items-center justify-center gap-0.5 focus:outline-none focus:underline`}
                                            >
                                                <Icon
                                                    name="FaEdit"
                                                    className="w-6 h-4 text-gray-400 hover:text-buttonColor-400 fill-current cursor-pointer"
                                                />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {open && <MealEditModal mealData={mealData} setOpen={setOpen} setMealData={setMealData} open={open}
                                    handleConfirm={handleUpdateMela}/>}
        </div>

    );
};

Index.layout = (page) =>
    <MemberLayout title="Dashboard" children={page}/>
;

export default Index;
