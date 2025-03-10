import React from 'react'
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import SingleSkill from './SingleSkill';
import {motion} from 'framer-motion'
import { fadeIn } from '../../framerMotion/varients'


const skills = [
{
    skill: "Java",
    icon: FaJava
},
{
    skill: "JavaScript",
    icon: IoLogoJavascript
},
{
    skill: "HTML",
    icon: FaHtml5
},
{
    skill: "CSS",
    icon: FaCss3Alt
},
{
    skill: "ReactJS",
    icon: FaReact
},
{
    skill: "ExpressJS",
    icon: SiExpress
},
{
    skill: "MongoDB",
    icon: SiMongodb
},
{
    skill: "SQL",
    icon: TbSql
},
{
    skill: "TailwindCSS",
    icon: SiTailwindcss
}
];

const AllSkillsSm = () => {
    return( 
        <div className='grid grid-cols-2 md:grid-cols-4 gap-16 mb-8'>
            {skills.map((item, index) => {
                return <motion.div 
                variants={fadeIn("right", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.7 }}
                    key={index} className='flex flex-col items-center'>
                    <div className='text-6xl text-orange-300'>
                        <item.icon />
                    </div>
                    <div className='text-lg font-semibold'>
                        {item.skill}
                    </div>
                </motion.div>
            })}
        </div>
    );
}

export default AllSkillsSm