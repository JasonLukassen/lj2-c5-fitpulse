import backgroundImage from '../../assets/images/background-image.png'
import JasonPfp from '../../assets/images/jason.png'
import DiegoPfp from '../../assets/images/diego.png'
import CaioPfp from '../../assets/images/caio.png'

export default function Home() {

    let review1 = {
        img: { JasonPfp },
        name: "Jason Lukassen",
        comment: "The best fitness app I've used, track your workouts with just a single click. ",
        rating: 4,
    };

    let review2 = {
        img: { DiegoPfp },
        name: "Diego Loomans",
        comment: "Amazing app! Everything I look for is in there! ",
        rating: 4,
    };

    let review3 = {
        img: { CaioPfp },
        name: "Caio Goessens",
        comment: "The best fitness app I've used, track your workouts with just a single click. ",
        rating: 4,
    };


    return (
        <>
            <main className="box-border w-full h-screen p-0 m-0 text-white font-poppins">

                {/* Hero Section */}
                <section id="welcome-section" className="flex h-screen justify-center items-center">
                    <div className="bg-cover bg-center w-full h-screen" style={{ backgroundImage: `url(${backgroundImage})` }} >
                        <div className="w-full h-[60vh] flex justify-center items-center">
                            <h1 className="text-white font-bold lg:text-6xl lg:leading-snug md:text-4xl sm:text-3xl text-2xl w-1/3 text-center uppercase">Reach your <span className='text-gold'>limits</span> and get to the <span className='text-gold'>next</span> level</h1>
                        </div>
                        <div className='flex justify-center align-center'>
                            <div className='w-full h-[20vh] text-center flex justify-center align-center md:w-1/2'>
                                <p className='text-white md:w-full'>Embrace the challenge at FitPulse and propel yourself to the next level of fitness. Track and plan your workouts effortlessly, breaking through limits with our empowering platform. Join a community dedicated to achieving excellence – where limits are merely stepping stones to your fitness success.</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center'>
                            <div className='w-full md:w-3/4 h-[20vh] text-center space-x-4 '>
                                <a data-te-smooth-scroll-init href="#learn-more"><button className='w-1/3 md-w-1/4  h-20 bg-none border-2 border-solid border-white uppercase text-white font-bold text-2xl'>Learn More</button></a>
                                <a data-te-smooth-scroll-init href="#payment"><button className='w-1/3 md-w-1/4 h-20 bg-gold border-2 border-solid border-gold uppercase text-white font-bold text-2xl'>Join now</button></a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="box-border w-full h-[75vh] border-solid border-b-2 border-red-500" id="learn-more">
                    <div className='flex justify-center pt-[10vh]'>
                        <h1 className='text-2xl sm:text-4xl md:text-6xl 3xl:text-8xl border-b-2 border-gold border-solid pb-5'>Features</h1>
                    </div>
                    <div className='pt'>
                        <h1>Features</h1>
                    </div>
                </section>

                <section className="box-border w-full h-[75vh] border-solid border-2 border-blue-500" id='payment'>
                    <div className='flex justify-center pt-[10vh]'>
                        <h1 className='text-2xl sm:text-4xl md:text-6xl 3xl:text-8xl border-b-2 border-gold border-solid pb-5'>Pricing</h1>
                    </div>
                    <h1 className=''>Pricing</h1>
                </section>

                <section className=" box-border w-full h-[75vh] border-solid border-2 border-green-500">
                    <div className='flex justify-center pt-[10vh]'>
                        <h1 className='text-2xl sm:text-4xl md:text-6xl 3xl:text-8xl border-b-2 border-gold border-solid pb-5'>What our clients say</h1>
                    </div>
                    <h1>What our clients say</h1>
                </section>

                {/* Footer */}
                <footer className="box-border w-full h-[25vh] border-solid border-2 border-white-500 bg-blue-charcoal">
                    <div className='flex justify-center'>
                        <h1>Footer</h1>
                    </div>
                    <p>&copy; @FitPulse</p>
                </footer>


            </main>
        </>
    )
}