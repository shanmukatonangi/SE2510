
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Home() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const nav = useNavigate();

  return (
    <>
      <Navbar />
      <div className="bg-red-500 h-screen flex flex-col justify-center items-center">
        <div className="bg-white p-6 rounded-xl shadow-lg flex gap-4">
          <input placeholder="From" onChange={e=>setFrom(e.target.value)} className="border p-2"/>
          <input placeholder="To" onChange={e=>setTo(e.target.value)} className="border p-2"/>
          <button onClick={()=>nav(`/search?from=${from}&to=${to}`)}
            className="bg-red-500 text-white px-4 rounded">
            Search
          </button>
        </div>
      </div>
    </>
  );
}
