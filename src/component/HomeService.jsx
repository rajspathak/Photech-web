import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaMobile } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { GrShieldSecurity, GrSans } from "react-icons/gr";
import { MdDataThresholding, MdOutlineDesignServices,MdOutlineEngineering} from "react-icons/md";
import { AiFillAndroid } from "react-icons/ai";

const HomeService = () => {
    return (
        <>
            <div className='flex flex-col items-start gap-6 h-72  p-6 rounded  relative homeServiceCard' style={{ background: "#22092C" }} >
                <p><CgWebsite className='text-4xl' /></p>
                <p className=' text-xl font-semibold mt-4'>Web Development</p>
                <p className='text-gray-400 text-sm'>Resolve business challenges and thrive in the digital landscape with our custom web development services.</p>
                <p className='text-blue-600 absolute bottom-4'><NavLink to='/service/web-development'>View Details</NavLink></p>
            </div>
            <div className='flex flex-col items-start gap-6 h-72  p-6  rounded  relative homeServiceCard' style={{ background: "#22092C" }} >
                <p><FaMobile className='text-4xl' /></p>
                <p className=' text-xl font-semibold mt-4'>Mobile Development</p>
                <p className='text-gray-400 text-sm'>Transform your vision into reality with our native Android and iOS app development services.</p>
                <p className='text-blue-600 absolute bottom-4'><NavLink to='/service/mobile-development'>View Details</NavLink></p>
            </div>

            <div className='flex flex-col items-start gap-6 h-72  p-6  rounded  relative homeServiceCard' style={{ background: "#22092C" }} >
                <p><GrSans className='text-4xl bg-white' /></p>
                <p className=' text-xl font-semibold mt-4'>DevOps Services</p>
                <p className='text-gray-400 text-sm'>Stay ahead of the competition with our agile DevOps services for your business needs.</p>
                <p className='text-blue-600 absolute bottom-4'><NavLink>View Details</NavLink></p>
            </div>

            <div className='flex flex-col items-start gap-6 h-72  p-6  rounded  relative homeServiceCard' style={{ background: "#22092C" }} >
                <p><GrShieldSecurity className='text-4xl bg-white' /></p>
                <p className=' text-xl font-semibold mt-4'>Cybersecurity</p>
                <p className='text-gray-400 text-sm'>We use insights for agility, proactive defence, and digital trust in an evolving landscape of software application.</p>
                <p className='text-blue-600 absolute bottom-4'><NavLink>View Details</NavLink></p>
            </div>
            <div className='flex flex-col items-start gap-6 h-72  p-6  rounded  relative homeServiceCard' style={{ background: "#22092C" }} >
                <p><MdDataThresholding className='text-4xl ' /></p>
                <p className=' text-xl font-semibold mt-4'>Data Science</p>
                <p className='text-gray-400 text-sm'>Gain a decisive edge in the competitive landscape by utilizing the full potential of data-driven insights and advanced analytics.</p>
                <p className='text-blue-600 absolute bottom-4'><NavLink>View Details</NavLink></p>
            </div>

            <div className='flex flex-col items-start gap-6 h-72  p-6 rounded  relative homeServiceCard' style={{ background: "#22092C" }} >
                <p><AiFillAndroid className='text-4xl ' /></p>
                <p className=' text-xl font-semibold mt-4'>Generative AI</p>
                <p className='text-gray-400 text-sm'>Discover limitless possibilities through our Generative AI-powered software solutions.</p>
                <p className='text-blue-600 absolute bottom-4'><NavLink to="/service/ai-generative">View Details</NavLink></p>
            </div>

            <div className='flex flex-col items-start gap-6 h-72  p-6  rounded  relative homeServiceCard' style={{ background: "#22092C" }} >
                <p><MdOutlineDesignServices className='text-4xl ' /></p>
                <p className=' text-xl font-semibold mt-4'>UX Design</p>
                <p className='text-gray-400 text-sm'>
                    Create delightful experiences and boost user engagement with our design solutions
                    driven by Design Thinking and Human-Computer Interaction framework.
                </p>
                <p className='text-blue-600 absolute bottom-4'><NavLink to='/service/ui-ux-development'>View Details</NavLink></p>
            </div>

            <div className='flex flex-col items-start gap-6 h-72  p-6  rounded  relative homeServiceCard' style={{ background: "#22092C" }} >
                <p><MdOutlineEngineering className='text-4xl ' /></p>
                <p className=' text-xl font-semibold mt-4'>Quality Engineering</p>
                <p className='text-gray-400 text-sm'>Take your website to new heights with our comprehensive Testing services.</p>
                <p className='text-blue-600 absolute bottom-4'><NavLink>View Details</NavLink></p>
            </div>
        </>
    );
}
export default HomeService
