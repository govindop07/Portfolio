import React from 'react'

const AboutMeImage = () => {
    return <div className='hidden h-[500px] w-[300px] lg:block relative'>
        <div className='h-[500px] rounded-[100px] absolute overflow-hidden'>
            <img src="images/about-me.jpg" 
            alt="about me image" 
            className='h-full w-auto object-cover'/>
        </div>
    </div>
}

export default AboutMeImage