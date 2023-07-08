import React from "react";
import AstronautAnimation from "./AstronautAnimation";

const Contact = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white">
      <div className="flex flex-col md:flex-row p-4 justify-around items-center max-w-screen-lg mx-auto h-full">
        <div className="md:w-1/2 pb-8 pr-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact me
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>

          <form
            action="https://getform.io/f/900c6f56-987b-4ffc-968b-444c1896a6af"
            method="POST"
            className="flex flex-col"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-4"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-4"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-4"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
        <div className="md:w-1/2 flex justify-center items-center">
          <AstronautAnimation />
        </div>
      </div>
    </div>
  );
};

export default Contact;
