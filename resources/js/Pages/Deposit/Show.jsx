import React, {useEffect, useState} from "react";
import {Link, router, useForm, usePage} from "@inertiajs/react";
import Layout from "@/Shared/Layout";
import TextInput from "@/Shared/TextInput";
import LoadingButton from "@/Shared/LoadingButton";
import Icon from "@/Shared/Icon";
import {Flip, toast} from "react-toastify";
import {APPROVED, WITHDRAWN} from "@/Shared/const/depostiStatus";

const Show = () => {
    const {user, approvedDeposit, pendingDeposit, flash} = usePage().props;

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
        setData('amount', 0);
    }

    const deleteDeposit = (id) => {
        if (confirm("Are you sure you want to delete this deposit?")) {
            router.delete(route("deposit.destroy", id));
        }
        return true;
    }

    const approveDeposit = (id) => {
        if (confirm("Are you sure you want to approve this deposit?")) {
            router.post(route("deposit.accept", id));
        }
        return true;
    }

    const rejectDeposit = (id) => {
        if (confirm("Are you sure you want to reject this deposit?")) {
            router.post(route("deposit.reject", id));
        }
        return true;
    }

    const addWithdraw = () => {
        if (withdraw === 0 || withdraw < 0) {
            return toast.error('Woops! amount can not be equal or less than zero');
        } else {
            router.post(route("deposit.withdraw"), {
                user_id: user.id,
                deposit_date: new Date(),
                status: WITHDRAWN,
                amount: withdraw
            })
            return setWithdraw(0);
        }
    }

    useEffect(() => {
        if (errors && errors.length) {
            toast.error('There was an error.');
        }

        if (flash && flash.success) {
            toast.success(flash.success);
        }
    }, [errors, flash])


    return (
        <div>
            <h1 className="mb-8 text-3xl font-bold">Deposits of {user.first_name} {user.last_name}</h1>
            <div className="overflow-x-auto bg-white rounded shadow p-3">
                <div className="col-span-full mb-5">
                    <h6 className="mb-1 text-gray-900 text-xl font-bold">Total: {user.deposit} BDT</h6>
                    <div className="grid md:grid-cols-2">
                        <div className="relative p-6 rounded-xl">
                            <div className="space-y-2 text-white text-center">
                                <form name="createForm" onSubmit={handleDepositSubmit}>
                                    <div className="flex w-full flex-row p-8 -mb-8 -mr-6">
                                        <TextInput
                                            className="w-full pr-6 md:w-1/2 lg:w-1/2"
                                            label=""
                                            name="amount"
                                            type="number"
                                            value={data.amount}
                                            onChange={(e) => {
                                                if (e.target.value < 0) {
                                                    setData('amount', 0)
                                                } else {
                                                    setData('amount', e.target.value)
                                                }
                                            }}
                                            errors={errors}
                                        />
                                        <LoadingButton
                                            loading={false}
                                            type="submit"
                                            className="px-4 py-1 text-xs font-medium text-center text-white bg-buttonColor-400 rounded focus:outline-none"
                                        >
                                            Add Deposit
                                        </LoadingButton>

                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="relative p-6 rounded-xl">
                            <div className="space-y-2 text-white text-center">
                                <div className="flex w-full flex-row p-8 -mb-8 -mr-6">

                                    <TextInput
                                        className="w-full pr-6 md:w-1/2 lg:w-1/2"
                                        label=""
                                        name="withdraw"
                                        type="number"
                                        value={withdraw}
                                        onChange={(e) => setWithdraw(e.target.value)}
                                    />
                                    <button
                                        onClick={addWithdraw}
                                        type="button"
                                        className="px-4 py-1 text-xs font-medium text-center text-white bg-buttonColor-1000 rounded focus:outline-none"
                                    >
                                        Add Withdraw
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid gap-4 lg:gap-8 md:grid-cols-2">
                    <div>
                        <h6 className="mb-4 text-gray-900 text-xl font-bold">Transaction History</h6>
                        <table className="w-full whitespace-nowrap">
                            <thead>
                            <tr className="font-bold text-left">
                                <th className="px-6 pt-5 pb-4">No</th>
                                <th className="px-6 pt-5 pb-4">Date</th>
                                <th className="px-6 pt-5 pb-4">Amount</th>
                                <th className="px-6 pt-5 pb-4">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {approvedDeposit.length ? approvedDeposit.map(({
                                                                               id,
                                                                               amount: _amount,
                                                                               deposit_date, status
                                                                           }, key) => (
                                <tr
                                    key={key}
                                    className="hover:bg-gray-100 focus-within:bg-gray-100"
                                >


                                    <td className="border">
                                        <p
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                        >
                                            {key + 1}
                                        </p>
                                    </td>
                                    <td className="border">
                                        <p
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                        >
                                            {deposit_date}
                                        </p>
                                    </td>
                                    <td className="border">
                                        {status === WITHDRAWN ? (
                                            <p
                                                className="flex items-center px-6 py-4 text-red-600 focus:outline-none"
                                            >
                                                - {_amount} BDT
                                            </p>
                                        ) : (<p
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                        >
                                            {_amount} BDT
                                        </p>)}
                                    </td>
                                    <td className="w-px border px-4 py-3 whitespace-nowrap">
                                        <div className="flex items-center gap-4 justify-end">
                                            <button
                                                onClick={() => deleteDeposit(id)}
                                                className="inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline"
                                            >
                                                <Icon
                                                    name="FaTrashAlt"
                                                    className="w-6 h-4 text-gray-400 fill-current"
                                                />
                                            </button>

                                        </div>
                                    </td>
                                </tr>
                            )) : (
                                <tr
                                    className="hover:bg-gray-100 focus-within:bg-gray-100"
                                >
                                    <td className="border" colSpan={4}>
                                        <p
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                        >
                                            No transaction found
                                        </p>
                                    </td>

                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <h6 className="mb-4 text-gray-900 text-xl font-bold">Deposit Request</h6>
                        <table className="w-full whitespace-nowrap">
                            <thead>
                            <tr className="font-bold text-left">
                                <th className="px-6 pt-5 pb-4">No</th>
                                <th className="px-6 pt-5 pb-4">Date</th>
                                <th className="px-6 pt-5 pb-4">Amount</th>
                                <th className="px-6 pt-5 pb-4">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {pendingDeposit.length ? pendingDeposit.map(({id, amount: _amount, deposit_date}, key) => (
                                <tr
                                    key={key}
                                    className="hover:bg-gray-100 focus-within:bg-gray-100"
                                >


                                    <td className="border">
                                        <p
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                        >
                                            {key + 1}
                                        </p>
                                    </td>
                                    <td className="border">
                                        <p
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                        >
                                            {deposit_date}
                                        </p>
                                    </td>
                                    <td className="border">
                                        <p
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                        >
                                            {_amount}
                                        </p>
                                    </td>
                                    <td className="w-px border px-4 py-3 whitespace-nowrap">
                                        <div className="flex items-center gap-4 justify-end">
                                            <button
                                                onClick={() => approveDeposit(id)}
                                                className="inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline"
                                            >
                                                <Icon
                                                    name="FaCheck"
                                                    className="w-6 h-4 text-buttonColor-400 fill-current"
                                                />
                                            </button>
                                            <button
                                                onClick={() => rejectDeposit(id)}
                                                className="inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline"
                                            >
                                                <Icon
                                                    name="FaTimes"
                                                    className="w-6 h-4 text-red-400 fill-current"
                                                />
                                            </button>

                                        </div>
                                    </td>
                                </tr>
                            )) : (
                                <tr
                                    className="hover:bg-gray-100 focus-within:bg-gray-100"
                                >
                                    <td className="border" colSpan={4}>
                                        <p
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                        >
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
