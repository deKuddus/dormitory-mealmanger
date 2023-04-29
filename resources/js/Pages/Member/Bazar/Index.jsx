import React from "react";
import {usePage} from "@inertiajs/react";
import MemberLayout from "@/Shared/Layout/AuthenticatedLayout";
import moment from "moment";
import TablePageLayout from "@/Shared/Layout/TablePageLayout";
import TableHeader from "@/Shared/TableHeader";
import TableData from "@/Shared/TableData";

const Index = () => {
    const {bazars} = usePage().props;
    const {
        data,
        meta: {links},
    } = bazars;

    return (
        <TablePageLayout
            breadcumb_name={'Bazars'}
            breadcumb_action={'Add New Bazar'}
            breadcumb_link={route('user.bazar.create')}
            pagination_links={links}
            isShowButton={true}
        >
            <TableHeader rows={['No', 'Create Date', 'Amount', 'Description','Status','Member']}/>
            <tbody>
            {data && data.length ? data.map(
                (
                    {
                        id,
                        amount,
                        description,
                        created_at,
                        status,
                        bazarSchedule,
                    },
                    key
                ) => {
                    return (
                        <tr
                            key={id}
                            className="hover:bg-gray-100 focus-within:bg-gray-100"
                        >
                            <TableData value={key + 1}/>
                            <TableData value={moment(created_at).format("Do MMMM YYYY")}/>
                            <TableData value={amount}/>
                            <TableData value={description}/>
                            <TableData value={status === 0 ? 'Pending' : status === 1 ? 'Approved' : 'N/A'}
                                       className={`rounded-full ${status === 0 ? 'bg-danger text-danger' : status === 1 ? 'bg-success success text-success' : 'bg-buttonColor-900 text-black dark:text-white'} text-center bg-opacity-10 py-1 px-3 text-sm `}/>
                            <TableData value={
                                <BazarScheduleUSer
                                    users={
                                        bazarSchedule &&
                                        bazarSchedule.users
                                    }
                                />}
                            />
                        </tr>
                    );
                }
            ): (
                <tr>
                    <TableData value={'No Data Found'} colSpan={6} className="text-center text-black dark:text-white"/>
                </tr>
            )}
            </tbody>

        </TablePageLayout>
    );
};

const BazarScheduleUSer = ({users}) => {
    return (
        <p className="flex items-center px-6 py-4 text-center ">
            {users && users.length > 0
                ? users.map(({first_name, last_name}, index) => (
                    <span
                        key={index}
                        className={`bg-success bg-opacity-10 text-success  mr-2 py-1 px-3 rounded-full`}
                    >{`${first_name} ${last_name}`}</span>
                ))
                : "N/A"}
        </p>
    );
};


Index.layout = (page) => <MemberLayout title="Bazar" children={page}/>;

export default Index;
