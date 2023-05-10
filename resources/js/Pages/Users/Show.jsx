import React from "react";
import Layout from "@/Shared/Layout/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";

const Show = () => {
    const { user } = usePage().props;

    return (
        <div>
            <h1 className="mb-8 text-3xl font-bold">
                Details of {user.full_name}
            </h1>
            <div className="overflow-x-auto bg-white rounded shadow p-3">
                <div className="bg-white p-6">
                    <div className="flex items-center">
                        <img
                            className="w-16 h-16 rounded-full mr-4"
                            src={`https://ui-avatars.com/api/?name=${user.full_name || 'JD'}`}
                            alt="Profile picture"
                        />
                        <div>
                            <h2 className="text-lg font-medium">
                                {user.full_name}
                            </h2>
                            <p className="text-gray-600 my-2">{user.email}</p>
                            <p className="text-gray-600 my-2">{user.phone}</p>
                        </div>
                    </div>
                    <div className="mt-6">
                        <h3 className="text-gray-600 font-medium font-bold text-xl border-b-2">
                            Address Information
                        </h3>
                        <div className="mt-2">
                            <p className="text-gray-700 my-2">
                                <strong>Present Address:</strong>{" "}
                                {user.present_address}
                            </p>
                            <p className="text-gray-700 my-2">
                                <strong>Permanent Address:</strong>{" "}
                                {user.permanent_address}
                            </p>
                        </div>
                    </div>
                    <div className="mt-6">
                        <h3 className="text-gray-600 font-medium font-bold text-xl border-b-2">
                            Identification Information
                        </h3>
                        <div className="mt-2">
                            <p className="text-gray-700 my-2">
                                <strong>NID:</strong> {user.nid}
                            </p>
                            <p className="text-gray-700 my-2">
                                <strong>NID Type:</strong>{" "}
                                {user.nid_type === 1
                                    ? "National Id"
                                    : "Birth Certificate"}
                            </p>
                        </div>
                    </div>
                    <div className="mt-6">
                        <h3 className="text-gray-600 font-medium font-bold text-xl border-b-2">
                            Occupational Information
                        </h3>
                        <div className="mt-2">
                            <p className="text-gray-700 my-2">
                                <strong>Institution:</strong> {user.institution}
                            </p>
                            <p className="text-gray-700 my-2">
                                <strong>Company:</strong> {user.company}
                            </p>
                            <p className="text-gray-700 my-2">
                                <strong>Status:</strong>{" "}
                                {user.status === 1 ? "Active" : "Inactive"}
                            </p>
                            <p className="text-gray-700 my-2">
                                <strong>isAdmin:</strong>{" "}
                                {user.is_admin ? "Yes" : "No"}
                            </p>
                        </div>
                    </div>
                    <div className="mt-6">
                        <h3 className="text-gray-600 font-medium font-bold text-xl border-b-2">
                            Room Information
                        </h3>
                        <div className="mt-2">
                            <p className="text-gray-700 my-2">
                                <strong>Room:</strong> {user.room?.name}
                            </p>
                            <p className="text-gray-700 my-2">
                                <strong>Seat:</strong> {user?.seat?.seat_no}
                            </p>
                            <p className="text-gray-700 my-2">
                                <strong>Roles:</strong>{" "}
                                {user.roles
                                    ? user.roles.map((role) => (
                                          <span className='padding-top: 0.1em; padding-bottom: 0.1rem" className="text-xs px-3 bg-indigo-200 text-indigo-800 rounded-full'>
                                              {role.name}
                                          </span>
                                      ))
                                    : ""}
                            </p>
                            <p className="text-gray-700 my-2">
                                <strong>Permissions:</strong> None
                            </p>
                            <p className="text-gray-700 my-2">
                                <strong>Notes:</strong>{" "}
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: user.note,
                                    }}
                                ></span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Show.layout = (page) => <Layout title="User Show" children={page} />;

export default Show;
