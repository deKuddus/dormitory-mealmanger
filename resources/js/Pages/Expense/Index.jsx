import React, {useEffect, useState} from "react";
import {Link, router, useForm, usePage} from "@inertiajs/react";
import Layout from "@/Shared/Layout";
import TextInput from "@/Shared/TextInput";
import LoadingButton from "@/Shared/LoadingButton";
import Icon from "@/Shared/Icon";
import {Flip, toast} from "react-toastify";
import moment from "moment";

const Index = () => {
    const {
        bazar,
        bazarTotal,
        additionalCost,
        additionalCostTotal,
        deposit, flash
    } = usePage().props;





    return (
        <div>
            <h1 className="mb-8 text-3xl font-bold">Available Balance: {deposit} BDT</h1>
            <div className="overflow-x-auto bg-white rounded shadow p-3">
                <div className="grid gap-4 lg:gap-8 md:grid-cols-2">
                    <div className="flex flex-col">
                        <h6 className="mb-4 text-gray-900 text-xl font-bold">Random Cost</h6>
                        <span className="text-md font-bold mb-6">Total Random cost: {bazarTotal} BDT</span>
                        <table className="w-full whitespace-nowrap">
                            <thead>
                            <tr className="font-bold text-left">
                                <th className="px-6 pt-5 pb-4">No</th>
                                <th className="px-6 pt-5 pb-4">Amount</th>
                                <th className="px-6 pt-5 pb-4">Date</th>
                                <th className="px-6 pt-5 pb-4">Note</th>
                            </tr>
                            </thead>
                            <tbody>
                            {bazar.length ? bazar.map(({id,amount, created_at,description}, key) => (
                                <tr
                                    key={key}
                                    className="hover:bg-gray-100 focus-within:bg-gray-100"
                                >


                                    <td className="border">
                                        <p
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                        >
                                            {key + 1}
                                        </p>
                                    </td>
                                    <td className="border">
                                        <p
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                        >
                                            {amount}
                                        </p>
                                    </td>
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
                                            {description}
                                        </p>
                                    </td>
                                </tr>
                            )) : (
                                <tr
                                    className="hover:bg-gray-100 focus-within:bg-gray-100"
                                >
                                    <td className="border" colSpan={4}>
                                        <p
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                        >
                                            No Random Cost found
                                        </p>
                                    </td>

                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                    <div className="flex flex-col">
                        <h6 className="mb-4 text-gray-900 text-xl font-bold">Fixed Cost</h6>
                        <span className="text-md font-bold mb-6">Total Fixed cost: {additionalCostTotal} BDT</span>
                        <table className="w-full whitespace-nowrap">
                            <thead>
                            <tr className="font-bold text-left">
                                <th className="px-6 pt-5 pb-4">No</th>
                                <th className="px-6 pt-5 pb-4">Amount</th>
                                <th className="px-6 pt-5 pb-4">Date</th>
                                <th className="px-6 pt-5 pb-4">Note</th>
                            </tr>
                            </thead>
                            <tbody>
                            {additionalCost.length ? additionalCost.map(({id, amount, created_at,description}, key) => (
                                <tr
                                    key={key}
                                    className="hover:bg-gray-100 focus-within:bg-gray-100"
                                >


                                    <td className="border">
                                        <p
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                        >
                                            {key + 1}
                                        </p>
                                    </td>
                                    <td className="border">
                                        <p
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                        >
                                            {amount}
                                        </p>
                                    </td>
                                    <td className="border">
                                        <p
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                        >
                                            {amount}
                                        </p>
                                    </td>

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
                                            {description}
                                        </p>
                                    </td>

                                </tr>
                            )) : (
                                <tr
                                    className="hover:bg-gray-100 focus-within:bg-gray-100"
                                >
                                    <td className="border" colSpan={4}>
                                        <p
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                        >
                                            No Fixed Cost found
                                        </p>
                                    </td>

                                </tr>
                            )}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    );
};

Index.layout = (page) => <Layout title="Expense Details" children={page}/>;

export default Index;
