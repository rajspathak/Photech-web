import { IoCallOutline } from 'react-icons/io5';
import { AiOutlineMail } from 'react-icons/ai';
import Cont from '../assests/contact.jpg';
import contact1 from '../assests/contact1.jpg';
import Navbar from '../component/Nav';
import {useEffect} from 'react'
import {Whatsapp,PhoneCall} from '../container/AdditionalTools'

const Contact = () => {
    useEffect(()=>{
        window.scrollTo({
          top:0,
          behavior:"smooth",
        });
      },[])
    return (
        <>
        
            <Whatsapp />
            <PhoneCall />
            <Navbar />
            <div className='pt-16'> { /* */}
                <div className='contactBanner relative '>
                    <img src={Cont} alt="photechIndia" className='opacity-90 w-full h-96 object-cover brightness-50  ' />
                    <span className='text-6xl font-bold text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-lg:text-4xl object-contain'>Contact Us</span>
                </div>
                <div className='  '>
                    <div className='grid grid-cols-3 gap-3  justify-items-center p-16 max-lg:grid-cols-1 max-lg:px-4  '>
                        <div className=''>
                            <p className='text-lg font-semibold text-gray-600 max-lg:text-center'>Get A Quote</p>
                            <p className='text-4xl font-bold'>Get In Touch Now</p>
                        </div>
                        <div className='flex flex-col max-lg:flex-row max-lg:gap-3 '>
                            <p className='text-lg flex items-center gap-4 max-lg:text-sm'><IoCallOutline className='text-yellow-400 text-2xl ' /><span className='max-lg:text-sm'>Call Us Now</span></p>
                            <p className='text-2xl font-bold hover:text-yellow-400 cursor-pointer max-lg:text-xl'>(+91) - +91 9461388657</p>
                        </div>
                        <div className='flex flex-col max-lg:flex-row max-lg:gap-3 '>
                            <p className='text-lg flex items-center gap-4 max-lg:text-sm'><AiOutlineMail className='text-yellow-400 text-2xl ' /><span className='max-lg:text-sm'>Mail Us Now</span></p>
                            <p className='text-2xl font-bold hover:text-yellow-400 cursor-pointer max-lg:text-xl'>info@photechindia.com</p>
                        </div>
                    </div>
                </div>
                <div className='mx-20 my-8 max-lg:my-2 max-lg:mx-5'>
                    <div className='grid grid-cols-2 max-lg:grid-cols-1 gap-5 max-lg:gap-3'>
                        <div className='overflow-hidden rounded-xl'>
                            <img src={contact1} alt="PhotechIndia" />
                        </div>
                        <div className='mt-4'>
                            <form className='flex flex-col gap-5 max-lg:gap-5'>
                                <input type='text' className='px-3 w-full h-12 text-lg bg-gray-200 ' placeholder='Your Name...' />
                                <input type='email' className='px-3 w-full h-12 text-lg bg-gray-200 ' placeholder='Your email...' />
                                <textarea className='px-2 py-2  w-full h-44 bg-gray-200 ' placeholder='Your Message...'></textarea>
                                <button className='bg-yellow-400 w-32 h-12 text-lg font-semibold rounded-xl hover:bg-yellow-600 hover:text-white'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
