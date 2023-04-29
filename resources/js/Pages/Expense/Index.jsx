import React from "react";
import { usePage } from "@inertiajs/react";
import Layout from "@/Shared/Layout/AuthenticatedLayout";
import moment from "moment";
import BreadcrumbForTable from "@/Shared/Layout/BreadcumbForTable";
import TableData from "@/Shared/TableData";
import TableHeader from "@/Shared/TableHeader";

const Index = () => {
    const {
        bazar,
        bazarTotal,
        additionalCost,
        additionalCostTotal,
        deposit,
        flash,
    } = usePage().props;

    return (
        <div>
            <BreadcrumbForTable name={`Available Balance: ${deposit} BDT`} link={''} text={''} isShowButton={false}/>
            <div
                className='rounded-lg border border-stroke bg-white p-5 shadow-default dark:border-strokedark dark:bg-boxdark'>
                <div className='max-w-full overflow-x-auto'>
                    <div className="grid gap-4 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                        <div className="flex flex-col">
                            <h6 className="mb-4 text-black dark:text-white text-xl font-bold">
                                Random Cost
                            </h6>
                            <span className="text-md font-bold mb-6">
                            Total Random cost: {bazarTotal} BDT
                        </span>
                            <table className="w-full table-auto">
                                <TableHeader rows={['No','Amount','Date','Note']}/>
                                <tbody>
                                {bazar.length ? (
                                    bazar.map(
                                        (
                                            {
                                                id,
                                                amount,
                                                created_at,
                                                description,
                                            },
                                            key
                                        ) => (
                                            <tr key={key}>
                                                <TableData value={key + 1}/>
                                                <TableData value={amount}/>
                                                <TableData value={moment(created_at).format("Do MMMM YYYY")}/>
                                                <TableData value={description}/>
                                            </tr>
                                        )
                                    )
                                ) : (
                                    <tr className="hover:bg-gray-100 focus-within:bg-gray-100">
                                        <TableData value={'No Data Found'} colSpan={4} className="text-center text-black dark:text-white"/>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                        <div className="flex flex-col">
                            <h6 className="mb-4 text-black dark:text-white text-xl font-bold">
                                Fixed Cost
                            </h6>
                            <span className="text-md font-bold mb-6">
                            Total Fixed cost: {additionalCostTotal} BDT
                        </span>
                            <table className="w-full table-auto">
                                <TableHeader rows={['No','Amount','Date','Note']}/>
                                <tbody>
                                {additionalCost.length ? (
                                    additionalCost.map(
                                        (
                                            {
                                                id,
                                                amount,
                                                created_at,
                                                description,
                                            },
                                            key
                                        ) => (
                                            <tr key={key}>
                                                <TableData value={key + 1}/>
                                                <TableData value={amount}/>
                                                <TableData value={moment(created_at).format("Do MMMM YYYY")}/>
                                                <TableData value={description}/>
                                            </tr>
                                        )
                                    )
                                ) : (
                                    <tr className="hover:bg-gray-100 focus-within:bg-gray-100">
                                        <TableData value={'No Data Found'} colSpan={4} className="text-center text-black dark:text-white"/>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Index.layout = (page) => <Layout title="Expense Details" children={page} />;

export default Index;
