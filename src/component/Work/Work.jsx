import WorkCard from "../Work/WorkCard";

const Work = () => {
  return (
    <section id="work">
      <div className="px-[8%]">
        <div id="works" className="container mx-auto mt-16">
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
      </div>
    </section>
  );
};

export default Work;
