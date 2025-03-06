import React from 'react'
import Textchange from './TextChange'
import {motion} from 'framer-motion'
import { fadeIn } from '../../framerMotion/varients'

function HeroText() {
    return <div className='flex flex-col gap-2 h-full justify-center md:text-left text-center'>
        <Textchange />
        <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }} 
        className='md:text-[2.8rem] lg:text-6xl text-3xl font-bold text-orange-300'> Govind Upadhyay</motion.h1>

        <motion.p 
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className='text-lg mt-4'>A Passionate Web Developer. Leveraging best practices to create scalable and maintainable
        solutions.
        </motion.p>
    </div>
}

export default HeroText