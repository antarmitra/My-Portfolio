// import WorkCard from "../Work/WorkCard";

// const Work = () => {
//   return (
//     <section id="work">
//       <div id="works" className="container m-auto mt-16">
//         {/* heading */}
//         <div
//           // data-aos="fade-up"
//           className="relative mb-10"
//         >
//           <h3 className="text-4xl text-black font-bold text-center lg:text-left">
//             My Work
//           </h3>
//           <span className="h-[1.1px] right-0 lg:right-auto absolute w-full lg:w-[92%] bg-gray-300 block"></span>
//         </div>

//         {/* card */}
//         <div className="card-wrapper mx-auto w-[80%] sm:w-fit mt-5">
//           <div className="card-box grid grid-cols-1 space-y-5 w-full md:grid-cols-3 sm:gap-8 sm:grid-cols-1 sm:space-y-0 ">
//             <WorkCard />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Work;

import WorkCard from "../Work/WorkCard";

const Work = () => {
  return (
    <section id="work">
      <div id="works" className="container mx-auto mt-16 px-4">
        {/* heading */}
        <div
          // data-aos="fade-up"
          className="relative mb-10"
        >
          <h3 className="text-4xl text-black font-bold text-center lg:text-left">
            My Work
          </h3>
          <span className="h-[1.1px] right-0 lg:right-auto absolute w-full lg:w-[92%] bg-gray-300 block"></span>
        </div>

        {/* card */}
        <div className="card-wrapper mx-auto mt-5">
          <div className="card-box grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <WorkCard />
            {/* Add more <WorkCard /> components as needed */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
