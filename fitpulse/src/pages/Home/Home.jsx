import backgroundImage from '../../assets/images/background-image.png'

export default function Home() {

    return (
        <>
            <main className="box-border w-full h-screen p-0 m-0">
                <section id="welcome-section" className="flex h-screen justify-center items-center">
                        <div className="bg-cover bg-center w-full h-screen flex justify-center align-center" style={{backgroundImage: `url(${backgroundImage})`}}>
                            <div className="w-full h-[75vh] flex justify-center items-center p-0 m-0 ">
                                <h1 className="text-white font-bold lg:text-6xl lg:leading-snug md:text-4xl sm:text-3xl text-2xl w-1/3 text-center uppercase">Reach your <span className='text-gold'>limits</span> and get to the <span className='text-gold'>next</span> level</h1>
                                {/* <p className='text-white '>Embrace the challenge at FitPulse and propel yourself to the next level of fitness. Track and plan your workouts effortlessly, breaking through limits with our empowering platform. Join a community dedicated to achieving excellence – where limits are merely stepping stones to your fitness success.</p> */}
                            </div>
                        </div>
                </section>

                <div className="w-full h-[75vh] border-solid border-2 border-green-500"></div>
                <div className="w-full h-[75vh] border-solid border-2 border-red-500"></div>
                <div className="w-full h-[75vh] border-solid border-2 border-blue-500"></div>
                <div className="w-full h-[75vh] border-solid border-2 border-white-500"></div>


            </main>
        </>
    )
}