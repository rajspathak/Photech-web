import React,{useEffect} from "react";
import Navbar from "../component/Nav";
import FirstText from "../component/FirstText";
import WRB from "../assests/workbanner.jpg";
import { Whatsapp,PhoneCall } from "../container/AdditionalTools";

const Works = () => {
  useEffect(()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth",
    });
  },[])
  return (
    <>
      <Whatsapp />
      <PhoneCall />
      <Navbar />
      <div className="">
        <div className="relative h-screen">
          <img
            src={WRB}
            alt=""
            className="absolute -z-50 brightness-50 h-screen w-full object-cover"
          />
          <div className="text-white w-2/3 bottom-12 max-lg:w-auto absolute left-10 max-lg:left-2 max-lg:bottom-28 ">
            <div>
              <div className="text-5xl max-lg:text-2xl mx-4 text-white">
                <span>Our Work</span>
              </div>
            </div>
            <div className="mt-10 px-4">
              <FirstText
                text="We have built top-quality software products and helped to grow businesses. 
                Read more about how we developed innovative products in various industries, 
                each reflecting our passion for offering exceptional services and crafting the extraordinary."
              />
            </div>
          </div>
        </div>
        <div className="h-screen w-full grid grid-cols-4 gap-10">
          <div className="rounded-xl border-b-4 border-[#2F76D7] h-96">
            <div className=" ">
              <img
                src="https://coditas.com/assets/healthcareBanner1-f571e540.png"
                alt=""
                className="object-fill"
              />
            </div>
            <div className=" text-black p-8">
              <h1 className="text-lg font-semibold">
                Personalized Genetic Health Assessment & Care
              </h1>
              <p className="text-gray-600">
                Empowering providers and patients with end-to-end digital...
              </p>
            </div>
          </div>
          <div className="rounded-xl border-b-4 border-[#2F76D7] h-96">
            <div className=" ">
              <img
                src="https://coditas.com/assets/healthcareBanner1-f571e540.png"
                alt=""
                className="object-fill"
              />
            </div>
            <div className=" text-black p-8">
              <h1 className="text-lg font-semibold">
                Personalized Genetic Health Assessment & Care
              </h1>
              <p className="text-gray-600">
                Empowering providers and patients with end-to-end digital...
              </p>
            </div>
          </div>
          <div className="rounded-xl border-b-4 border-[#2F76D7] h-96">
            <div className=" ">
              <img
                src="https://coditas.com/assets/healthcareBanner1-f571e540.png"
                alt=""
                className="object-fill"
              />
            </div>
            <div className=" text-black p-8">
              <h1 className="text-lg font-semibold">
                Personalized Genetic Health Assessment & Care
              </h1>
              <p className="text-gray-600">
                Empowering providers and patients with end-to-end digital...
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
