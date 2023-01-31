import React from "react";
import { Link, useForm } from "@inertiajs/react";
import Layout from "@/Shared/Layout";
import LoadingButton from "@/Shared/LoadingButton";
import TextInput from "@/Shared/TextInput";
import SelectInput from "@/Shared/SelectInput";
// import FileInput from "@/Shared/FileInput";

const Create = () => {
    const { data, setData, errors, post, processing } = useForm({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        owner: "0",
        phone: "",
        present_address: "",
        permanent_address: "",
        nid: "",
        nid_type: "0",
        institution: "",
        company: "",
        status: "0",
    });

    const handleSubmit = (e) =>  {
        e.preventDefault();
        post(route("user.store"));
    }

    return (
        <div>
            <div>
                <h1 className="mb-8 text-3xl font-bold">
                    <Link
                        href={route("user.index")}
                        className="text-indigo-600 hover:text-indigo-700"
                    >
                        Users
                    </Link>
                    <span className="font-medium text-indigo-600"> /</span>{" "}
                    Create
                </h1>
            </div>
            <div className="w-full overflow-hidden bg-white rounded shadow">
                <form name="createForm" onSubmit={handleSubmit}>
                    <div className="flex flex-wrap p-8 -mb-8 -mr-6">
                        <TextInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="First Name"
                            name="first_name"
                            errors={errors.first_name}
                            value={data.first_name}
                            onChange={(e) =>
                                setData("first_name", e.target.value)
                            }
                        />
                        <TextInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="Last Name"
                            name="last_name"
                            errors={errors.last_name}
                            value={data.last_name}
                            onChange={(e) =>
                                setData("last_name", e.target.value)
                            }
                        />
                        <TextInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="Email"
                            name="email"
                            type="email"
                            errors={errors.email}
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                        />
                        <TextInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="Password"
                            name="password"
                            type="password"
                            errors={errors.password}
                            value={data.password}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                        />
                        <TextInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="Phone"
                            name="phone"
                            type="number"
                            errors={errors.phone}
                            value={data.phone}
                            onChange={(e) => setData("phone", e.target.value)}
                        />

                        <TextInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="Present Address"
                            name="present_address"
                            type="text"
                            errors={errors.present_address}
                            value={data.present_address}
                            onChange={(e) => setData("present_address", e.target.value)}
                        />

                        <TextInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="Permanent Address"
                            name="permanent_address"
                            type="text"
                            errors={errors.permanent_address}
                            value={data.permanent_address}
                            onChange={(e) => setData("permanent_address", e.target.value)}
                        />

                        <TextInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="NID"
                            name="nid"
                            type="text"
                            errors={errors.nid}
                            value={data.nid}
                            onChange={(e) => setData("nid", e.target.value)}
                        />
                        <SelectInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="NID Type"
                            name="nid_type"
                            errors={errors.nid_type}
                            value={data.nid_type}
                            onChange={(e) => setData("nid_type", e.target.value)}
                        >
                            <option value="1">National ID</option>
                            <option value="0">Birth Certificate</option>
                        </SelectInput>

                        <TextInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="Institution"
                            name="institution"
                            type="text"
                            errors={errors.institution}
                            value={data.institution}
                            onChange={(e) => setData("institution", e.target.value)}
                        />

                        <TextInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="Company"
                            name="company"
                            type="text"
                            errors={errors.company}
                            value={data.company}
                            onChange={(e) => setData("company", e.target.value)}
                        />

                        <SelectInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="Status"
                            name="status"
                            errors={errors.status}
                            value={data.status}
                            onChange={(e) => setData("status", e.target.value)}
                        >
                            <option value="1">Active</option>
                            <option value="0">InActive</option>
                        </SelectInput>
                        {/*<FileInput*/}
                        {/*    className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"*/}
                        {/*    label="Photo"*/}
                        {/*    name="photo"*/}
                        {/*    accept="image/*"*/}
                        {/*    errors={errors.photo}*/}
                        {/*    value={data.photo}*/}
                        {/*    onChange={(photo) => setData("photo", photo)}*/}
                        {/*/>*/}
                    </div>
                    <div className="flex items-center justify-end px-8 py-4 bg-gray-100 border-t border-gray-200">
                        <LoadingButton
                            loading={processing}
                            type="submit"
                            className="btn-indigo"
                        >
                            Create User
                        </LoadingButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

Create.layout = (page) => <Layout title="Create User" children={page} />;

export default Create;
