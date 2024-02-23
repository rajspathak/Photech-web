import React, { useEffect } from "react";
import Navbar from "../component/Nav";
import UiuxCard from "../component/UiuxCard";
import UiuxHowWeWork from "../component/UiuxHowWeWork";
import FirstText from "../component/FirstText";
import uiux from "../assests/ui.jpg";
const UiUx = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <Navbar />
      <div className=" ">
        <div className="relative  h-screen">
          <img
            src={uiux}
            alt=""
            className="absolute -z-50 brightness-50 h-screen  w-full object-cover "
          />
          <div className="text-white w-2/3 bottom-12 max-lg:w-auto absolute left-10 max-lg:left-2 max-lg:bottom-20 ">
            <div>
              <div className="text-6xl max-lg:text-5xl max-md:text-3xl mx-4 text-white">
                <span>
                  Elevating User Experiences with Custom UX Design Solutions!
                </span>
              </div>
            </div>
            <div className="mt-7 px-4 max-lg:mt-5">
              <FirstText text="Redefining digital interactions through intuitive UX design." />
            </div>
          </div>
        </div>

        <div>
          <div className="service-bg max-lg:p-8 py-20 px-16">
            <div className="mb-16">
              <h1 className=" ">Our Service</h1>
              <p className="text-gray-400 w-1/2 max-lg:w-full">
                From designing intuitive software interfaces to crafting
                user-centric websites, we offer a range of services that cater
                to the diverse requirements of the UX design industry.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1   -mb-40 max-lg:mb-0">
              <UiuxCard />
            </div>
          </div>
        </div>
        <div className="mt-28 p-16 max-lg:p-4">
          <UiuxHowWeWork />
        </div>
      </div>
    </>
  );
};

export default UiUx;
