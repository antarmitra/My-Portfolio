const Education = () => {
  return (
    <section id="education" className="px-[8%]">
      <div id="resume" className=" container m-auto mt-16">
        {/* heading */}
        <div
          // data-aos="fade-up"
          className="relative mb-10"
        >
          <h3 className="text-4xl text-black font-bold text-center lg:text-left">
            Education
          </h3>
          <span className="h-[1.1px] right-0 lg:right-auto absolute w-full lg:w-[92%] bg-gray-300 block"></span>
        </div>

        {/* card*/}
        <div className="card-wrapper w-[90%] sm:w-full mt-5 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-5 mx-auto ">
          <div className="left flex-1 flex items-center justify-center">
            <div>
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Department of Science
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Sadar Narottompur High School
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  January,2015 - February, 2020
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi nihil aut quae obcaecati alias placeat totam aperiam
                  pariatur quam? Accusantium minima aperiam error obcaecati
                  autem doloribus deserunt qui, laborum incidunt amet, numquam
                  eos cum tempora. Debitis, esse quae corporis deserunt officia
                  quos in a, quaerat vero odio vitae.
                </p>
              </div>
            </div>
          </div>
          <div className="right flex-1 flex items-center justify-center">
            <div>
              <div className=" flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Computer Science and Tachnology
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Lakshmipur Polytechnic Institute
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  September,2021 - October,2024
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi nihil aut quae obcaecati alias placeat totam aperiam
                  pariatur quam? Accusantium minima aperiam error obcaecati
                  autem doloribus deserunt qui, laborum incidunt amet, numquam
                  eos cum tempora. Debitis, esse quae corporis deserunt officia
                  quos in a, quaerat vero odio vitae.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
