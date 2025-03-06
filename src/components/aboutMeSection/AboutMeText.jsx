import React from 'react'
import {Link} from 'react-scroll'

const AboutMeText = () => {
    return <div className='flex flex-col lg:items-start items-center lg:text-left text-center'>
            <h2 className='text-6xl text-green-400 mb-10'>About Me</h2>

            <p className='text-white'>I’m a pre-final year B.Tech student with a strong passion for problem-solving and technology. Proficient in Java and skilled in data structures and algorithms, I enjoy tackling challenges and continuously learning.
            Currently, I’m preparing for campus placements and exploring opportunities to contribute to impactful projects while enhancing my skills in web development.</p>
            
            <Link to={'projects'}
                smooth={true}
                spy={true}
                duration={500}
                offset={-130}
                >
            <button className='border hover:border-sky-400 rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-sky-700 font-bold transition-all duration-500 cursor-pointer lg:self-start self-center '>
                My Projects
            </button>
            </Link>
        </div>
}

export default AboutMeText