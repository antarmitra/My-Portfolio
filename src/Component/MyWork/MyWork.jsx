import img1 from '../../assets/image/work1.png'
import img2 from '../../assets/image/work2.png'
import img3 from '../../assets/image/work3.png'

const MyWork = () => {


    return (
        <div>
            <div className="text-center mb-5">
                <h1 className="text-4xl font-semibold text-[#f75023]">My Works</h1>
            </div>

            <div className="lg:flex gap-20">
                <div className="relative">
                    <img src={img1} alt="" />
                    <div className='top-4 right-4 absolute'>
                        <a href="https://real-estate-f628c.web.app/" target="_blank" rel="noopener noreferrer" className='text-white text-xs bg-[#f75023] p-2 rounded-full'>Live Link</a>
                        <div className='mt-6'>
                            <a href="https://github.com/antarmitra/Real-estate-client-site" target="_blank" rel="noopener noreferrer" className='text-white text-xs bg-[#F75023] p-2 rounded-full'>Code Link</a>
                        </div>
                    </div>
                </div>
                <div className="relative md:mt-0 mt-5">
                    <img src={img2} alt="" />
                    <div className='top-4 right-4 absolute'>
                        <a href="https://marketing-master-19cb5.web.app/" target="_blank" rel="noopener noreferrer" className='text-white text-xs bg-[#f75023] p-2 rounded-full'>Live Link</a>
                        <div className='mt-6'>
                            <a href="https://github.com/antarmitra/Marketing-master-client-side" target="_blank" rel="noopener noreferrer" className='text-white text-xs bg-[#F75023] p-2 rounded-full'>Code Link</a>
                        </div>
                    </div>
                </div>
                <div className="relative md:mt-0 mt-5">
                    <img src={img3} alt="" />
                    <div className='top-4 right-4 absolute'>
                        <a href="https://wedding-event-management-67e25.web.app/" target="_blank" rel="noopener noreferrer" className='text-white text-xs bg-[#f75023] p-2 rounded-full'>Live Link</a>
                        <div className='mt-6'>
                            <a href="https://github.com/antarmitra/Wedding-event-management" target="_blank" rel="noopener noreferrer" className='text-white text-xs bg-[#F75023] p-2 rounded-full'>Code Link</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyWork;