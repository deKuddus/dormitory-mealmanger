import React from "react";
import { usePage } from "@inertiajs/react";
import Layout from "@/Shared/Layout/AuthenticatedLayout";
import Pagination from "@/Shared/Pagination";
import moment from "moment";
import { isUserPermittedToPerformAction } from "@/utils";

const Calcualtion = () => {
    const { calculations } = usePage().props;
    const {
        data,
        meta: { links },
    } = calculations;

    return (
        <div>
            <h1 className="mb-8 text-3xl font-bold">Closed Calculation</h1>
            <div className="overflow-x-auto bg-white rounded shadow p-3">
                <table className="w-full whitespace-nowrap">
                    <thead>
                        <tr className="font-bold text-left">
                            <th className="px-6 pt-5 pb-4">No</th>
                            <th className="px-6 pt-5 pb-4">Closed Month</th>
                            <th className="px-6 pt-5 pb-4">Member</th>
                            <th className="px-6 pt-5 pb-4">Meal</th>
                            <th className="px-6 pt-5 pb-4">Amount</th>
                            <th className="px-6 pt-5 pb-4">Carry</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data ? (
                            data.map(
                                (
                                    {
                                        id,
                                        user,
                                        amount,
                                        description,
                                        calculate_date,
                                        carry,
                                        total_meal,
                                    },
                                    key
                                ) => {
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
                                                    {moment(
                                                        calculate_date
                                                    ).format("Do MMMM YYYY")}
                                                </p>
                                            </td>

                                            <td className="border">
                                                <p className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">
                                                    {user.first_name}{" "}
                                                    {user.last_name}
                                                </p>
                                            </td>
                                            <td className="border">
                                                <p className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">
                                                    {total_meal}
                                                </p>
                                            </td>

                                            <td className="border">
                                                <p className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">
                                                    {amount}
                                                </p>
                                            </td>
                                            <td className="border">
                                                <p className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">
                                                    {carry}
                                                </p>
                                            </td>
                                        </tr>
                                    );
                                }
                            )
                        ) : (
                            <tr>
                                <td className="px-6 py-4 border" colSpan="4">
                                    No Calculation found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <Pagination links={links} />
        </div>
    );
};

Calcualtion.layout = (page) => (
    <Layout title="Closed Calculation" children={page} />
);

export default Calcualtion;
