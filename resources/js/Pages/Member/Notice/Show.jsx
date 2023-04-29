import React from "react";
import { Link, usePage } from "@inertiajs/react";
import MemberLayout from "@/Shared/Layout/AuthenticatedLayout";
import TableHeader from "@/Shared/TableHeader";
import TableData from "@/Shared/TableData";
import TablePageLayout from "@/Shared/Layout/TablePageLayout";

const Show = () => {
    const { notice } = usePage().props;

    return (
        <TablePageLayout
            breadcumb_name={'Notice Details'}
            breadcumb_link={route('user.notice.index')}
            breadcumb_action={'Notice List'}
            isShowButton={true}
        >
            <TableHeader rows={['Title', 'Description']}/>
            <tbody>
            <tr>
                <TableData value={notice.title}/>
                <TableData value={<span dangerouslySetInnerHTML={{ __html: notice.description }}></span>}/>
            </tr>
            </tbody>
        </TablePageLayout>
    );
};

Show.layout = (page) => <MemberLayout title="Notices" children={page} />;

export default Show;
