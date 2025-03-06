import React from 'react'
import NavbarLogo from './NavbarLogo'
import NavbarLinks from './NavbarLinks'
import NavbarBtn from './NavbarBtn'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';

function NavbarMain() {

    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = ()=>{
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className='flex justify-between fixed z-20 left-6 top-0 gap-4 w-[90%] sm:w-full mx-auto'>
            <div className='mx-auto w-full max-w-[90%] lg:py-4 hidden lg:flex items-center justify-around  border border-white rounded-full bg-black'>
                <NavbarLogo />
                <div className={`${menuOpen? 'sm:block': 'hidden'} lg:block`}>
                    <NavbarLinks />
                </div>
                <NavbarBtn />
            </div>

            <div className='lg:hidden sm:block p-4 m-4 -ml-2 flex items-center bg-black border-[0.5px] rounded-full hover:cursor-pointer'
            onClick={toggleMenu}>
                <button className='text-white hover:cursor-pointer'>
                    <GiHamburgerMenu />
                    <div className={`${menuOpen? 'sm:block': 'hidden'} lg:block`}>
                    <NavbarLinks />
                    </div>
                </button>
            </div>
        </nav>
    
    )
}

export default NavbarMain