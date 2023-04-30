import React from "react";
import {Link, router, usePage} from "@inertiajs/react";
import Layout from "@/Shared/Layout/AuthenticatedLayout";
import Icon from "@/Shared/Icon";
import moment from "moment";
import {isUserPermittedToPerformAction} from "@/utils";
import TablePageLayout from "@/Shared/Layout/TablePageLayout";
import TableHeader from "@/Shared/TableHeader";
import TableData from "@/Shared/TableData";
import TableAction from "@/Shared/TableAction";

const Index = () => {
    const tableHeading = ['No', 'Date', 'Name', 'Status', 'Action'];
    const {bazarSchedules, user_permissions} = usePage().props;
    const {
        data,
        meta: {links},
    } = bazarSchedules;

    const deleteBazarSchedule = (id) => {
        if (confirm("Are you sure you want to delete this bazar-schedule?")) {
            router.delete(route("bazar-schedule.destroy", id));
        }
        return true;
    };

    return (
        <TablePageLayout
            breadcumb_action={'Add New Schedule'}
            breadcumb_name={'Bazar Schedule'}
            pagination_links={links}
            breadcumb_link={route('bazar-schedule.create')}
            isShowButton={isUserPermittedToPerformAction(
                "access::bazarschedule-create",
                user_permissions
            )}
        >
            <TableHeader rows={tableHeading}/>
            <tbody>
            {data && data.length ? data.map(({id, bazar_date, status, users}, key) => {
                return (
                    <tr
                        key={id}
                    >
                        <TableData value={key + 1}/>
                        <TableData value={moment(bazar_date).format("dddd, LL")}/>
                        <TableData value={users && users.length > 0
                            ? users.map(
                                (
                                    {
                                        full_name
                                    },
                                    index
                                ) => (
                                    <span
                                        key={index}
                                        className={`bg-${
                                            status === 1
                                                ? "green"
                                                : "red"
                                        }-200 text-gray-800  mr-2 px-2.5 py-0.5 rounded`}
                                    >{full_name}</span>
                                )
                            )
                            : "N/A"}
                        />
                        <TableData value={status === 0 ? 'Pending' : 'Done'}
                                   className={`rounded-full ${status === 0 ? 'bg-danger text-danger' : 'bg-success text-success'} text-center bg-opacity-10 py-1 px-3 text-sm `}/>

                        <TableAction>
                            {isUserPermittedToPerformAction(
                                "access::bazarschedule-edit",
                                user_permissions
                            ) && (
                                <Link
                                    href={route(
                                        "bazar-schedule.edit",
                                        id
                                    )}
                                    className="inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline"
                                >
                                    <Icon
                                        name="FaEdit"
                                        className="w-6 h-4 text-gray-400 fill-current"
                                    />
                                </Link>
                            )}
                            {isUserPermittedToPerformAction(
                                "access::bazarschedule-delete",
                                user_permissions
                            ) && (
                                <button
                                    onClick={() =>
                                        deleteBazarSchedule(id)
                                    }
                                    className="inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline"
                                >
                                    <Icon
                                        name="FaTrashAlt"
                                        className="w-6 h-4 text-gray-400 fill-current"
                                    />
                                </button>
                            )}
                        </TableAction>
                    </tr>
                );
            }) : (
                <tr>
                    <TableData value={'No Data Found'} colSpan={tableHeading.length}
                               className="text-center text-black dark:text-white"/>
                </tr>
            )}
            </tbody>
        </TablePageLayout>
    );
};

Index.layout = (page) => <Layout title="Bazar Schedule" children={page}/>;

export default Index;
