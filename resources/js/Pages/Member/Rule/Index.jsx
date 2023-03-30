import React from "react";
import {Link, router, usePage} from "@inertiajs/react";
import MemberLayout from "@/Shared/Member/MemberLayout";
import Icon from "@/Shared/Icon";
import Pagination from "@/Shared/Pagination";

const Notice = () => {
    const {rules} = usePage().props;
    const {
        data,
        meta: {links},
    } = rules;


    return (
        <div>
            <h1 className="mb-8 text-3xl font-bold">Notices</h1>
            <div className="overflow-x-auto bg-white rounded shadow p-3">
                <table className="w-full whitespace-wrap">
                    <thead>
                    <tr className="font-bold text-left">
                        <th className="px-6 pt-5 pb-4">No</th>
                        <th className="px-6 pt-5 pb-4">Title</th>
                        <th className="px-6 pt-5 pb-4">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data ? data.map(
                        ({id, title}, key) => {
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
                                            className="flex leading-6 items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                        >
                                            {title}
                                        </p>
                                    </td>
                                    <td className="w-px border px-4 py-3 whitespace-nowrap">
                                        <div className="flex items-center gap-4 justify-end">
                                            <Link
                                                href={route("user.rules.details", id)}
                                                className="inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline"
                                            >
                                                <Icon
                                                    name="FaEye"
                                                    className="w-6 h-4 text-gray-400 fill-current"
                                                />
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            );
                        }
                    ) : (
                        <tr>
                            <td className="px-6 py-4 border" colSpan="4">
                                No Rule found.
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

Notice.layout = (page) => <MemberLayout title="Notices" children={page}/>;

export default Notice;
