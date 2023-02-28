import React from "react";
import {Link, useForm, usePage} from "@inertiajs/react";
import Layout from "@/Shared/Layout";
import LoadingButton from "@/Shared/LoadingButton";
import TextInput from "@/Shared/TextInput";

const Edit = () => {
    const {menu} = usePage().props;
    const {data, setData, errors, post, processing} = useForm({
        break_fast: menu.break_fast || "",
        lunch: menu.lunch || "",
        dinner: menu.dinner || "",
        menu_date: menu.menu_date || "",
        _method: 'PUT'
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("menu.update", menu.id));
    }

    return (
        <div>
            <div>
                <h1 className="mb-8 text-3xl font-bold">
                    <Link
                        href={route("menu.index")}
                        className="text-indigo-600 hover:text-indigo-700"
                    >
                        Menu
                    </Link>
                    <span className="font-medium text-indigo-600"> /</span>{" "}
                    Edit
                </h1>
            </div>
            <div className="w-full overflow-hidden bg-white rounded shadow">
                <form name="createForm" onSubmit={handleSubmit}>
                    <div className="flex flex-wrap p-8 -mb-8 -mr-6">
                        <TextInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="Breakfast"
                            name="break_fast"
                            type="text"
                            errors={errors.break_fast}
                            value={data.break_fast}
                            onChange={(e) =>
                                setData("break_fast", e.target.value)
                            }
                        />
                        <TextInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="Lunch"
                            name="lunch"
                            type="text"
                            errors={errors.lunch}
                            value={data.lunch}
                            onChange={(e) =>
                                setData("lunch", e.target.value)
                            }
                        />
                        <TextInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="Dinner"
                            name="dinner"
                            type="text"
                            errors={errors.dinner}
                            value={data.dinner}
                            onChange={(e) =>
                                setData("dinner", e.target.value)
                            }
                        />

                        <TextInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="Day"
                            name="menu_date"
                            type="text"
                            errors={errors.menu_date}
                            value={data.menu_date}
                            onChange={(e) =>
                                setData("menu_date", e.target.value)
                            }
                        />
                    </div>
                    <div className="flex items-center justify-end px-8 py-4 bg-gray-100 border-t border-gray-200">
                        <LoadingButton
                            loading={processing}
                            type="submit"
                            className="btn-indigo"
                        >
                            Edit Menu
                        </LoadingButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

Edit.layout = (page) => <Layout title="Edit Menu" children={page}/>;

export default Edit;
