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
            <div className='grid grid-cols-2 gap-4 pt-16 max-lg:grid-cols-1 max-lg:gap-2'>
                <div className='shadow-lg  flex flex-col gap-9 p-8 max-lg:p-4'>
                    <p><GoCodescanCheckmark className='text-4xl text-blue-600' /></p>
                    <h1 className='text-2xl font-semibold'>Discovery and Planning</h1>
                    <p className='text-gray-600'>We initiate the process by effective collaboration to gain a deep understanding of your business objectives, target audience, and project requirements and then focus on building a strategic roadmap.</p>
                </div>
                <div className='shadow-lg  flex flex-col gap-9 p-8 max-lg:p-4'>
                    <p><IoCreateOutline className='text-4xl text-blue-600' /></p>
                    <h1 className='text-2xl font-semibold'>Design and Development</h1>
                    <p className='text-gray-600'>Based on the planning and discovery, our skilled designers work on wireframes and prototypes to visualize the final website, incorporating the brand identity and user experience principles. Our expert web developers bring the design to life, utilizing clean coding practices, responsive frameworks, and robust backend systems to deliver a high-performing website.</p>
                </div>

                <div className='shadow-lg  flex flex-col gap-9 p-8 max-lg:p-4'>
                    <p><BsCardChecklist className='text-4xl text-blue-600' /></p>
                    <h1 className='text-2xl font-semibold'>Testing and Optimization</h1>
                    <p className='text-gray-600'>Our skilled team conducts rigorous testing to identify and resolve any potential issues. Through meticulous optimization, we aim to deliver optimal performance, security, and reliability, elevating your product to new heights of success.</p>
                </div>
                <div className='shadow-lg  flex flex-col gap-9 p-8 max-lg:p-4'>
                    <p><HiOutlineCube className='text-4xl text-blue-600' /></p>
                    <h1 className='text-2xl font-semibold'>Deployment and Support</h1>
                    <p className='text-gray-600'>We provide end-to-end support during the deployment phase, ensuring a smooth and seamless launch of your web application. Our team remains dedicated to providing ongoing support and maintenance, ensuring your product continues to thrive and evolve.</p>
                </div>

            </div>

        </>
    )
}

export default HowWeWork
