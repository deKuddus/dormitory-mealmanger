import React from "react";
import {Link, useForm, usePage} from "@inertiajs/react";
import Layout from "@/Shared/Layout";
import LoadingButton from "@/Shared/LoadingButton";
import TextInput from "@/Shared/TextInput";
import Datepicker from "@/Shared/Datepicker";

const Edit = () => {
    const {menu} = usePage().props;
    const {data, setData, errors, post, processing} = useForm({
        item: menu.item || "",
        menu_date: menu.menu_date || "",
        _method: 'PUT'
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("menu.update", menu.id));
    }

    const setPurchaseDate = (date) => {
        setData("menu_date", date)
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
                            label="Item"
                            name="item"
                            type="text"
                            errors={errors.item}
                            value={data.item}
                            onChange={(e) =>
                                setData("item", e.target.value)
                            }
                        />

                        <Datepicker
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="Published Date"
                            errors={errors.menu_date}
                            value={data.menu_date}
                            handleDateChange={setPurchaseDate}
                            startDate={data.menu_date ? new Date(data.menu_date) : new Date()}
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
