import React from 'react'
import { FaMobile } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { GrShieldSecurity, GrSans } from "react-icons/gr";
const MobileDevCard = () => {
    return (
        <>
            <div className='flex flex-col items-start gap-6 p-6 border rounded border-blue-800 relative ' style={{ background: "#07172D" }} >
                <p><CgWebsite className='text-4xl' /></p>
                <p className=' text-xl font-semibold mt-4'>iOS App Development</p>
                <p className='text-gray-400 text-sm'>
                    Our team of skilled developers harnesses the exclusive features of Apple's ecosystem, allowing you to provide your users with a delightful and high-performance app. By adhering to the strictest design standards and employing cutting-edge technologies, we ensure your app stands out in the competitive App Store landscape, leaving a lasting impression on your audience.
                </p>
            </div>
            <div className='flex flex-col items-start gap-6 p-6 border rounded border-blue-800 relative ' style={{ background: "#07172D" }} >
                <p><FaMobile className='text-4xl' /></p>
                <p className=' text-xl font-semibold mt-4'>Android App Development</p>
                <p className='text-gray-400 text-sm'>
                    We understand the nuances of the Android platform and optimize your app to deliver smooth functionality and seamless user experiences. From smartphones to tablets and everything in between, our Android apps adapt flawlessly to diverse screen sizes and device specifications, enhancing user engagement and satisfaction.
                </p>
            </div>
            <div className='flex flex-col items-start gap-6 p-6 border rounded border-blue-800 relative ' style={{ background: "#07172D" }} >
                <p><GrSans className='text-4xl bg-white' /></p>
                <p className=' text-xl font-semibold mt-4'>React Native App Development</p>
                <p className='text-gray-400 text-sm'>
                    We are committed to bringing your product vision to life through our expertise in React Native app development. We craft dynamic and responsive mobile applications that transcend platforms, delivering a consistent user experience on both iOS and Android devices and also accelerating development, reducing costs, ensuring you can reach your target audience faster and with a higher return on investment.
                </p>
            </div>
            <div className='flex flex-col items-start gap-6 p-6 border rounded border-blue-800 relative ' style={{ background: "#07172D" }} >
                <p><GrShieldSecurity className='text-4xl bg-white' /></p>
                <p className=' text-xl font-semibold mt-4'>Flutter App Development</p>
                <p className='text-gray-400 text-sm'>
                    Our Flutter app development services empower you to have a single codebase that functions seamlessly on both iOS and Android devices. By leveraging Flutter's expressive UI and reactive design, we craft visually stunning and feature-rich apps that maintain consistent performance and user experience across platforms, saving you time and resources while ensuring maximum reach and impact.
                </p>
            </div>
        </>
    )
}

export default MobileDevCard
