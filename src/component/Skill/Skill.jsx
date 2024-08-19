import html from "../../assets/html.png";
import css from "../../assets/css.png";
import tailwind from "../../assets/tailwind.png";
import js from "../../assets/js.png";
import react from "../../assets/react.png";
import node from "../../assets/node.png";
import express from "../../assets/express.png";
import mongo from "../../assets/mongo.png";

const Skill = () => {
  return (
    <section id="skill">
      <div className="px-[8%]">
        <div
          // data-aos="fade-up"
          className="relative mb-10"
        >
          <h3 className="text-4xl text-black font-bold text-center lg:text-left">
            My Skill
          </h3>
          <span className="h-[1.1px] right-0 lg:right-auto absolute w-full lg:w-[92%] bg-gray-300 block"></span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white shadow-xl rounded-lg p-6">
            <img className="w-42 h-32 mx-auto mb-4" src={html} alt="HTML" />
            <h3 className="text-2xl font-semibold text-gray-800 text-center">
              HTML
            </h3>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-6">
            <img
              className="w-42 h-32 mx-auto mb-4"
              src={css}
              alt="Tailwind CSS Icon"
            />
            <h3 className="text-2xl font-semibold text-gray-800 text-center">
              CSS
            </h3>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-6">
            <img
              className="w-42 h-32 mx-auto mb-4"
              src={tailwind}
              alt="JavaScript Icon"
            />
            <h3 className="text-2xl font-semibold text-gray-800 text-center">
              TailwindCss
            </h3>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-6">
            <img className="w-42 h-32 mx-auto mb-4" src={js} alt="javascript" />
            <h3 className="text-2xl font-semibold text-gray-800 text-center">
              Javascript
            </h3>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-6">
            <img className="w-16 h-16 mx-auto mb-4" src={react} alt="react" />
            <h3 className="text-2xl font-semibold text-gray-800 text-center">
              React.Js
            </h3>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-6">
            <img className="w-42 h-32 mx-auto mb-4" src={node} alt="node" />
            <h3 className="text-2xl font-semibold text-gray-800 text-center">
              Node.Js
            </h3>
          </div>
          <div className="bg-white shadow-xl rounded-lg p-6">
            <img
              className="w-42 h-32 mx-auto mb-4"
              src={express}
              alt="express"
            />
            <h3 className="text-2xl font-semibold text-gray-800 text-center">
              Express.Js
            </h3>
          </div>
          <div className="bg-white shadow-xl rounded-lg p-6">
            <img className="w-42 h-32 mx-auto mb-4" src={mongo} alt="mongodb" />
            <h3 className="text-2xl font-semibold text-gray-800 text-center">
              MongoDB
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
