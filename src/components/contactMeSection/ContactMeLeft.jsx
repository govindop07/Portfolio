import React from 'react'
import ContactForm from './ContactForm'

const ContactMeLeft = () => {
  return <div className='flex flex-col gap-8 w-full'>
    <div >
      <h2 className='text-orange-400 text-3xl font-semibold mb-3'>Get in touch</h2>
      <p className='mb-4 font-semibold'>Feel free to reach out id you'd like to collaborate
        <br />
      you are just few clicks away</p>
    </div>
    <ContactForm />
  </div>
}

export default ContactMeLeft