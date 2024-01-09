import React, {useState} from "react";
import MemberLayout from "@/Shared/Layout/AuthenticatedLayout";
import {Link, router, usePage} from "@inertiajs/react";
import Icon from "@/Shared/Icon";
import moment from "moment";
import MealEditModal from "@/Pages/Meal/MealEditModal";
import Card from "@/Shared/Card";
import TableHeader from "@/Shared/TableHeader";
import TableData from "@/Shared/TableData";
import TableAction from "@/Shared/TableAction";

const Index = () => {
    const {
        member_deposit,
        auth,
        meals,
        mealCharge,
        due,
        totalCost,
        fixedCost,
        totalMeal,
        todaysMeal,
        userMealCount
    } = usePage().props;
    const [isCheck, setIsCheck] = useState(auth.user.meal_status === 1);
    const mealEditInitialObject = {
        id: undefined,
        break_fast: 0,
        lunch: 0,
        dinner: 0,
        created_at: "",
        user: "",
        user_id: 0,
    };

    const [mealData, setMealData] = useState(mealEditInitialObject);
    const [open, setOpen] = useState(false);

    const handleMealStatusUpdate = (value) => {
        setIsCheck(value);
        return router.post(route("user.meal.update"), {
            user_id: auth.user.id,
            status: value,
        });
    };

    const handleMealEdit = (id, break_fast, lunch, dinner, created_at) => {
        setMealData({
            id,
            break_fast,
            lunch,
            dinner,
            created_at,
        });
        setOpen(true);
    };

    const handleUpdateMela = () => {
        router.post(route("user.meal.update.each"), mealData);
        setOpen(false);
        setMealData(mealEditInitialObject);
    };

    const handleAvailableBalance = () => {
        if (member_deposit <= 0) {
            return 0;
        }

        let balance = parseFloat(member_deposit - totalCost, 2).toFixed(2);
        if (balance > 0) {
            return balance;
        }
        return 0;
    }

    return (
        <>
            <div
                className='rounded-lg border border-stroke bg-white mb-5 shadow-default dark:border-strokedark dark:bg-boxdark'>
                <div className="flex items-center justify-between p-2">
                    <div>
                        <h6 className="mb-4 text-xl font-bold pt-4 px-4">
                            Quick Meal On/Off
                        </h6>
                    </div>
                    <div>
                        <label htmlFor='toggle1'
                               className='flex cursor-pointer select-none items-center'>
                            <div className="relative">
                                <input
                                    disabled={userMealCount === 0}
                                    type="checkbox"
                                    id='toggle1'
                                    onChange={(e) =>
                                        handleMealStatusUpdate(
                                            e.target.checked
                                        )
                                    }
                                    defaultChecked={isCheck}
                                    className="sr-only"
                                />
                                <div className='dark:bg-[#5A616B] block h-8 w-14 rounded-full bg-meta-9'></div>
                                <div
                                    className={`absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition ${
                                        isCheck && totalMeal !== 0 ? '!right-1 !translate-x-full !bg-background-600' : ''
                                    }`}
                                ></div>
                            </div>
                        </label>
                    </div>
                </div>
            </div>

            <div
                className='rounded-lg border border-stroke bg-white mb-5 shadow-default dark:border-strokedark dark:bg-boxdark'>
                <div className="flex items-center justify-between p-2">
                    <div>
                        <h6 className="mb-4 text-xl font-bold pt-4 px-4">
                            All Meal calendar view
                        </h6>
                    </div>
                    <Link
                        href={route("member.meal.calender.view")}
                        className="rounded border-gray-300 bg-green-600 shadow p-4"
                    >
                        <Icon name={"FaEye"} className="text-white"/>
                    </Link>
                </div>
            </div>

            <div
                className='rounded-lg border border-stroke bg-white mb-5 shadow-default dark:border-strokedark dark:bg-boxdark'>
                <div className="flex items-center justify-between p-2">
                    <div>
                        <h6 className="mb-4 text-xl font-bold pt-4 px-4">
                            Stats of{" "}
                            <span className="text-2xl">
                                {moment().format("MMMM YYYY")}
                            </span>
                        </h6>
                    </div>
                    <Link
                        href={route("user.meal.show")}
                        className="rounded border-gray-300 bg-background-200 shadow p-4"
                    >
                        <Icon name={"FaEye"} className="text-white"/>
                    </Link>
                </div>
            </div>

            <div
                className='rounded-lg border border-stroke bg-white mb-5 shadow-default dark:border-strokedark dark:bg-boxdark p-5'>
                <div className="col-span-full mb-5">
                    <div className='grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 xl:grid-cols-3 2xl:gap-7.5'>
                        <Card
                            value={`Lunch : ${todaysMeal?.lunch_total || 0} Dinner: ${todaysMeal?.dinner_total || 0}`}
                            text="Today's Dorm Meal"
                            icon={'FaRegSnowflake'}
                            bgName="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white"
                            iconClass="text-success"
                        />

                        <Card
                            value={totalMeal}
                            text="My Meal"
                            icon={'FaRegSnowflake'}
                            bgName="bg-gradient-to-bl from-green-500 via-blue-500 to-purple-500 text-white"
                            iconClass="text-success"
                        />
                        <Card
                            value={`${mealCharge} BDT`}
                            text="Meal Charge"
                            icon={'FaRegSnowflake'}
                            bgName="bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                            iconClass="text-success"
                        />
                        <Card
                            value={`${totalCost} BDT`}
                            text="Total Cost "
                            icon={'FaMoneyBillWave'}
                            bgName="bg-gradient-to-tl from-green-400  from-20% to-blue-500 to-80% text-white"
                            iconClass="text-success"
                        />
                        <Card
                            value={`${handleAvailableBalance()} BDT`}
                            text="Available Balance"
                            icon={'FaMoneyBillWaveAlt'}
                            bgName="bg-gradient-to-br from-green-500 via-blue-500 to-purple-500 text-white"
                            iconClass="text-success"
                        />
                        <Card
                            value={`${due} BDT`}
                            text="My Due"
                            icon={'FaMoneyBillAlt'}
                            bgName="bg-gradient-to-r from-pink-500  to-danger text-white"
                            iconClass="text-success"
                        />
                    </div>
                </div>
            </div>
            <div
                className='rounded-lg border border-stroke bg-white p-5 shadow-default dark:border-strokedark dark:bg-boxdark'>
                <h2 className='text-title-md2 mb-10 font-semibold text-black dark:text-white'>
                    Meal Plan
                </h2>
                <div className='max-w-full overflow-x-auto'>
                    <table className='w-full table-auto'>
                        <TableHeader rows={['Date', 'Lunch', 'Dinner', 'Edit']}/>
                        <tbody>
                        {meals && meals.length ?
                            meals.map(
                                (
                                    {
                                        id,
                                        lunch,
                                        break_fast,
                                        dinner,
                                        is_editable,
                                        created_at,
                                    },
                                    key
                                ) => (
                                    <tr
                                        key={key}
                                    >
                                        <TableData value={moment(created_at).format("D MMM, dddd")}/>
                                        <TableData value={lunch}/>
                                        <TableData value={dinner}/>

                                        <TableAction>
                                            <button
                                                disabled={
                                                    !is_editable
                                                }
                                                onClick={() =>
                                                    handleMealEdit(
                                                        id,
                                                        break_fast,
                                                        lunch,
                                                        dinner,
                                                        created_at
                                                    )
                                                }
                                                className={`inline-flex ${
                                                    !is_editable
                                                        ? " opacity-10"
                                                        : ""
                                                } items-center justify-center gap-0.5 focus:outline-none focus:underline`}
                                            >
                                                <Icon
                                                    name="FaEdit"
                                                    className="w-6 h-4 text-gray-400 hover:text-buttonColor-400 fill-current cursor-pointer"
                                                />
                                            </button>
                                        </TableAction>
                                    </tr>
                                )
                            ) : (
                                <tr>
                                    <TableData value={'No Data Found'} colSpan={4}
                                               className="text-center text-black dark:text-white"/>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            {open && (
                <MealEditModal
                    mealData={mealData}
                    setOpen={setOpen}
                    setMealData={setMealData}
                    open={open}
                    handleConfirm={handleUpdateMela}
                />
            )}
        </>
    );
};

Index.layout = (page) => <MemberLayout title="Dashboard" children={page}/>;

export default Index;
