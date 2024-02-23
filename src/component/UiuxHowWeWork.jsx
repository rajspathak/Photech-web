import React from 'react'
import { GoCodescanCheckmark } from "react-icons/go";
import { IoCreateOutline } from "react-icons/io5";
import { BsCardChecklist } from "react-icons/bs";
import { HiOutlineCube } from "react-icons/hi2";
const HowWeWork = () => {
    return (
        <>
            <div>
                <h1 className='text-7xl max-lg:text-5xl'>How we Work</h1>
                <p className='py-8'> Wondering how we help our clients? Take a look at our team’s process.</p>
            </div>
            <div className='grid grid-cols-2 gap-4 pt-10 max-lg:grid-cols-1 max-lg:gap-2'>
                <div className='shadow-lg flex flex-col gap-4 p-8 max-lg:p-4'>
                    <p><GoCodescanCheckmark className='text-4xl text-blue-600' /></p>
                    <h1 className='text-2xl font-semibold'>UX Strategy</h1>
                    <p className='text-gray-600'>We understand your business goals, target audience, and specific challenges. We can develop custom UX design solutions that drive meaningful results by deeply understanding your requirements.</p>
                </div>
                <div className='shadow-lg flex flex-col gap-9 p-8 max-lg:p-4'>
                    <p><IoCreateOutline className='text-4xl text-blue-600' /></p>
                    <h1 className='text-2xl font-semibold'>Ideation and Design Planning</h1>
                    <p className='text-gray-600'>Our experienced team brainstorms ideas and develops a comprehensive design plan tailored to your project's objectives. We carefully consider the user flow, navigation, and visual elements to create a design that optimizes user interactions.</p>
                </div>
                <div className='shadow-lg flex flex-col gap-9 p-8 max-lg:p-4'>
                    <p><BsCardChecklist className='text-4xl text-blue-600' /></p>
                    <h1 className='text-2xl font-semibold'>UI and UX Design</h1>
                    <p className='text-gray-600'>Our skilled designers bring the plan to life by crafting visually engaging interfaces and seamless user experiences. We focus on aesthetics, accessibility, and usability to deliver a design that leaves a lasting impression on your users.</p>
                </div>
                <div className='shadow-lg flex flex-col gap-9 p-8 max-lg:p-4'>
                    <p><HiOutlineCube className='text-4xl text-blue-600' /></p>
                    <h1 className='text-2xl font-semibold'>Iterative Testing and Refinement</h1>
                    <p className='text-gray-600'>We conduct thorough testing to validate the design's effectiveness and gather user feedback. This iterative process allows us to identify areas for improvement and refine the design to ensure optimal user satisfaction.</p>
                </div>
            </div>

        </>
    )
}

export default HowWeWork
