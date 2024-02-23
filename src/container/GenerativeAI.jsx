import React, { useEffect } from "react";
import Navbar from "../component/Nav";
import HowWeWork from "../component/HowWeWork";
import FirstText from "../component/FirstText";
import GAI from "../assests/generativeAIBanner.png";
import GenerativeAICard from "../component/GenerativeAICard";
const GenerativeAI = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <Navbar />
      <div>
        <div className="relative  h-screen">
          <img
            src={GAI}
            alt=""
            className="absolute -z-50 brightness-50 h-screen  w-full object-cover "
          />
          <div className="text-white w-2/3 bottom-12 max-lg:w-auto absolute left-10 max-lg:left-2 max-lg:bottom-20 ">
            <div>
              <div className="text-6xl max-lg:text-5xl max-md:text-3xl mx-4 text-white">
                <span>
                  Revolutionizing Conversations with Custom Chatbots Powered by
                  Generative AI!
                </span>
              </div>
            </div>
            <div className="mt-10 px-4 max-lg:mt-5">
              <FirstText text="Enhance customer engagement with custom chatbot solutions." />
            </div>
          </div>
        </div>

        <div className="service-bg max-lg:py-16 max-lg:px-6 py-20 px-16 ">
          <div className="mb-16">
            <h1 className="">Our Service</h1>
            <p className="text-gray-400 w-1/2 max-lg:w-full">
              We specialize in building custom chatbots for various industries
              powered by cutting-edge generative AI. Our chatbots are designed
              to provide personalized and seamless conversations, optimizing
              customer engagement and streamlining business operations.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1 -mb-40 max-lg:mb-0">
            <GenerativeAICard />
          </div>
        </div>

        <div className="mt-28 p-16 max-lg:p-4">
          <HowWeWork />
        </div>
      </div>
    </>
  );
};

export default GenerativeAI;
