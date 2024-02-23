import { Outlet, Link } from "react-router-dom";
import Logo from "../assets/fitpulse.svg"

export default function Navbar() {
  return (
    <>
      <nav className="flex bg-gray-800 text-white text-2xl font-poppins h-20 max-h-20 items-center">
        <div className="flex items-center p-10">
          <img src={Logo} alt="FitPulse Logo" className="w-10" />
          <span className="ml-4 md:block">FitPulse</span>
        </div>
        <ul className="flex items-center justify-between w-full p-5">
          <div className="flex space-x-5 p-4 justify-center items-center">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/tracking">Tracking</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>

          </div>
            
        </ul>
          <div className="flex pr-10">
            <Link to="/login">Login</Link>
          </div>
      </nav>

      <Outlet />
    </>
  )
}
