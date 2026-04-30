
import { useNavigate } from "react-router-dom";

export default function BusCard({ bus }) {
  const nav = useNavigate();

  return (
    <div className="border p-4 mb-4 rounded-xl shadow flex justify-between items-center">
      <div>
        <h2 className="font-bold">{bus.from} → {bus.to}</h2>
        <p>{bus.time}</p>
        <p>⭐ {bus.rating}</p>
        <p className="font-bold text-red-600">₹{bus.price}</p>
      </div>

      <img src={bus.image} className="w-40 rounded"/>

      <button
        onClick={()=>nav("/seats")}
        className="bg-green-500 text-white px-4 py-2 rounded">
        View Seats
      </button>
    </div>
  );
}
