import phoneIcon from '../../../assets/phone.svg'
import mailIcon from '../../../assets/email.svg'
import locationIcon from '../../../assets/company.svg'


export default function ContactInformation() {
    return (
        <>

            <h1 className=" text-transparent">Contact Page</h1>

            <div>
                <h1 className=" text-white font-semibold font-poppins text-center text-5xl mt-[15vh]">Contact Us</h1>
                <h3 className=" text-gray-500 font-poppins text-center text-lg leading-loose">Any question or remarks? Just <span>write</span> us a message!</h3>
            </div>

            <div className="flex justify-left items-center h-[70vh] w-[75vw] mx-auto bg-contact mt-5">
                <div className="bg-dark-contact h-[55vh] w-[25vw] ml-10">
                    <h1 className="text-white font-poppins text-4xl text-left ml-14 mt-10">Contact Information</h1>
                    <h3 className="text-gray-500 font-poppins text-lg leading-loose text-left ml-14">Get In touch with us!</h3>
                    <div className='inline-block flex ml-14 mt-40'>
                        <img src={phoneIcon} alt="phoneIcon" />
                        <h3 className=' text-white font-poppins text-lg ml-3'>+31 06 20294968</h3>
                    </div>
                    <div className=' inline-block flex ml-14 mt-10'>
                        <img src={mailIcon} alt="mailIcon" />
                        <h3 className=' text-white font-poppins text-lg ml-3'>fitpulsecorporation@llc.com</h3>
                    </div>
                    <div className=' inline-block flex ml-14 mt-10'>
                        <img src={locationIcon} alt="locationIcon" />
                        <h3 className=' text-white font-poppins text-lg ml-3'>Maastricht, The Netherlands.</h3>
                    </div>
                </div>

            </div >
        </>
    )
}