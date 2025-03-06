import React from 'react'
import ProjectsText from './ProjectsText'
import SingleProject from './SingleProject'
import {motion} from 'framer-motion'
import { fadeIn } from '../../framerMotion/varients'


const projects = [
{
    name: "Portfolio Website",
    year: "November 2024",
    align: "right",
    image: "images/project-1.png",
    link: "https://govind-folio.netlify.app/",
},
{
    name: "Moola App",
    year: "Sept2022",
    align: "left",
    image: "images/website-img-2.webp",
    link: "#",
},
{
    name: "Tourzania",
    year: "Jan2023",
    align: "right",
    image: "images/website-img-3.jpg",
    link: "#",
},
{
    name: "Bank of Luck",
    year: "May2024",
    align: "left",
    image: "images/website-img-4.jpg",
    link: "#",
},
];

const ProjectsMain = () => {
    return <div id='projects' className=" mx-auto px-4">
        <ProjectsText />
        <div className="flex flex-col gap-20 max-w-[70%] mx-auto mt-12">
            {projects.map((item, index) =>{
                return <motion.div
                variants={fadeIn(`${item.align}`, 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
                >
                    <SingleProject 
                    key={index} 
                    name={item.name} 
                    year={item.year} 
                    align={item.align} 
                    image={item.image} 
                    link={item.link} />
                </motion.div>
            })
            }
        </div>
    </div>
}

export default ProjectsMain