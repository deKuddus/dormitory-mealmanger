import React from "react";
import { usePage } from "@inertiajs/react";
import MemberLayout from "@/Shared/Layout/AuthenticatedLayout";
import TablePageLayout from "@/Shared/Layout/TablePageLayout";
import TableHeader from "@/Shared/TableHeader";
import TableData from "@/Shared/TableData";

const Show = () => {
    const { rule } = usePage().props;

    return (
        <TablePageLayout
            breadcumb_name={'Rule Details'}
            breadcumb_link={route('user.rule.index')}
            breadcumb_action={'Rule List'}
            isShowButton={true}
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

Show.layout = (page) => <MemberLayout title="Rule" children={page} />;

export default Show;
