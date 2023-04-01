import React from "react";
import {Link, router, usePage} from "@inertiajs/react";
import Layout from "@/Shared/Layout";
import Icon from "@/Shared/Icon";
import Pagination from "@/Shared/Pagination";
import {ACTIVE} from "@/Shared/const/noticeStatus";
import {isUserPermittedToPerformAction} from "@/utils";
import {ASSIGNED, PENDING} from "@/Shared/const/issueStatus";

const Index = () => {
    const {issues, user_permissions} = usePage().props;
    const {
        data,
        meta: {links},
    } = issues;

    const deleteIssue = (id) => {
        if (confirm("Are you sure you want to delete this issue?")) {
            router.delete(route("issue.destroy", id));
        }
        return true;
    }

    return (
        <div>
            <h1 className="mb-8 text-3xl font-bold">Issues</h1>
            <div className="flex items-center justify-end mb-6">
                <Link
                    className="btn-indigo focus:outline-none"
                    href={route("issue.create")}
                >
                    <span>Create</span>
                    <span className="hidden md:inline"> Issue</span>
                </Link>
            </div>
            <div className="overflow-x-auto bg-white rounded shadow p-3">
                <table className="w-full whitespace-wrap table-auto">
                    <thead>
                    <tr className="font-bold text-left">
                        <th className="px-6 pt-5 pb-4">No</th>
                        <th className="px-6 pt-5 pb-4">Title</th>
                        <th className="px-6 pt-5 pb-4">Resolver</th>
                        <th className="px-6 pt-5 pb-4">Assigned By</th>
                        <th className="px-6 pt-5 pb-4">Status</th>
                        <th className="px-6 pt-5 pb-4">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data ? data.map(
                        ({id, title, description, status,issuer,assigner,resolver}, key) => {
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
                                            {title} <span className="text-red-600 mx-2"> Issued By </span> {issuer.first_name} {issuer.last_name}
                                        </p>
                                    </td>
                                    <td className="border">
                                        <p
                                            className="flex items-center px-6 py-4 leading-6 focus:text-indigo-700 focus:outline-none"
                                        >
                                             {resolver?.first_name} {resolver?.last_name}
                                        </p>
                                    </td>
                                    <td className="border">
                                        <p
                                            className="flex items-center px-6 py-4 leading-6 focus:text-indigo-700 focus:outline-none"
                                        >
                                            {assigner?.first_name} {assigner?.last_name}
                                        </p>
                                    </td>
                                    <td className="border">
                                        <p
                                            className={`flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none ${status === PENDING ? 'text-red-600' : status === ASSIGNED ? 'text-blue-500' : 'text-green-500'}`}
                                        >
                                            {status === PENDING ? 'Pending' : status === ASSIGNED ? 'Assigned' : 'Resolved'}
                                        </p>
                                    </td>
                                    <td className="w-px border px-4 py-3 whitespace-nowrap">
                                        <div className="flex items-center gap-4 justify-end">

                                            {isUserPermittedToPerformAction('access::issue-edit', user_permissions) &&
                                                <Link
                                                    href={route("issue.edit", id)}
                                                    className="inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline"
                                                >
                                                    <Icon
                                                        name="FaEdit"
                                                        className="w-6 h-4 text-gray-400 fill-current"
                                                    />
                                                </Link>
                                            }
                                            {isUserPermittedToPerformAction('access::issue-show', user_permissions) &&
                                                <Link
                                                    href={route("issue.show", id)}
                                                    className="inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline"
                                                >
                                                    <Icon
                                                        name="FaEye"
                                                        className="w-6 h-4 text-gray-400 fill-current"
                                                    />
                                                </Link>
                                            }
                                            {isUserPermittedToPerformAction('access::issue-delete', user_permissions) &&
                                                <button
                                                    onClick={() => deleteIssue(id)}
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
                    ) : (
                        <tr>
                            <td className="px-6 py-4 border" colSpan="4">
                                No Issue found.
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

Index.layout = (page) => <Layout title="Issues" children={page}/>;

export default Index;
