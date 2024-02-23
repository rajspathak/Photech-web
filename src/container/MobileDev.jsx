import React, { useEffect } from "react";
import Navbar from "../component/Nav";
import MobileService from "../component/MobileDevCard";
import MDB from "../assests/mobileApplicationBanner.png";
import FirstText from "../component/FirstText";
import HowWeWork from "../component/HowWeWork";
const MobileDev = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <Navbar />
      <div className="">
        <div className="relative  h-screen">
          <img
            src={MDB}
            alt=""
            className="absolute -z-50 brightness-75 h-screen  w-full object-cover "
          />
          <div className="text-white w-2/3 bottom-12 max-lg:w-auto absolute left-10 max-lg:left-2 max-lg:bottom-20 ">
            <div>
              <div className="text-7xl max-lg:text-5xl max-md:text-3xl mx-4 text-white">
                <span>
                  Empowering Your Vision with Exceptional Mobile Development!
                </span>
              </div>
            </div>
            <div className="mt-10 px-4 max-lg:mt-5">
              <FirstText text="Experience the power of our personalized mobile development solutions as we build your product's digital pathway." />
            </div>
          </div>
        </div>
        <div className="service-bg max-lg:py-16 max-lg:px-6 py-20 px-16 ">
          <div className="mb-16">
            <h1 className="text-black">Our Service</h1>
            <p className="text-gray-400 w-1/2 max-lg:w-full">
              Our team of highly skilled and experienced mobile developers is
              dedicated to transforming your ideas into feature-rich,
              user-friendly mobile applications. Whether you're a startup, SME,
              or enterprise, we have the expertise to deliver high-performance
              mobile solutions across various industries.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1 -mb-40 max-lg:mb-0">
            <MobileService />
          </div>
        </div>
        <div className="mt-28 p-16 max-lg:p-4">
          <HowWeWork />
        </div>
      </div>
    </>
  );
};

export default MobileDev;
