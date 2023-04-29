import React from "react";
import {Link, router, usePage} from "@inertiajs/react";
import Layout from "@/Shared/Layout/AuthenticatedLayout";
import {isUserPermittedToPerformAction} from "@/utils";
import TablePageLayout from "@/Shared/Layout/TablePageLayout";
import TableHeader from "@/Shared/TableHeader";
import moment from "moment/moment";
import Icon from "@/Shared/Icon";
import TableData from "@/Shared/TableData";
import TableAction from "@/Shared/TableAction";

const Index = () => {
    const tableHeading = ['No', 'Create Date', 'Amount', 'Description', 'Status', 'Member', 'Action'];
    const {bazars, user_permissions} = usePage().props;
    const {
        data,
        meta: {links},
    } = bazars;

    const deleteBazar = (id) => {
        if (confirm("Are you sure you want to delete this bazar?")) {
            router.delete(route("bazar.destroy", id));
        }
        return true;
    };
    const approvBazar = (id) => {
        if (confirm("Are you sure you want to approve this bazar?")) {
            router.post(route("bazar.approve"), {
                id,
            });
        }
        return true;
    };


    return (
        <TablePageLayout
            breadcumb_action={'Add New Bazar'}
            breadcumb_name={'Bazars'}
            pagination_links={links}
            breadcumb_link={route('bazar.create')}
            isShowButton={isUserPermittedToPerformAction(
                "access::bazar-create",
                user_permissions
            )}
        >
            <TableHeader rows={tableHeading}/>
            <tbody>
            {data && data.length ? data.map(
                (
                    {
                        id,
                        amount,
                        description,
                        created_at,
                        bazarSchedule,
                        status,
                    },
                    key
                ) => {
                    return (
                        <tr
                            key={id}

                        >
                            <TableData value={key + 1}/>
                            <TableData value={moment(created_at).format("Do MMMM YYYY")}/>
                            <TableData value={amount}/>
                            <TableData value={description}/>
                            <TableData value={status === 0 ? 'Pending' : status === 1 ? 'Approved' :'N/A' }
                                       className={`rounded-full ${status === 0 ? 'bg-danger text-danger' : status === 1 ? 'bg-success success text-success' : 'bg-buttonColor-900 text-black dark:text-white'} text-center bg-opacity-10 py-1 px-3 text-sm `}/>
                            <TableData value={
                                <BazarScheduleUSer
                                    users={
                                        bazarSchedule &&
                                        bazarSchedule.users
                                    }
                                />}
                            />
                            <TableAction>
                                {status === 0 &&
                                    isUserPermittedToPerformAction(
                                        "access::bazar-approve",
                                        user_permissions
                                    ) && (
                                        <button
                                            onClick={() =>
                                                approvBazar(id)
                                            }
                                            className="inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline"
                                        >
                                            <Icon
                                                name="FaCheck"
                                                className="w-6 h-4 text-gray-400 fill-current"
                                            />
                                        </button>
                                    )}

                                {status !== 2 ? (
                                    <>
                                        {isUserPermittedToPerformAction(
                                            "access::bazar-edit",
                                            user_permissions
                                        ) && (
                                            <Link
                                                href={route(
                                                    "bazar.edit",
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
                                            "access::bazar-delete",
                                            user_permissions
                                        ) && (
                                            <button
                                                onClick={() =>
                                                    deleteBazar(
                                                        id
                                                    )
                                                }
                                                className="inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline"
                                            >
                                                <Icon
                                                    name="FaTrashAlt"
                                                    className="w-6 h-4 text-gray-400 fill-current"
                                                />
                                            </button>
                                        )}
                                    </>
                                ) : (
                                    <span className="text-3xl">
                                                        🫣
                                                    </span>
                                )}
                            </TableAction>
                        </tr>
                    );
                }
            ) : (
                <tr>
                    <TableData value={'No Data Found'} colSpan={tableHeading.length} className="text-center text-black dark:text-white"/>
                </tr>
            )}
            </tbody>
        </TablePageLayout>
    );
};
const BazarScheduleUSer = ({users}) => {
    return (
        <p className="flex items-center px-6 py-4 text-center ">
            {users && users.length > 0
                ? users.map(({first_name, last_name}, index) => (
                    <span
                        key={index}
                        className={`bg-success bg-opacity-10 text-success  mr-2 py-1 px-3 rounded-full`}
                    >{`${first_name} ${last_name}`}</span>
                ))
                : "N/A"}
        </p>
    );
};

Index.layout = (page) => <Layout title="Bazars" children={page}/>;

export default Index;
