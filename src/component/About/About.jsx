import photo from "../../assets/male.png";
import code from "../../assets/code.png";
import vs from "../../assets/vs.png";
import firebase from "../../assets/firebase.png";
import figma from "../../assets/figma.png";
import git from "../../assets/git.png";
import crome from "../../assets/crome.png";
import vite from "../../assets/vite.png";
import edge from "../../assets/edge.png";
import education from "../../assets/edu.png";
import project from "../../assets/project.png";

const About = () => {
  return (
    <div className="w-full px-[8%] py-10">
      <div
        // data-aos="fade-up"
        className="relative mb-5"
      >
        <h3 className="text-4xl text-black font-bold text-center lg:text-left">
          About
        </h3>
        <span className="h-[1.1px] right-0 lg:right-auto absolute w-full lg:w-[92%] bg-gray-300 block"></span>
      </div>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="max-w-max mx-auto relative">
          <img
            src={photo}
            alt=""
            className="w-64 sm:w-80 rounded-3xl max-w-none bg-slate-200"
          />
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl">
            I am an experienced Front-end Developer with over a decade of
            professional expertise in the field. Throughout my career, i have
            had the privilege of collaborating with prestigious organizations,
            contributing to theri success and growth.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]">
              <img src={code} alt="" className="w-7 mt-3" />
              <h3 className="my-4 font-extrabold text-gray-700">Language</h3>
              <p className="text-gray-600 text-sm">
                HTML, CSS, TailwindCSS, Javascript, ReactJs
              </p>
            </li>
            <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]">
              <img src={education} alt="" className="w-7 mt-3" />
              <h3 className="my-4 font-extrabold text-gray-700">Education</h3>
              <p className="text-gray-600 text-sm">
                Diploma in Engineering in Computer Science and Technology
              </p>
            </li>
            <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]">
              <img src={project} alt="" className="w-7 mt-3" />
              <h3 className="my-4 font-extrabold text-gray-700">Project</h3>
              <p className="text-gray-600 text-sm">
                HTML, CSS, TailwindCSS, Javascript, ReactJs
              </p>
            </li>
          </ul>
          <h4 className="my-6 text-gray-400">Tools I Use</h4>

          <ul className="flex items-=center gap-3 sm:gap-5">
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <img src={vs} alt="" className="w-5 sm:w-7" />
            </li>
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <img src={firebase} alt="" className="w-5 sm:w-7" />
            </li>
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <img src={figma} alt="" className="w-5 sm:w-7" />
            </li>
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <img src={git} alt="" className="w-5 sm:w-7" />
            </li>
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <img src={crome} alt="" className="w-5 sm:w-7" />
            </li>
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <img src={edge} alt="" className="w-5 sm:w-7" />
            </li>
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <img src={vite} alt="" className="w-5 sm:w-7" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
