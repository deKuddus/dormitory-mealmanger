import React from "react";
import {Link, router, usePage} from "@inertiajs/react";
import Layout from "@/Shared/Layout/AuthenticatedLayout";
import {isUserPermittedToPerformAction} from "@/utils";
import TableHeader from "@/Shared/TableHeader";
import TablePageLayout from "@/Shared/Layout/TablePageLayout";
import {ACTIVE} from "@/Shared/const/noticeStatus";
import Icon from "@/Shared/Icon";
import TableData from "@/Shared/TableData";
import TableAction from "@/Shared/TableAction";

const Index = () => {
    const tableHeading = ['No', 'Title', 'Status', 'Action'];
    const {rules, user_permissions} = usePage().props;
    const {
        data,
        meta: {links},
    } = rules;

    const deleteRule = (id) => {
        if (confirm("Are you sure you want to delete this notice?")) {
            router.delete(route("rule.destroy", id));
        }
        return true;
    };

    return (
        <TablePageLayout
            breadcumb_action={'Add New Rule'}
            breadcumb_name={'Rules'}
            pagination_links={links}
            breadcumb_link={route('rule.create')}
            isShowButton={isUserPermittedToPerformAction(
                "access::rule-create",
                user_permissions
            )}
        >
            <TableHeader rows={tableHeading}/>
            <tbody>
            {data && data.length ? data.map(({id, title, status}, key) => {
                return (
                    <tr
                        key={id}
                    >
                        <TableData value={key + 1}/>
                        <TableData value={title}/>
                        <TableData value={
                            status === Boolean(ACTIVE)
                                ? "Active"
                                : "InActive"
                        }
                                   className={`rounded-full ${status === Boolean(ACTIVE) ? 'bg-success text-black dark:text-white' : 'bg-danger text-danger'} text-center bg-opacity-10 py-1 px-3 text-sm`}
                        />

                        <TableAction>
                            {isUserPermittedToPerformAction(
                                "access::rule-edit",
                                user_permissions
                            ) && (
                                <Link
                                    href={route(
                                        "rule.edit",
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
                                "access::rule-show",
                                user_permissions
                            ) && (
                                <Link
                                    href={route(
                                        "rule.show",
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
                                "access::rule-delete",
                                user_permissions
                            ) && (
                                <button
                                    onClick={() =>
                                        deleteRule(id)
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

Index.layout = (page) => <Layout title="Rules" children={page}/>;

export default Index;
