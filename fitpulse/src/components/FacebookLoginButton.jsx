import React from 'react';
import FacebookLogo from '../assets/facebook.svg';

export default function FacebookLoginButton() {
    return (
        <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg">
            <img src={FacebookLogo} alt="Facebook Logo" className="w-24 h-6 mr-2" style={{marginRight: '0.5rem'}} />
            Continue with Facebook
        </button>
    );
}
