
import { Link } from "react-router-dom";


function sidebar(){

    return
    (
        <div className="bg-white p-4 h-screen">
            <div className="container mx-auto flex justify-between items-center">
                Malasakit
            </div>
            <div className="space-y-4 gap-4 text-center">
                <Link to="/causes" className="text-black hover:text-white">Causes</Link>
                <Link to="/donate" className="text-black hover:text-white">Our Impact</Link>
                <Link to="/donate" className="text-black hover:text-white">Volunteers</Link>
                <Link to="/donate" className="text-black hover:text-white">Donate</Link>
                <Link to="/about" className="text-black hover:text-white">About</Link>
            </div>
        </div>
    )
}

export default sidebar;