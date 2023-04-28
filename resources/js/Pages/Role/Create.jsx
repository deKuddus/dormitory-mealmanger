import React from "react";
import {useForm, usePage} from "@inertiajs/react";
import Layout from "@/Shared/Layout/AuthenticatedLayout";
import TextInput from "@/Shared/TextInput";
import FromPageLayout from "@/Shared/Layout/FromPageLayout";

const Create = () => {
    const {permissions} = usePage().props;
    const {data, setData, errors, post, processing} = useForm({
        name: "",
        permissions: [],
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("role.store"));
    };

    const options =
        permissions && permissions.length
            ? permissions.map((row) => ({
                value: row.id,
                label: row.name,
            }))
            : [];

    const handlePermissionChange = (isChecked, permissionId) => {
        if (isChecked) {
            let _pemission = [...data.permissions, permissionId];
            setData("permissions", _pemission);
        } else {
            const updatedRolePermission = data.permissions.filter(
                (id) => id !== permissionId
            );
            setData("permissions", updatedRolePermission);
        }
    };

    return (
        <FromPageLayout
            breadcumb_link={route('role.index')}
            breadcumb_name={'Role'}
            breadcumb_action={'Create'}
            loading={processing}
            button_text={'Create Role'}
            handlFormSubmit={handleSubmit}
            className="grid grid-cols-1"
        >
            <TextInput
                label="Name"
                name="name"
                errors={errors.name}
                value={data.name}
                onChange={(e) => setData("name", e.target.value)}
            />

            <div className="flex flex-wrap p-8 -mb-8 -mr-6">
                {options.map((row, key) => (
                    <div
                        className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/4"
                        key={key}
                    >
                        <label
                            className={`flex cursor-pointer select-none items-center flex items-center mt-6 select-none  ${
                                errors.permissions ? "form-error" : ""
                            }`}
                            htmlFor={`permission-${row.value}`}
                        >
                            <div className='relative'>
                                <input
                                    name="permission"
                                    id={`permission-${row.value}`}
                                    type="checkbox"
                                    className={`sr-only mr-1 ${
                                        errors.permissions ? "error" : ""
                                    }`}
                                    checked={data.permissions.includes(
                                        row.value
                                    )}
                                    onChange={(e) =>
                                        handlePermissionChange(
                                            e.target.checked,
                                            row.value
                                        )
                                    }
                                />
                                <div
                                    className={`mr-4 flex h-5 w-5 items-center justify-center rounded border ${
                                        data.permissions.includes(
                                            row.value
                                        ) && 'border-primary bg-gray dark:bg-transparent'
                                    }`}
                                >
                                    <span
                                        className={`h-2.5 w-2.5 rounded-sm ${data.permissions.includes(
                                            row.value
                                        ) && 'bg-primary'}`}
                                    ></span>
                                </div>
                            </div>
                            {row.label}
                        </label>
                    </div>
                ))}
            </div>
        </FromPageLayout>
    );
};

Create.layout = (page) => <Layout title="Create Role" children={page}/>;

export default Create;
