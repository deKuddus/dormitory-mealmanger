import React from "react";
import { usePage } from "@inertiajs/react";
import Layout from "@/Shared/Layout/AuthenticatedLayout";
import TablePageLayout from "@/Shared/Layout/TablePageLayout";
import TableHeader from "@/Shared/TableHeader";
import TableData from "@/Shared/TableData";
const Show = () => {
    const { issue } = usePage().props;

    return (
        <TablePageLayout
            breadcumb_name={'Issue Details'}
        >
            <TableHeader rows={['Title', 'Description']}/>
            <tbody>
            <tr>
                <TableData value={issue.title}/>
                <TableData value={<span dangerouslySetInnerHTML={{ __html: issue.description }}></span>}/>
            </tr>
            </tbody>
        </TablePageLayout>
    );
};

Show.layout = (page) => <Layout title="Issue" children={page} />;

export default Show;
