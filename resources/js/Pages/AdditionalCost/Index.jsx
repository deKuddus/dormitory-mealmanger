import React from "react";
import {router, usePage} from "@inertiajs/react";
import Layout from "@/Shared/Layout/AuthenticatedLayout";
import Icon from "@/Shared/Icon";
import {APPROVED, PENDING} from "@/Shared/const/additionalCostStatus";
import {isUserPermittedToPerformAction} from "@/utils";
import TablePageLayout from "@/Shared/Layout/TablePageLayout";
import TableHeader from "@/Shared/TableHeader";
import TableData from "@/Shared/TableData";
import TableAction from "@/Shared/TableAction";
import moment from "moment/moment";

const Index = () => {
    const {additionals, user_permissions} = usePage().props;
    const {
        data,
        meta: {links},
    } = additionals;

    const deleteAdditionalCost = (id) => {
        if (confirm("Are you sure you want to delete this additional?")) {
            router.delete(route("additional.destroy", id));
        }
        return true;
    };

    return (
        <TablePageLayout
            breadcumb_action={'Add New Cost'}
            breadcumb_name={'Fixed Cost'}
            pagination_links={links}
            breadcumb_link={route('additional.create')}
            isShowButton={isUserPermittedToPerformAction(
                "access::additional-create",
                user_permissions
            )}
        >
            <TableHeader rows={['No', 'Amount', 'Description', 'Status','Date', 'Action']}/>
            <tbody>
            {data && data.length ? data.map(
                ({id, amount, description, created_at,status}, key) => {
                    return (

                        <tr
                            key={id}
                        >
                            <TableData value={key + 1}/>
                            <TableData value={amount}/>
                            <TableData value={description}/>
                            <TableData value={
                                status === APPROVED
                                    ? "Approved"
                                    : status === PENDING
                                        ? "Pending"
                                        : "Closed"
                            }
                                       className={`rounded-full ${status === APPROVED ? 'bg-success text-success' : 'bg-danger text-danger'} text-center bg-opacity-10 py-1 px-3 text-sm `}
                            />
                            <TableData value={moment(created_at).format("Do MMMM YYYY")}/>
                            <TableAction>
                                {/*<Link*/}
                                {/*    href={route("additional.edit", id)}*/}
                                {/*    className="inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline"*/}
                                {/*>*/}
                                {/*    <Icon*/}
                                {/*        name="FaEdit"*/}
                                {/*        className="w-6 h-4 text-gray-400 fill-current"*/}
                                {/*    />*/}
                                {/*</Link>*/}
                                {status !== 2 ? (
                                    <>
                                        {isUserPermittedToPerformAction(
                                            "access::additional-delete",
                                            user_permissions
                                        ) && (
                                            <button
                                                onClick={() =>
                                                    deleteAdditionalCost(
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
                    <TableData value={'No Data Found'} colSpan={6} className="text-center text-black dark:text-white"/>
                </tr>
            )}
            </tbody>
        </TablePageLayout>

    );
};
Index.layout = (page) => <Layout title="Additional Cost" children={page}/>;

export default Index;
