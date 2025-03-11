import React from 'react'

const AboutMeImage = () => {
    return <div className='h-[300px] w-[200px] md:h-[500px] md:w-[300px] block relative -mb-20 md:-mb-0'>
        <div className='md:h-[500px] md:w-[300px] h-[300px] w-[200px] rounded-[100px] absolute overflow-hidden'>
            <img src="images/about-me.jpg" 
            alt="about me image" 
            className='h-full w-auto object-cover'/>
        </div>
    </div>
}

export default AboutMeImage