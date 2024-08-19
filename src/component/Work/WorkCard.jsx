import style from "styled-components";
import { data } from "../data/data";
import { RxExternalLink } from "react-icons/rx";

const WorkCard = () => {
  const reversedData = [...data].reverse();

  return (
    <>
      {reversedData.map((item) => (
        <div
          data-aos="zoom-in"
          key={item.id}
          className="flex flex-col justify-center items-center gap-4"
        >
          <POPUP className="img-content relative">
            <div className="h-[280px] w-[380px] hover:scale-125 transition duration-500 cursor-pointer shadow-xl rounded-md overflow-hidden sm:h-[260px] sm:w-[92%] sm:bg-cover mx-auto">
              <img
                src={item.img}
                alt={item.title}
                className="object-cover w-full h-full transition duration-500"
              />
            </div>

            <div className="popup w-full h-[280px] shadow-xl rounded-md overflow-hidden sm:h-[260px] sm:w-[92%] p-4">
              <p className="text-gray-900 text-base leading-[1.4] text-justify w-[90%]">
                {item.desc}
              </p>
              <div className="flex items-center justify-center gap-4">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium"
                >
                  <RxExternalLink className="text-black bg-white rounded-full border w-[35px] h-[35px] p-2" />
                  <p className="text-black">Demo</p>
                </a>
                <br className="w-[2px] bg-white" />
                <a
                  href={item.git}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium"
                >
                  <RxExternalLink className="text-black bg-white rounded-full border w-[35px] h-[35px] p-2" />
                  <p className="text-black">code</p>
                </a>
              </div>
            </div>
          </POPUP>
          <p className="text-gray-800 text-xl font-medium sm:text-lg">
            {item.title}
          </p>
        </div>
      ))}
    </>
  );
};

export default WorkCard;

const POPUP = style.div`
  position: relative;
  img {
    transition: transform 0.5s ease;
    &:hover {
      transform: scale(1.25);
    }
  }
  .popup {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.5s ease;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 2;
  }
  &:hover .popup {
    opacity: 1;
  }
`;
