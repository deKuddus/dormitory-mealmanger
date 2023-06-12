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
    const tableHeading = ['No', 'Name', 'Mobile', 'Email', 'Status', 'Is Admin', 'Action'];
    const {users, totalMemberActive, totalMemberInActive, user_permissions} =
        usePage().props;
    const {
        data,
        meta: {links},
    } = users;

    const deleteUser = (id) => {
        if (confirm("Are you sure you want to delete this user?")) {
            router.delete(route("user.destroy", id));
        }
        return true;
    };

    const loginAsUser = (id,name) =>{
        if(confirm(`Are you sure to login as ${name}?`)){
            return router.get(route('login.as.user',id));
        }
    }


    const Additional = () => {
        return (
            <div className="flex items-center">
                    <span className="text-xl p-3">
                        Total Member:{" "}
                        <span className="font-bold">
                            {totalMemberActive + totalMemberInActive}
                        </span>
                    </span>
                <span className="text-xl p-3">
                        Active :{" "}
                    <span className="font-bold text-buttonColor-400">
                            {totalMemberActive}
                        </span>
                    </span>
                <span className="text-xl p-3">
                        Inactive :{" "}
                    <span className="font-bold text-red-600">
                            {totalMemberInActive}
                        </span>
                    </span>
            </div>
        );
    }

    return (
        <TablePageLayout
            breadcumb_action={'Add New Member'}
            breadcumb_name={'Members'}
            pagination_links={links}
            breadcumb_link={route('user.create')}
            isShowButton={isUserPermittedToPerformAction(
                "access::user-create",
                user_permissions
            )}
            additionalComponent={<Additional/>}
        >
            <TableHeader rows={tableHeading}/>
            <tbody>
            {data && data.length ? data.map(
                (
                    {id, name, phone, status, email, is_admin},
                    key
                ) => {
                    return (
                        <tr
                            key={id}
                        >
                            <TableData value={key + 1}/>
                            <TableData value={name}/>
                            <TableData value={phone}/>
                            <TableData value={email}/>
                            <TableData value={
                                status === 1
                                    ? "Active"
                                    : "Inactive"
                            }
                                       className={`rounded-full ${status === 1 ? 'bg-success text-success' : 'bg-danger text-danger'} text-center bg-opacity-10 py-1 px-3 text-sm `}
                            />
                            <TableData value={is_admin ? "Yes" : "No"}/>
                            <TableAction>
                                {isUserPermittedToPerformAction(
                                    "access::user-edit",
                                    user_permissions
                                ) && (
                                    <Link
                                        href={route(
                                            "user.edit",
                                            id
                                        )}
                                        className="inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline"
                                    >
                                        <Icon
                                            name="FaEdit"
                                            className="w-6 h-4 text-gray-400 hover:text-buttonColor-400 fill-current"
                                        />
                                    </Link>
                                )}
                                {isUserPermittedToPerformAction(
                                    "access::user-show",
                                    user_permissions
                                ) && (
                                    <Link
                                        href={route(
                                            "user.show",
                                            id
                                        )}
                                        className="inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline"
                                    >
                                        <Icon
                                            name="FaEye"
                                            className="w-6 h-4 text-gray-400 hover:text-buttonColor-400 fill-current"
                                        />
                                    </Link>
                                )}

                                {isUserPermittedToPerformAction(
                                    "access::user-delete",
                                    user_permissions
                                ) && (
                                    <button
                                        onClick={() =>
                                            deleteUser(id)
                                        }
                                        className="inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline"
                                    >
                                        <Icon
                                            name="FaTrashAlt"
                                            className="w-6 h-4 text-gray-400 hover:text-red-600 fill-current"
                                        />
                                    </button>
                                )}
                                <button
                                    onClick={() =>
                                        loginAsUser(id,name)
                                    }
                                    className="inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline"

                                >
                                    <Icon
                                        name="FaSignInAlt"
                                        className="w-6 h-4 text-gray-400 hover:text-red-600 fill-current"
                                    />
                                </button>
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

Index.layout = (page) => <Layout title="Users" children={page}/>;

export default Index;
