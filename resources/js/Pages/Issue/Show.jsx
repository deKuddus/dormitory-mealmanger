import React from "react";
import { Link, usePage } from "@inertiajs/react";
import Layout from "@/Shared/Layout/AuthenticatedLayout";
const Show = () => {
    const { issue } = usePage().props;

    return (
        <>
            <h1 className="mb-8 text-3xl font-bold">
                <Link
                    href={route("issue.index")}
                    className="text-indigo-600 hover:text-indigo-700"
                >
                    Issue
                </Link>
                <span className="font-medium text-indigo-600"> /</span> Details
            </h1>
            <div className="overflow-x-auto bg-white rounded shadow p-3">
                <h2 className="text-xl p-4 border-b-2">Title: {issue.title}</h2>
                <p
                    className="mb-3 p-4 leading-8 font-light text-gray-500"
                    dangerouslySetInnerHTML={{ __html: issue.description }}
                />
            </div>
        </>
    );
};

Show.layout = (page) => <Layout title="Issue" children={page} />;

export default Show;
