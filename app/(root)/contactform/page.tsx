import React from 'react'
// import { EmailTemplate } from '@/components/EmailTemplate';

const ContactUs = () => {

  return (
    <section className='flex flex-col items-center justify-center'>
    <div className='flex items-center justify-center mt-32  flex-col border-8 w-[50%] p-5'>
      <h1 className='text-4xl font-bold mb-40 '>Contact Me</h1>
      <form className='flex flex-col items-center gap-10'>
        <div className='w-[100%] flex items-center gap-5'>
        <label className='text-2xl font-medium'>Name</label>
        <input type="text" name="user_name" className='w-[30vw] border-b-2 h-[4vh] outline-none bg-transparent p-2'/>
        </div>
        <div className='w-[100%] flex items-center gap-5'>
        <label className='text-2xl font-medium'>Email</label>
        <input type="email" name="user_email" className='w-[30vw] border-b-2 h-[4vh] outline-none bg-transparent p-2'/>
        </div>
        <div className='w-[100%] flex items-center gap-5'>
        {/* <label className='text-2xl font-medium'>Message</label> */}
        <textarea name="message" className='w-[100%] h-[18vh] rounded-md border text-black'/>
        </div>
        <button className='cursor-pointer bg-sky-400 w-[20%] p-4 rounded-md hover:bg-sky-300 hover:text-black'>
          <input type="submit" value="Send" className='cursor-pointer'/>
        </button>
        
      </form>
    </div>
    {/* <EmailTemplate/> */}
    </section>

    
  );
};

export default ContactUs