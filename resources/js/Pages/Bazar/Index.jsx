import React from "react";
import {Link, router, usePage} from "@inertiajs/react";
import Layout from "@/Shared/Layout";
import Icon from "@/Shared/Icon";
import SearchFilter from "@/Shared/SearchFilter";
import Pagination from "@/Shared/Pagination";
import moment from "moment";
import {FaCheck} from "react-icons/fa";

const Index = () => {
    const {bazars} = usePage().props;
    const {
        data,
        meta: {links},
    } = bazars;

    const deleteBazar = (id) => {
        if (confirm("Are you sure you want to delete this bazar?")) {
            router.delete(route("bazar.destroy", id));
        }
        return true;
    }
    const approvBazar = (id) => {
        if (confirm("Are you sure you want to approve this bazar?")) {
            router.post(route("bazar.approve"),{
                id
            });
        }
        return true;
    }


    return (
        <div>
            <h1 className="mb-8 text-3xl font-bold">Bazars</h1>
            <div className="flex items-center justify-end mb-6">
                <Link
                    className="btn-indigo focus:outline-none"
                    href={route("bazar.create")}
                >
                    <span>Add New </span>
                    <span className="hidden md:inline">Bazar</span>
                </Link>
            </div>
            <div className="overflow-x-auto bg-white rounded shadow p-3">
                <table className="w-full whitespace-nowrap">
                    <thead>
                    <tr className="font-bold text-left">
                        <th className="px-6 pt-5 pb-4">No</th>
                        <th className="px-6 pt-5 pb-4">Create Date</th>
                        <th className="px-6 pt-5 pb-4">Amount</th>
                        <th className="px-6 pt-5 pb-4">Description</th>
                        <th className="px-6 pt-5 pb-4">Status</th>
                        <th className="px-6 pt-5 pb-4">Member</th>
                        <th className="px-6 pt-5 pb-4">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map(
                        ({id, amount, description, created_at, bazarSchedule, status}, key) => {
                            return (
                                <tr
                                    key={id}
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
                                            {moment(created_at).format('Do MMMM YYYY')}
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
                                            {description}
                                        </p>
                                    </td>

                                    <td className="border">
                                        <p
                                            className={`flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none ${status ? 'text-green-500' : 'text-red-600'}`}
                                        >
                                            {status ? 'Approved' : 'Pending'}
                                        </p>
                                    </td>
                                    <td className="border">
                                        <BazarScheduleUSer users={bazarSchedule && bazarSchedule.users}/>
                                    </td>
                                    <td className="w-px border px-4 py-3 whitespace-nowrap">
                                        <div className="flex items-center gap-4 justify-end">
                                            {!status && (<button
                                                onClick={() => approvBazar(id)}
                                                className="inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline"
                                            >
                                                <Icon
                                                    name="FaCheck"
                                                    className="w-6 h-4 text-gray-400 fill-current"
                                                />
                                            </button>)}
                                            <Link
                                                href={route("bazar.edit", id)}
                                                className="inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline"
                                            >
                                                <Icon
                                                    name="FaEdit"
                                                    className="w-6 h-4 text-gray-400 fill-current"
                                                />
                                            </Link>
                                            <button
                                                onClick={() => deleteBazar(id)}
                                                className="inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline"
                                            >
                                                <Icon
                                                    name="FaTrashAlt"
                                                    className="w-6 h-4 text-gray-400 fill-current"
                                                />
                                            </button>

                                        </div>
                                    </td>
                                </tr>
                            );
                        }
                    )}
                    {data.length === 0 && (
                        <tr>
                            <td className="px-6 py-4 border" colSpan="4">
                                No Bazar found.
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

const BazarScheduleUSer = ({users}) => {
    return <p
        className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
    >
        {users && users.length > 0 ? users.map(
            ({first_name, last_name}, index) => <span key={index}
                                                      className={`bg-green-200 text-gray-800  mr-2 px-2.5 py-0.5 rounded`}>{`${first_name} ${last_name}`}</span>
        ) : 'N/A'}
    </p>
}


Index.layout = (page) => <Layout title="Bazar" children={page}/>;

export default Index;
