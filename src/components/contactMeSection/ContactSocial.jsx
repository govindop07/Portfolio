import React from 'react'
import SingleContactSocials from './SingleContactSocials'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const ContactSocial = () => {
  return (
    <div className='flex gap-4'>
        <SingleContactSocials Link="https://leetcode.com/u/Govind_Upadhyay/" Icon={SiLeetcode} />
        <SingleContactSocials Link="https://github.com/govindop07" Icon={FaGithub} />
        <SingleContactSocials Link="https://www.linkedin.com/in/govind-upadhyay-8824432ab/" Icon={FaLinkedin} />
    </div>
  )
}

export default ContactSocial