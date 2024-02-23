import React from 'react'

const FirstText = ({text}) => {
    return (
        <>
            <p className='text-xl max-lg:text-lg lg:w-4/5 '>
                {text}
            </p>
            <p className='mt-4'><span className='text-xl bg-blue-600 p-3 rounded-lg'><button>Contact us</button></span></p>
        </>
    )
}

export default FirstText
