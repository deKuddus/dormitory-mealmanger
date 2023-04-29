import React, {useState} from "react";
import {Link, router, usePage} from "@inertiajs/react";
import Layout from "@/Shared/Layout/AuthenticatedLayout";
import Icon from "@/Shared/Icon";
import SelectInput from "@/Shared/SelectInput";
import moment from "moment/moment";
import {currentYearMontList, isUserPermittedToPerformAction} from "@/utils";
import TablePageLayout from "@/Shared/Layout/TablePageLayout";
import TableHeader from "@/Shared/TableHeader";
import TableData from "@/Shared/TableData";
import TableAction from "@/Shared/TableAction";

const Index = () => {
    const tableHeading = ['No', 'Name', 'Status', 'Meal', 'Action'];
    const {users, user_permissions} = usePage().props;
    const [currentMonth, setCurrentMonth] = useState(
        moment().format("MMM-YYYY")
    );
    const dateOptions = currentYearMontList();

    const handleDateChange = (value) => {
        // if(value){
        //    return router.get(route('meals.show',user.id), {month:value}, {
        //         replace: true,
        //         preserveState: true,
        //     });
        //
        // }
    };

    const addMealForTheUser = (userId) => {
        if (confirm("Are you sure to add meal for the selected user?")) {
            router.post(route("meal.add"), {
                userId,
            });
        }
    };

    const Status = ({status}) => {
        if (status === 0) {
            return (
                <p className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">
                    <span className="text-red-600">Inactive</span>
                </p>
            );
        }

        if (status === 1) {
            return (
                <p className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">
                    <span className="text-buttonColor-400">Active</span>
                </p>
            );
        }

        if (status === 2) {
            return (
                <p className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">
                    <span className="text-red-600">Closed</span>
                </p>
            );
        }
    };

    const Additional = () => {
        return (
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
                <div className="flex items-center">
                    <span className="text-xl p-3">
                        Today's Meal: <span className="font-bold">50</span>
                    </span>
                    <span className="text-xl p-3">
                        Total Meal :{" "}
                        <span className="font-bold text-buttonColor-400">
                            50
                        </span>
                    </span>
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
            </div>
        );
    }

    return (
        <TablePageLayout
            breadcumb_action={''}
            breadcumb_name={'Meals'}
            pagination_links={''}
            breadcumb_link={''}
            isShowButton={false}
            additionalComponent={<Additional/>}
        >
            <TableHeader rows={tableHeading}/>
            <tbody>
            {users ? (
                users.map(
                    (
                        {
                            id,
                            first_name,
                            last_name,
                            meals,
                            status,
                            email,
                        },
                        key
                    ) => {
                        return (
                            <tr
                                key={id}
                            >
                                <TableData value={key + 1}/>
                                <TableData value={`${first_name} ${last_name}`}/>

                                <TableData value={
                                    status === 1
                                        ? "Active"
                                        : status === 0
                                            ? "Inactive"
                                            : "Closed"
                                }
                                           className={`rounded-full ${status === 1 ? 'bg-success text-success' : 'bg-danger text-danger'} text-center bg-opacity-10 py-1 px-3 text-sm `}
                                />
                                <TableData value={meals[0] || 0}/>

                                <TableAction>
                                    {!meals[0] &&
                                        isUserPermittedToPerformAction(
                                            "access::meal-add",
                                            user_permissions
                                        ) && (
                                            <button
                                                onClick={() =>
                                                    addMealForTheUser(
                                                        id
                                                    )
                                                }
                                                className="inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline"
                                            >
                                                <Icon
                                                    name="FaEdit"
                                                    className="w-6 h-4 text-gray-400 hover:text-buttonColor-400 fill-current"
                                                />
                                            </button>
                                        )}
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
                                                className="w-6 h-4 text-gray-400 hover:text-buttonColor-400 fill-current"
                                            />
                                        </Link>
                                    )}
                                </TableAction>
                            </tr>
                        );
                    }
                )
            ) : (
                <tr>
                    <TableData value={'No Data Found'} colSpan={tableHeading.length}
                               className="text-center text-black dark:text-white"/>
                </tr>
            )}
            </tbody>
        </TablePageLayout>
    );
};

Index.layout = (page) => <Layout title="Meals" children={page}/>;

export default Index;
