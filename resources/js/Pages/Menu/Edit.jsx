import React from "react";
import { Link, useForm } from "@inertiajs/react";
import Layout from "@/Shared/Layout/AuthenticatedLayout";
import LoadingButton from "@/Shared/LoadingButton";
import TextInput from "@/Shared/TextInput";
import FromPageLayout from "@/Shared/Layout/FromPageLayout";

const Edit = () => {
    const { data, setData, errors, post, processing } = useForm({
        break_fast: "",
        lunch: "",
        dinner: "",
        menu_date: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("menu.store"));
    };

    return (
        <FromPageLayout
            breadcumb_link={route('menu.index')}
            breadcumb_name={'Menu'}
            breadcumb_action={'Edit'}
            loading={processing}
            button_text={'Update Menu'}
            handlFormSubmit={handleSubmit}
        >
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
                onChange={(e) => setData("lunch", e.target.value)}
            />
            <TextInput
                className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                label="Dinner"
                name="dinner"
                type="text"
                errors={errors.dinner}
                value={data.dinner}
                onChange={(e) => setData("dinner", e.target.value)}
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
        </FromPageLayout>
    );
};

Edit.layout = (page) => <Layout title="Edit Menu" children={page} />;

export default Edit;
