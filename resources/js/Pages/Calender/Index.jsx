import React, {useState, useContext, useEffect} from "react";
import {getMonth} from "@/utils";
import CalendarHeader from "@/Calendar/CalendarHeader";
import Layout from "@/Shared/Layout";
import {usePage} from "@inertiajs/react";
import Day from "@/Calendar/Day";
import dayjs from "dayjs";

const Index = () => {
    const {meals} = usePage().props;
    const [monthIndex, setMonthIndex] = useState(dayjs().month());
    const [currenMonth, setCurrentMonth] = useState(getMonth());


    useEffect(() => {
        setCurrentMonth(getMonth(monthIndex));
    }, [monthIndex]);

    return (
        <>
            <div className="h-screen flex flex-col">
                <CalendarHeader
                    monthIndex={monthIndex}
                    setMonthIndex={setMonthIndex}
                 />
                <div className="flex flex-1 px-5">
                    <div className="flex-1 grid grid-cols-7 grid-rows-5">
                        {currenMonth.map((row, i) => {
                            console.log(row)
                            return (
                                <React.Fragment key={i}>
                                    {row.map((day, idx) => (
                                        <Day day={day} key={idx} rowIdx={i} meal={''} />
                                    ))}
                                </React.Fragment>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

Index.layout = (page) => <Layout title="Menu" children={page}/>;

export default Index;
