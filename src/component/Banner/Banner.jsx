import { TypeAnimation } from "react-type-animation";
import man from "../../assets/male.png";
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import resumePDF from "../../assets/Resume.pdf";

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-green-200 to-blue-200 lg:px-8 xl:px-[8%] py-4">
      <div className="md:flex justify-center gap-5 mt-10 items-center">
        {/* Image Section */}
        <div className="md:order-2 order-1 flex justify-center">
          <img
            className="md:w-full w-[200px] sm:w-[150px] mx-auto"
            src={man}
            alt=""
          />
        </div>
        {/* Text Section */}
        <div className="md:order-1 order-2 mt-4 md:mt-0 flex-1 flex flex-col justify-center gap-5 text-center md:text-left px-4 sm:px-6 md:px-0">
          <div className="info flex flex-col items-center md:items-start gap-3 sm:gap-2">
            <h2
              data-aos="fade-up"
              className="md:text-6xl sm:text-4xl text-3xl font-bold"
            >
              Hello, I am Antar Mitra
            </h2>
            <TypeAnimation
              data-aos="fade-up"
              sequence={[
                "I'm Front-End Developer",
                2000,
                "I'm React.JS Developer",
                2000,
                "I'm MERN Stack Developer",
                2000,
                "I'm Javascript Developer",
              ]}
              speed={30}
              wrapper="h2"
              repeat={Infinity}
              className="text-yellow-400 text-2xl sm:text-3xl md:text-5xl font-bold"
            />
          </div>
          <div
            data-aos="fade-up"
            className="buttons flex gap-5 justify-center md:justify-start"
          >
            <a
              href="mailto:antarmitra33@gmail.com"
              className="bg-black text-sm sm:text-base text-white px-8 py-2 sm:px-8 sm:py-2 rounded-lg font-bold hover:text-yellow-400"
            >
              <span>Hire Me</span>
            </a>
            <a
              href={resumePDF}
              className="flex items-center gap-2 border- text-sm sm:text-base bg-white border-black px-7 py-2 sm:px-6 rounded-lg font-bold hover:text-yellow-400"
              download
            >
              <div className="flex items-center gap-1">
                Resume <FiDownload />
              </div>
            </a>
          </div>
          <div className="icons flex justify-center md:justify-start mt-5">
            <ul
              data-aos="fade-up"
              data-aos-duration="1500"
              className="flex gap-5"
            >
              <li>
                <a href="https://github.com/antarmitra">
                  <FaGithub className="h-[1.5rem] w-[1.5rem] sm:h-[1.8rem] sm:w-[1.8rem] text-xl hover:scale-125" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/antar-mitra-aa3110311/">
                  <FaLinkedin className="h-[1.5rem] w-[1.5rem] sm:h-[1.8rem] sm:w-[1.8rem] text-xl hover:scale-125" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/antarmitra/">
                  <FaInstagram className="h-[1.5rem] w-[1.5rem] sm:h-[1.8rem] sm:w-[1.8rem] text-xl hover:scale-125" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/antar.mitra.9">
                  <FaFacebook className="h-[1.5rem] w-[1.5rem] sm:h-[1.8rem] sm:w-[1.8rem] text-xl hover:scale-125" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
