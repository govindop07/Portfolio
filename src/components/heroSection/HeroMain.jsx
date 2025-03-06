import React from 'react'
import HeroText from './HeroText'
import HeroPic from './HeroPic'

function HeroMain() {
    return <div className='lg:mt-20 lg:mb-30 mb-10 mx-auto max-w-[75%] pt-40 pb-16 flex items-center justify-between lg:flex-row flex-col gap-8'>
        <HeroText />
        <HeroPic />
    </div>
}

export default HeroMain