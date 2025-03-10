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
        className='md:text-[2.8rem] lg:text-6xl text-3xl font-bold text-green-400'> Govind Upadhyay</motion.h1>

        <motion.p 
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className='text-lg mt-4 '>A Passionate Web Developer. Leveraging best practices to create scalable and maintainable
        solutions.
        </motion.p>

        <motion.a
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        href="https://drive.google.com/file/d/18Rde8K4wS6Vb_6Jpe7cFVDIITP187ZR7/view?usp=drive_link">
            <button className='text-center bg-green-900 w-45 h-10 rounded-full font-semibold hover:cursor-pointer hover:scale-120 transition-all duration-500'>
            Download Resume</button>
        </motion.a>
    </div>
}

export default HeroText