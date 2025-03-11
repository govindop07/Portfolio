import React from 'react'
import {motion} from 'framer-motion'
import { fadeIn } from '../../framerMotion/varients'


const ProjectsText = () => {
  return <motion.div 
    variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.7 }}
        className='flex flex-col items-center mt-[100px]'>
    <h2 className='text-6xl text-green-400 mb-10'>Projects</h2>
    <p className='text-lg text-center'>I have worked on a variety of web development projects, ranging from
        responsive websites for small businesses to full-stack applications and
        complex front-end interfaces.
    </p>
  </motion.div>
}

export default ProjectsText