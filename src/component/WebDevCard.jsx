import React from 'react'
import { FaMobile } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { GrShieldSecurity, GrSans } from "react-icons/gr";
import { MdDataThresholding, MdOutlineDesignServices } from "react-icons/md";
import { AiFillAndroid } from "react-icons/ai";

const WebDevCard = () => {
    return (
        <>
            <div className='flex flex-col items-start gap-6 p-6 border rounded border-blue-800 relative ' style={{ background: "#07172D" }} >
                <p><CgWebsite className='text-4xl' /></p>
                <p className=' text-xl font-semibold mt-4'>Front-end Technology</p>
                <p className='text-gray-400 text-sm'>
                    We offer advanced front-end development services to transform your product into a user-centric masterpiece. By leveraging our front-end tech solutions, your product will benefit from enhanced usability, intuitive navigation, and visually stunning interfaces, ensuring a top-notch user experience.
                </p>
            </div>
            <div className='flex flex-col items-start gap-6 p-6 border rounded border-blue-800 relative ' style={{ background: "#07172D" }} >
                <p><FaMobile className='text-4xl' /></p>
                <p className=' text-xl font-semibold mt-4'>Back-end Technology</p>
                <p className='text-gray-400 text-sm'>
                    Our expert team makes the most of state-of-the-art technologies to build a powerful and scalable back end, enhancing performance, security, and data management. From efficient databases to robust APIs, we ensure smooth integration for a reliable and dynamic user experience.
                </p>
            </div>
            <div className='flex flex-col items-start gap-6 p-6 border rounded border-blue-800 relative ' style={{ background: "#07172D" }} >
                <p><GrSans className='text-4xl bg-white' /></p>
                <p className=' text-xl font-semibold mt-4'>Cloud Support</p>
                <p className='text-gray-400 text-sm'>
                    With our powerful cloud solutions, we offer scalability and flexibility, allowing your product to seamlessly adapt to changing demands. Experience unparalleled growth and success as we optimize your product's infrastructure through our exceptional cloud services.
                </p>
            </div>
            <div className='flex flex-col items-start gap-6 p-6 border rounded border-blue-800 relative ' style={{ background: "#07172D" }} >
                <p><GrShieldSecurity className='text-4xl bg-white' /></p>
                <p className=' text-xl font-semibold mt-4'>Responsive Web Development</p>
                <p className='text-gray-400 text-sm'>
                    With our expertise in front-end frameworks, we build responsive websites that seamlessly adapt to different screen sizes, guaranteeing an optimal user experience on desktop devices.
                </p>
            </div>
            <div className='flex flex-col items-start gap-6 p-6 border rounded border-blue-800 relative ' style={{ background: "#07172D" }} >
                <p><MdDataThresholding className='text-4xl ' /></p>
                <p className=' text-xl font-semibold mt-4'>Cross-Browser Compatibility</p>
                <p className='text-gray-400 text-sm'>
                    Our skilled developers ensure that your website performs flawlessly across various browsers, ensuring a consistent and reliable experience for your users.
                </p>
            </div>
            <div className='flex flex-col items-start gap-6 p-6 border rounded border-blue-800 relative ' style={{ background: "#07172D" }} >
                <p><AiFillAndroid className='text-4xl ' /></p>
                <p className=' text-xl font-semibold mt-4'>Performance Optimization</p>
                <p className='text-gray-400 text-sm'>
                    Our team employs industry best practices to optimize the performance of your website, ensuring fast load times and smooth navigation, resulting in enhanced user satisfaction.
                </p>
            </div>
            <div className='flex flex-col items-start gap-6 p-6 border rounded border-blue-800 relative ' style={{ background: "#07172D" }} >
                <p><MdOutlineDesignServices className='text-4xl ' /></p>
                <p className=' text-xl font-semibold mt-4'> MVP Development</p>
                <p className='text-gray-400 text-sm'>
                    Launch your product faster. We rapidly bring your product vision to life, allowing you to validate ideas, gather user feedback, and iterate efficiently.
                </p>
            </div>
        </>
    )
}

export default WebDevCard
