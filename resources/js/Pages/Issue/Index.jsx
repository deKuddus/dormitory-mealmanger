import React from "react";
import {Link, router, usePage} from "@inertiajs/react";
import Layout from "@/Shared/Layout/AuthenticatedLayout";
import TableHeader from "@/Shared/TableHeader";
import TablePageLayout from "@/Shared/Layout/TablePageLayout";
import {ASSIGNED, PENDING,RESOLVED} from "@/Shared/const/issueStatus";
import {isUserPermittedToPerformAction} from "@/utils";
import Icon from "@/Shared/Icon";
import TableData from "@/Shared/TableData";
import TableAction from "@/Shared/TableAction";

const Index = () => {
    const tableHeading = ['No', 'Title', 'Resolver', 'Assigned By', 'Status', 'Action'];
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
    };

    return (
        <TablePageLayout
            breadcumb_action={'Add New Issue'}
            breadcumb_name={'Issues'}
            pagination_links={links}
            breadcumb_link={route('issue.create')}
            isShowButton={true}
        >
            <TableHeader rows={tableHeading}/>
            <tbody>
            {data && data.length ? (
                data.map(
                    (
                        {
                            id,
                            title,
                            description,
                            status,
                            issuer,
                            assigner,
                            resolver,
                        },
                        key
                    ) => {
                        return (
                            <tr
                                key={id}
                            >
                                <TableData value={key + 1}/>
                                <TableData value={
                                    <>
                                        {title}{" "}
                                        <span className="text-red-600 mx-2">
                                                        {" "}
                                            Issued By{" "}
                                                    </span>{" "}
                                        {issuer.full_name}
                                    </>
                                }
                                />
                                <TableData value={resolver?.full_name || ''}/>
                                <TableData value={assigner?.full_name || ''}/>

                                <TableData value={
                                    status === ASSIGNED
                                        ? "Assigned"
                                        : status === PENDING
                                            ? "Pending"
                                            : "Resolved"
                                }
                                           className={`rounded-full ${status === RESOLVED ? 'bg-success text-success' : status === PENDING ? 'bg-danger text-danger' : 'bg-background-200 text-black dark:text-white'} text-center bg-opacity-10 py-1 px-3 text-sm `}
                                />
                                <TableAction>
                                    {isUserPermittedToPerformAction(
                                        "access::issue-edit",
                                        user_permissions
                                    ) && (
                                        <Link
                                            href={route(
                                                "issue.edit",
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
                                        "access::issue-show",
                                        user_permissions
                                    ) && (
                                        <Link
                                            href={route(
                                                "issue.show",
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
                                        "access::issue-delete",
                                        user_permissions
                                    ) && (
                                        <button
                                            onClick={() =>
                                                deleteIssue(id)
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
                    }
                )
            ) : (
                <tr>
                    <TableData value={'No Data Found'} colSpan={tableHeading.length}
                               className="text-center text-black dark:text-white"/>
                </tr>
            )}
            </tbody>
        </TablePageLayout>
    );
};

Index.layout = (page) => <Layout title="Issues" children={page}/>;

export default Index;
