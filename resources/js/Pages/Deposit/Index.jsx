import React from "react";
import {Link, usePage} from "@inertiajs/react";
import Layout from "@/Shared/Layout/AuthenticatedLayout";
import Icon from "@/Shared/Icon";
import {isUserPermittedToPerformAction} from "@/utils";
import TableHeader from "@/Shared/TableHeader";
import TableData from "@/Shared/TableData";
import TableAction from "@/Shared/TableAction";
import TablePageLayout from "@/Shared/Layout/TablePageLayout";

const Index = () => {
    const {usersWithDeposit, user_permissions} = usePage().props;
    const {
        data,
        meta: {links},
    } = usersWithDeposit;

    return (
        <TablePageLayout
            breadcumb_action={'Add New Deposit'}
            breadcumb_name={'Deposits'}
            pagination_links={links}
            breadcumb_link={route('deposit.create')}
            isShowButton={isUserPermittedToPerformAction(
                "access::deposit-create",
                user_permissions
            )}
        >
            <TableHeader rows={['No', 'Name', 'Amount(Current)', 'Amount(All time)', 'Withdraw', 'Pending', 'Action']}/>
            <tbody>
            {data && data.length ? data.map(({
                                  id,
                                  first_name,
                                  deposit,
                                  last_name,
                                  deposits,
                              },
                              key) => (
                <tr key={key}>
                    <TableData value={key + 1}/>
                    <TableData value={`${first_name} ${last_name}`}/>
                    <TableData value={deposit < 0 ? `Due ${deposit}` : `${deposit} BDT`}/>

                    {deposits && deposits.length ? (
                        deposits.map(
                            (
                                {
                                    deposit_amount,
                                    pending_amount,
                                    withdraw_amount,
                                },
                                index
                            ) => (
                                <React.Fragment key={index}>
                                    <TableData value={`${deposit_amount || 0} BDT`}/>
                                    <TableData value={`${withdraw_amount || 0} BDT`}/>
                                    {pending_amount > 0 ?
                                        (<TableData
                                            value={`${pending_amount || 0} BDT`}
                                            className="rounded-full bg-danger text-center bg-opacity-10 py-1 px-3 text-sm text-danger"
                                        />) : (<TableData
                                            value={`${pending_amount || 0} BDT`}
                                        />)}
                                </React.Fragment>
                            )
                        )
                    ) : (
                        <React.Fragment>
                            <TableData value={`0 BDT`}/>
                            <TableData value={`0 BDT`}/>
                            <TableData value={`0 BDT`}/>
                        </React.Fragment>
                    )}
                    <TableAction>
                        {isUserPermittedToPerformAction(
                            "access::deposit-show",
                            user_permissions
                        ) && (
                            <Link
                                href={route(
                                    "deposit.show",
                                    id
                                )}
                                className="inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline"
                            >
                                <Icon
                                    name="FaEye"
                                    className="w-6 h-4 text-gray-400 fill-current"
                                />
                            </Link>
                        )}
                    </TableAction>

                </tr>
            )) : (<tr>
                <TableData value={'No Data Found'} colSpan={7} className="text-center text-black dark:text-white"/>
            </tr>)}
            </tbody>
        </TablePageLayout>
    );
};

Index.layout = (page) => <Layout title="Deposits" children={page}/>;

export default Index;
