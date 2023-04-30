import React from "react";
import {Link, usePage} from "@inertiajs/react";
import MemberLayout from "@/Shared/Layout/AuthenticatedLayout";
import Icon from "@/Shared/Icon";
import {ASSIGNED, PENDING, RESOLVED} from "@/Shared/const/issueStatus";
import TablePageLayout from "@/Shared/Layout/TablePageLayout";
import TableHeader from "@/Shared/TableHeader";
import TableData from "@/Shared/TableData";
import TableAction from "@/Shared/TableAction";

const Index = () => {
    const tableHeading = ['NO', 'Title', 'Resolver', 'Assigned By', 'Status', 'Action'];
    const {issues, auth} = usePage().props;
    const {
        data,
        meta: {links},
    } = issues;

    return (
        <TablePageLayout
            breadcumb_name={'Issues'}
            breadcumb_link={route('user.issue.index')}
            breadcumb_action={'Create New Issue'}
            isShowButton={true}
            pagination_links={links}
        >
            <TableHeader rows={tableHeading}/>
            <tbody>
            {data ? (
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
                                    {issuer.id ===
                                        auth.user.id && status !== RESOLVED && (
                                            <Link
                                                href={route(
                                                    "user.issue.edit",
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

                                    <Link
                                        href={route(
                                            "user.issue.show",
                                            id
                                        )}
                                        className="inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline"
                                    >
                                        <Icon
                                            name="FaEye"
                                            className="w-6 h-4 text-gray-400 fill-current"
                                        />
                                    </Link>
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

Index.layout = (page) => <MemberLayout title="Issues" children={page}/>;

export default Index;
