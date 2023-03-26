import React, {useState} from "react";
import {Link, router, usePage} from "@inertiajs/react";
import Layout from "@/Shared/Layout";
import Icon from "@/Shared/Icon";
import SelectInput from "@/Shared/SelectInput";
import moment from "moment/moment";
import {currentYearMontList} from "@/utils";


const Index = () => {
    const {users} = usePage().props;
    const [currentMonth, setCurrentMonth] = useState(moment().format('MMM-YYYY'));
    const dateOptions = currentYearMontList();

    const handleDateChange = (value) => {
        // if(value){
        //    return router.get(route('meals.show',user.id), {month:value}, {
        //         replace: true,
        //         preserveState: true,
        //     });
        //
        // }
    }

    const addMealForTheUser = (userId) => {
        if (confirm('Are you sure to add meal for the selected user?')) {
            router.post(route('meal.add'), {
                userId
            })
        }
    }

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


    return (
        <div>
            <h1 className="mb-8 text-3xl font-bold">Meals</h1>
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
                            {dateOptions && dateOptions.map((row, key) => (<option key={key} value={row}
                                                                                   defaultValue={moment().format('MMMM-YYYY')}>{row}</option>))}
                        </SelectInput>
                    </div>
                </div>
            </div>
            <div className="overflow-x-auto bg-white rounded shadow p-3">
                <table className="w-full whitespace-nowrap">
                    <thead>
                    <tr className="font-bold text-left">
                        <th className="px-6 pt-5 pb-4 border">No.</th>
                        <th className="px-6 pt-5 pb-4 border">Name</th>
                        <th className="px-6 pt-5 pb-4 border">Email</th>
                        <th className="px-6 pt-5 pb-4 border">Status</th>
                        <th className="px-6 pt-5 pb-4 border">Meal</th>
                        <th className="px-6 pt-5 pb-4 border">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users ? users.map(({id, first_name, last_name, meals, status, email}, key) => {
                        return (
                            <tr
                                key={id}
                                className="hover:bg-gray-100 focus-within:bg-gray-100"
                            >
                                <td className="border">
                                    <p className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">
                                        {key + 1}
                                    </p>
                                </td>
                                <td className="border">
                                    <p className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">
                                        {first_name} {last_name}
                                    </p>
                                </td>
                                <td className="border">
                                    <p className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">
                                        {email}
                                    </p>
                                </td>

                                <td className="border">
                                    <Status status={status}/>
                                </td>
                                <td className="border">
                                    <p className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">
                                        {meals[0] || 0}
                                    </p>
                                </td>
                                <td className="border w-px border-t p-3 whitespace-nowrap">
                                    <div className="flex items-center gap-2 justify-end">
                                        {!meals[0] && (
                                            <button
                                                onClick={() => addMealForTheUser(id)}
                                                className="inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline">
                                                <Icon
                                                    name="FaEdit"
                                                    className="w-6 h-4 text-gray-400 hover:text-buttonColor-400 fill-current"
                                                />
                                            </button>
                                        )}
                                        <Link
                                            href={route("meals.show", id)}
                                            className="inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline"
                                        >
                                            <Icon
                                                name="FaEye"
                                                className="w-6 h-4 text-gray-400 hover:text-buttonColor-400 fill-current"
                                            />
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        )
                    }) : (
                        <tr>
                            <td className="px-6 py-4 border-t" colSpan="6">
                                No users found.
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

Index.layout = (page) => <Layout title="Meals" children={page}/>;

export default Index;
