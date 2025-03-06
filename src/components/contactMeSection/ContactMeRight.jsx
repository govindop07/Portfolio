import React from 'react'
import ContactInfo from './ContactInfo'
import ContactSocial from './ContactSocial'

const ContactMeRight = () => {
  return <div className='flex flex-col items-center justify-center gap-2
  '>
    <img src="images/email-image.png" 
    alt="Contact Me" 
    className='max-w-[300px] mb-4'/>
    <ContactInfo />
    <ContactSocial />
  </div>
}

export default ContactMeRight;