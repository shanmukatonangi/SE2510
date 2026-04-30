
export default function Login() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-6 shadow rounded w-80">
        <h2 className="mb-4 font-bold">Login</h2>
        <input className="border w-full p-2 mb-2" placeholder="Email"/>
        <input className="border w-full p-2 mb-2" placeholder="Password"/>
        <button className="bg-red-500 text-white w-full p-2">Login</button>
      </div>
    </div>
  );
}
