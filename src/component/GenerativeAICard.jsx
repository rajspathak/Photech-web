import React from 'react'
import { FaMobile } from "react-icons/fa";
import { GrShieldSecurity, GrSans } from "react-icons/gr";
import { MdDataThresholding, } from "react-icons/md";
const UiuxCard = () => {
    return (
        <>


            <div className='flex flex-col items-start gap-6 p-6 border rounded border-blue-800 relative ' style={{ background: "#07172D" }} >
                <p><FaMobile className='text-4xl' /></p>
                <p className=' text-xl font-semibold mt-4'>Custom Chatbot Development</p>
                <p className='text-gray-400 text-sm'>
                    We create intelligent chatbot solutions tailored to your industry and business needs. We train the chatbots with the data that you provide for a seamless experience. Our expert team analyzes your requirements and leverages generative AI to develop chatbots that mimic human-like conversations, ensuring an exceptional user experience.
                </p>
            </div>
            <div className='flex flex-col items-start gap-6 p-6 border rounded border-blue-800 relative ' style={{ background: "#07172D" }} >
                <p><GrSans className='text-4xl bg-white' /></p>
                <p className=' text-xl font-semibold mt-4'>Natural Language Processing</p>
                <p className='text-gray-400 text-sm'>
                    Our chatbots have advanced natural language processing capabilities, enabling them to accurately understand and interpret user queries. By utilizing the power of generative AI, our chatbots can intelligently respond to customer inquiries, providing relevant and personalized assistance.
                </p>
            </div>
            <div className='flex flex-col items-start gap-6 p-6 border rounded border-blue-800 relative ' style={{ background: "#07172D" }} >
                <p><GrShieldSecurity className='text-4xl bg-white' /></p>
                <p className=' text-xl font-semibold mt-4'>Integration and Deployment</p>
                <p className='text-gray-400 text-sm'>
                    We seamlessly integrate our custom chatbots into your existing systems and platforms. Whether it's your website, mobile app, or social media channels, our team ensures a smooth deployment process, enabling your chatbot to engage with customers across multiple touchpoints.
                </p>
            </div>
            <div className='flex flex-col items-start gap-6 p-6 border rounded border-blue-800 relative ' style={{ background: "#07172D" }} >
                <p><MdDataThresholding className='text-4xl ' /></p>
                <p className=' text-xl font-semibold mt-4'>Continuous Learning and Improvement</p>
                <p className='text-gray-400 text-sm'>
                    Our chatbots are constantly learning and evolving. We employ machine learning algorithms to analyze user interactions and feedback, allowing the chatbot to improve its responses and adapt to changing customer needs. This ensures that your chatbot stays up-to-date and delivers exceptional customer experiences.
                </p>
            </div>
        </>
    )
}

export default UiuxCard
