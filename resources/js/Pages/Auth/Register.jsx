import React, {useEffect} from "react";
import {Head, Link, useForm, usePage} from "@inertiajs/react";
import LoadingButton from "@/Shared/LoadingButton";
import TextInput from "@/Shared/TextInput";

export default () => {
    const { validToken,app_url} = usePage().props;

    const {data, setData, errors, post, processing} = useForm({
        email: "",
        password: "",
        full_name: "",
        display_name: "",
        mobile: "",
        password_confirmation: ""
    });


    function handleSubmit(e) {
        e.preventDefault();
        post(route("register.attempt"));
    }


    return (
        <div className="flex items-center justify-center min-h-screen p-6 bg-indigo-900">
            <Head>
                <title> Register</title>
                <link rel="canonical" href={app_url} />
                <meta name="title" content="Registration-WPDeveloper Dormitory" />
                <meta property="og:title" content="Registration-WPDeveloper Dormitory" />
                <meta property="og:image" content="/ogimage.png" />
            </Head>
            <div className="w-full max-w-md">
                <form
                    onSubmit={handleSubmit}
                    className="mt-8 overflow-hidden bg-white rounded-lg shadow-xl"
                >
                    <div className="px-10 py-12">
                        <h1 className="text-2xl font-bold text-center">
                            WPDev Dorm Registration!
                        </h1>
                        {!validToken && (
                            <div
                                className="flex items-center justify-center ">
                                <span className="text-xl text-red-600">Your token is expired.</span>
                            </div>
                        )}
                        <div className="w-24 mx-auto mt-6 border-b-2"/>
                        <div className={!validToken ? 'opacity-40' : ''}>
                            <TextInput
                                className="mt-10"
                                label="Full Name"
                                name="full_name"
                                type="text"
                                errors={errors?.full_name}
                                value={data.full_name}
                                onChange={(e) => setData("full_name", e.target.value)}
                                disabled={!validToken}
                            />

                            <TextInput
                                className="mt-10"
                                label="Display Name"
                                name="display_name"
                                type="text"
                                errors={errors.display_name}
                                value={data.display_name}
                                onChange={(e) => setData("display_name", e.target.value)}
                                disabled={!validToken}
                            />

                            <TextInput
                                className="mt-10"
                                label="Email"
                                name="email"
                                type="email"
                                errors={errors.email}
                                value={data.email}
                                onChange={(e) => setData("email", e.target.value)}
                                disabled={!validToken}
                            />

                            <TextInput
                                className="mt-10"
                                label="Mobile"
                                name="mobile"
                                type="tel"
                                errors={errors.mobile}
                                value={data.mobile}
                                onChange={(e) => setData("mobile", e.target.value)}
                                disabled={!validToken}
                            />

                            <TextInput
                                className="mt-6"
                                label="Password"
                                name="password"
                                type="password"
                                errors={errors.password}
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                disabled={!validToken}
                            />

                            <TextInput
                                className="mt-6"
                                label="Confirm Password"
                                name="password_confirmation"
                                type="password"
                                errors={errors.password_confirmation}
                                value={data.password_confirmation}
                                onChange={(e) =>
                                    setData("password_confirmation", e.target.value)
                                }
                                disabled={!validToken}
                            />
                        </div>

                    </div>
                    {validToken && (
                        <div
                            className="flex items-center justify-between px-10 py-4 bg-gray-100 border-t border-gray-200">
                            <Link
                                className="hover:underline"
                                href="/login"
                            >
                                Login
                            </Link>
                            <LoadingButton
                                type="submit"
                                loading={processing}
                                className="btn-indigo"
                            >
                                Submit
                            </LoadingButton>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};
