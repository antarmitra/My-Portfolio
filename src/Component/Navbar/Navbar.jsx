import icon from '../../assets/image/i.png'
// import './Navbar.css'

// import { TypeAnimation } from 'react-type-animation';
// import man from '../../assets/image/man.png'
// import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
import { useEffect, useState } from 'react';



const Navbar = () => {

    const [navbarBackground, setNavbarBackground] = useState("transparent");

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setNavbarBackground("bg-stone-300");
            } else {
                setNavbarBackground("transparent");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    const navItem = <>
        <div className='lg:flex gap-6'>
            <div className='text-base font-bold'><a>Home</a></div>
            <div className='text-base font-bold'><a>About Me</a></div>
            <div className='text-base font-bold'><a>My Work</a></div>
            <div className='text-base font-bold'><a>My Skill</a></div>
            <div className='text-base font-bold'><a>Contact</a></div>
            <div> <a href='https://drive.google.com/uc?export=download&id=1tsDT7SyGZXZOxSbRlu4pY3b03NkRvE9V' className=" text-base rounded-full border-[#f75023] border-2 p-2 hover:bg-[#f75023] hover:text-white text-[#f75023] ">Download Resume</a> </div>
        </div>
    </>



    return (
        <div>
            <div className={`lg:fixed top-0 left-0 right-0 ${navbarBackground} transition-all duration-300 z-10 navbar`}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItem}
                        </ul>
                    </div>
                    <a className="text-xl btn btn-ghost  md:ml-20 ml-10"><span><img className='w-10' src={icon} alt="" /></span>Antar Mitra</a>
                    {/* <div className='flex md:ml-20 ml-20'>
                        <div><img className='w-10' src={icon} alt="" /></div>
                        <h1 className='mt-1 text-xl font-bold'>Antar Mitra</h1>
                    </div> */}
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItem}
                    </ul>
                </div>
            </div>


            {/* banner */}
            {/* <div className='md:flex  justify-center gap-72 md:mt-28 mt-10'>

             
                <div className='md:order-2 order-1 md:text-center text-center'>
                    <img className='md:w-[300px] w-[200px] md:ml-0 mx-auto mb-20' src={man} alt="" />
                </div>

                <div className='md:text-start text-center md:mt-20 '>
                    <h1 className='md:text-4xl text-2xl'>Hello, </h1>
                    <h2 className='md:text-6xl text-4xl font-semibold'>I am Antar Mitra</h2>
                    <TypeAnimation
                        sequence={[
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

                    <div className='mt-10 md:flex gap-2'>
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

            </div> */}

        </div>


    );
};

export default Navbar;