
import Navbar from "../components/Navbar";

export default function Bookings() {
  return (
    <>
      <Navbar />
      <div className="p-6">
        <h2 className="text-xl">My Bookings</h2>
        <p className="text-gray-500">No bookings yet (frontend only)</p>
      </div>
    </>
  );
}
