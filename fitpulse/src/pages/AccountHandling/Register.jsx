import { Link } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import greyCircle from "../../assets/images/circlegrey.png";
import orangeCircle from "../../assets/images/circleorange.png";
import GoogleLogin from "../../components/GoogleLoginButton";
import FaceBookLoginButton from "../../components/FacebookLoginButton";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const notify = () => {
        toast.warn('Je kan momenteel geen accounts aanmaken!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: 'Bounce',
        });
    };

    return (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="dark"
                transition="Bounce"
            />

            <div className="min-h-screen flex justify-center items-center">
                <img src={greyCircle} alt="grey circle" className="absolute top-64 right-1/4 z-0 hidden 2xl:block" />
                <img src={orangeCircle} alt="orange circle" className="absolute top-32 right-3/4 z-0 hidden 2xl:block" />
                <div className="text-center">
                    <h1 className="font-poppins text-white text-3xl md:text-5xl font-semibold mb-8 transition-colors duration-2000 ease-in-out animate-color-change">Register.</h1>

                    <div className="grid gap-4 justify-items-center">
                        <GoogleLogin />
                        <FaceBookLoginButton />
                        <h3 className="text-white font-poppins font-semibold">or</h3>
                        <input type="email" required id="email" name="email" placeholder="Email Address" className="shadow-xl border rounded-2xl w-72 md:w-96 h-10 bg-transparent text-black bg-white text-left pl-3 mb-4" onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" required id="password" name="password" placeholder="Password" className="shadow-xl border rounded-2xl w-72 md:w-96 h-10 bg-transparent text-black bg-white text-left pl-3 mb-4" onChange={(e) => setPassword(e.target.value)} />
                        <button className="w-64 md:w-80 h-9 text-white font-poppins font-semibold rounded-xl border-gradient bg-gradient-to-r from-yellow-500 via-orange-400 to-orange-300 mt-4 transition duration-300 ease-in-out transform hover:scale-105" onClick={notify}>Create account.</button>
                        <h3 className="text-gray-200 font-poppins pt-1">Already have an account? <Link to="/login" className="font-semibold hover:text-amber-500"> Login</Link></h3>
                    </div>
                </div>
            </div>
        </>
    );
}
