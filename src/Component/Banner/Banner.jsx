import { TypeAnimation } from 'react-type-animation';
import man from '../../assets/image/man.png'
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
import './Banner.css'


const Banner = () => {
    return (
        <div className='banner h-screen'>
            <div className='md:flex justify-center gap-72'>

                {/* Image Section */}
                <div className='md:order-2 order-1 md:text-center text-center md:mt-36'>
                    <img className='md:w-[300px] w-[150px] md:ml-0 mx-auto mb-20' src={man} alt="" />
                </div>

                {/* Text Section */}
                <div className='md:text-start text-center md:mt-56 -mt-10'>
                    <h1 className='md:text-4xl text-2xl'>Hello, </h1>
                    <h2 className='md:text-6xl text-2xl font-semibold'>I am Antar Mitra</h2>
                    <TypeAnimation className='text-[#f75023]'
                        sequence={[
                            // Same substring at the start will only be typed once, initially
                            'I am a Web Developer',
                            1000,
                            'I am a JavaScript Developer',
                            1000,
                            'I am a ReactJS Developer',
                            1000,
                            'I am a MERN Stack Developer',
                            1000,
                        ]}
                        speed={50}
                        style={{ fontSize: '2em' }}
                        repeat={Infinity}
                    />

                    <div className='md:mt-6 mt-2 md:flex gap-2'>
                        <a className='btn rounded-full bg-[#f75023] text-white hover:border-[#f75023] border-2' href="">About Me</a>
                        <div className="flex items-center md:ml-0 ml-40 gap-4 md:mt-0  mt-4">

                            <div>
                                <a href="https://www.facebook.com/antar.mitra.9" target="_blank" rel="noopener noreferrer">
                                    <FaFacebook className="text-2xl"></FaFacebook>
                                </a>
                            </div>
                            <div>
                                <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin className="text-2xl"></FaLinkedin>
                                </a>
                            </div>
                            <div>
                                <a href="https://github.com/antarmitra" target="_blank" rel="noopener noreferrer">
                                    <FaGithub className="text-2xl"></FaGithub>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;