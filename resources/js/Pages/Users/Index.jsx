import React from "react";
import {Link, router, usePage} from "@inertiajs/react";
import Layout from "@/Shared/Layout";
import Icon from "@/Shared/Icon";
import SearchFilter from "@/Shared/SearchFilter";
import Pagination from "@/Shared/Pagination";

const Index = () => {
    const {users} = usePage().props;
    const {
        data,
        meta: {links},
    } = users;

    const deleteUser = (id) =>{
        if (confirm("Are you sure you want to delete this user?")) {
            router.delete(route("user.destroy", id));
        }
        return true;
    }

    return (
        <div>
            <h1 className="mb-8 text-3xl font-bold">Users</h1>
            <div className="flex items-center justify-between mb-6">
                <SearchFilter/>
                <Link
                    className="btn-indigo focus:outline-none"
                    href={route("user.create")}
                >
                    <span>Create</span>
                    <span className="hidden md:inline"> User</span>
                </Link>
            </div>
            <div className="overflow-x-auto bg-white rounded shadow">
                <table className="w-full whitespace-nowrap">
                    <thead>
                    <tr className="font-bold text-left">
                        <th className="px-6 pt-5 pb-4">Name</th>
                        <th className="px-6 pt-5 pb-4">Email</th>
                        <th className="px-6 pt-5 pb-4">
                            Action
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map(
                        ({id, name, email}) => {
                            return (
                                <tr
                                    key={id}
                                    className="hover:bg-gray-100 focus-within:bg-gray-100"
                                >
                                    <td className="border-t">
                                        <p
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                        >
                                            {name}
                                        </p>
                                    </td>
                                    <td className="border-t">
                                        <p
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                        >
                                            {email}
                                        </p>
                                    </td>
                                    <td className="w-px border-t px-4 py-3 whitespace-nowrap">
                                        <div className="flex items-center gap-4 justify-end">
                                            <Link
                                                href={route("user.edit", id)}
                                                className="inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline"
                                            >
                                                <Icon
                                                    name="FaEdit"
                                                    className="w-6 h-4 text-gray-400 fill-current"
                                                />
                                            </Link>
                                            <button
                                                onClick={() => deleteUser(id)}
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
                            <td className="px-6 py-4 border-t" colSpan="4">
                                No users found.
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

Index.layout = (page) => <Layout title="Users" children={page}/>;

export default Index;
