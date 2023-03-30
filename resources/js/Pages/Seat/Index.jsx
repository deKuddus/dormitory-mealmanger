import React from "react";
import {Link, router, usePage} from "@inertiajs/react";
import Layout from "@/Shared/Layout";
import Icon from "@/Shared/Icon";
import Pagination from "@/Shared/Pagination";
import {isUserPermittedToPerformAction} from "@/utils";

const Index = () => {
    const {seats, user_permissions} = usePage().props;
    const {
        data,
        meta: {links},
    } = seats;

    const deleteSeat = (id) => {
        if (confirm("Are you sure you want to delete this seat?")) {
            router.delete(route("seat.destroy", id));
        }
        return true;
    }

    return (
        <div>
            <h1 className="mb-8 text-3xl font-bold">Seat</h1>
            <div className="flex items-center justify-end mb-6">
                {isUserPermittedToPerformAction('access::seat-create', user_permissions) &&
                    <Link
                        className="btn-indigo focus:outline-none"
                        href={route("seat.create")}
                    >
                        <span>Create</span>
                        <span className="hidden md:inline">Seat</span>
                    </Link>
                }
            </div>
            <div className="overflow-x-auto bg-white rounded shadow p-3">
                <table className="w-full whitespace-nowrap">
                    <thead>
                    <tr className="font-bold text-left">
                        <th className="px-6 pt-5 pb-4">No</th>
                        <th className="px-6 pt-5 pb-4">Seat No</th>
                        <th className="px-6 pt-5 pb-4">Status</th>
                        <th className="px-6 pt-5 pb-4">
                            Action
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map(
                        ({id, seat_no, status}, key) => {
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
                                            {seat_no}
                                        </p>
                                    </td>
                                    <td className="border">
                                        <p
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                        >
                                            {status ? 'Active' : 'Inactive'}
                                        </p>
                                    </td>
                                    <td className="w-px border px-4 py-3 whitespace-nowrap">
                                        <div className="flex items-center gap-4 justify-end">
                                            {isUserPermittedToPerformAction('access::seat-edit', user_permissions) &&
                                                <Link
                                                    href={route("seat.edit", id)}
                                                    className="inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline"
                                                >
                                                    <Icon
                                                        name="FaEdit"
                                                        className="w-6 h-4 text-gray-400 fill-current"
                                                    />
                                                </Link>
                                            }
                                            {isUserPermittedToPerformAction('access::seat-delete', user_permissions) &&
                                                <button
                                                    onClick={() => deleteSeat(id)}
                                                    className="inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline"
                                                >
                                                    <Icon
                                                        name="FaTrashAlt"
                                                        className="w-6 h-4 text-gray-400 fill-current"
                                                    />
                                                </button>
                                            }
                                        </div>
                                    </td>
                                </tr>
                            );
                        }
                    )}
                    {data.length === 0 && (
                        <tr>
                            <td className="px-6 py-4 border" colSpan="4">
                                No Seat found.
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

Index.layout = (page) => <Layout title="Seat" children={page}/>;

export default Index;
