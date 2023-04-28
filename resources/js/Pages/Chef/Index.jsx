import React from "react";
import {Link, router, usePage} from "@inertiajs/react";
import Layout from "@/Shared/Layout/AuthenticatedLayout";
import Icon from "@/Shared/Icon";
import {isUserPermittedToPerformAction} from "@/utils";
import TablePageLayout from "@/Shared/Layout/TablePageLayout";
import TableHeader from "@/Shared/TableHeader";
import TableData from "@/Shared/TableData";
import TableAction from "@/Shared/TableAction";

const Index = () => {
    const tableHeading = ['No', 'Name', 'Phone', 'Address', 'Status', 'Action'];
    const {chefs, user_permissions} = usePage().props;
    const {
        data,
        meta: {links},
    } = chefs;

    const deleteChef = (id) => {
        if (confirm("Are you sure you want to delete this chef?")) {
            router.delete(route("chef.destroy", id));
        }
        return true;
    };

    return (

        <TablePageLayout
            breadcumb_action={'Add New Chef'}
            breadcumb_name={'Chefs'}
            pagination_links={links}
            breadcumb_link={route('chef.create')}
            isShowButton={isUserPermittedToPerformAction(
                "access::chef-create",
                user_permissions
            )}
        >
            <TableHeader rows={tableHeading}/>
            <tbody>
            {data && data.length ? data.map(
                ({id, name, address, phone, status}, key) => {
                    return (
                        <tr
                            key={id}
                        >
                            <TableData value={key + 1}/>
                            <TableData value={name}/>
                            <TableData value={phone}/>
                            <TableData value={address}/>
                            <TableData value={status}/>
                            <TableAction>
                                {isUserPermittedToPerformAction(
                                    "access::chef-edit",
                                    user_permissions
                                ) && (
                                    <Link
                                        href={route(
                                            "chef.edit",
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
                                    "access::chef-delete",
                                    user_permissions
                                ) && (
                                    <button
                                        onClick={() =>
                                            deleteChef(id)
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

Index.layout = (page) => <Layout title="Chef" children={page}/>;

export default Index;
