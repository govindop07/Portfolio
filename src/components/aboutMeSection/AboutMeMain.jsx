import React from 'react'
import AboutMeText from './AboutMeText'
import AboutMeImage from './AboutMeImage'
import {motion} from 'framer-motion'
import { fadeIn } from '../../framerMotion/varients'


const AboutMeMain = () => {
    return <div id='about' className='max-w-[80%] flex lg:flex-row flex-col gap-20 px-4 w-full mx-auto mb-20 mt-[100px] justify-between items-center'>
        <motion.div 
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}>

            <AboutMeText />
        </motion.div>

        <motion.div 
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}>
            
            <AboutMeImage />
        </motion.div>
    </div>
}

export default AboutMeMain