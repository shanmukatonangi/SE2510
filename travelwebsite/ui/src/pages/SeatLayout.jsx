
import { useState } from "react";

export default function SeatLayout() {
  const [selected, setSelected] = useState([]);
  const seats = Array.from({length: 20}, (_, i) => i + 1);

  const toggle = (s) => {
    setSelected(prev =>
      prev.includes(s) ? prev.filter(x=>x!==s) : [...prev, s]
    );
  };

  return (
    <div className="p-6">
      <h2 className="text-xl mb-4">Select Seats</h2>
      <div className="grid grid-cols-4 gap-4">
        {seats.map(s => (
          <div
            key={s}
            onClick={()=>toggle(s)}
            className={`p-4 text-center cursor-pointer rounded 
              ${selected.includes(s) ? "bg-green-500 text-white" : "bg-gray-300"}`}
          >
            {s}
          </div>
        ))}
      </div>

      <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
        Confirm Booking
      </button>
    </div>
  );
}
