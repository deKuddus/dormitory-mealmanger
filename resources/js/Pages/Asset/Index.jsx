import React from "react";
import {Link, router, usePage} from "@inertiajs/react";
import Layout from "@/Shared/Layout/AuthenticatedLayout";
import {isUserPermittedToPerformAction} from "@/utils";
import TableHeader from "@/Shared/TableHeader";
import TablePageLayout from "@/Shared/Layout/TablePageLayout";
import TableData from "@/Shared/TableData";
import TableAction from "@/Shared/TableAction";
import Icon from "@/Shared/Icon";

const Index = () => {
    const {assets, user_permissions} = usePage().props;
    const {
        data, meta: {links},
    } = assets;

    const deleteAsset = (id) => {
        if (confirm("Are you sure you want to delete this asset?")) {
            router.delete(route("asset.destroy", id));
        }
        return true;
    };

    return (<TablePageLayout
        breadcumb_action={'Add New Asset'}
        breadcumb_name={'Assets'}
        pagination_links={links}
        breadcumb_link={route('asset.create')}
        isShowButton={isUserPermittedToPerformAction("access::asset-create", user_permissions)}
    >
        <TableHeader rows={['No', 'Title', 'Description', 'Purchase Date', 'Status', 'Action']}/>
        <tbody>
        {data && data.length ? (data.map(({
                                              id, title, description, purchase_date, status,
                                          }, key) => {
            return (<tr
                key={id}

            >
                <TableData value={key + 1}/>
                <TableData value={title}/>
                <TableData value={description}/>
                <TableData value={purchase_date}/>
                <TableData value={status ? "Active" : "Inactive"}/>

                <TableAction>
                    {isUserPermittedToPerformAction(
                        "access::asset-edit",
                        user_permissions
                    ) && (
                        <Link
                            href={route(
                                "asset.edit",
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
                        "access::asset-delete",
                        user_permissions
                    ) && (
                        <button
                            onClick={() =>
                                deleteAsset(id)
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

            </tr>);
        })) : (<tr>
            <TableData value={'No Data Found'} colSpan={6} className="text-center text-black dark:text-white"/>
        </tr>)}
        </tbody>
    </TablePageLayout>);
};

Index.layout = (page) => <Layout title="Asset" children={page}/>;

export default Index;
