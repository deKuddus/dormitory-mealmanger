import React, {useState} from "react";
import {router, usePage} from "@inertiajs/react";
import Layout from "@/Shared/Layout/AuthenticatedLayout";
import SelectInput from "@/Shared/SelectInput";
import moment from "moment";
import {currentYearMontList, isUserPermittedToPerformAction} from "@/utils";
import Icon from "@/Shared/Icon";
import MealEditModal from "@/Pages/Meal/MealEditModal";
import TablePageLayout from "@/Shared/Layout/TablePageLayout";
import TableHeader from "@/Shared/TableHeader";
import TableData from "@/Shared/TableData";
import TableAction from "@/Shared/TableAction";

const Index = () => {
    const tableHeading = ['Date', 'Break Fast', 'Lunch', 'Dinner', 'Action'];
    const {
        user,
        balance,
        bazar,
        mealCost,
        totalMealCost,
        fixedCost,
        due,
        totalMeal,
        user_permissions,
    } = usePage().props;

    const [currentMonth, setCurrentMonth] = useState(
        moment().format("MMMM-YYYY")
    );
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

    const dateOptions = currentYearMontList();


    const handleDateChange = (value) => {

        if (value) {

            return router.get(
                route("meals.show", user.id),
                {month: value},
                {
                    replace: true,
                    preserveState: true,
                }
            );
        }
    };

    const handleMealEdit = (id, break_fast, lunch, dinner, created_at) => {
        setMealData({
            id,
            break_fast,
            lunch,
            dinner,
            created_at,
            user: user.name,
            user_id: user.id,
        });
        setOpen(true);
    };

    const handleUpdateMela = () => {
        router.post(route("meal.update"), mealData);
        setOpen(false);
        setMealData(mealEditInitialObject);
    };

    const Additional = () => {
        return (
            <>
                <div className="flex items-center justify-end">
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
                            {dateOptions &&
                                dateOptions.map((row, key) => (
                                    <option
                                        key={key}
                                        value={row}
                                        defaultValue={moment().format(
                                            "MMMM-YYYY"
                                        )}
                                    >
                                        {row}
                                    </option>
                                ))}
                        </SelectInput>
                    </div>
                </div>
                <div className="col-span-full mb-5">
                    <div className="grid gap-4 lg:gap-8 md:grid-cols-3">
                        <div className="relative p-6 rounded-xl">
                            <div className="space-y-2 text-black dark:text-white text-center">
                                <div
                                    className="flex flex-col items-center space-x-2 rtl:space-x-reverse text-xl font-medium ">
                                    <span className="text-xxl font-bold text-black dark:text-white">
                                        {" "}
                                        {user.name}
                                    </span>
                                    <span className="text-sm text-black dark:text-white">
                                        Balance {balance} BDT
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="relative p-6 rounded-xl">
                            <div className="space-y-2 text-white">
                                <div
                                    className="flex flex-col items-center space-x-2 rtl:space-x-reverse text-xl font-medium ">
                                    <span className="text-black dark:text-white">
                                        Meal Charge: {mealCost} BDT{" "}
                                    </span>
                                    <span className="text-black dark:text-white text-xl font-bold ">
                                        Total Meal : {totalMeal}{" "}
                                    </span>
                                    <span className="text-black dark:text-white text-xl font-bold">
                                        Fixed Cost : {fixedCost} BDT
                                    </span>
                                    <span className="text-black dark:text-white text-xl font-bold">
                                        Bazar : {bazar} BDT
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="relative p-6 rounded-xl">
                            <div className="space-y-2 text-white">
                                <div
                                    className="flex flex-col items-center space-x-2 rtl:space-x-reverse text-xl font-medium ">
                                    <span className="text-danger text-xl font-bold ">
                                        Total Due: {due} BDT{" "}
                                    </span>
                                    <span className="text-black dark:text-white text-xl font-bold ">
                                        Total Cost : {totalMealCost}{" "}
                                    </span>
                                    <span className="text-black dark:text-white text-xl font-bold">
                                        Total Fixed Cost : {fixedCost} BDT
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            {open && (
                <MealEditModal
                    mealData={mealData}
                    setOpen={setOpen}
                    setMealData={setMealData}
                    open={open}
                    handleConfirm={handleUpdateMela}
                />
            )}
            <TablePageLayout
                breadcumb_action={''}
                breadcumb_name={'Meal Details'}
                pagination_links={''}
                breadcumb_link={''}
                isShowButton={false}
                additionalComponent={<Additional/>}
            >
                <TableHeader rows={tableHeading}/>
                <tbody>
                {user.meals ? (
                    user.meals.map(
                        (
                            {
                                id,
                                break_fast,
                                lunch,
                                dinner,
                                created_at,
                            },
                            key
                        ) => (
                            <tr
                                key={key}
                            >
                                <TableData value={moment(created_at).format("Do MMMM YYYY")}/>
                                <TableData value={break_fast}/>
                                <TableData value={lunch}/>
                                <TableData value={dinner}/>
                                <TableAction>
                                    {isUserPermittedToPerformAction(
                                        "access::meal-edit",
                                        user_permissions
                                    ) && (
                                        <button
                                            onClick={() =>
                                                handleMealEdit(
                                                    id,
                                                    break_fast,
                                                    lunch,
                                                    dinner,
                                                    created_at
                                                )
                                            }
                                            className="inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline"
                                        >
                                            <Icon
                                                name="FaEdit"
                                                className="w-6 h-4 text-gray-400 hover:text-buttonColor-400 fill-current cursor-pointer"
                                            />
                                        </button>
                                    )}
                                </TableAction>
                            </tr>
                        )
                    )
                ) : (
                    <tr>
                        <TableData value={'No Data Found'} colSpan={tableHeading.length} className="text-center text-black dark:text-white"/>
                    </tr>
                )}
                </tbody>
            </TablePageLayout>

        </>
    );
};

Index.layout = (page) => <Layout title="Meal details" children={page}/>;

export default Index;
