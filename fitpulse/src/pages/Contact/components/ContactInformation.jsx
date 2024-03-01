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


                <div className="bg-dark-contact h-[65vh] w-[25vw] ml-10">
                    <h1 className="text-white font-poppins text-4xl text-left ml-14 mt-10">Contact Information</h1>
                    <h3 className="text-gray-500 font-poppins text-lg leading-loose text-left ml-14">Get In touch with us!</h3>
                    <div className='inline-block flex ml-14 mt-14'>
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
                <div className="min-h-screen ml-16 mt-[40vh]">
                    <div className="grid grid-cols-2 gap-16">

                        <div className="flex flex-col">
                            <label htmlFor="first-name" className='text-amber-400 font-poppins text-lg mb-1 font-semibold'>First Name</label>
                            <input type="text" name="first-name" placeholder="First Name" className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none" />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="last-name" className='text-amber-400 font-poppins text-lg mb-1 font-semibold'>Last Name</label>
                            <input type="text" name="last-name" placeholder="Last Name" className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none" />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="email" className='text-amber-400 font-poppins text-lg mb-1 font-semibold'>Email</label>
                            <input type="text" name="email" placeholder="Email" className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none" />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="number" className='text-amber-400 font-poppins text-lg mb-1 font-semibold'>Phone Number</label>
                            <input type="text" name="number" placeholder="Phone Number" className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none" />
                        </div>

                        <div className="flex flex-col mt-8">
                            <label htmlFor="number" className='text-amber-400 font-poppins text-lg mb-1 font-semibold'>Select Subject</label>
                            <div className="flex">
                                <input type="radio" id="payment" name="subject" value="Payment" checked className="sr-only" />
                                <label htmlFor="payment" className="flex items-center cursor-pointer text-white mr-4 text-base font-poppins">
                                    <span className="w-4 h-4 bg-gray-800 border rounded-full flex items-center justify-center mr-2">
                                        <span className="w-2 h-2 bg-white rounded-full opacity-0"></span>
                                    </span>
                                    Payment
                                </label>

                                <input type="radio" id="account" name="subject" value="Account" className="sr-only" />
                                <label htmlFor="account" className="flex items-start cursor-pointer text-white mr-4 text-base font-poppins">
                                    <span className="w-4 h-4 bg-gray-800 border rounded-full flex items-center justify-center mr-2">
                                        <span className="w-2 h-2 bg-white rounded-full opacity-0"></span>
                                    </span>
                                    Account
                                </label>

                                <input type="radio" id="general" name="subject" value="General" className="sr-only" />
                                <label htmlFor="general" className="flex items-center cursor-pointer text-white mr-4 text-base font-poppins">
                                    <span className="w-4 h-4 bg-gray-800 border rounded-full flex items-center justify-center mr-2">
                                        <span className="w-2 h-2 bg-white rounded-full opacity-0"></span>
                                    </span>
                                    General
                                </label>

                                <input type="radio" id="other" name="subject" value="Other" className="sr-only" />
                                <label htmlFor="other" className="flex items-center cursor-pointer text-white text-base font-poppins">
                                    <span className="w-4 h-4 bg-gray-800 border rounded-full flex items-center justify-center mr-2">
                                        <span className="w-2 h-2 bg-white rounded-full opacity-0"></span>
                                    </span>
                                    Other
                                </label>
                            </div>
                        </div>

                        <div className="col-span-2 -mt-1">
                            <label htmlFor="message" className='text-amber-400 font-poppins text-lg mb-1 font-semibold'>Message</label>
                            <input type="text" name="message" placeholder="Message" className="block w-[42vw] py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none" />
                        </div>

                    </div>
                </div>



            </div>

        </>
    )
}