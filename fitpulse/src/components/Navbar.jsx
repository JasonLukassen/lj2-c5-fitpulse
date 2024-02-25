import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Logo from '../assets/fitpulse.svg';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed flex w-full bg-gray-800 m-0 p-0 text-white text-2xl font-poppins h-20 max-h-20 items-center justify-between">
        <div className="flex items-center p-10">
          <img src={Logo} alt="FitPulse Logo" className="w-10 cursor-pointer" />
          <span className="ml-4 md:flex hidden">FitPulse</span>
        </div>

        {/* Hamburger Menu Button (visible on tablet and smaller screens) */}
        <div className="md:hidden flex justify-center items-center ">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white focus:outline-none">
            {/* Hamburger Icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Links (hidden on tablet and smaller screens) */}
        <ul className={`md:flex hidden items-center justify-center flex-grow`}>
          <li className="w-max">
            <Link to="/" className="hover:text-gold mx-4">Home</Link>
          </li>
          <li className="w-max">
            <Link to="/tracking" className="hover:text-gold mx-4">Tracking</Link>
          </li>
          <li className="w-max">
            <Link to="/contact" className="hover:text-gold mx-4">Contact</Link>
          </li>
        </ul>

        {/* Login Button (always visible) */}
        <div className="flex items-center pr-10">
          <Link to="/login" className="bg-gold md:flex w rounded-xl p-2 px-10">Login</Link>
        </div>

        {/* Mobile Menu (visible when hamburger menu is clicked) */}
        <div className={`${isMobileMenuOpen ? 'flex' : 'hidden'} md:hidden absolute top-20 w-full bg-gray-800 z-10`}>
          <ul className="flex flex-col items-center w-full">
            <li className="w-full text-center py-2">
              <Link to="/" className="hover:text-gold" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            </li>
            <li className="w-full text-center py-2">
              <Link to="/tracking" className="hover:text-gold" onClick={() => setIsMobileMenuOpen(false)}>Tracking</Link>
            </li>
            <li className="w-full text-center py-2">
              <Link to="/contact" className="hover:text-gold" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Outlet />
    </>
  );
}
