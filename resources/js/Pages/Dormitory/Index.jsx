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
    const tableHeading = ['No', 'Name', 'Address', 'Status', 'Action'];
    const {messes, user_permissions} = usePage().props;
    const {
        data,
        meta: {links},
    } = messes;

    const deleteMess = (id) => {
        if (confirm("Are you sure you want to delete this dormitory?")) {
            router.delete(route("dormitory.destroy", id));
        }
        return true;
    };

    return (
        <TablePageLayout
            breadcumb_action={'Add New Dormitory'}
            breadcumb_name={'Dormitory'}
            pagination_links={links}
            breadcumb_link={route('additional.create')}
            isShowButton={false}
        >
            <TableHeader rows={tableHeading}/>
            <tbody>
            {data && data.length ? data.map(({id, name, address, status}, key) => {
                return (
                    <tr
                        key={id}
                    >
                        <TableData value={key + 1}/>
                        <TableData value={name}/>
                        <TableData value={address}/>
                        <TableData value={status ? "Active" : "Inactive"}/>
                        <TableAction>
                            {isUserPermittedToPerformAction(
                                "access::dormitory-edit",
                                user_permissions
                            ) && (
                                <Link
                                    href={route(
                                        "dormitory.edit",
                                        id
                                    )}
                                    className="inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline"
                                >
                                    <Icon
                                        name="FaEdit"
                                        className="w-6 h-4 text-gray-500 fill-current"
                                    />
                                </Link>
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
