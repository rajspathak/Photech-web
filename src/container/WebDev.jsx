import React,{useEffect} from 'react'
import WebService from '../component/WebDevCard'
import Navbar from '../component/Nav'
import WDB from '../assests/webDevelopmentBanner-69afba4d.png'
import FirstText from '../component/FirstText'
import HowWeWork from '../component/HowWeWork'
const WebDev = () => {
    useEffect(()=>{
        window.scrollTo({
          top:0,
          behavior:"smooth",
        });
      },[])
    return (
        <>
            <Navbar />
            <div className=''>
                <div className='relative  h-screen'>
                    <img src={WDB} alt="" className='absolute -z-50 brightness-75 h-screen  w-full object-cover' />
                    <div className='text-white w-2/3 bottom-12 max-lg:w-auto absolute left-10 max-lg:left-2 max-lg:bottom-20 '>
                        <div>
                            <div className="text-7xl max-lg:text-5xl max-md:text-3xl mx-4 text-white">
                                <span> Driving Success with Expert Web Development!</span>
                            </div>
                        </div>
                        <div className='mt-10 px-4 max-lg:mt-5'>
                            <FirstText
                                text="Build your product’s digital journey with our tailored web development solutions."
                            />
                        </div>
                    </div>
                </div>
                <div className='service-bg max-lg:py-16 max-lg:px-6 py-20 px-16 '>
                    <div className='mb-16'>
                        <h1 className=''>Our Service</h1>
                        <p className='text-gray-400'>
                            We specialize in crafting bespoke web development solutions. <br />
                            From cutting-edge front-end and back-end solutions to user-centric design, <br />
                            we deliver an unmatched experience.
                        </p>
                    </div>
                    <div className='grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1 -mb-40 max-lg:mb-0'>
                        <WebService />
                    </div>
                </div>
                <div className='mt-28 p-16 max-lg:p-4'>
                    <HowWeWork />
                </div>
            </div>
        </>
    )
}

export default WebDev
