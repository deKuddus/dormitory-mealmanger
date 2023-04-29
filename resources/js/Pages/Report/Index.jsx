import React, {useState} from "react";
import {Link, router, usePage} from "@inertiajs/react";
import Layout from "@/Shared/Layout/AuthenticatedLayout";
import SelectInput from "@/Shared/SelectInput";
import moment from "moment";
import {currentYearMontList, isUserPermittedToPerformAction} from "@/utils";
import Icon from "@/Shared/Icon";
import TableHeader from "@/Shared/TableHeader";
import TablePageLayout from "@/Shared/Layout/TablePageLayout";
import TableData from "@/Shared/TableData";
import TableAction from "@/Shared/TableAction";

const Index = () => {
    const tableHeading = ['No', 'Name', 'Total Meal', 'Total Deposit', 'Total Cost', 'Total Due', 'Action'];
    const {
        users,
        balance,
        user_permissions,
        additional,
        bazar,
        totalMeal,
        fixedCost,
        mealCost,
    } = usePage().props;
    const [currentMonth, setCurrentMonth] = useState(
        moment().format("MMMM-YYYY")
    );

    const dateOptions = currentYearMontList();

    const handleDateChange = (value) => {
        if (value) {
            return router.get(
                route("report.index"),
                {month: value},
                {
                    replace: true,
                    preserveState: true,
                }
            );
        }
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
                                        WP Dormitory{" "}
                                    </span>
                                    <span className="text-sm text-black dark:text-white">
                                        Balance : {balance} BDT
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
                                </div>
                            </div>
                        </div>
                        <div className="relative p-6 rounded-xl">
                            <div className="space-y-2 text-white">
                                <div
                                    className="flex flex-col items-center space-x-2 rtl:space-x-reverse text-xl font-medium ">
                                    <span className="text-danger text-xl font-bold ">
                                        Total Due: 50 BDT{" "}
                                    </span>
                                    <span className="text-black dark:text-white text-xl font-bold ">
                                        Total Cost : {bazar} BDT
                                    </span>
                                    <span className="text-black dark:text-white text-xl font-bold">
                                        Total Fixed Cost : {additional} BDT
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <TablePageLayout
            breadcumb_name={'Reports'}
            additionalComponent={<Additional/>}
        >
            <TableHeader rows={tableHeading}/>
            <tbody>
            {users ? (
                users.map(
                    ({id, name, meals_total, deposits}, key) => (
                        <tr
                            key={key}
                        >
                            <TableData value={key + 1}/>
                            <TableData value={name}/>
                            <TableData value={meals_total}/>
                            <TableData value={deposits}/>
                            <TableData value={parseFloat(mealCost * meals_total).toFixed(2)}/>
                            <TableData value={
                                <DueText
                                    deposit={deposits}
                                    cost={mealCost * meals_total}
                                />
                            }/>
                            <TableAction>
                                {isUserPermittedToPerformAction(
                                    "access::meal-show",
                                    user_permissions
                                ) && (
                                    <Link
                                        href={route(
                                            "meals.show",
                                            id
                                        )}
                                        className="inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline"
                                    >
                                        <Icon
                                            name="FaEye"
                                            className="w-6 h-4 text-gray-400 hover:text-black dark:text-white fill-current cursor-pointer"
                                        />
                                    </Link>
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
    );
};

const DueText = ({deposit, cost}) => {
    if (cost > deposit) {
        return (
            <p className="flex items-center text-red-400  px-6 py-4 focus:text-indigo-700 focus:outline-none">
                {parseFloat(deposit - cost).toFixed(2)}
            </p>
        );
    } else {
        return (
            <p className="flex items-center text-green-400 px-6 py-4 focus:text-indigo-700 focus:outline-none">
                0
            </p>
        );
    }
};

Index.layout = (page) => <Layout title="Meal Report" children={page}/>;

export default Index;
