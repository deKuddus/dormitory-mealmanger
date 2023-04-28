import React from "react";
import {Link, router, usePage} from "@inertiajs/react";
import Layout from "@/Shared/Layout/AuthenticatedLayout";
import Icon from "@/Shared/Icon";
import {isUserPermittedToPerformAction} from "@/utils";
import TablePageLayout from "@/Shared/Layout/TablePageLayout";
import TableHeader from "@/Shared/TableHeader";
import TableAction from "@/Shared/TableAction";
import TableData from "@/Shared/TableData";

const Index = () => {
    const tableHeading = ['No', 'Seat No', 'Status', 'Action'];
    const {seats, user_permissions} = usePage().props;
    const {
        data,
        meta: {links},
    } = seats;

    const deleteSeat = (id) => {
        if (confirm("Are you sure you want to delete this seat?")) {
            router.delete(route("seat.destroy", id));
        }
        return true;
    };

    return (
        <TablePageLayout
            breadcumb_action={'Add New Seat'}
            breadcumb_name={'Seats'}
            pagination_links={links}
            breadcumb_link={route('seat.create')}
            isShowButton={isUserPermittedToPerformAction(
                "access::seat-create",
                user_permissions
            )}
        >
            <TableHeader rows={tableHeading}/>
            <tbody>
            {data && data.length ? data.map(({id, seat_no, status}, key) => {
                return (
                    <tr
                        key={id}
                    >
                        <TableData value={key + 1}/>
                        <TableData value={seat_no}/>
                        <TableData value={status ? "Active" : "Inactive"}/>
                        <TableAction>
                            {isUserPermittedToPerformAction(
                                "access::seat-edit",
                                user_permissions
                            ) && (
                                <Link
                                    href={route(
                                        "seat.edit",
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
                                "access::seat-delete",
                                user_permissions
                            ) && (
                                <button
                                    onClick={() =>
                                        deleteSeat(id)
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

Index.layout = (page) => <Layout title="Seat" children={page}/>;

export default Index;
