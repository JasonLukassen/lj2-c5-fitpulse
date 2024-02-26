import backgroundImage from '../../assets/images/background-image.png'

export default function Home() {

    return (
        <>
            <main className="box-border w-full h-screen p-0 m-0 text-white font-poppins">

                {/* Hero Section */}
                <section id="welcome-section" className="flex h-screen justify-center items-center">
                    <div className="bg-cover bg-center w-full h-screen" style={{backgroundImage: `url(${backgroundImage})`}} >
                        <div className="w-full h-[60vh] flex justify-center items-center">
                            <h1 className="text-white max-w-2xl font-bold lg:text-6xl lg:leading-snug md:text-4xl sm:text-3xl text-3xl pt-20 w-1/3 text-center uppercase">Reach your <span className='text-gold'>limits</span> and get to the <span className='text-gold'>next</span> level</h1>
                        </div>
                        <div className='flex justify-center align-center'>
                            <div className='w-full h-[20vh] text-center flex justify-center align-center md:w-1/2'>
                                <p className='text-white max-w-xl md:w-full'>Embrace the challenge at FitPulse and propel yourself to the next level of fitness. Track and plan your workouts effortlessly, breaking through limits with our empowering platform. Join a community dedicated to achieving excellence – where limits are merely stepping stones to your fitness success.</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center'>
                            <div className='w-full md:w-3/4 h-[20vh] text-center space-x-4 '>
                                <a href="#learn-more"><button className='w-1/3 max-w-xl md-w-1/4  h-20 bg-none border-2 border-solid border-white uppercase text-white font-bold text-2xl'>Learn More</button></a>
                                <a href="#payment"><button className='w-1/3 max-w-xl md-w-1/4 h-20 bg-gold border-2 border-solid border-gold uppercase text-white font-bold text-2xl'>Join now</button></a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="box-border w-full h-[75vh] border-solid border-b-2 border-red-500" id="learn-more">
                    <div className='flex justify-center pt-[10vh]'>
                        <h1 className='text-2xl sm:text-4xl md:text-6xl 3xl:text-8xl border-b-2 border-gold border-solid pb-5'>Features</h1>
                    </div>
                </section>

                <section className="box-border w-full h-[75vh] border-solid border-2 border-blue-500" id='payment'>
                    <h1 className=''>Pricing</h1>
                </section>

                <section className=" box-border w-full h-[75vh] border-solid border-2 border-green-500">
                    <h1>What our clients say</h1>
                </section>

                <footer className="box-border w-full h-[75vh] border-solid border-2 border-white-500">
                    <h1>Footer</h1>
                </footer>


            </main>
        </>
    )
}