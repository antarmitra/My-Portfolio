import img1 from '../../assets/image/html.png'
import img2 from '../../assets/image/css.png'
import img3 from '../../assets/image/tailwind.png'
import img4 from '../../assets/image/js.webp'
import img5 from '../../assets/image/react.png'
import img6 from '../../assets/image/node.png'
import img7 from '../../assets/image/mongo.png'
import img8 from '../../assets/image/firebase.png'
import './MySkill.css'
import ReactParallaxTilt from 'react-parallax-tilt'




const MySkill = () => {
   return (
      <div className="max-w-screen-xl mx-auto">

         <div className="text-center space-y-4 mt-20">
            <h1 className="text-4xl font-semibold text-[#f75023]">My Skills</h1>
         </div>

         <div className='grid overflow-hidden grid-cols-1 md:grid-cols-4  mt-5 '>


            <ReactParallaxTilt>
               <div className="mx-auto p-5">
                  <div className="shady p-5">
                     <img className='md:w-32 md:h-32 w-32 h-32 items-center mx-auto' src={img1} alt="" />
                     <div>
                        <div className='text-center font-bold'>HTML: 95%</div>
                        <progress className="progress progress-error w-52 md:ml-4 ml-16" value={95} max="100"></progress>
                     </div>
                  </div>
               </div>
            </ReactParallaxTilt>




            <ReactParallaxTilt>
               <div className="mx-auto p-5">
                  <div className="shady p-5">
                     <img className='md:w-32 md:h-32 w-32 h-32 items-center mx-auto' src={img2} alt="" />
                     <div>
                        <div className='text-center font-bold'>CSS: 70%</div>
                        <progress className="progress progress-primary  w-52 md:ml-4 ml-16" value="70" max="100"></progress>
                     </div>
                  </div>
               </div>
            </ReactParallaxTilt>

            <ReactParallaxTilt>
               <div className="mx-auto p-5">
                  <div className="shady p-5">
                     <img className='md:w-32 md:h-32 w-32 h-32 items-center mx-auto' src={img3} alt="" />
                     <div>
                        <div className='text-center font-bold'>TailwindCSS: 80%</div>
                        <progress className="progress progress-info  w-52 md:ml-4 ml-16" value="80" max="100"></progress>
                     </div>
                  </div>
               </div>
            </ReactParallaxTilt>

            <ReactParallaxTilt>
               <div className="mx-auto p-5 ">
                  <div className="shady p-5">
                     <img className='md:w-32 md:h-32 w-32 h-32 items-center mx-auto' src={img4} alt="" />
                     <div>
                        <div className='text-center font-bold'>JavaScript: 45%</div>
                        <progress className="progress progress-warning  w-52 md:ml-4 ml-16" value="45" max="100"></progress>
                     </div>
                  </div>
               </div>
            </ReactParallaxTilt>

            <ReactParallaxTilt>
               <div className="mx-auto p-5 ">
                  <div className="shady p-5">
                     <img className='md:w-32 md:h-32 w-32 h-32 items-center mx-auto' src={img5} alt="" />
                     <div>
                        <div className='text-center font-bold'>ReactJS: 40%</div>
                        <progress className="progress progress-error  w-52 md:ml-4 ml-16" value={40} max="100"></progress>
                     </div>
                  </div>
               </div>
            </ReactParallaxTilt>
            <ReactParallaxTilt>
               <div className="mx-auto p-5 ">
                  <div className="shady p-5">
                     <img className='md:w-32 md:h-32 w-32 h-32 items-center mx-auto' src={img6} alt="" />
                     <div>
                        <div className='text-center font-bold'>NodeJS: 35%</div>
                        <progress className="progress progress-success  w-52 md:ml-4 ml-16" value="40" max="100"></progress>
                     </div>
                  </div>
               </div>
            </ReactParallaxTilt>
            <ReactParallaxTilt>
               <div className="mx-auto p-5 ">
                  <div className="shady p-5">
                     <img className='md:w-32 md:h-32 w-32 h-32 items-center mx-auto' src={img7} alt="" />
                     <div>
                        <div className='text-center font-bold'>MongoDB: 30%</div>
                        <progress className="progress progress-success  w-52 md:ml-4 ml-16" value="30" max="100"></progress>
                     </div>
                  </div>
               </div>
            </ReactParallaxTilt>
            <ReactParallaxTilt>
               <div className="mx-auto p-5 ">
                  <div className="shady p-5">
                     <img className='md:w-32 md:h-32 w-32 h-32 items-center mx-auto' src={img8} alt="" />
                     <div>
                        <div className='text-center font-bold'>Firebase: 50%</div>
                        <progress className="progress progress-warning  w-52 md:ml-4 ml-16" value="50" max="100"></progress>
                     </div>
                  </div>
               </div>
            </ReactParallaxTilt>
         </div>

      </div>


   );
};

export default MySkill;


