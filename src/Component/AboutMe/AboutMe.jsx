import about from '../../assets/image/about.png'
import './AboutMe.css'

const AboutMe = () => {
    return (
        <div className='md:flex image'>
            <div className='w-1/2 mt-10'>
                <img className='md:ml-44 ml-[100px] border-4 border-[#f75023] mt-10 w-[350px] lg:h-[450px] background' src={about} alt="" />
            </div>
            <div className='lg:ml-28'>
                <div className='md:mt-24 mt-8 space-y-5 md:text-start lg:ml-0 ml-5'>
                    <h1 className='text-4xl font-medium'><span className='text-[#f75023]'>About Me</span></h1>
                    <p className='md:text-lg text-base'>Hello,I am professional Web Developer & Web Designer based in Bangladesh working on different projects. I can build awesome Designs with different programming languages.</p>
                    <div className='space-y-2 text-start'>
                        <p className='text-lg font-semibold'><span className='text-lg font-semibold text-[#f75023]'>Name:</span>  Antar Mitra</p>
                        <p className='text-lg font-semibold'><span className='text-lg font-semibold text-[#f75023]'>Birthday:</span>  18 September, 2003</p>
                        <p className='text-lg font-semibold'><span className='text-lg font-semibold text-[#f75023]'>Language:</span>  Bangla</p>
                        <p className='text-lg font-semibold'><span className='text-lg font-semibold text-[#f75023]'>Address:</span>  Bangladesh</p>
                        <p className='text-lg font-semibold'><span className='text-lg font-semibold text-[#f75023]'>Email:</span>  antarmitra33@gmail.com</p>
                        <p className='text-lg font-semibold'><span className='text-lg font-semibold text-[#f75023]'>Phone:</span>  01882101146</p>
                    </div>

                    <a href="mailto:antarmitra33@gmail.com" className='btn rounded-full bg-[#f75023] text-white hover:border-[#f75023] border-2'>Hire Me </a>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;