import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState("");
    const handleName = (e) => {
        setName(e.target.value);
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleMessage = (e) => {
        setMessage(e.target.value);
    };

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm('service_hnogn1j', 'template_moilpyd', form.current, {
            publicKey: 'CQ4Z8inI5ImUWHEOs',
        })
        .then(
            () => {
                setEmail("");
                setName("");
                setMessage("");
                setSuccess("Message Sent Succesfully");
                console.log('adead')
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );
    };   
    
    return <div>
        <p className="text-green-400">{success}</p>
    <form className='flex flex-col gap-4' ref={form} onSubmit={sendEmail}>
        <input 
        name='from_name'
        type="text" 
        placeholder='Your Name' 
        required
        className='h-12 rounded-lg bg-slate-600 px-2'
        value={name}
        onChange={handleName}
        />
        <input 
        name='from_email'
        type="email" 
        placeholder='Your Email' 
        required
        className='h-12 rounded-lg bg-slate-600 px-2'
        value={email}
        onChange={handleEmail}
        />
        <textarea 
        type="text" 
        name='message'
        placeholder='Message' 
        rows="9" cols="50"
        required 
        className='rounded-lg bg-slate-600 p-2'
        value={message}
        onChange={handleMessage}
        />
        <button type="submit" className='w-full rounded-lg border border-green-400 h-12 font-bold text-xl hover:bg-green-700 bg-green-900 transition-all duration-500 cursor-pointer'>Send</button>
    </form>
</div>
};

export default ContactForm;