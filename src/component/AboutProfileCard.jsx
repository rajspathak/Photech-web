import React from 'react'
import PurushotamPandey from '../assestsProfile/PurushotamPandey.jpg'
import RajPathak from '../assestsProfile/RajPathak.jpg'
import Abhayman from '../assestsProfile/AbhaymanKumar.jpg'
import Amit from '../assestsProfile/Amit.jpg'
import HarionPandey from '../assestsProfile/HariomPandey.jpg'
import SudhanshuS from '../assestsProfile/SudhanshuS.jpg'
import AdityaKumarSingh from '../assestsProfile/AdityakumarSingh.jpg'
const profile = [
    {
        id: 1,
        name: "Purushotam Pandey",
        role: "CEO & Co Founder",
        image: PurushotamPandey,
        description: " I believes that programmers are artists whose art is the code they write. Headed the software service division at Omniscient."
    },
    {
        id: 2,
        name: "Hariom Pandey",
        role: "Director and CEO",
        image: HarionPandey,
        description: "Hariom has been delivering quality software solutions for more than a decade now but strongly believes that his tech journey has just begun."
    },
    {
        id: 3,
        name: "Raj Pathak",
        role: "COO & Co-Founder",
        image: RajPathak,
        description: "Always eager to take up challenges, Shirish is an entrepreneur at heart and a product manager’s dream coder."
    },
    {
        id: 4,
        name: "Abhayman Kumar",
        role: "Director of Technology",
        image: Abhayman,
        description: "A versatile techie working with cutting-edge technology. He manages to pull off the toughest of all with great energy."
    },
    
    {
        id: 5,
        name: "Sudhanshu S.",
        role: "Director of Technology",
        image: SudhanshuS,
        description: "Kickstarted his career and designed over a hundred mobile applications."
    },
    {
        id: 6,
        name: "Amit Kumar",
        role: "Full Stack Web-Developer",
        image: Amit,
        description: "Always eager to take up challenges, Shirish is an entrepreneur at heart and a product manager’s dream coder."
    },
    {
        id: 7,
        name: "Aditya kumar Singh",
        role: "Director of Technology",
        image: AdityaKumarSingh,
        description: "A versatile techie working with cutting-edge technology. He manages to pull off the toughest of all with great energy."
    }
]
const AboutProfileCard = () => {
    return (
        <>
            {
                profile.map((item) =>
                    <div className='bg-gray-100 rounded-xl' key={item.id}>
                        <img src={item.image} alt={item.name} className='w-full h-72 object-cover rounded-md profileImage' />
                        <div className='p-3 '>
                            <p className='text-black text-xl font-semibold'>{item.name}</p>
                            <p className=' text-gray-600'>{item.role}</p>
                            <p className='text-gray-500 text-sm mt-2'>{item.description}</p>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default AboutProfileCard
