import React, {useState} from "react";
import {Link, useForm, usePage} from "@inertiajs/react";
import Layout from "@/Shared/Layout";
import LoadingButton from "@/Shared/LoadingButton";
import TextInput from "@/Shared/TextInput";
import Select from 'react-select'


const Create = () => {

    const {permissions} = usePage().props;
    const {data, setData, errors, post, processing} = useForm({
        name: "",
        permissions: [],
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("role.store"));
    }


    const options = permissions && permissions.length ? permissions.map((row) => ({
        value: row.id,
        label: row.name
    })) : [];

    const handlePermissionChange = (isChecked, permissionId) => {
        if (isChecked) {
            let _pemission =[...data.permissions, permissionId];
            setData('permissions',_pemission)
        } else {
            const updatedRolePermission = data.permissions.filter(
                (id) => id !== permissionId
            );
            setData('permissions',updatedRolePermission)
        }
    }
console.log(errors)
    return (
        <div>
            <div>
                <h1 className="mb-4 text-3xl font-bold">
                    <Link
                        href={route("role.index")}
                        className="text-indigo-600 hover:text-indigo-700"
                    >
                        Role
                    </Link>
                    <span className="font-medium text-indigo-600"> /</span>
                    Create
                </h1>
            </div>
            <div className="w-full overflow-hidden bg-white rounded shadow">
                <form name="createForm" onSubmit={handleSubmit}>
                    <div className="flex flex-wrap p-8 -mb-8 -mr-6">


                        <TextInput
                            className="w-full pb-8 pr-6"
                            label="Name"
                            name="name"
                            errors={errors.name}
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                        />

                    </div>

                    <div className="flex flex-wrap p-8 -mb-8 -mr-6">

                        {options.map((row,key) => (
                            <div className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/4" key={key}>
                                <label
                                    className={`flex items-center mt-6 select-none  ${errors.permissions ? 'form-error':''}`}
                                    htmlFor={`permission-${row.value}`}
                                >
                                    <input
                                        name="permission"
                                        id={`permission-${row.value}`}
                                        type="checkbox"
                                        className={`mr-1 ${errors.permissions ? 'error':''}`}
                                        checked={data.permissions.includes(row.value)}
                                        onChange={(e) =>
                                            handlePermissionChange(e.target.checked, row.value)
                                        }
                                    />
                                    <span className="text-sm">{row.label}</span>
                                </label>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center justify-end px-8 py-4 bg-gray-100 border-t border-gray-200">
                        <LoadingButton
                            loading={processing}
                            type="submit"
                            className="btn-indigo"
                        >
                            Create Role
                        </LoadingButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

Create.layout = (page) => <Layout title="Create Role" children={page}/>;

export default Create;
