import React from "react";
import { Link, useForm, usePage } from "@inertiajs/react";
import Layout from "@/Shared/Layout";
import LoadingButton from "@/Shared/LoadingButton";
import TextInput from "@/Shared/TextInput";
import SelectInput from "@/Shared/SelectInput";

const Edit = () => {
    const { dormitory } = usePage().props;
    const { data, setData, errors, post, processing } = useForm({
        name: dormitory.name || "",
        address: dormitory.address || "",
        status: dormitory.status,
        is_fixed_meal_rate: dormitory.is_fixed_meal_rate,
        break_fast_close: dormitory.break_fast_close,
        lunch_close: dormitory.lunch_close || "",
        dinner_close: dormitory.dinner_close || "",
        is_automeal: dormitory.is_automeal || "",
        has_breakfast: dormitory.has_breakfast,
        has_lunch: dormitory.has_lunch,
        has_dinner: dormitory.has_dinner,
        _method: "PUT",
    });

    const hours = [
        "12:00 AM",
        "12:30 AM",
        "1:00 AM",
        "1:30 AM",
        "2:00 AM",
        "2:30 AM",
        "3:00 AM",
        "3:30 AM",
        "4:00 AM",
        "4:30 AM",
        "5:00 AM",
        "5:30 AM",
        "6:00 AM",
        "6:30 AM",
        "7:00 AM",
        "7:30 AM",
        "8:00 AM",
        "8:30 AM",
        "9:00 AM",
        "9:30 AM",
        "10:00 AM",
        "10:30 AM",
        "11:00 AM",
        "11:30 AM",
        "12:00 PM",
        "12:30 PM",
        "1:00 PM",
        "1:30 PM",
        "2:00 PM",
        "2:30 PM",
        "3:00 PM",
        "3:30 PM",
        "4:00 PM",
        "4:30 PM",
        "5:00 PM",
        "5:30 PM",
        "6:00 PM",
        "6:30 PM",
        "7:00 PM",
        "7:30 PM",
        "8:00 PM",
        "8:30 PM",
        "9:00 PM",
        "9:30 PM",
        "10:00 PM",
        "10:30 PM",
        "11:00 PM",
        "11:30 PM",
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("dormitory.update", dormitory.id));
    };

    return (
        <div>
            <div>
                <h1 className="mb-8 text-3xl font-bold">
                    <Link
                        href={route("dormitory.index")}
                        className="text-indigo-600 hover:text-indigo-700"
                    >
                        Dormitory
                    </Link>
                    <span className="font-medium text-indigo-600"> /</span> Edit
                </h1>
            </div>
            <div className="w-full overflow-hidden bg-white rounded shadow">
                <form name="createForm" onSubmit={handleSubmit}>
                    <div className="flex flex-wrap p-8 -mb-8 -mr-6">
                        <TextInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="Name"
                            name="name"
                            type="text"
                            errors={errors.name}
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                        />
                        <TextInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="Address"
                            name="address"
                            type="text"
                            errors={errors.address}
                            value={data.address}
                            onChange={(e) => setData("address", e.target.value)}
                        />

                        <SelectInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="Status"
                            name="status"
                            errors={errors.status}
                            value={data.status}
                            onChange={(e) => setData("status", e.target.value)}
                        >
                            <option value="1" defaultValue={data.status}>
                                Active
                            </option>
                            <option value="0" defaultValue={data.status}>
                                InActive
                            </option>
                        </SelectInput>

                        <SelectInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="Is Fixed Meal Rate"
                            name="is_fixed_meal_rate"
                            errors={errors.is_fixed_meal_rate}
                            value={data.is_fixed_meal_rate}
                            onChange={(e) =>
                                setData("is_fixed_meal_rate", e.target.value)
                            }
                        >
                            <option
                                value="1"
                                defaultValue={data.is_fixed_meal_rate}
                            >
                                Yes
                            </option>
                            <option
                                value="0"
                                defaultValue={data.is_fixed_meal_rate}
                            >
                                No
                            </option>
                        </SelectInput>

                        <SelectInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="Is Auto Meal"
                            name="is_automeal"
                            errors={errors.is_automeal}
                            value={data.is_automeal}
                            onChange={(e) =>
                                setData("is_automeal", e.target.value)
                            }
                        >
                            <option value="1" defaultValue={data.is_automeal}>
                                Yes
                            </option>
                            <option value="0" defaultValue={data.is_automeal}>
                                No
                            </option>
                        </SelectInput>

                        <SelectInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="Has Breakfast"
                            name="has_breakfast"
                            errors={errors.has_breakfast}
                            value={data.has_breakfast}
                            onChange={(e) =>
                                setData("has_breakfast", e.target.value)
                            }
                        >
                            <option value="1" defaultValue={data.has_breakfast}>
                                Yes
                            </option>
                            <option value="0" defaultValue={data.has_breakfast}>
                                No
                            </option>
                        </SelectInput>

                        <SelectInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="Has Lunch"
                            name="has_lunch"
                            errors={errors.has_lunch}
                            value={data.has_lunch}
                            onChange={(e) =>
                                setData("has_lunch", e.target.value)
                            }
                        >
                            <option value="1" defaultValue={data.has_lunch}>
                                Yes
                            </option>
                            <option value="0" defaultValue={data.has_lunch}>
                                No
                            </option>
                        </SelectInput>

                        <SelectInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="Has Dinner"
                            name="has_dinner"
                            errors={errors.has_dinner}
                            value={data.has_dinner}
                            onChange={(e) =>
                                setData("has_dinner", e.target.value)
                            }
                        >
                            <option value="1" defaultValue={data.has_dinner}>
                                Yes
                            </option>
                            <option value="0" defaultValue={data.has_dinner}>
                                No
                            </option>
                        </SelectInput>

                        <SelectInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="Breakfast will closed after"
                            name="break_fast_close"
                            value={data.break_fast_close}
                            onChange={(e) =>
                                setData("break_fast_close", e.target.value)
                            }
                        >
                            {hours.map((row, key) => (
                                <option
                                    value={row}
                                    key={key}
                                    defaultValue={data.break_fast_close}
                                >
                                    {row}
                                </option>
                            ))}
                        </SelectInput>
                        <SelectInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="Lunch will closed after"
                            name="lunch_close"
                            value={data.lunch_close}
                            onChange={(e) =>
                                setData("lunch_close", e.target.value)
                            }
                        >
                            {hours.map((row, key) => (
                                <option
                                    value={row}
                                    key={key}
                                    defaultValue={data.lunch_close}
                                >
                                    {row}
                                </option>
                            ))}
                        </SelectInput>
                        <SelectInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="Breakfast will closed after"
                            name="dinner_close"
                            value={data.dinner_close}
                            onChange={(e) =>
                                setData("dinner_close", e.target.value)
                            }
                        >
                            {hours.map((row, key) => (
                                <option
                                    value={row}
                                    key={key}
                                    defaultValue={data.dinner_close}
                                >
                                    {row}
                                </option>
                            ))}
                        </SelectInput>
                    </div>
                    <div className="flex items-center justify-end px-8 py-4 bg-gray-100 border-t border-gray-200">
                        <LoadingButton
                            loading={processing}
                            type="submit"
                            className="btn-indigo"
                        >
                            Save Dormitory
                        </LoadingButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

Edit.layout = (page) => <Layout title="Edit Dormitory" children={page} />;

export default Edit;
