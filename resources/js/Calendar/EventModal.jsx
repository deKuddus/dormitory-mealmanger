import React, { useContext, useState } from "react";
import Icon from "@/Shared/Icon";

export default function EventModal({mealData,setShowModal}) {

  const [meal, setMeal] = useState(1);
  const [description, setDescription] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const calendarEvent = {
      meal,
      description,
    };
    console.log(calendarEvent)

    setShowEventModal(false);
  }
  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form className="bg-white rounded-lg shadow-2xl w-1/4">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <Icon name="FaBars" className="material-icons-outlined text-gray-400" />
          <div>
            <button onClick={() => setShowModal(false)}>
                <Icon name="FaTimes" className="material-icons-outlined text-gray-400" />
            </button>
          </div>
        </header>
        <div className="p-3">
            {/*<p>{daySelected.format("dddd, MMMM DD")}</p>*/}
          <div className="grid grid-cols-1/5 items-end gap-y-7">
            <div></div>
            <input
              type="number"
              name="meal"
              placeholder="Meal"
              value={meal}
              required
              className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              onChange={(e) => setMeal(e.target.value)}
            />


            <input
              type="text"
              name="note"
              placeholder="Add a note if necessary"
              value={description}
              required
              className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <footer className="flex justify-end border-t p-3 mt-5">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
          >
            Save
          </button>
        </footer>
      </form>
    </div>
  );
}
