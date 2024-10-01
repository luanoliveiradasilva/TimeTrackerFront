import { useState } from 'react'
import 'react-calendar/dist/Calendar.css';

function TimeBank(){

  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const renderDaysOfWeek = () => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days.map((day) => (
      <th key={day} className="px-2 text-center text-[#C9C9CB] text-xl">
        {day}
      </th>
    ));
  };

  const renderDaysInMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const days = daysInMonth(month, year);
    const firstDay = firstDayOfMonth(month, year);

    const calendarDays = [];
    for (let i = 0; i < firstDay; i++) {
      calendarDays.push(
        <td key={`empty-${i}`} className="bg-white"></td>
      );
    }

    for (let day = 1; day <= days; day++) {
      calendarDays.push(
        <td key={day} className="py-2 text-center">
          {day}
        </td>
      );
    }

    const rows = [];
    let cells = [];

    calendarDays.forEach((day, i) => {
      if (i % 7 !== 0) {
        cells.push(day);
      } else {
        rows.push(cells);
        cells = [day];
      }
    });

    if (cells.length) {
      rows.push(cells);
    }

    return rows.map((row, i) => <tr key={i}>{row}</tr>);
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <header className="flex justify-between items-center w-96">
        <button
          onClick={handlePrevMonth}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          left
        </button>
        <h2 className="text-3xl">
          {currentDate.toLocaleString("en-US", { month: "long" })}{" "}
          {currentDate.getFullYear()}
        </h2>
        <button
          onClick={handleNextMonth}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          right
        </button>
      </header>
      <table className="mt-8 border-0" cellPadding={0} cellSpacing={0}>
        <thead>
          <tr>{renderDaysOfWeek()}</tr>
        </thead>
        <tbody>{renderDaysInMonth()}</tbody>
      </table>
    </div>
  );
}

export default TimeBank;
