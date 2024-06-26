import React, { useState, useEffect } from "react";
import Layout from "@/Shared/Layout/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";
import dayjs from "dayjs";
import { defaultApi } from "@/api";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";

const Index = () => {
    const { messId } = usePage().props;
    const [meals, setMeals] = useState([]);
    const [open, setOpen] = useState(false);
    const [meal, setMeal] = useState({
        id: Number(0),
        lunch: "",
        dinner: "",
        notes: "",
        dormitory_id: Number(0),
    });
    const month = dayjs(new Date(dayjs().year(), dayjs().month())).format(
        "YYYY-MM-DD"
    );

    const getData = async () => {
        const { response, error } = await defaultApi(
            `/api/v1/meals/${messId}`,
            "get",
            {
                month,
            }
        );
         if (!error && response.data && response.data.length > 0) {
            let s = response.data.map(
                ({
                    id,
                    created_at,
                    break_fast_total,
                    dormitory_id,
                    lunch_total,
                    dinner_total,
                }) => {
                    return {
                        id,
                        dormitory_id,
                        date: dayjs(created_at).format("YYYY-MM-DD"),
                        title: `Meal`,
                        breakfast: break_fast_total,
                        lunch: lunch_total,
                        dinner: dinner_total,
                        today:
                            dayjs(created_at).format("YYYY-MM-DD") ===
                            dayjs(new Date()).format("YYYY-MM-DD"),
                    };
                }
            );
            setMeals(s);
        } else {
            console.log("no data");
        }
    };

    useEffect(() => {
        if (messId) {
            getData();
        }
    }, [messId]);

    const handleEvents = ({ event }) => {
        const { lunch, dinner, id, dormitory_id } = event._def.extendedProps;
        setMeal({
            lunch,
            dinner,
            id,
            dormitory_id,
        });
        setOpen(true);
    };

    function renderEventContent({ event }) {
        const { lunch, dinner, today } = event._def.extendedProps;
        return (
            <>
                <div
                    className={`p-2 flex flex-col font-bold text-xl ${
                        today
                            ? "bg-success shadow-2xl"
                            : "border-0 !bg-primary opacity-25 "
                    }`}
                >
                    <span className="p-1 mb-1">Lunch : {lunch}</span>
                    <span className="p-1">Dinner : {dinner}</span>
                </div>
            </>
        );
    }

    return (
        <>
            <div className="p-3 rounded-2xl bg-white shadow ">
                <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    headerToolbar={{
                        left: "prev,next today",
                        center: "title",
                        right: "dayGridMonth,timeGridWeek,timeGridDay",
                    }}
                    initialView="dayGridMonth"
                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    firstDay={6}
                    events={meals}
                    eventContent={renderEventContent}

                    /* you can update a remote database when these fire:
                    eventAdd={function(){}}
                    eventChange={function(){}}
                    eventRemove={function(){}}
                    */
                />
            </div>
        </>
    );
};

Index.layout = (page) => <Layout title="Menu" children={page} />;

export default Index;
