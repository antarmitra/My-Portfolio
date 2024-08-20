import style from "styled-components";
import { data } from "../data/data";
import { RxExternalLink } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";

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
            <div className="img-container">
              <img
                src={item.img}
                alt={item.title}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="popup">
              <p className="text-gray-900 text-base leading-[1.4] text-justify w-[90%]">
                {item.desc}
              </p>
              <div className="md:flex flex-col items-center justify-center gap-2">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium"
                >
                  <RxExternalLink className="text-black bg-white rounded-full border w-[30px] h-[30px] p-2" />
                  <p className="text-black">Demo</p>
                </a>
                <br className="w-[2px] bg-white" />
                <a
                  href={item.client}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium"
                >
                  <FaGithub className="text-black bg-white rounded-full border w-[30px] h-[30px] p-2" />
                  <p className="text-black">Client</p>
                </a>
                <br className="w-[2px] bg-white" />
                <a
                  href={item.server}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium"
                >
                  <FaGithub className="text-black bg-white rounded-full border w-[30px] h-[30px] p-2" />
                  <p className="text-black">Server</p>
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

  .img-container {
    width: 100%;
    max-width: 500px;
    height: auto;
    aspect-ratio: 16/9;
    overflow: hidden;
    transition: transform 0.5s ease;
    &:hover {
      transform: scale(1.25);
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
    border-radius: 8px
  }

  .popup {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    width: 100%;
    height: 100%;
    transition: opacity 0.5s ease;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 2;
    border-radius: 8px
  }

  &:hover .popup {
    opacity: 1;
  }
`;
