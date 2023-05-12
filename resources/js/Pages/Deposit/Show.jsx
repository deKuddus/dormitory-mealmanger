import React, {useEffect, useState} from "react";
import {router, useForm, usePage} from "@inertiajs/react";
import Layout from "@/Shared/Layout/AuthenticatedLayout";
import TextInput from "@/Shared/TextInput";
import LoadingButton from "@/Shared/LoadingButton";
import Icon from "@/Shared/Icon";
import {toast} from "react-toastify";
import {APPROVED, WITHDRAWN} from "@/Shared/const/depostiStatus";
import {isUserPermittedToPerformAction} from "@/utils";

const Show = () => {
    const {user, approvedDeposit, pendingDeposit, flash, user_permissions} =
        usePage().props;

    const [withdraw, setWithdraw] = useState(0);

    const {data, setData, errors, post, processing} = useForm({
        amount: 0,
        deposit_date: new Date(),
        status: APPROVED,
        user_id: user.id,
    });

    const handleDepositSubmit = (e) => {
        e.preventDefault();
        post(route("deposit.store"));
        setData("amount", 0);
    };

    const deleteDeposit = (id) => {
        if (confirm("Are you sure you want to delete this deposit?")) {
            router.delete(route("deposit.destroy", id));
        }
        return true;
    };

    const approveDeposit = (id) => {
        if (confirm("Are you sure you want to approve this deposit?")) {
            router.post(route("deposit.accept", id));
        }
        return true;
    };

    const rejectDeposit = (id) => {
        if (confirm("Are you sure you want to reject this deposit?")) {
            router.post(route("deposit.reject", id));
        }
        return true;
    };

    const addWithdraw = () => {
        if (withdraw === 0 || withdraw < 0) {
            return toast.error(
                "Woops! amount can not be equal or less than zero"
            );
        } else if (withdraw > user.deposit) {
            setWithdraw(0);
            return toast.error(
                "Woops! amount can not greater than your current deposit"
            );
        } else {
            router.post(route("deposit.withdraw"), {
                user_id: user.id,
                deposit_date: new Date(),
                status: WITHDRAWN,
                amount: withdraw,
            });
            return setWithdraw(0);
        }
    };


    return (
        <div
            className="rounded-lg border border-stroke bg-white p-5 shadow-default dark:border-strokedark dark:bg-boxdark">
            <h1 className="mb-8 text-3xl font-bold">
                Deposits of {user.full_name}
            </h1>
            <div className="overflow-x-auto p-3">
                <div className="col-span-full mb-5">
                    <h6 className="mb-1 text-gray-900 text-xl font-bold">
                        Total: {user.deposit} BDT
                    </h6>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                        {isUserPermittedToPerformAction(
                            "access::deposit-create",
                            user_permissions
                        ) && (
                            <form
                                className="flex items-center justify-between gap-2"
                                name="createForm"
                                onSubmit={handleDepositSubmit}
                            >
                                <div className="w-3/4 ">
                                <TextInput
                                    label=""
                                    name="amount"
                                    type="number"
                                    value={data.amount}
                                    onChange={(e) => {
                                        if (e.target.value < 0) {
                                            setData("amount", 0);
                                        } else {
                                            setData(
                                                "amount",
                                                e.target.value
                                            );
                                        }
                                    }}
                                    errors={errors.amount}
                                />
                                </div>
                                <LoadingButton
                                    loading={false}
                                    type="submit"
                                    className="p-1 md:p-4 lg:p-4  text-sm font-medium text-center text-white bg-buttonColor-400 rounded"
                                >
                                    Add Deposit
                                </LoadingButton>
                            </form>
                        )}
                        {isUserPermittedToPerformAction(
                            "access::deposit-withdraw",
                            user_permissions
                        ) && (
                            <div className="flex items-center justify-between gap-2">
                                <div className="w-3/4">
                                <TextInput
                                    label=""
                                    name="withdraw"
                                    type="number"
                                    value={withdraw}
                                    onChange={(e) =>
                                        setWithdraw(e.target.value)
                                    }
                                />
                                </div>
                                <button
                                    onClick={addWithdraw}
                                    type="button"
                                    className="p-1 md:p-4 lg:p-4 text-xs font-medium text-center text-white bg-buttonColor-1000 rounded"
                                >
                                    Add Withdraw
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                <div className="grid gap-4 lg:gap-8 md:grid-cols-2">
                    <div>
                        <h6 className="mb-4 text-gray-900 text-xl font-bold">
                            Transaction History
                        </h6>
                        <table className='w-full table-auto'>
                            <thead>
                            <tr className='bg-gray-2 text-left dark:bg-meta-4'>
                                <th className='border border-[#eee] p-4 font-medium text-black dark:text-white'>No</th>
                                <th className='border border-[#eee] p-4 font-medium text-black dark:text-white'>Date</th>
                                <th className='border border-[#eee] p-4 font-medium text-black dark:text-white'>Amount</th>
                                {isUserPermittedToPerformAction(
                                    "access::deposit-delete",
                                    user_permissions
                                ) && (
                                    <th className='border border-[#eee] p-4 font-medium text-black dark:text-white'>
                                        Action
                                    </th>
                                )}
                            </tr>
                            </thead>
                            <tbody>
                            {approvedDeposit.length ? (
                                approvedDeposit.map(
                                    (
                                        {
                                            id,
                                            amount: _amount,
                                            deposit_date,
                                            status,
                                        },
                                        key
                                    ) => (
                                        <tr
                                            key={key}
                                        >
                                            <td className='border border-[#eee] p-4 dark:border-strokedark'>
                                                <p className="">
                                                    {key + 1}
                                                </p>
                                            </td>

                                            <td className='border border-[#eee] p-4 dark:border-strokedark'>
                                                <p className="">
                                                    {deposit_date}
                                                </p>
                                            </td>

                                            <td className='border border-[#eee] p-4 dark:border-strokedark'>
                                                {status === WITHDRAWN ? (
                                                    <p className="rounded-full text-center bg-danger bg-opacity-10 text-danger p-2">
                                                        - {_amount} BDT
                                                    </p>
                                                ) : (
                                                    <p className="">
                                                        {_amount} BDT
                                                    </p>
                                                )}
                                            </td>
                                            {isUserPermittedToPerformAction(
                                                "access::deposit-delete",
                                                user_permissions
                                            ) && (
                                                <td className='border border-[#eee] p-4 dark:border-strokedark'>
                                                    <div className="flex items-center gap-4 justify-end">
                                                        <button
                                                            onClick={() =>
                                                                deleteDeposit(
                                                                    id
                                                                )
                                                            }
                                                            className="inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline"
                                                        >
                                                            <Icon
                                                                name="FaTrashAlt"
                                                                className="w-6 h-4 text-gray-400 fill-current"
                                                            />
                                                        </button>
                                                    </div>
                                                </td>
                                            )}
                                        </tr>
                                    )
                                )
                            ) : (
                                <tr className="hover:bg-gray-100 focus-within:bg-gray-100">
                                    <td className='border border-[#eee] p-4 dark:border-strokedark' colSpan={4}>
                                        <p>
                                            No transaction found
                                        </p>
                                    </td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <h6 className="mb-4 text-gray-900 text-xl font-bold">
                            Deposit Request
                        </h6>
                        <table className="w-full table-auto">
                            <thead>
                            <tr className='bg-gray-2 text-left dark:bg-meta-4'>
                                <th className='border border-[#eee] p-4 font-medium text-black dark:text-white'>No</th>
                                <th className='border border-[#eee] p-4 font-medium text-black dark:text-white'>Date</th>
                                <th className='border border-[#eee] p-4 font-medium text-black dark:text-white'>Amount</th>
                                <th className='border border-[#eee] p-4 font-medium text-black dark:text-white'>
                                    Action
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {pendingDeposit.length ? (
                                pendingDeposit.map(
                                    (
                                        {
                                            id,
                                            amount: _amount,
                                            deposit_date,
                                        },
                                        key
                                    ) => (
                                        <tr
                                            key={key}
                                        >
                                            <td className='border border-[#eee] p-4 dark:border-strokedark'>
                                                <p>
                                                    {key + 1}
                                                </p>
                                            </td>
                                            <td className='border border-[#eee] p-4 dark:border-strokedark'>
                                                <p>
                                                    {deposit_date}
                                                </p>
                                            </td>
                                            <td className='border border-[#eee] p-4 dark:border-strokedark'>
                                                <p>
                                                    {_amount}
                                                </p>
                                            </td>
                                            <td className='border border-[#eee] p-4 dark:border-strokedark'>
                                                <div className="flex items-center gap-4 justify-end">
                                                    {isUserPermittedToPerformAction(
                                                        "access::deposit-approve",
                                                        user_permissions
                                                    ) && (
                                                        <button
                                                            onClick={() =>
                                                                approveDeposit(
                                                                    id
                                                                )
                                                            }
                                                            className="inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline"
                                                        >
                                                            <Icon
                                                                name="FaCheck"
                                                                className="w-6 h-4 text-buttonColor-400 fill-current"
                                                            />
                                                        </button>
                                                    )}
                                                    {isUserPermittedToPerformAction(
                                                        "access::deposit-reject",
                                                        user_permissions
                                                    ) && (
                                                        <button
                                                            onClick={() =>
                                                                rejectDeposit(
                                                                    id
                                                                )
                                                            }
                                                            className="inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline"
                                                        >
                                                            <Icon
                                                                name="FaTimes"
                                                                className="w-6 h-4 text-red-400 fill-current"
                                                            />
                                                        </button>
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                )
                            ) : (
                                <tr>
                                    <td className='border border-[#eee] p-4 dark:border-strokedark' colSpan={4}>
                                        <p>
                                            No transaction found
                                        </p>
                                    </td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

Show.layout = (page) => <Layout title="Deposit Details" children={page}/>;

export default Show;
