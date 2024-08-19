import { BsSendFill } from "react-icons/bs";

const ContactSection = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-[8%] mb-10">
      {/* heading */}
      <div
        // data-aos="fade-up"
        className="relative mb-5"
      >
        <h3 className="text-4xl text-black font-bold text-center lg:text-left">
          Contact
        </h3>
        <span className="h-[1.1px] right-0 lg:right-auto absolute w-full lg:w-[92%] bg-gray-300 block"></span>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-[10%]">
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <h2 className="text-5xl font-semibold text-yellow-400">You Need</h2>
          <p className="mt-4 text-xl">
            Beautiful design for your <br /> website? Leave a request
          </p>
        </div>

        <div className="right w-full lg:w-1/2">
          <form
            data-aos="zoom-in"
            className="flex justify-center items-center flex-col gap-5 w-full sm:w-[95%] mx-auto"
            action="https://getform.io/f/aqonypja"
            method="POST"
          >
            <input
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              type="text"
              name="name"
              placeholder="Your Name"
            />
            <input
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              type="email"
              placeholder="Your Email Address"
              name="email"
            />
            <textarea
              className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
              rows="4"
              cols="50"
              placeholder="Write your message"
              name="placeholder"
              id=""
            />
            <button
              className="bg-yellow-400 w-full text-white font-semibold p-2 rounded-lg flex items-center justify-center space-x-1"
              type="submit"
            >
              <span>Send</span>
              <BsSendFill />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
