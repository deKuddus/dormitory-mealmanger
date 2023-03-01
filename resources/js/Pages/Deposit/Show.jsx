import React from "react";
import {Link, router, usePage} from "@inertiajs/react";
import Layout from "@/Shared/Layout";
import SelectInput from "@/Shared/SelectInput";
import TextInput from "@/Shared/TextInput";
import Datepicker from "@/Shared/Datepicker";
import LoadingButton from "@/Shared/LoadingButton";
import Icon from "@/Shared/Icon";

const Show = () => {
    const {user} = usePage().props;


    return (
        <div>
            <h1 className="mb-8 text-3xl font-bold">Deposits of {user.first_name} {user.last_name}</h1>
            <div className="overflow-x-auto bg-white rounded shadow p-3">
                <div className="col-span-full mb-5">
                    <div className="grid md:grid-cols-1">
                        <div className="relative p-6 rounded-xl">
                            <div className="space-y-2 text-white text-center">
                                <form name="createForm">
                                    <div className="flex w-full flex-row p-8 -mb-8 -mr-6">

                                        <TextInput
                                            className="w-full pr-6 md:w-1/2 lg:w-1/2"
                                            label=""
                                            name="amount"
                                            type="number"
                                            value={0}
                                        />
                                        <LoadingButton
                                            loading={false}
                                            type="submit"
                                            className="px-4 py-1 text-xs font-medium text-center text-white bg-buttonColor-400 rounded focus:outline-none"
                                        >
                                           Add Deposit
                                        </LoadingButton>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div  className="grid gap-4 lg:gap-8 md:grid-cols-2">
                   <div>
                       <h6 className="mb-4 text-gray-900 text-xl font-bold">Transaction History</h6>
                       <table className="w-full whitespace-nowrap">
                           <thead>
                           <tr className="font-bold text-left">
                               <th className="px-6 pt-5 pb-4">No</th>
                               <th className="px-6 pt-5 pb-4">Date</th>
                               <th className="px-6 pt-5 pb-4">Amount</th>
                               <th className="px-6 pt-5 pb-4">Action</th>
                           </tr>
                           </thead>
                           <tbody>
                           <tr
                               className="hover:bg-gray-100 focus-within:bg-gray-100"
                           >


                               <td className="border">
                                   <p
                                       className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                   >
                                       1
                                   </p>
                               </td>
                               <td className="border">
                                   <p
                                       className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                   >
                                       2023-01-03
                                   </p>
                               </td>
                               <td className="border">
                                   <p
                                       className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                   >
                                       1000
                                   </p>
                               </td>
                               <td className="w-px border px-4 py-3 whitespace-nowrap">
                                   <div className="flex items-center gap-4 justify-end">
                                       <Link
                                           href={'/'}
                                           className="inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline"
                                       >
                                           <Icon
                                               name="FaTrashAlt"
                                               className="w-6 h-4 text-gray-400 fill-current"
                                           />
                                       </Link>

                                   </div>
                               </td>
                           </tr>

                           </tbody>
                       </table>
                   </div>
                    <div>
                        <h6 className="mb-4 text-gray-900 text-xl font-bold">Deposit Request</h6>
                        <table className="w-full whitespace-nowrap">
                            <thead>
                            <tr className="font-bold text-left">
                                <th className="px-6 pt-5 pb-4">No</th>
                                <th className="px-6 pt-5 pb-4">Date</th>
                                <th className="px-6 pt-5 pb-4">Amount</th>
                                <th className="px-6 pt-5 pb-4">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr
                                className="hover:bg-gray-100 focus-within:bg-gray-100"
                            >


                                <td className="border">
                                    <p
                                        className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                    >
                                        1
                                    </p>
                                </td>
                                <td className="border">
                                    <p
                                        className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                    >
                                        2023-01-03
                                    </p>
                                </td>
                                <td className="border">
                                    <p
                                        className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                    >
                                        1000
                                    </p>
                                </td>
                                <td className="w-px border px-4 py-3 whitespace-nowrap">
                                    <div className="flex items-center gap-4 justify-end">
                                        <Link
                                            href={'/'}
                                            className="inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline"
                                        >
                                            <Icon
                                                name="FaCheck"
                                                className="w-6 h-4 text-green-500 fill-current"
                                            />
                                        </Link>
                                        <Link
                                            href={'/'}
                                            className="inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline"
                                        >
                                            <Icon
                                                name="FaTimes"
                                                className="w-6 h-4 text-red-600 fill-current"
                                            />
                                        </Link>

                                    </div>
                                </td>
                            </tr>

                            </tbody>
                        </table>
                        <div className="relative p-6 rounded-xl">
                            <div className="space-y-2 text-white text-center">
                                <form name="createForm">
                                    <div className="flex w-full flex-row   -mr-6">

                                        <TextInput
                                            className="w-full pr-6 md:w-1/2 lg:w-1/2"
                                            label="Return/Withdraw"
                                            name="amount"
                                            type="number"
                                            value={0}
                                        />
                                        <LoadingButton
                                            loading={false}
                                            type="submit"
                                            className="px-4 py-1 text-xs font-medium text-center text-white bg-buttonColor-400 rounded focus:outline-none"
                                        >
                                            Add Deposit
                                        </LoadingButton>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Show.layout = (page) => <Layout title="Deposit Details" children={page}/>;

export default Show;
