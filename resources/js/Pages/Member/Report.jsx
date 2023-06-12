import React from "react";
import { usePage } from "@inertiajs/react";
import Layout from "@/Shared/Layout/AuthenticatedLayout";
import moment from "moment";
import TableHeader from "@/Shared/TableHeader";
import TablePageLayout from "@/Shared/Layout/TablePageLayout";
import TableData from "@/Shared/TableData";

const Report = () => {
    const tableHeading =['No', 'Closed Month', 'Meal','Meal Charge', 'Amount','Remaining balance / Due'];
    const { reports } = usePage().props;
    const {
        data,
        meta: { links },
    } = reports;

    return (
        <TablePageLayout
            breadcumb_action={''}
            breadcumb_name={'Closed Report'}
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
                            amount,
                            description,
                            calculate_date,
                            carry,
                            total_meal,
                            meal_rate
                        },
                        key
                    ) => {
                        return (
                            <tr
                                key={key}
                            >
                                <TableData value={key+1}/>
                                <TableData value={moment(calculate_date).format("Do MMMM YYYY")}/>
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

Report.layout = (page) => (
    <Layout title="Closed Report" children={page} />
);

export default Report;
