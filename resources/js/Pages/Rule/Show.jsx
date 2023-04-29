import React from "react";
import {  usePage } from "@inertiajs/react";
import Layout from "@/Shared/Layout/AuthenticatedLayout";
import TablePageLayout from "@/Shared/Layout/TablePageLayout";
import TableHeader from "@/Shared/TableHeader";
import TableData from "@/Shared/TableData";
const Show = () => {
    const { rule } = usePage().props;

    return (
        <TablePageLayout
            breadcumb_name={'Rule Details'}
        >
            <TableHeader rows={['Title', 'Description']}/>
            <tbody>
            <tr>
                <TableData value={rule.title}/>
                <TableData value={<span dangerouslySetInnerHTML={{ __html: rule.description }}></span>}/>
            </tr>
            </tbody>
        </TablePageLayout>
    );
};

Show.layout = (page) => <Layout title="Notices" children={page} />;

export default Show;
