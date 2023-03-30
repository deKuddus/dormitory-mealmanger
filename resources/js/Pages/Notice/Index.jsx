import React from "react";
import {Link, router, usePage} from "@inertiajs/react";
import Layout from "@/Shared/Layout";
import Icon from "@/Shared/Icon";
import Pagination from "@/Shared/Pagination";
import {ACTIVE} from "@/Shared/const/noticeStatus";
import {isUserPermittedToPerformAction} from "@/utils";

const Index = () => {
    const {notices, user_permissions} = usePage().props;
    const {
        data,
        meta: {links},
    } = notices;

    const deleteNotice = (id) => {
        if (confirm("Are you sure you want to delete this notice?")) {
            router.delete(route("notice.destroy", id));
        }
        return true;
    }

    return (
        <div>
            <h1 className="mb-8 text-3xl font-bold">Notices</h1>
            {isUserPermittedToPerformAction('access::notice-create', user_permissions) &&
                <div className="flex items-center justify-end mb-6">
                    <Link
                        className="btn-indigo focus:outline-none"
                        href={route("notice.create")}
                    >
                        <span>Create</span>
                        <span className="hidden md:inline"> Notice</span>
                    </Link>
                </div>
            }
            <div className="overflow-x-auto bg-white rounded shadow p-3">
                <table className="w-full whitespace-wrap table-auto">
                    <thead>
                    <tr className="font-bold text-left">
                        <th className="px-6 pt-5 pb-4">No</th>
                        <th className="px-6 pt-5 pb-4">Title</th>
                        <th className="px-6 pt-5 pb-4">Status</th>
                        <th className="px-6 pt-5 pb-4">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map(
                        ({id, title, description, status}, key) => {
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
                                            className="flex items-center px-6 py-4 leading-6 focus:text-indigo-700 focus:outline-none"
                                        >
                                            {title}
                                        </p>
                                    </td>
                                    <td className="border">
                                        <p
                                            className={`flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none ${status === ACTIVE ? 'text-green-500' : 'text-red-600'}`}
                                        >
                                            {status === ACTIVE ? 'Active' : 'Inactive'}
                                        </p>
                                    </td>
                                    <td className="w-px border px-4 py-3 whitespace-nowrap">
                                        <div className="flex items-center gap-4 justify-end">

                                            {isUserPermittedToPerformAction('access::meal-edit', user_permissions) &&
                                                <Link
                                                    href={route("notice.edit", id)}
                                                    className="inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline"
                                                >
                                                    <Icon
                                                        name="FaEdit"
                                                        className="w-6 h-4 text-gray-400 fill-current"
                                                    />
                                                </Link>
                                            }
                                            {isUserPermittedToPerformAction('access::meal-show', user_permissions) &&
                                                <Link
                                                    href={route("notice.show", id)}
                                                    className="inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline"
                                                >
                                                    <Icon
                                                        name="FaEye"
                                                        className="w-6 h-4 text-gray-400 fill-current"
                                                    />
                                                </Link>
                                            }
                                            {isUserPermittedToPerformAction('access::meal-delete', user_permissions) &&
                                                <button
                                                    onClick={() => deleteNotice(id)}
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
