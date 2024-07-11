import MemberLayout from "@/Shared/Layout/AuthenticatedLayout";
import { useForm, usePage } from "@inertiajs/react";

import Datepicker from "@/Shared/Datepicker";
import FromPageLayout from "@/Shared/Layout/FromPageLayout";
import SelectInput from "@/Shared/SelectInput";
import TextInput from "@/Shared/TextInput";

const Create = () => {
    const { schedules } = usePage().props;
    const { bazarScheduler } = schedules;
    const { data, setData, errors, post, processing } = useForm({
        amount: "",
        description: "",
        bazar_schedule_id: "",
        bazar_date: "",
        status: 0,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("user.bazar.store"));
    };

    const setBazarDate = (date) => {
        setData("bazar_date", date);
    };

    return (
        <FromPageLayout
            breadcumb_link={route("user.bazar.index")}
            breadcumb_name={"Bazar"}
            breadcumb_action={"Create"}
            loading={processing}
            button_text={"Add Bazar"}
            handlFormSubmit={handleSubmit}
        >
            <Datepicker
                label="Bazar Date"
                errors={errors.bazar_date}
                value={data.bazar_date}
                handleDateChange={setBazarDate}
                startDate={
                    data.bazar_date ? new Date(data.bazar_date) : new Date()
                }
            />

            <TextInput
                label="Amount"
                name="amount"
                type="number"
                errors={errors.amount}
                value={data.amount}
                onChange={(e) => setData("amount", e.target.value)}
            />
            <TextInput
                label="Description"
                name="description"
                type="text"
                errors={errors.description}
                value={data.description}
                onChange={(e) => setData("description", e.target.value)}
            />

            <SelectInput
                label="Select Schedule Pair"
                name="bazar_schedule_id"
                errors={errors.bazar_schedule_id}
                value={data.bazar_schedule_id}
                onChange={(e) => setData("bazar_schedule_id", e.target.value)}
            >
                <option>Select Pair</option>
                {bazarScheduler &&
                    bazarScheduler.length &&
                    bazarScheduler.map(({ id, pair }, key) => (
                        <option key={key} value={id}>
                            {pair}
                        </option>
                    ))}
            </SelectInput>
        </FromPageLayout>
    );
};

Create.layout = (page) => (
    <MemberLayout title="Add New Bazar" children={page} />
);

export default Create;
