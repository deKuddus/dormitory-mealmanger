import React from "react";
import {Link, router, usePage} from "@inertiajs/react";
import MemberLayout from "@/Shared/Member/MemberLayout";
import Pagination from "@/Shared/Pagination";

const Deposit = () => {
    const {deposits} = usePage().props;
    const {
        data,
        links
    } = deposits;



    return (
        <div>
            <h1 className="mb-8 text-3xl font-bold">Deposits</h1>
            <div className="flex items-center justify-end mb-6">
                <Link
                    className="btn-indigo focus:outline-none"
                    href={route("user.deposits.create")}
                >
                    <span>Add</span>
                    <span className="hidden md:inline">Deposit</span>
                </Link>
            </div>
            <div className="overflow-x-auto bg-white rounded shadow p-3">
                <table className="w-full whitespace-nowrap">
                    <thead>
                    <tr className="font-bold text-left">
                        <th className="px-6 pt-5 pb-4">No</th>
                        <th className="px-6 pt-5 pb-4">Amount</th>
                        <th className="px-6 pt-5 pb-4">Withdraw</th>
                        <th className="px-6 pt-5 pb-4">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {data && data.length ? deposits.map(({deposit_amount, withdraw_amount,status})=>(
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
                                        {deposit_amount}
                                    </p>
                                </td>
                                <td className="border">
                                    <p
                                        className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                    >
                                        {withdraw_amount}
                                    </p>
                                </td>
                                <td className="border">
                                    <p
                                        className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                    >
                                        {status}
                                    </p>
                                </td>
                            </tr>
                        )): (
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

Deposit.layout = (page) => <MemberLayout title="Deposit" children={page}/>;

export default Deposit;
