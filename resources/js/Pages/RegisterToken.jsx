import React from "react";
import {router, usePage} from "@inertiajs/react";
import Layout from "@/Shared/Layout";
import Icon from "@/Shared/Icon";
import Pagination from "@/Shared/Pagination";
import moment from "moment";
import {toast} from "react-toastify";

const RegisterToken = () => {
    const {tokens,app_url} = usePage().props;
    const {
        data,
        meta: {links},
    } = tokens;

    const deleteToken = (id) => {
        if (confirm("Are you sure you want to delete this token?")) {
            router.post(route("tokens.destroy"),{id});
        }
        return true;
    }


    const copyLink = uuid => {
        if (window.isSecureContext && navigator.clipboard) {
            navigator.clipboard.writeText(route('register',uuid));
        } else {
            unsecuredCopyToClipboard(route('register',uuid));
        }
       return toast.success('Link copied');
    };

    const unsecuredCopyToClipboard = (text) =>{
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand('copy');
        } catch (err) {
            console.error('Unable to copy to clipboard', err);
        }
        document.body.removeChild(textArea);
    }

    const handleCreateTokenRequest = () =>{
        return router.post(route("tokens.create"));
    }

    return (
        <div>
            <h1 className="mb-8 text-3xl font-bold">Retister Token</h1>
            <div className="flex items-center justify-end mb-6">
                <button
                    className="btn-indigo focus:outline-none"
                    onClick={handleCreateTokenRequest}
                >
                    <span>Create</span>
                    <span className="hidden md:inline">Token</span>
                </button>
            </div>
            <div className="overflow-x-auto bg-white rounded shadow p-3">
                <table className="w-full whitespace-nowrap">
                    <thead>
                    <tr className="font-bold text-left">
                        <th className="px-6 pt-5 pb-4">No</th>
                        <th className="px-6 pt-5 pb-4">Token</th>
                        <th className="px-6 pt-5 pb-4">Expire At</th>
                        <th className="px-6 pt-5 pb-4">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map(
                        ({id, uuid, expire_at},key) => {
                            return (
                                <tr
                                    key={id}
                                    className="hover:bg-gray-100 focus-within:bg-gray-100"
                                >
                                    <td className="border">
                                        <p
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                        >
                                            {key+1}
                                        </p>
                                    </td>
                                    <td className="border">
                                        <p
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                        >
                                            {uuid}
                                        </p>
                                    </td>
                                    <td className="border">
                                        <p
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                        >
                                            {moment(expire_at).format('Do MMMM YYYY')}
                                        </p>
                                    </td>
                                    <td className="w-px border px-4 py-3 whitespace-nowrap">
                                        <div className="flex items-center gap-4 justify-end">
                                            <button
                                                onClick={() => copyLink(uuid)}
                                                className="inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline"
                                            >
                                                <Icon
                                                    name="FaCopy"
                                                    className="w-6 h-4 text-gray-400 fill-current"
                                                />
                                            </button>
                                            <button
                                                onClick={() => deleteToken(id)}
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
                            );
                        }
                    )}
                    {data.length === 0 && (
                        <tr>
                            <td className="px-6 py-4 border" colSpan="4">
                                No Token found.
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
            <Pagination links={links}/>
        </div>
    );
};

RegisterToken.layout = (page) => <Layout title="Register Token" children={page}/>;

export default RegisterToken;
