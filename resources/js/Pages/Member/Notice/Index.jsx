import React from "react";
import {Link, usePage} from "@inertiajs/react";
import MemberLayout from "@/Shared/Layout/AuthenticatedLayout";

import Icon from "@/Shared/Icon";
import TablePageLayout from "@/Shared/Layout/TablePageLayout";
import TableHeader from "@/Shared/TableHeader";
import TableData from "@/Shared/TableData";
import {ACTIVE} from "@/Shared/const/noticeStatus";
import TableAction from "@/Shared/TableAction";

const Notice = () => {
    const {notices} = usePage().props;
    const {
        data,
        meta: {links},
    } = notices;

    return (
        <TablePageLayout
            breadcumb_name={'Notices'}
        >
            <TableHeader rows={['No', 'Title', 'Action']}/>
            <tbody>
            {data && data.length ? data.map(({id, title, status}, key) => {
                return (
                    <tr
                        key={id}
                    >
                        <TableData value={key + 1}/>
                        <TableData value={title}/>
                        <TableData value={status === ACTIVE ? "Active" : "Inactive"}
                                   className={`rounded-full ${status === ACTIVE ? 'bg-success text-success' : 'bg-danger text-danger'} text-center bg-opacity-10 py-1 px-3 text-sm`}
                        />
                        <TableAction>
                            <Link
                                href={route(
                                    "user.notice.show",
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
                    <TableData value={'No Data Found'} colSpan={3}
                               className="text-center text-black dark:text-white"/>
                </tr>
            )}
            </tbody>
        </TablePageLayout>
    );
};

Notice.layout = (page) => <MemberLayout title="Notices" children={page}/>;

export default Notice;
