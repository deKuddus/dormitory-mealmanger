import React from "react";
import { usePage } from "@inertiajs/react";
import Layout from "@/Shared/Layout/AuthenticatedLayout";
import Pagination from "@/Shared/Pagination";
import moment from "moment";
import { isUserPermittedToPerformAction } from "@/utils";
import TableHeader from "@/Shared/TableHeader";
import TablePageLayout from "@/Shared/Layout/TablePageLayout";
import TableData from "@/Shared/TableData";

const Calcualtion = () => {
    const tableHeading =['No', 'Closed Month', 'Member', 'Meal' ,'Meal Rate', 'Cost','Balance'];
    const { calculations } = usePage().props;
    const {
        data,
        meta: { links },
    } = calculations;

    return (
            <TablePageLayout
                breadcumb_action={''}
                breadcumb_name={'Closed Calculation'}
                pagination_links={links}
                breadcumb_link={''}
                isShowButton={false}
            >
                <TableHeader rows={tableHeading}/>
                <tbody>
                {data ? (
                    data.map(
                        (
                            {
                                id,
                                user,
                                amount,
                                description,
                                calculate_date,
                                meal_rate,
                                carry,
                                total_meal,
                            },
                            key
                        ) => {
                            return (
                                <tr
                                    key={id}
                                >
                                    <TableData value={key+1}/>
                                    <TableData value={moment(calculate_date).format("Do MMMM YYYY")}/>
                                    <TableData value={user ? user.full_name :''}/>
                                    <TableData value={total_meal}/>
                                    <TableData value={meal_rate}/>
                                    <TableData value={amount}/>
                                    <TableData value={carry}/>
                                </tr>
                            );
                        }
                    )
                ) : (
                    <tr>
                        <TableData value={'No Data Found'} colSpan={tableHeading.length} className="text-center text-black dark:text-white"/>
                    </tr>
                )}
                </tbody>
            </TablePageLayout>
    );
};

Calcualtion.layout = (page) => (
    <Layout title="Closed Calculation" children={page} />
);

export default Calcualtion;
