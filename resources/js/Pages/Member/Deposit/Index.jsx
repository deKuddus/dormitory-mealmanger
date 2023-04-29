import React from "react";
import {usePage} from "@inertiajs/react";
import MemberLayout from "@/Shared/Layout/AuthenticatedLayout";
import moment from "moment";
import TableHeader from "@/Shared/TableHeader";
import TablePageLayout from "@/Shared/Layout/TablePageLayout";
import TableData from "@/Shared/TableData";

const Index = () => {
    const {deposits} = usePage().props;
    const {data, links} = deposits;

    return (
        <TablePageLayout
            breadcumb_name={'Deposit'}
            breadcumb_action={'Add New Deposit'}
            breadcumb_link={route('user.deposits.create')}
            pagination_links={links}
            isShowButton={true}
        >
            <TableHeader rows={['Date', 'Amount', 'Status']}/>
            <tbody>
            {data && data.length ? (
                data.map((row, key) => (
                    <tr
                        key={key}

                    >
                        <TableData value={moment(row.deposit_date).format("D MMM YY")}/>
                        <TableData value={row.amount}/>
                        <TableData value={row.status === 0 ? 'Pending' : row.status === 1 ? 'Approved' : 'N/A'}
                                   className={`rounded-full ${row.status === 0 ? 'bg-danger text-danger' : row.status === 1 ? 'bg-success success text-success' : 'bg-buttonColor-900 text-black dark:text-white'} text-center bg-opacity-10 py-1 px-3 text-sm `}/>
                    </tr>
                ))
            ) : (
                <tr>
                    <TableData value={'No Data Found'} colSpan={3} className="text-center text-black dark:text-white"/>

                </tr>
            )}
            </tbody>
        </TablePageLayout>
    );
};

Index.layout = (page) => <MemberLayout title="Deposit" children={page}/>;

export default Index;
