import React from 'react'
import { TfiEmail } from "react-icons/tfi";
import { IoIosContact } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import SingleInfo from './SingleInfo';

const ContactInfo = () => {
  return (
    <div>
        <SingleInfo text={'govindupa@gmail.com'} Image={TfiEmail}/>
        <SingleInfo text={'+91 8534978944'} Image={IoIosContact}/>
        <SingleInfo text={'Uttar Pradesh, India'} Image={FaLocationDot}/>
    </div>
  )
}

export default ContactInfo