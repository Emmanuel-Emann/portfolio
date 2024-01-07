"use client"

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section className='flex flex-col items-center justify-center'>
    <div className='flex items-center justify-center mt-32  flex-col border-8 w-[50%] p-5'>
      <h1 className='text-4xl font-bold mb-40 '>Contact Me</h1>
      <form ref={form} onSubmit={sendEmail} className='flex flex-col items-center gap-10'>
        <div className='w-[100%] flex items-center gap-5'>
        <label className='text-2xl font-medium'>Name</label>
        <input type="text" name="user_name" className='w-[30vw] border-b-2 h-[4vh] outline-none bg-transparent p-2'/>
        </div>
        <div className='w-[100%] flex items-center gap-5'>
        <label className='text-2xl font-medium'>Email</label>
        <input type="email" name="user_email" className='w-[30vw] border-b-2 h-[4vh] outline-none bg-transparent p-2'/>
        </div>
        <div className='w-[100%] flex items-center gap-5'>
        <label className='text-2xl font-medium'>Message</label>
        <textarea name="message" className='w-[100%] h-[18vh] rounded-md border text-black'/>
        </div>
        <input type="submit" value="Send"/>
      </form>
    </div>
    </section>

    
  );
};

export default ContactUs