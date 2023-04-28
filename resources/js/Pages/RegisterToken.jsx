import React from "react";
import {router, usePage} from "@inertiajs/react";
import Layout from "@/Shared/Layout/AuthenticatedLayout";
import {toast} from "react-toastify";
import TablePageLayout from "@/Shared/Layout/TablePageLayout";
import TableHeader from "@/Shared/TableHeader";
import moment from "moment/moment";
import Icon from "@/Shared/Icon";
import TableData from "@/Shared/TableData";
import TableAction from "@/Shared/TableAction";

const RegisterToken = () => {
    const {tokens, app_url} = usePage().props;
    const {
        data,
        meta: {links},
    } = tokens;

    const deleteToken = (id) => {
        if (confirm("Are you sure you want to delete this token?")) {
            router.post(route("tokens.destroy"), {id});
        }
        return true;
    };

    const copyLink = (uuid) => {
        if (window.isSecureContext && navigator.clipboard) {
            navigator.clipboard.writeText(route("register", uuid));
        } else {
            unsecuredCopyToClipboard(route("register", uuid));
        }
        return toast.success("Link copied");
    };

    const unsecuredCopyToClipboard = (text) => {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand("copy");
        } catch (err) {
            console.error("Unable to copy to clipboard", err);
        }
        document.body.removeChild(textArea);
    };

    const handleCreateTokenRequest = () => {
        return router.post(route("tokens.create"));
    };

    return (

        <TablePageLayout
            breadcumb_action={''}
            breadcumb_name={'Register Tokens'}
            pagination_links={links}
            breadcumb_link={''}
            isShowButton={false}
        >
            <TableHeader rows={['No', 'Token', 'Expire At', 'Action']}/>
            <tbody>
            {data && data.length ? data.map(({id, uuid, expire_at}, key) => {
                return (
                    <tr
                        key={id}
                    >
                        <TableData value={key + 1}/>
                        <TableData value={uuid}/>
                        <TableData value={moment(expire_at).format(
                            "Do MMMM YYYY"
                        )}/>

                        <TableAction>
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
                        </TableAction>
                    </tr>
                );
            }): (
                <tr>
                    <TableData value={'No Data Found'} colSpan={4} className="text-center text-black dark:text-white"/>
                </tr>
            )}
            </tbody>
        </TablePageLayout>
    );
};

RegisterToken.layout = (page) => (
    <Layout title="Register Token" children={page}/>
);

export default RegisterToken;
