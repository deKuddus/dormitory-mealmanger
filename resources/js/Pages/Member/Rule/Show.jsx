import React from "react";
import {Link, usePage} from "@inertiajs/react";
import MemberLayout from "@/Shared/Member/MemberLayout";
const Show = () => {
    const {rule} = usePage().props;


    return (
        <>
                <h1 className="mb-8 text-3xl font-bold">
                    <Link
                        href={route("user.notices.index")}
                        className="text-indigo-600 hover:text-indigo-700"
                    >
                        Rule
                    </Link>
                    <span className="font-medium text-indigo-600"> /</span>{" "}
                    Details
                </h1>
            <div className="overflow-x-auto bg-white rounded shadow p-3">
                <h2 className="text-xl p-4 border-b-2">Title: {rule.title}</h2>
                <p className="mb-3 p-4 leading-8 font-light text-gray-500" dangerouslySetInnerHTML={{ __html: rule.description }} />
            </div>
        </>
    );
};

Show.layout = (page) => <MemberLayout title="Rule" children={page}/>;

export default Show;
