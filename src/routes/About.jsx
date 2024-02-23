import { useEffect } from "react";
import Navbar from "../component/Nav";
import AB from "../assests/About.png";
import FirstText from "../component/FirstText";
// import AboutCard from "../component/AboutCard";
import AboutProfileCard from "../component/AboutProfileCard";
import { Whatsapp } from "../container/AdditionalTools";
const About = () => {
  useEffect(()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth",
    });
  },[])
  return (
    <>
      <Whatsapp />
      <Navbar />
      <div className="">
        <div className="relative  h-screen ">
          <img
            src={AB}
            alt=""
            className="absolute -z-50 brightness-50 h-screen w-full object-cover"
          />
          <div className="text-white w-2/3 bottom-32 max-lg:w-auto absolute left-10 max-lg:left-2 max-lg:bottom-28">
            <div className=" max-lg:text-2xl mx-4 text-white">
              <span className="font-semibold text-5xl">About Us</span>
            </div>
            <div className="mt-10 px-4">
              <FirstText text="We are a UX, clean coding, and unwavering quality-focused digital engineering company." />
            </div>
          </div>
        </div>
        <div className="service-bg max-lg:py-16 max-lg:px-6 py-20 px-16 ">
          <div className="mb-16">
            <h1 className="">Our Mission</h1>
            <p className="text-gray-400 w-1/2 max-lg:w-full ">
              We are on a mission to promote Indian developer's capability in
              delivering exceptional products with clean code and exceptional
              UX. Our focus is to create memorable user interactions and reshape
              the global perception of Indian coders through our dedication to
              clean coding practices. Our engineering-driven culture ensures
              top-notch quality in every project, efficient delivery with
              optimal cost and time, and utmost integrity in our relationships
              with team members and clients.
            </p>
          </div>
          {/*<div className="grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1 -mb-40 max-lg:mb-0">
            <AboutCard />
          </div>  */}
        </div>
        <div className="mt-28 p-16 max-lg:p-4">
          <div>
            <h1 className="text-6xl max-lg:text-3xl font-thin">Our Vision</h1>
            <p className="w-1/2 max-lg:w-full text-gray-600 mt-10">
              As advocates of clean code, we strongly believe that both the
              organization's commitment to high-quality code and the skills of
              individual coders are crucial. We dream a future where clean code
              becomes the norm, leading to better software that positively
              impacts society. Our main goal is to take real-world problems,
              turn them into data, and use computers to solve them more
              effectively.
            </p>
          </div>
        </div>
        <div className="h-full ">
          <div className="service-bg max-lg:py-16 max-lg:px-6 py-20 px-16 h-96">
            <div className="mb-16">
              <h1 className="text-7xl font-thin">Meet our Leadership</h1>
              <p className="text-gray-400 w-1/2 max-lg:w-full mt-6">
                Learn more about our torchbearers who steer the team towards
                continuous improvement every day through their strong guidance
                and leadership.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-2 -mt-28 max-lg:py-16 max-lg:px-6 px-16 pb-16">
            <AboutProfileCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
