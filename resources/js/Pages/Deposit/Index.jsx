import React from "react";
import {Link, router, usePage} from "@inertiajs/react";
import Layout from "@/Shared/Layout";
import Icon from "@/Shared/Icon";
import SearchFilter from "@/Shared/SearchFilter";
import Pagination from "@/Shared/Pagination";
import {FaEye} from "react-icons/fa";

const Index = () => {
    const {usersWithDeposit} = usePage().props;
    const {
        data,
        meta: {links},
    } = usersWithDeposit;


    return (
        <div>
            <h1 className="mb-8 text-3xl font-bold">Deposits</h1>
            <div className="flex items-center justify-end mb-6">
                <Link
                    className="btn-indigo focus:outline-none"
                    href={route("user.create")}
                >
                    <span>Add</span>
                    <span className="hidden md:inline">Member</span>
                </Link>
            </div>
            <div className="overflow-x-auto bg-white rounded shadow p-3">
                <table className="w-full whitespace-nowrap">
                    <thead>
                    <tr className="font-bold text-left">
                        <th className="px-6 pt-5 pb-4">No</th>
                        <th className="px-6 pt-5 pb-4">Name</th>
                        <th className="px-6 pt-5 pb-4">Amount</th>
                        <th className="px-6 pt-5 pb-4">Withdraw</th>
                        <th className="px-6 pt-5 pb-4">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map(
                        ({id, first_name, last_name, deposits}, key) => {
                            return (
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
                                            {first_name} {last_name}
                                        </p>
                                    </td>

                                    {deposits && deposits.length ? deposits.map(({deposit_amount, withdraw_amount},key) => (
                                        <>
                                            <td className="border">
                                                <p
                                                    className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                                >
                                                    {deposit_amount || 0} BDT
                                                </p>
                                            </td>

                                            <td className="border">
                                                <p
                                                    className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                                >
                                                    {withdraw_amount || 0} BDT
                                                </p>
                                            </td>
                                        </>
                                    )) : (
                                        <>
                                            <td className="border">
                                                <p
                                                    className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                                >
                                                    0 BDT
                                                </p>
                                            </td>

                                            <td className="border">
                                                <p
                                                    className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                                >
                                                    0 BDT
                                                </p>
                                            </td>
                                        </>
                                    )}


                                    <td className="w-px border px-4 py-3 whitespace-nowrap">
                                        <div className="flex items-center gap-4 justify-end">
                                            <Link
                                                href={route("deposit.show", id)}
                                                className="inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline"
                                            >
                                                <Icon
                                                    name="FaEye"
                                                    className="w-6 h-4 text-gray-400 fill-current"
                                                />
                                            </Link>

                                            <Link
                                                href={route("deposit.edit", id)}
                                                className="inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline"
                                            >
                                                <Icon
                                                    name="FaPlus"
                                                    className="w-6 h-4 text-gray-400 fill-current"
                                                />
                                            </Link>


                                        </div>
                                    </td>
                                </tr>
                            );
                        }
                    )}
                    {data.length === 0 && (
                        <tr>
                            <td className="px-6 py-4 border" colSpan="5">
                                No Deposit found.
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
            <Pagination links={links}/>
        </div>
    );
};

Index.layout = (page) => <Layout title="Deposit" children={page}/>;

export default Index;
