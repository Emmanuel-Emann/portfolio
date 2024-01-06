import Image from 'next/image'
import React from 'react'

const Portfy = () => {
  return (
    <div className='w-full h-screen p-20'>
      <div className='flex gap-10'>
        <section className='w-[100%] flex flex-col gap-8'>
          <div className='w-[50%]'>
            <h1 className='text-[81px] font-extrabold'>Augustine Emmanuel</h1>
          </div>
          <div className='w-[35%] border-2'></div>
          <div className='w-[100%]'>
            <h2 className='text-[54px] font-bold'>Senior Developer</h2>
          </div>
          <div className='flex items-center w-[40%] gap-7'>
          <Image src="/JavaScript_Logo.webp" alt='group' width={100} height={100} className='w-full h-full bg-white'/>
            <Image src="htmlwordmark.svg" alt='group' width={100} height={100} className='w-full h-full'/>
            <Image src="/css.png" alt='group' width={100} height={100} className='w-full h-full'/>
          </div>
        </section>
        <section className='w-[100%]'>
          <div className='w-[100%] flex flex-col gap-5'>
            <div className='bg-white flex items-center text-black p-5'>
              <div className='w-[50%] flex flex-col gap-5'>
                <h1 className='text-4xl font-bold'>Reliable</h1>
                <p className='font-normal'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta excepturi placeat distinctio eligendi alias.</p>
                <div className=' bg-slate-400 w-[30%] flex justify-center p-3 rounded-md cursor-pointer'>
                  <button>
                    Contact
                  </button>
                </div>
              </div>
              <Image src="/eman.jpeg" alt='header' width={100} height={100} className='w-[50%] h-[20vh]'/>
            </div>
            <div className='bg-white text-black p-5 flex-col gap-5 flex'>
              <h1 className='text-4xl font-bold'>Front-end Skills</h1>
              <div className='flex flex-col gap-7'>
                <div>
                  <h1 className='text-2xl font-semibold'>UI/UX Design</h1>
                  <p className=' font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, iure nesciunt. Sit quisquam dolorum voluptatibus perspiciatis iure recusandae quam qui! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, doloremque.</p>
                </div>
                <div>
                  <h1 className='text-2xl font-semibold'>HTML, CSS, JAVASCRIPT</h1>
                  <p className='font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, iure nesciunt. Sit quisquam dolorum voluptatibus perspiciatis iure recusandae quam qui! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, doloremque.</p>
                </div>
                <div>
                  <h1 className='text-2xl font-semibold'>REACT FRAME-WORKS</h1>
                  <p className='font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, iure nesciunt. Sit quisquam dolorum voluptatibus perspiciatis iure recusandae quam qui! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, doloremque.</p>
                </div>
              </div>
            </div>
            <div className='bg-white text-black flex flex-col items-center p-4 h-[30vh] w-[100%]'>
              <h1 className='text-4xl font-bold'>Certificate</h1>
              <div className='w-[100%] h-[40vh] flex items-center gap-2'>
                <Image src="/certi.png" alt='certi' width={100} height={100} className='w-[30%] h-[20vh]'/>
                <Image src="/funds.png" alt='certi' width={100} height={100} className='w-[30%] h-[20vh]'/>
                <Image src="/advance.png" alt='certi' width={100} height={100} className='w-[30%] h-[20vh]'/>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Portfy