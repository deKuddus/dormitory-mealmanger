import React from "react";
import { Link, usePage } from "@inertiajs/react";
import MemberLayout from "@/Shared/Layout/AuthenticatedLayout";
import TableHeader from "@/Shared/TableHeader";
import TableData from "@/Shared/TableData";
import TablePageLayout from "@/Shared/Layout/TablePageLayout";

const Show = () => {
    const { issue } = usePage().props;

    return (
        <TablePageLayout
            breadcumb_name={'Issue Details'}
            breadcumb_link={route('user.issue.index')}
            breadcumb_action={'Issue List'}
            isShowButton={true}
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

Show.layout = (page) => <MemberLayout title="Issue" children={page} />;

export default Show;
