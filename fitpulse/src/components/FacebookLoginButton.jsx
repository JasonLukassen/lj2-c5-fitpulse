import React from 'react';
import FacebookLogo from '../assets/facebook.svg';

export default function FacebookLoginButton() {
    return (
        <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg pl-10 transition duration-300 ease-in-out transform hover:scale-105">
            <img src={FacebookLogo} alt="Facebook Logo" className=" w-12 h-6 mr-2" style={{marginRight: '0.5rem'}} />
            <span className=' font-semibold'>Continue with Facebook</span>‎ ‎ ‎ ‎‎ ‎ ‎ ‎‎ ‎ ‎ ‎‎ ‎ ‎ ‎‎ ‎ ‎ ‎‎ ‎ ‎ ‎
        </button>
    );
}
