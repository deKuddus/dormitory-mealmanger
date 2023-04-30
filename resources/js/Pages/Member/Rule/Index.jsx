import React from "react";
import { Link, router, usePage } from "@inertiajs/react";
import MemberLayout from "@/Shared/Layout/AuthenticatedLayout";

import Icon from "@/Shared/Icon";
import Pagination from "@/Shared/Pagination";
import {isUserPermittedToPerformAction} from "@/utils";
import TableHeader from "@/Shared/TableHeader";
import TableData from "@/Shared/TableData";
import {ACTIVE} from "@/Shared/const/noticeStatus";
import TableAction from "@/Shared/TableAction";
import TablePageLayout from "@/Shared/Layout/TablePageLayout";

const Notice = () => {
    const tableHeading = ['No', 'Title', 'Status', 'Action'];

    const { rules } = usePage().props;
    const {
        data,
        meta: { links },
    } = rules;

    return (
        <TablePageLayout
            breadcumb_name={'Terms & Conditions'}
        >
            <TableHeader rows={tableHeading}/>
            <tbody>
            {data && data.length ? data.map(({id, title}, key) => {
                return (
                    <tr
                        key={id}
                    >
                        <TableData value={key + 1}/>
                        <TableData value={title}/>

                        <TableAction>
                            <Link
                                href={route(
                                    "user.rules.details",
                                    id
                                )}
                                className="inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline"
                            >
                                <Icon
                                    name="FaEye"
                                    className="w-6 h-4 text-gray-400 fill-current"
                                />
                            </Link>
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

Notice.layout = (page) => <MemberLayout title="Notices" children={page} />;

export default Notice;
