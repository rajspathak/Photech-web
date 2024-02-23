import React from 'react'
import { FaMobile } from "react-icons/fa";
import { GrShieldSecurity, GrSans } from "react-icons/gr";
import { MdDataThresholding, } from "react-icons/md";
import { AiFillAndroid } from "react-icons/ai"
const UiuxCard = () => {
    return (
        <>
            <div className='flex flex-col items-start gap-6 p-6 border rounded border-blue-800 relative ' style={{ background: "#07172D" }} >
                <p><FaMobile className='text-4xl' /></p>
                <p className=' text-xl font-semibold mt-4'>User Experience Design</p>
                <p className='text-gray-400 text-sm'>
                    We know how important experience is; hence we focus on creating user-friendly interfaces for your digital products. We utilize the latest intuitive design trends and principles to ensure your products engage and resonate with your users, fostering positive interactions and brand loyalty.
                </p>
            </div>
            <div className='flex flex-col items-start gap-6 p-6 border rounded border-blue-800 relative ' style={{ background: "#07172D" }} >
                <p><GrSans className='text-4xl bg-white' /></p>
                <p className=' text-xl font-semibold mt-4'>UX Research and Testing</p>
                <p className='text-gray-400 text-sm'>
                    We conduct thorough UX research and testing to gain valuable insights into your users' preferences and behaviors. By understanding your target audience, we tailor the design and functionality of your products to meet their expectations and needs effectively.
                </p>
            </div>
            <div className='flex flex-col items-start gap-6 p-6 border rounded border-blue-800 relative ' style={{ background: "#07172D" }} >
                <p><GrShieldSecurity className='text-4xl bg-white' /></p>
                <p className=' text-xl font-semibold mt-4'>Interactive Prototyping</p>
                <p className='text-gray-400 text-sm'>
                    We develop interactive prototypes to visualize and test the user journey before implementation. This iterative process allows us to gather user feedback and refine the design, producing a final product that aligns perfectly with your users' expectations.
                </p>
            </div>
            <div className='flex flex-col items-start gap-6 p-6 border rounded border-blue-800 relative ' style={{ background: "#07172D" }} >
                <p><MdDataThresholding className='text-4xl ' /></p>
                <p className=' text-xl font-semibold mt-4'>UX Writing</p>
                <p className='text-gray-400 text-sm'>
                    We understand communication; hence we focus heavily on human-centric content that delivers the exact message the customers need for a seamless experience.
                </p>
            </div>
            <div className='flex flex-col items-start gap-6 p-6 border rounded border-blue-800 relative ' style={{ background: "#07172D" }} >
                <p><AiFillAndroid className='text-4xl ' /></p>
                <p className=' text-xl font-semibold mt-4'>Interaction Design</p>
                <p className='text-gray-400 text-sm'>
                    We understand that seamless interactions are the heart of any exceptional user experience. With an eye for detail and a deep understanding of user psychology, we turn your digital platform into an engaging and memorable journey for your customers
                </p>
            </div>
        </>
    )
}

export default UiuxCard
