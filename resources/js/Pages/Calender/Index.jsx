import React, {useState, useEffect} from "react";
import Layout from "@/Shared/Layout";
import {usePage} from "@inertiajs/react";
import dayjs from "dayjs";
import {defaultApi} from '@/api'
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import {INITIAL_EVENTS} from "@/Calendar/Day";

const Index = () => {
    const {messId} = usePage().props;
    const [meals, setMeals] = useState([]);
    const [currentEvents, setCurrentEvents] = useState([]);
    const month = dayjs(new Date(dayjs().year(), dayjs().month())).format(
        "YYYY-MM-DD"
    );

    const getData = async () => {
        const {response, error} = await defaultApi(`/api/v1/meals/${messId}`, 'get', {
            month
        })
        if (error) {
            console.log(error.data.message)
        } else if (response.data && response.data.length > 0) {
            let s = response.data.map(({created_at, break_fast_total, lunch_total, dinner_total}) => {
                return {
                    date: dayjs(created_at).format("YYYY-MM-DD"),
                    title: `Lunch: ${lunch_total} | Dinner: ${dinner_total}`
                }
            });
            setMeals(s)
        } else {
            console.log('no data')
        }
    }

    useEffect(() => {
        if (messId) {
            getData();
        }
    }, [messId])


    const handleDateSelect = (selectInfo) => {
        console.log(selectInfo)
        let title = '';
        let calendarApi = selectInfo.view.calendar

        // calendarApi.unselect() // clear date selection

        if (title) {
            calendarApi.addEvent({
                id: createEventId(),
                title,
                start: selectInfo.startStr,
                end: selectInfo.endStr,
                allDay: selectInfo.allDay
            })
        }
    }

    const handleEventClick = (clickInfo) => {
        console.log(clickInfo)
    }

    const handleEvents = (events) => {
        setCurrentEvents(events)
    }

    function renderEventContent(eventInfo) {
        return (
            <>
                <span style={{
                    paddingTop:10,
                    paddingBottom:10
                }}>{eventInfo.event.title}</span>
            </>
        )
    }
    console.log(meals)
    return (
        <>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                }}
                initialView='dayGridMonth'
                editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                firstDay={6}
                events={meals}
                select={handleDateSelect}
                eventContent={renderEventContent}
                eventClick={handleEventClick}
                eventsSet={handleEvents}

                /* you can update a remote database when these fire:
                eventAdd={function(){}}
                eventChange={function(){}}
                eventRemove={function(){}}
                */
            />
        </>
    );
};

Index.layout = (page) => <Layout title="Menu" children={page}/>;

export default Index;
