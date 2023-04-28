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
    const tableHeading = ['No', 'Name', 'Number of Users', 'Permissions', 'Action'];
    const {roles, user_permissions} = usePage().props;
    const {
        data,
        meta: {links},
    } = roles;

    const deleteRule = (id) => {
        if (confirm("Are you sure you want to delete this notice?")) {
            router.delete(route("rule.destroy", id));
        }
        return true;
    };

    return (
        <TablePageLayout
            breadcumb_action={'Add New Role'}
            breadcumb_name={'Roles'}
            pagination_links={links}
            breadcumb_link={route('role.create')}
            isShowButton={isUserPermittedToPerformAction(
                "access::role-create",
                user_permissions
            )}
        >
            <TableHeader rows={tableHeading}/>
            <tbody>
            {data && data.length ? data.map(
                (
                    {id, name, permissions_count, users_count},
                    key
                ) => {
                    return (
                        <tr
                            key={id}
                        >
                            <TableData value={key + 1}/>
                            <TableData value={name}/>
                            <TableData value={users_count}/>
                            <TableData value={permissions_count}/>
                            <TableAction>
                                {isUserPermittedToPerformAction(
                                    "access::role-edit",
                                    user_permissions
                                ) && (
                                    <Link
                                        href={route(
                                            "role.edit",
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
                                    "access::role-delete",
                                    user_permissions
                                ) && (
                                    <button
                                        onClick={() =>
                                            deleteRole(id)
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

Index.layout = (page) => <Layout title="Roles" children={page}/>;

export default Index;
