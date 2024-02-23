import { Outlet, Link } from "react-router-dom";
import Logo from "../assets/fitpulse.svg";

export default function Navbar() {
  return (
    <>
      <nav className=" fixed flex w-full bg-gray-800 text-white text-2xl font-poppins h-20 max-h-20 items-center">
        <div className="flex items-center p-10">
          <img src={Logo} alt="FitPulse Logo" className="w-10 cursor-pointer" />
          <span className="ml-4">FitPulse</span>
        </div>
        <ul className="items-center justify-between w-full p-5">
          <div className="flex space-x-40 p-4 justify-center items-center">
            <li>
              <Link to="/" className="hover:text-gold">Home</Link>
            </li>
            <li>
              <Link to="/tracking" className="hover:text-gold">Tracking</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gold">Contact</Link>
            </li>
          </div>
        </ul>
        <div className="flex pr-10">
          <Link to="/login" className=" bg-gold rounded-xl p-2 px-10">Login</Link>
        </div>
      </nav>

      <Outlet />
    </>
  );
}
