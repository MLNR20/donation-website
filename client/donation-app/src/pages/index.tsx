import Navbar from "../components/navbar";


export default function Index() {
  return (
    <div>
      <Navbar />
      <div className="flex-col items-center justify-center h-screen">
        <div className="text-center flex-col">
          <h1 className="text-3xl font-bold underline">Welcome to Malasakit</h1>
          <h2>Find local causes and make a difference</h2>

        </div>
        <div>
          <input type="text" placeholder="Search causes..." className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

      </div>
      <div>
        
      </div>
    </div>
  );
}