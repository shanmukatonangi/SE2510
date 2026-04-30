
import buses from "../data/buses";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import BusCard from "../components/BusCard";

export default function Search() {
  const query = new URLSearchParams(useLocation().search);
  const from = query.get("from");
  const to = query.get("to");

  const [type, setType] = useState("");
  const [sort, setSort] = useState("");

  let filtered = buses.filter(b =>
    (!from || b.from.toLowerCase().includes(from.toLowerCase())) &&
    (!to || b.to.toLowerCase().includes(to.toLowerCase())) &&
    (!type || b.type === type)
  );

  if (sort === "low") filtered.sort((a,b)=>a.price-b.price);
  if (sort === "high") filtered.sort((a,b)=>b.price-a.price);

  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="w-64 p-4 border">
          <h3 className="font-bold mb-2">Filters</h3>
          <select onChange={e=>setType(e.target.value)} className="w-full mb-2">
            <option value="">All</option>
            <option value="AC">AC</option>
            <option value="Non-AC">Non-AC</option>
          </select>

          <select onChange={e=>setSort(e.target.value)} className="w-full">
            <option value="">Sort</option>
            <option value="low">Price Low</option>
            <option value="high">Price High</option>
          </select>
        </div>

        <div className="flex-1 p-4">
          {filtered.map(bus => <BusCard key={bus.id} bus={bus}/>)}
        </div>
      </div>
    </>
  );
}
