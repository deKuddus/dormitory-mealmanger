import dayjs from "dayjs";
import React, {useState, useEffect} from "react";
import EventModal from "@/Calendar/EventModal";


export default function Day({day, rowIdx, meal}) {
    const [showModal, setShowModal] = useState(false);


    function getCurrentDayClass() {
        return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
            ? "bg-blue-600 text-white rounded-full w-7"
            : "";
    }

    function activeDate() {
        return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY");
    }

    return (
        <>
            {showModal && <EventModal mealData={meal} setShowModal={setShowModal}/>}
            <div className={`border border-gray-200 flex flex-col ${activeDate() ? 'bg-yellow-200' : ''}`}>
                <header className="flex flex-col items-center">
                    {rowIdx === 0 && (
                        <p className="text-sm mt-1">
                            {day.format("ddd").toUpperCase()}
                        </p>
                    )}
                    <p
                        className={`text-sm p-1 my-1 text-center  ${getCurrentDayClass()}`}
                    >
                        {day.format("DD")}
                    </p>
                </header>
                <div
                    className="flex-1 cursor-pointer"
                    onClick={() => {
                        setShowModal(true);
                    }}
                >
                    <div
                        className={`${activeDate() ? 'bg-blue-500' : 'bg-gray-200'} items-center p-2 m-2 text-white text-gray-600 text-xl font-bold rounded mb-1`}
                    >
                        Meal: 20
                    </div>
                </div>
            </div>
        </>
    );
}
