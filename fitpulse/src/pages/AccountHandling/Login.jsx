import { document } from "postcss";
import greyCircle from "../../assets/images/circlegrey.png";
import orangeCircle from "../../assets/images/circleorange.png";
import GoogleLogin from "../../components/GoogleLoginButton";
import FaceBookLoginButton from "../../components/FacebookLoginButton"

export default function Login() {

  return (


    <>

      <img src={greyCircle} alt="grey circle" className="absolute top-64 right-1/4 mr-72 -z-50" />
      <img src={orangeCircle} alt="orange circle" className=" absolute top-32 right-2/3" />

      <h1 className=" font-poppins text-white text-5xl text-center pt-96 font-semibold">
        Sign In.
      </h1>


      {/* Form */}
      <div className=" grid gap-4 justify-items-center justify-center text-center mt-20">
        <GoogleLogin />
        <FaceBookLoginButton />
        <h3 className="text-white font-poppins font-semibold">or</h3>
        <input type="email" id="email" name="email" placeholder="Email Address" className=" shadow-xl border rounded-2xl w-96 h-10 bg-transparent text-black bg-white text-left pl-3" />
        <input type="password" id="password" name="password" placeholder="Password" className=" shadow-xl border rounded-2xl w-96 h-10 bg-transparent text-black bg-white text-left pl-3" />

        <button className=" w-9/12 h-9 text-white font-poppins font-semibold rounded-xl border-gradient bg-gradient-to-r from-yellow-500 via-orange-400 to-orange-300 mt-4 transition duration-300 ease-in-out transform hover:scale-105">Sign In.</button>
        <h3 className=" text-gray-200 font-poppins pt-1">don't have an account? <button className=" font-bold text-white hover:text-orange-300">Create a account</button></h3>
        <button className=" font-poppins font-bold text-white hover:text-red-500">Forgot Password?</button>


      </div>
      {/* End Form */}





    </>
  );
}
