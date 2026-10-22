import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="bg-white p-4">
        <div className="container mx-auto flex justify-between items-center">
            <div className="text-black text-lg font-semibold">
                <Link to="/">Malasakit App</Link>   
            </div>
            <div className="space-x-4 gap-4 text-center">
                <Link to="/causes" className="text-black hover:text-white">Causes</Link>
                <Link to="/donate" className="text-black hover:text-white">Our Impact</Link>
                <Link to="/donate" className="text-black hover:text-white">Volunteers</Link>
                <Link to="/donate" className="text-black hover:text-white">Donate</Link>
                <Link to="/about" className="text-black hover:text-white">About</Link>
            </div>
            <div className="space-x-4 gap-4 text-center">
                <Link to="/register" className="text-black hover:text-white">Register</Link>
                <button className="btn rounded-b-sm p-2 rounded-2xl text-white gap-2 bg-blue-400 hover:bg-blue-500">Login</button>
            </div>
        </div>
    </nav>
  );
}


export default Navbar;