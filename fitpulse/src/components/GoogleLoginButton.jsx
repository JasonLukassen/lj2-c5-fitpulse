import React from 'react';
import GoogleLogo from '../assets/google.svg';

export default function GoogleLoginButton() {
    return (
        <button className="flex items-center bg-white text-black px-6 py-2 rounded-lg">
            <img src={GoogleLogo} alt="Google Logo" className="w-20 h-6 mr-2" />
            Continue with Google‎ ‎ ‎ ‎
        </button>
    );
}
