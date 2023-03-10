import React from "react";
import { Link, router, usePage } from "@inertiajs/react";
import Layout from "@/Shared/Layout";
import Icon from "@/Shared/Icon";
import SearchFilter from "@/Shared/SearchFilter";
import Pagination from "@/Shared/Pagination";

const Index = () => {
    const { users } = usePage().props;
    const {
        data,
        meta: { links },
    } = users;

    const deleteUser = (id) => {
        if (confirm("Are you sure you want to delete this user?")) {
            router.delete(route("user.destroy", id));
        }
        return true;
    };

    const Status = ({ status }) => {
        if (status === 1) {
            return (
                <p className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">
                    <span className="text-buttonColor-400">Active</span>
                </p>
            );
        }
        if (status === 0) {
            return (
                <p className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">
                    <span className="text-red-600">Inactive</span>
                </p>
            );
        }
    };

    return (
        <div>
            <h1 className="mb-8 text-3xl font-bold">Users</h1>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
                <div className="flex items-center">
                    <span className="text-xl p-3">
                        Total Member: <span className="font-bold">50</span>
                    </span>
                    <span className="text-xl p-3">
                        Active :{" "}
                        <span className="font-bold text-buttonColor-400">
                            50
                        </span>
                    </span>
                    <span className="text-xl p-3">
                        Inactive :{" "}
                        <span className="font-bold text-red-600">50</span>
                    </span>
                </div>
                <div className="flex items-center">
                    <SearchFilter />
                    <Link
                        className="p-1 text-xs font-medium text-center text-white bg-buttonColor-400 rounded focus:outline-none"
                        href={route("user.create")}
                    >
                        <span>Create User</span>
                    </Link>
                </div>
            </div>
            <div className="overflow-x-auto bg-white rounded shadow p-3">
                <table className="w-full whitespace-nowrap">
                    <thead>
                        <tr className="font-bold text-left">
                            <th className="px-6 pt-5 pb-4 border">No.</th>
                            <th className="px-6 pt-5 pb-4 border">Name</th>
                            <th className="px-6 pt-5 pb-4 border">Mobile</th>
                            <th className="px-6 pt-5 pb-4 border">Email</th>
                            <th className="px-6 pt-5 pb-4 border">Status</th>
                            <th className="px-6 pt-5 pb-4 border">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(({ id, name, phone, status, email }, key) => {
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
                                            {name}
                                        </p>
                                    </td>
                                    <td className="border">
                                        <p className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">
                                            {phone}
                                        </p>
                                    </td>
                                    <td className="border">
                                        <p className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none">
                                            {email}
                                        </p>
                                    </td>
                                    <td className="border">
                                        <Status status={status} />
                                    </td>
                                    <td className="border w-px border-t p-3 whitespace-nowrap">
                                        <div className="flex items-center gap-2 justify-end">
                                            <Link
                                                href={route("user.edit", id)}
                                                className="inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline"
                                            >
                                                <Icon
                                                    name="FaEdit"
                                                    className="w-6 h-4 text-gray-400 hover:text-buttonColor-400 fill-current"
                                                />
                                            </Link>
                                            <Link
                                                href={route("user.show", id)}
                                                className="inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline"
                                            >
                                                <Icon
                                                    name="FaEye"
                                                    className="w-6 h-4 text-gray-400 hover:text-blue-400 fill-current"
                                                />
                                            </Link>
                                            <button
                                                onClick={() => deleteUser(id)}
                                                className="inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline"
                                            >
                                                <Icon
                                                    name="FaTrashAlt"
                                                    className="w-6 h-4 text-gray-400 hover:text-red-600 fill-current"
                                                />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                        {data.length === 0 && (
                            <tr>
                                <td className="px-6 py-4 border-t" colSpan="4">
                                    No users found.
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

Index.layout = (page) => <Layout title="Users" children={page} />;

export default Index;
