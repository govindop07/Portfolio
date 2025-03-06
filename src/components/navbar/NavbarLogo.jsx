import React from 'react'

function NavbarLogo() {
    return ( <div>
        <div className='text-xl sm:text-2xl lg:text-3xl font-semibold pb-1'
        onClick={scrollDown}
        >Govind Upadhyay</div>
    </div>
    )
}

const scrollDown = () => {
    window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth',
    });
}

export default NavbarLogo