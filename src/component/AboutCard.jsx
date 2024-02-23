import React from 'react'
import { PiBracketsAngleThin } from "react-icons/pi";
import { RiFlagLine } from "react-icons/ri";
import { FaPeopleRoof } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";

const AboutCard = () => {
    return (
        <>
            <div className='flex flex-col items-start gap-6 p-6 border rounded border-blue-800 relative ' style={{ background: "#07172D" }} >
                <p><FaPeopleRoof className='text-4xl' /></p>
                <p className=' text-xl font-semibold mt-4'>People First</p>
                <p className='text-gray-400 text-sm'>
                    We encourage the growth of our teammates and reward their achievements.
                </p>
            </div>
            <div className='flex flex-col items-start gap-6 p-6 border rounded border-blue-800 relative ' style={{ background: "#07172D" }} >
                <p><PiBracketsAngleThin className='text-4xl' /></p>
                <p className=' text-xl font-semibold mt-4'>Quality Coding</p>
                <p className='text-gray-400 text-sm'>
                    We strongly believe in the importance of using clean and easy-to-understand code in all the products we build.
                </p>
            </div>

            <div className='flex flex-col items-start gap-6 p-6 border rounded border-blue-800 relative ' style={{ background: "#07172D" }} >
                <p><RiFlagLine className='text-4xl' /></p>
                <p className=' text-xl font-semibold mt-4'>Ownership</p>
                <p className='text-gray-400 text-sm'>
                    We perform as owners and are individually accountable for what we deliver.
                </p>
            </div>
            <div className='flex flex-col items-start gap-6 p-6 border rounded border-blue-800 relative ' style={{ background: "#07172D" }} >
                <p><IoEyeOutline className='text-4xl' /></p>
                <p className=' text-xl font-semibold mt-4'>User Perspective</p>
                <p className='text-gray-400 text-sm'>
                    We put ourselves in the users' shoes because we design and build products for them.
                </p>
            </div>
        </>
    )
}

export default AboutCard
