import { Outlet, Link } from "react-router-dom";
import Logo from "../assets/fitpulse.svg"

export default function Navbar() {
  return (
    <>
      <nav className="flex bg-gray-800 text-white text-2xl font-poppins h-20 max-h-20 items-center f">
        <ul className="flex items-center justify-between w-full p-5">
          <div className="flex items-center">
            <img src={Logo} alt="FitPulse Logo" className="w-10 md:w-15" />
            <span className="ml-4 hidden md:block">FitPulse</span>
          </div>
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
          <li>
            <Link to="/login">Login</Link>
          </li>
          {/* if (LoggedIn) */}
            
        </ul>
      </nav>

      <Outlet />
    </>
  )
}
