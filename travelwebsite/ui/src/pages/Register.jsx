
export default function Register() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-6 shadow rounded w-80">
        <h2 className="mb-4 font-bold">Register</h2>
        <input className="border w-full p-2 mb-2" placeholder="Name"/>
        <input className="border w-full p-2 mb-2" placeholder="Email"/>
        <input className="border w-full p-2 mb-2" placeholder="Password"/>
        <button className="bg-red-500 text-white w-full p-2">Register</button>
      </div>
    </div>
  );
}
