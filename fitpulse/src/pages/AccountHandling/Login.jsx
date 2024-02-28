import { Link } from "react-router-dom";
import greyCircle from "../../assets/images/circlegrey.png";
import orangeCircle from "../../assets/images/circleorange.png";
import GoogleLogin from "../../components/GoogleLoginButton";
import FaceBookLoginButton from "../../components/FacebookLoginButton";

export default function Login() {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <div className=" min-h-screen flex justify-center items-center">
        <img src={greyCircle} alt="grey circle" className="absolute top-64 right-1/4 z-0 hidden 2xl:block" />
        <img src={orangeCircle} alt="orange circle" className="absolute top-32 right-3/4 z-0 hidden 2xl:block" />

        <div className="text-center">
          <h1 className="font-poppins text-white text-3xl md:text-5xl font-semibold mb-8 transition-colors duration-2000 ease-in-out animate-color-change">Sign In.</h1>

          <div className="grid gap-4 justify-items-center">
            <GoogleLogin />
            <FaceBookLoginButton />
            <h3 className="text-white font-poppins font-semibold">or</h3>
            <input type="email" id="email" name="email" placeholder="Email Address" className="shadow-xl border rounded-2xl w-72 md:w-96 h-10 bg-transparent text-black bg-white text-left pl-3 mb-4" />
            <input type="password" id="password" name="password" placeholder="Password" className="shadow-xl border rounded-2xl w-72 md:w-96 h-10 bg-transparent text-black bg-white text-left pl-3 mb-4" />
            <button className="w-64 md:w-80 h-9 text-white font-poppins font-semibold rounded-xl border-gradient bg-gradient-to-r from-yellow-500 via-orange-400 to-orange-300 mt-4 transition duration-300 ease-in-out transform hover:scale-105"><Link to="/">Sign In.</Link></button>
            <h3 className="text-gray-200 font-poppins pt-1">Don't have an account? <Link to="/register" className="font-bold text-white hover:text-orange-300">Create an account</Link></h3>
            <button className="font-poppins font-bold text-white hover:text-red-500">Forgot Password?</button>
          </div>
        </div>
      </div>
    </>
  );
}
