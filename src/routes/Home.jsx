import React from "react";
import { Carousel } from "flowbite-react";
import Navbar from "../component/Nav";
import HomeService from "../component/HomeService";
// import { BsCart2 } from "react-icons/bs";
import { useEffect } from "react";
import Car1 from "../assests/carousel1.jpg";
import Car2 from "../assests/carousel2.jpg";
import Car3 from "../assests/carousel3.jpg";
import Car4 from "../assests/carousel4.jpg";
import Car5 from "../assests/carousel5.jpg";
import { Whatsapp, PhoneCall } from "../container/AdditionalTools";
const Home = () => {
  const data = [Car1, Car2, Car3, Car4, Car5];
  useEffect(()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth",
    });
  },[])
  return (
    <>
      <PhoneCall />
      <Whatsapp />
      <Navbar />
      <div className="pt-28">
        <div className=" ">
          <div className=" h-[70vh] w-full max-lg:h-96 max-md:h-60 aspect-video">
            <Carousel pauseOnHover className="aspect-video">
              {data.map((item, i) => (
                <img
                  className="w-full"
                  src={item}
                  alt="Photech technology"
                  key={i}
                />
              ))}
            </Carousel>
          </div>
        </div>

        {/* <div className='bg-red-500 p-4 mt-10'>
                    <div className='h-80 w-64 bg-white rounded-2xl overflow-hidden'>
                        <div className='border-b-4 border-yellow-300 h-[40%] py-2 w-full' >
                            <img src="https://store.ecarter.co/images/thumbnails/550/450/detailed/10/Ecarter_addons_1200_x_600_px___8_.png"
                                alt="hello1"
                                className='object-cover h-full w-full '
                            />
                        </div>
                        <div className='flex flex-col justify-between h-[60%] p-4'>
                            <div>
                                <p className='text-2xl'>company logo</p>
                                <p>⭐⭐⭐⭐⭐</p>
                            </div>
                            <div className='flex justify-between p-4 border-t'>
                                <p className='text-xl text-red-500 font-semibold'>$ 58</p>
                                <p className=' font-semibold'><BsCart2 className='text-2xl font-bold' /></p>
                            </div>
                        </div>
                    </div>
                </div> */}

        <div>
          <div className="service-bg max-lg:p-8 py-20 px-16">
            <div className="mb-16">
              <h1 className=" text-center text-black">Our Service hello World</h1>
              <p className="text-gray-500 text-center">
                We build exceptional software with a focus on clean code, agile
                processes, and remarkable user experience.
              </p>
            </div>
            <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1 -mb-40 max-lg:mb-0">
              <HomeService />
            </div>
          </div>
        </div>

        <div>
          <div className="my-32 px-16 max-lg:my-12 max-lg:px-8 max-md:px-4">
            <div className="text-center">
              <span className="text-5xl font-bold border-yellow-400  border-b-2 text-yellow-400 max-lg:text-3xl">
                Our Core Values
              </span>
            </div>
            <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-5 mt-20 max-lg:mt-12 max-lg:gap-3">
              <div className="border-2 rounded-tl-3xl rounded-br-3xl p-4 hover overflow-hidden hover:text-white">
                <img
                  src="https://photechindia.in/assets/img/icon/2.png"
                  alt="photechIndia"
                  className="h-24 "
                />
                <h1 className="text-3xl font-bold mt-2">Integrity</h1>
                <p className="text-gray-700 text-xl mt-3 text-justify textHover">
                  To conduct a business with the highest level of ethics towards
                  our clients, employees, business partners, government and
                  public in general.
                </p>
              </div>
              <div className="border-2 rounded-tl-3xl rounded-br-3xl p-4 hover overflow-hidden hover:text-white">
                <img
                  src="https://photechindia.in/assets/img/icon/4.png"
                  alt="photechIndia"
                  className="h-24"
                />
                <h1 className="text-3xl font-bold mt-2">Innovation</h1>
                <p className="text-gray-700 text-xl mt-3 text-justify textHover">
                  The team delivers on time and within budget, proactively
                  asking how to help the client and providing new ideas.
                </p>
              </div>
              <div className="border-2 rounded-tl-3xl rounded-br-3xl p-4 hover overflow-hidden hover:text-white">
                <img
                  src="https://photechindia.in/assets/img/icon/6.png"
                  alt="photechIndia"
                  className="h-24"
                />
                <h1 className="text-3xl font-bold mt-2">Quality</h1>
                <p className="text-gray-700 text-xl mt-3 text-justify textHover">
                  To implement best in class practices in our business as a
                  whole and our day-to-day working, so as to maintain the
                  highest level of quality standards.
                </p>
              </div>
              <div className="border-2 rounded-tl-3xl rounded-br-3xl p-4 hover overflow-hidden hover:text-white">
                <img
                  src="https://photechindia.in/assets/img/icon/8.png"
                  alt="photechIndia"
                  className="h-24"
                />
                <h1 className="text-3xl font-bold mt-2">
                  Health, Safety & Environment
                </h1>
                <p className="text-gray-700 text-xl mt-3 text-justify textHover">
                  To respect the cardinal rules, safety laws of the land and
                  internal safety guidelines with zero tolerance towards human
                  injuries and to conduct our business to maintain a sustainable
                  future for our generations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
