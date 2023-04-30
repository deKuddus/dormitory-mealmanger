import React from "react";
import {usePage} from "@inertiajs/react";
import MemberLayout from "@/Shared/Layout/AuthenticatedLayout";
import TableHeader from "@/Shared/TableHeader";
import TablePageLayout from "@/Shared/Layout/TablePageLayout";
import moment from "moment/moment";
import TableData from "@/Shared/TableData";

const Index = () => {
    const {bazarSchedules} = usePage().props;
    const {
        data,
        meta: {links},
    } = bazarSchedules;

    const StautsColumn = ({status}) => {
        if (status === 1) {
            return (
                <p className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none text-green-400 ">
                    Done
                </p>
            );
        }
        if (status === 0) {
            return (
                <p className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none text-red-400">
                    Pending
                </p>
            );
        }
    };
    return (
        <TablePageLayout
            breadcumb_name={'Notices'}
        >
            <TableHeader rows={['No', 'Date', 'Name', 'Status']}/>
            <tbody>
            {data ? (
                data.map(
                    ({ id, bazar_date, status, users }, key) => {
                        return (
                            <tr
                                key={id}
                                className="hover:bg-gray-100 focus-within:bg-gray-100"
                            >
                                <TableData value={key + 1}/>
                                <TableData value={moment(bazar_date).format("dddd, LL")}/>
                                <TableData value={users && users.length > 0
                                    ? users.map(
                                        (
                                            {
                                                full_name
                                            },
                                            index
                                        ) => (
                                            <span
                                                key={index}
                                                className={`bg-${
                                                    status === 1
                                                        ? "green"
                                                        : "red"
                                                }-200 text-gray-800  mr-2 px-2.5 py-0.5 rounded`}
                                            >{full_name}</span>
                                        )
                                    )
                                    : "N/A"}
                                />
                                <TableData value={status === 0 ? 'Pending' : 'Done'}
                                           className={`rounded-full ${status === 0 ? 'bg-danger text-danger' : 'bg-success text-success'} text-center bg-opacity-10 py-1 px-3 text-sm `}/>

                            </tr>
                        );
                    }
                )
            ) : (
                <tr>
                    <td className="px-6 py-4 border" colSpan="5">
                        No Bazar Schedule found.
                    </td>
                </tr>
            )}
            </tbody>
        </TablePageLayout>
    );
};

Index.layout = (page) => (
    <MemberLayout title="Bazar Schedule" children={page}/>
);

export default Index;
