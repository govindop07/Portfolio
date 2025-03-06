import React from 'react'
import {Link} from 'react-scroll'

function NavbarBtn() {
    return (
        <Link
        to={'contact'}
        smooth={true}
        spy={true}
        duration={500}
        offset={-130}>
            <button className='px-2 py-1 lg:px-4 lg:py-2 rounded-full text-lg lg:text-xl font-bold font-body text-white border-green-400 border flex items-center gap-1 bg-gradient-to-r from-green-400 to-orange-400 transition-all duration-500 hover:scale-110 cursor-pointer hover:shadow-green-400'>Hire me</button>
        </Link>
    )
}

export default NavbarBtn