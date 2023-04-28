import React from "react";
import { Link, router, usePage } from "@inertiajs/react";
import Layout from "@/Shared/Layout/AuthenticatedLayout";
import Icon from "@/Shared/Icon";
import SearchFilter from "@/Shared/SearchFilter";
import Pagination from "@/Shared/Pagination";
import TablePageLayout from "@/Shared/Layout/TablePageLayout";
import TableHeader from "@/Shared/TableHeader";
import TableData from "@/Shared/TableData";

const Index = () => {
    const { permissions } = usePage().props;
    const {
        data,
        meta: { links },
    } = permissions;

    return (
            <TablePageLayout
                breadcumb_action={''}
                breadcumb_name={'Permissions'}
                pagination_links={links}
                breadcumb_link={''}
                isShowButton={false}
            >
                <TableHeader rows={['No', 'Name']}/>
                <tbody>
                {data ? (
                    data.map(({ id, name, guard_name }, key) => {
                        return (
                            <tr
                                key={id}
                            >
                                <TableData value={key+ 1}/>
                                <TableData value={name}/>
                            </tr>
                        );
                    })
                ) : (
                    <tr>
                        <TableData value={'No Data Found'} colSpan={2} className="text-center text-black dark:text-white"/>
                    </tr>
                )}
                </tbody>
            </TablePageLayout>
    );
};

Index.layout = (page) => <Layout title="Permissions" children={page} />;

export default Index;
