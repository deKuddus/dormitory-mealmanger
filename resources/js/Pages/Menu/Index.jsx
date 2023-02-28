import React from "react";
import {Link, router, usePage} from "@inertiajs/react";
import Layout from "@/Shared/Layout";
import Icon from "@/Shared/Icon";
import Pagination from "@/Shared/Pagination";

const Index = () => {
    const {menus} = usePage().props;
    const {
        data,
        meta: {links},
    } = menus;

    const deleteMenu = (id) => {
        if (confirm("Are you sure you want to delete this menu?")) {
            router.delete(route("menu.destroy", id));
        }
        return true;
    }

    return (
        <div>
            <h1 className="mb-8 text-3xl font-bold">Menus</h1>
            {/*<div className="flex items-center justify-end mb-6">*/}
            {/*    <Link*/}
            {/*        className="btn-indigo focus:outline-none"*/}
            {/*        href={route("menu.create")}*/}
            {/*    >*/}
            {/*        <span>Create</span>*/}
            {/*        <span className="hidden md:inline">Menu</span>*/}
            {/*    </Link>*/}
            {/*</div>*/}
            <div className="overflow-x-auto bg-white rounded shadow p-3">
                <table className="w-full whitespace-nowrap">
                    <thead>
                    <tr className="font-bold text-left">
                        <th className="px-6 pt-5 pb-4">No</th>
                        <th className="px-6 pt-5 pb-4">Day</th>
                        <th className="px-6 pt-5 pb-4">Breakfast</th>
                        <th className="px-6 pt-5 pb-4">Lunch</th>
                        <th className="px-6 pt-5 pb-4">Dinner</th>
                        <th className="px-6 pt-5 pb-4">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map(
                        ({id, break_fast, lunch, dinner, menu_date}, key) => {
                            return (
                                <tr
                                    key={id}
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
                                            {menu_date}
                                        </p>
                                    </td>
                                    <td className="border">
                                        <p
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                        >
                                            {break_fast || 'N/A'}
                                        </p>
                                    </td>
                                    <td className="border">
                                        <p
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                        >
                                            {lunch || 'N/A'}
                                        </p>
                                    </td>
                                    <td className="border">
                                        <p
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                        >
                                            {dinner || 'N/A'}
                                        </p>
                                    </td>
                                    <td className="w-px border p-3 whitespace-nowrap">
                                        <div className="flex items-center gap-4 justify-center">
                                            <Link
                                                href={route("menu.edit", id)}
                                                className="inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline"
                                            >
                                                <Icon
                                                    name="FaEdit"
                                                    className="w-6 h-4 text-gray-400 fill-current"
                                                />
                                            </Link>
                                            {/*<button*/}
                                            {/*    onClick={() => deleteMenu(id)}*/}
                                            {/*    className="inline-flex items-center justify-center gap-0.5 focus:outline-none focus:underline"*/}
                                            {/*>*/}
                                            {/*    <Icon*/}
                                            {/*        name="FaTrashAlt"*/}
                                            {/*        className="w-6 h-4 text-gray-400 fill-current"*/}
                                            {/*    />*/}
                                            {/*</button>*/}
                                        </div>
                                    </td>
                                </tr>
                            );
                        }
                    )}
                    {data.length === 0 && (
                        <tr>
                            <td className="px-6 py-4 border" colSpan="4">
                                No Menu found.
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

Index.layout = (page) => <Layout title="Menu" children={page}/>;

export default Index;
