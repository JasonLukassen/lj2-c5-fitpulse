import React from 'react';
import GoogleLogo from '../assets/google.svg';

export default function GoogleLoginButton() {
    return (
        <button className="flex items-center bg-white text-black px-6 py-2 rounded-lg pl-10 transition duration-300 ease-in-out transform hover:scale-105">
            <img src={GoogleLogo} alt="Google Logo" className="w-12 h-6 mr-2" />
            <span className=' font-semibold'>Continue with Google</span>‎ ‎ ‎ ‎‎ ‎ ‎ ‎‎ ‎ ‎ ‎‎ ‎ ‎‎‎‎‎‎‎‎‎‎‎‎ ‎‎ ‎ ‎ ‎‎ ‎ ‎ ‎ ‎‎‎ ‎
        </button>
    );
}
