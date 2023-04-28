import React from "react";
import {Link, router, usePage} from "@inertiajs/react";
import Layout from "@/Shared/Layout/AuthenticatedLayout";
import Icon from "@/Shared/Icon";
import {ACTIVE} from "@/Shared/const/noticeStatus";
import {isUserPermittedToPerformAction} from "@/utils";
import TablePageLayout from "@/Shared/Layout/TablePageLayout";
import TableHeader from "@/Shared/TableHeader";
import TableData from "@/Shared/TableData";
import TableAction from "@/Shared/TableAction";

const Index = () => {
    const tableHeading = ['No', 'Title', 'Status', 'Action'];
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
    };

    return (
        <TablePageLayout
            breadcumb_action={'Add New Notice'}
            breadcumb_name={'Notices'}
            pagination_links={links}
            breadcumb_link={route('notice.create')}
            isShowButton={isUserPermittedToPerformAction(
                "access::notice-create",
                user_permissions
            )}
        >
            <TableHeader rows={tableHeading}/>
            <tbody>
            {data && data.length ? data.map(({id, title, description, status}, key) => {
                return (
                    <tr
                        key={id}
                    >
                        <TableData value={key + 1}/>
                        <TableData value={title}/>
                        <TableData value={status === ACTIVE ? "Active" : "Inactive"}
                                   className={`rounded-full ${status === ACTIVE ? 'bg-success text-success' : 'bg-danger text-danger'} text-center bg-opacity-10 py-1 px-3 text-sm`}
                        />
                        <TableAction>
                            {isUserPermittedToPerformAction(
                                "access::meal-edit",
                                user_permissions
                            ) && (
                                <Link
                                    href={route(
                                        "notice.edit",
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
                                "access::meal-show",
                                user_permissions
                            ) && (
                                <Link
                                    href={route(
                                        "notice.show",
                                        id
                                    )}
                                    className="inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline"
                                >
                                    <Icon
                                        name="FaEye"
                                        className="w-6 h-4 text-gray-400 fill-current"
                                    />
                                </Link>
                            )}
                            {isUserPermittedToPerformAction(
                                "access::meal-delete",
                                user_permissions
                            ) && (
                                <button
                                    onClick={() =>
                                        deleteNotice(id)
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

Index.layout = (page) => <Layout title="Notices" children={page}/>;

export default Index;
