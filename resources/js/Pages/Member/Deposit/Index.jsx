import React from "react";
import {Link, router, usePage} from "@inertiajs/react";
import MemberLayout from "@/Shared/Member/MemberLayout";
import Pagination from "@/Shared/Pagination";
import moment from "moment";

const Index = () => {
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
                    <span className="hidden md:inline"> Deposit</span>
                </Link>
            </div>
            <div className="overflow-x-auto bg-white rounded shadow p-3">
                <table className="w-full whitespace-nowrap">
                    <thead>
                    <tr className="font-bold text-left">
                        <th className="px-6 pt-5 pb-4">No</th>
                        <th className="px-6 pt-5 pb-4">Date</th>
                        <th className="px-6 pt-5 pb-4">Amount</th>
                        <th className="px-6 pt-5 pb-4">Status</th>
                    </tr>
                    </thead>
                    <tbody>
                        {data && data.length ? data.map((row,key)=>(
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
                                        {moment(row.deposit_date).format('Do MMMM YYYY')}
                                    </p>
                                </td>
                                <td className="border">
                                    <p
                                        className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                    >
                                        {row.amount}
                                    </p>
                                </td>

                                <td className="border">
                                    <p
                                        className={`flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none ${row.status === 0 ? 'text-red-600' : row.status === 1 ? 'text-green-500':'text-blue-400'}`}
                                    >
                                        {row.status === 0 ? 'Pending' : row.status === 1 ? 'Approved':'Withdrawn'}
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

Index.layout = (page) => <MemberLayout title="Deposit" children={page}/>;

export default Index;
