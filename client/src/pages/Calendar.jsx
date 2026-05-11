import { useState } from "react";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  // store notes by date
  const [notes, setNotes] = useState({});

  // selected day
  const [selectedDate, setSelectedDate] = useState(null);

  // note input
  const [noteInput, setNoteInput] = useState("");

  // month + year
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // get days in month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // first day index
  const firstDay = new Date(year, month, 1).getDay();

  // previous month
  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  // next month
  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  // save note
  const saveNote = () => {
    if (!selectedDate || !noteInput) return;

    setNotes({
      ...notes,
      [selectedDate]: noteInput,
    });

    setNoteInput("");
  };

  return (
    <div className="p-6">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={prevMonth}
          className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
        >
          ←
        </button>

        <h1 className="text-3xl font-bold">
          📅 {monthNames[month]} {year}
        </h1>

        <button
          onClick={nextMonth}
          className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
        >
          →
        </button>
      </div>

      {/* CALENDAR */}
      <div className="bg-white rounded-2xl shadow p-6">

        {/* DAYS */}
        <div className="grid grid-cols-7 gap-3 mb-4">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div
              key={day}
              className="font-bold text-center text-gray-600"
            >
              {day}
            </div>
          ))}
        </div>

        {/* EMPTY BOXES */}
        <div className="grid grid-cols-7 gap-3">

          {Array.from({ length: firstDay }).map((_, i) => (
            <div key={i}></div>
          ))}

          {/* DATES */}
          {Array.from({ length: daysInMonth }, (_, i) => {
            const day = i + 1;

            const fullDate = `${year}-${month + 1}-${day}`;

            return (
              <div
                key={day}
                onClick={() => setSelectedDate(fullDate)}
                className="h-28 border rounded-xl p-2 cursor-pointer hover:bg-blue-50 transition"
              >
                <div className="font-semibold">{day}</div>

                {/* show note preview */}
                <div className="text-xs text-gray-500 mt-2">
                  {notes[fullDate]}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* NOTE PANEL */}
      {selectedDate && (
        <div className="mt-6 bg-white p-6 rounded-2xl shadow">

          <h2 className="text-xl font-bold mb-3">
            Notes for {selectedDate}
          </h2>

          <textarea
            value={noteInput}
            onChange={(e) => setNoteInput(e.target.value)}
            placeholder="Write your task or reminder..."
            className="w-full border p-3 rounded-lg mb-4 h-32"
          />

          <button
            onClick={saveNote}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
          >
            Save Note
          </button>

          {/* SHOW SAVED NOTE */}
          {notes[selectedDate] && (
            <div className="mt-4 p-4 bg-gray-100 rounded-lg">
              <p className="font-semibold">Saved Note:</p>
              <p>{notes[selectedDate]}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}