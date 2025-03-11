import React from 'react'
import ContactMeLeft from './ContactMeLeft'
import ContactMeRight from './ContactMeRight'
import {motion} from 'framer-motion'
import { fadeIn } from '../../framerMotion/varients'


const ContactMeMain = () => {
  return <div id='contact' className='max-w-[90%] mx-auto flex flex-col items-center justify-center mt-40 mb-20 px-4'>
      <motion.h2
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.7 }}
      className='text-6xl text-green-400 mb-10 text-center'>Contact Me</motion.h2>

      <div className='flex justify-center gap-24 w-[90%] bg-gray-800 p-8 rounded-2xl lg:flex-row flex-col'>
        <ContactMeLeft />
        <ContactMeRight />
      </div>
  </div>
}

export default ContactMeMain