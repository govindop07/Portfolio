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
import { SiNextdotjs } from "react-icons/si";
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
},
{
    skill: "Next-js",
    icon: SiNextdotjs
}
];

const AllSkills = () => {
    return <div>
        <div className='flex items-center justify-center  gap-2 max-w-[1200px] mx-auto'>
            {skills.map((item, index) => {
                return <motion.div
                variants={fadeIn("up", `0.${index}`)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.7 }}
                >
                    <SingleSkill key={index} text={item.skill} imgSvg={<item.icon />} />
                    </motion.div>
            })}
        </div>
    </div>
}

export default AllSkills