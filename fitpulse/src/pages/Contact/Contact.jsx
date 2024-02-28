import phoneIcon from '../../assets/phone.svg'
import mailIcon from '../../assets/email.svg'
import locationIcon from '../../assets/company.svg'

export default function App() {

    return (
        <>
            <h1 className=" text-transparent">Contact Page</h1>

            <div>
                <h1 className=" text-white font-semibold font-poppins text-center text-5xl mt-[15vh]">Contact Us</h1>
                <h3 className=" text-gray-500 font-poppins text-center text-lg leading-loose">Any question or remarks? Just write us a message!</h3>
            </div>

            <div className="flex justify-left items-center h-[70vh] w-[75vw] mx-auto bg-contact mt-5">
                <div className="bg-dark-contact h-[55vh] w-[25vw] ml-10">
                    <h1 className="text-white font-poppins text-4xl text-left ml-14 mt-10">Contact Information</h1>
                    <h3 className="text-gray-500 font-poppins text-lg leading-loose text-left ml-14">Get In touch with us!</h3>
                    <div className="flex items-center">
                        <img src={phoneIcon} alt="" className="inline-block ml-14" />
                        <h3 className="text-white font-poppins text-lg inline-block">+31 6 20294971</h3>
                        <img src={mailIcon} alt="" className="inline-block ml-14" />
                        <h3 className="text-white font-poppins text-lg inline-block">fitpulsecorporation@gmail.com</h3>
                        <img src={locationIcon} alt="" className="inline-block ml-14" />
                        <h3 className="text-white font-poppins text-lg inline-block">Maastricht, The Netherlands</h3>
                    </div>




                </div >

            </div >
        </>
    )

}
