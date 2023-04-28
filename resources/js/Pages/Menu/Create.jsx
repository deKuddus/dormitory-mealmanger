import React from "react";
import { Link, useForm } from "@inertiajs/react";
import Layout from "@/Shared/Layout/AuthenticatedLayout";
import LoadingButton from "@/Shared/LoadingButton";
import TextInput from "@/Shared/TextInput";
import FromPageLayout from "@/Shared/Layout/FromPageLayout";

const Create = () => {
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
           breadcumb_action={'Create'}
           loading={processing}
           button_text={'Create Menu'}
           handlFormSubmit={handleSubmit}
       >
           <TextInput

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

               label="Lunch"
               name="lunch"
               type="text"
               errors={errors.lunch}
               value={data.lunch}
               onChange={(e) => setData("lunch", e.target.value)}
           />
           <TextInput

               label="Dinner"
               name="dinner"
               type="text"
               errors={errors.dinner}
               value={data.dinner}
               onChange={(e) => setData("dinner", e.target.value)}
           />

           <TextInput

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

Create.layout = (page) => <Layout title="Create Menu" children={page} />;

export default Create;
