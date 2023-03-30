import React, { useState, useEffect } from "react";
import { router, usePage } from "@inertiajs/react";
import { usePrevious } from "react-use";
import SelectInput from "@/Shared/SelectInput";
import pickBy from "lodash/pickBy";

export default () => {
    const { filters } = usePage().props;
    const [opened, setOpened] = useState(false);

    const [values, setValues] = useState({
        search: filters.search || "",
        trashed: filters.trashed || "",
    });

    const prevValues = usePrevious(values);

    function reset() {
        setValues({
            search: "",
            trashed: "",
        });
    }

    useEffect(() => {
        if (prevValues) {
            const query = Object.keys(pickBy(values)).length
                ? pickBy(values)
                : { remember: "forget" };
            router.get(route(route().current()), query, {
                replace: true,
                preserveState: true,
            });
        }
    }, [values]);

    function handleChange(e) {
        const key = e.target.name;
        const value = e.target.value;

        setValues((values) => ({
            ...values,
            [key]: value,
        }));

        if (opened) setOpened(false);
    }

    return (
        <div className="flex items-center w-full">
            <div className="relative flex w-48 bg-white rounded shadow">
                <input
                    className="relative w-48 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    autoComplete="off"
                    type="text"
                    name="search"
                    value={values.search}
                    onChange={handleChange}
                    placeholder="Search…"
                />
            </div>
            <button
                onClick={reset}
                className="ml-3 text-sm text-gray-600 hover:text-gray-700 focus:text-indigo-700 focus:outline-none"
                type="button"
            >
                Reset
            </button>
        </div>
    );
};
