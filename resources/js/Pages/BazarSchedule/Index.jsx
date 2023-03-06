import React from "react";
import {Link, router, usePage} from "@inertiajs/react";
import Layout from "@/Shared/Layout";
import Icon from "@/Shared/Icon";
import SearchFilter from "@/Shared/SearchFilter";
import Pagination from "@/Shared/Pagination";
import moment from "moment";

const Index = () => {
    const {bazarSchedules} = usePage().props;
    const {
        data,
        meta: {links},
    } = bazarSchedules;

    const deleteBazarSchedule = (id) => {
        if (confirm("Are you sure you want to delete this bazar-schedule?")) {
            router.delete(route("bazar-schedule.destroy", id));
        }
        return true;
    }
    const StautsColumn = ({status}) => {
        if (status === 1) {
            return (<p
                    className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none text-green-400 "
                >
                    Done
                </p>
            );
        }
        if (status === 0) {
            return (<p
                    className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none text-red-400"
                >
                    Pending
                </p>
            );
        }
    }
    return (
        <div>
            <h1 className="mb-8 text-3xl font-bold">Bazar Schedules</h1>
            <div className="flex items-center justify-end mb-6">
                <Link
                    className="btn-indigo focus:outline-none"
                    href={route("bazar-schedule.create")}
                >
                    <span>Create</span>
                    <span className="hidden md:inline"> Bazar Schedule</span>
                </Link>
            </div>
            <div className="overflow-x-auto bg-white rounded shadow p-3">
                <table className="w-full whitespace-nowrap">
                    <thead>
                    <tr className="font-bold text-left">
                        <th className="px-6 pt-5 pb-4">No.</th>
                        <th className="px-6 pt-5 pb-4">Date</th>
                        <th className="px-6 pt-5 pb-4">Name</th>
                        <th className="px-6 pt-5 pb-4">Status</th>
                        <th className="px-6 pt-5 pb-4">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map(
                        ({id, bazar_date, status, users}, key) => {
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
                                            {moment(bazar_date).format('dddd, LL')}
                                        </p>
                                    </td>
                                    <td className="border">
                                        <p
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                        >
                                            {users && users.length > 0 ? users.map(
                                                ({first_name, last_name},index) => <span key={index}
                                                    className={`bg-${status === 1 ? 'green':'red'}-200 text-gray-800  mr-2 px-2.5 py-0.5 rounded`}>{`${first_name} ${last_name}`}</span>
                                            ) : 'N/A'}
                                        </p>
                                    </td>
                                    <td className="border">
                                        <StautsColumn status={status}/>
                                    </td>
                                    <td className="w-px border px-4 py-3 whitespace-nowrap">
                                        <div className="flex items-center gap-4 justify-end">
                                            <Link
                                                href={route("bazar-schedule.edit", id)}
                                                className="inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline"
                                            >
                                                <Icon
                                                    name="FaEdit"
                                                    className="w-6 h-4 text-gray-400 fill-current"
                                                />
                                            </Link>
                                            <button
                                                onClick={() => deleteBazarSchedule(id)}
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
                            <td className="px-6 py-4 border" colSpan="5">
                                No Bazar Schedule found.
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

Index.layout = (page) => <Layout title="Bazar Schedule" children={page}/>;

export default Index;
