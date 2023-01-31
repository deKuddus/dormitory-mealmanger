import React from "react";
import {Link, router, usePage} from "@inertiajs/react";
import Layout from "@/Shared/Layout";
import Icon from "@/Shared/Icon";
import SearchFilter from "@/Shared/SearchFilter";
import Pagination from "@/Shared/Pagination";

const Index = () => {
    const {notices} = usePage().props;
    const {
        data,
        meta: {links},
    } = notices;

    const  deleteNotice = (id) => {
        if (confirm("Are you sure you want to delete this notice?")) {
            router.delete(route("notice.destroy", id));
        }
        return true;
    }

    return (
        <div>
            <h1 className="mb-8 text-3xl font-bold">Notices</h1>
            <div className="flex items-center justify-between mb-6">
                <SearchFilter/>
                <Link
                    className="btn-indigo focus:outline-none"
                    href={route("notice.create")}
                >
                    <span>Create</span>
                    <span className="hidden md:inline"> Notice</span>
                </Link>
            </div>
            <div className="overflow-x-auto bg-white rounded shadow">
                <table className="w-full whitespace-nowrap">
                    <thead>
                    <tr className="font-bold text-left">
                        <th className="px-6 pt-5 pb-4">Title</th>
                        <th className="px-6 pt-5 pb-4">Description</th>
                        <th className="px-6 pt-5 pb-4">Status</th>
                        <th className="px-6 pt-5 pb-4">
                            Action
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map(
                        ({id, title, description,status}) => {
                            return (
                                <tr
                                    key={id}
                                    className="hover:bg-gray-100 focus-within:bg-gray-100"
                                >
                                    <td className="border-t">
                                        <p
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                        >
                                            {title}
                                        </p>
                                    </td>
                                    <td className="border-t">
                                        <p
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                        >
                                            {description}
                                        </p>
                                    </td>
                                    <td className="border-t">
                                        <p
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                        >
                                            {status}
                                        </p>
                                    </td>
                                    <td className="w-px border-t px-4 py-3 whitespace-nowrap">
                                        <div className="flex items-center gap-4 justify-end">
                                            <Link
                                                href={route("notice.edit", id)}
                                                className="inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline"
                                            >
                                                <Icon
                                                    name="FaEdit"
                                                    className="w-6 h-4 text-gray-400 fill-current"
                                                />
                                            </Link>
                                            <button
                                                onClick={() => deleteNotice(id)}
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
                                No Notice found.
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

Index.layout = (page) => <Layout title="Notices" children={page}/>;

export default Index;
