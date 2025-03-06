import React from 'react'
import {Link} from 'react-scroll'

const links = [
    { link:'About me', section:'about' },
    { link:'Skills', section:'skills' },
    { link:"Experience", section:'experience' },
    { link:'Projects', section:'projects' },
    { link:'Contact', section:'contact' },
];

function NavbarLinks() {
    return <ul className='flex gap-8 text-lg lg:flex-row flex-col lg:relative absolute left-[50%] top-[125%] text-center -translate-x-[50%] bg-green-300/30 backdrop-blur-lg lg:bg-black w-full'>
        {links.map((link, index) =>{
            return <li className='group'>
                <Link
                    to={link.section}
                    smooth={true}
                    spy={true}
                    duration={500}
                    offset={-130}
                    className='cursor-pointer hover:text-green-300 transition-all duration-500'>
                    {link.link}</Link>
                <div className='mx-auto h-[1px] bg-green-300 w-0 group-hover:w-full transition-all duration-500'></div>
            </li>
        })}
    </ul>
}

export default NavbarLinks;