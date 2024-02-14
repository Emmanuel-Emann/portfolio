"use client"
import Abouttext from '@/components/about/Abouttext'
import BackEnd from '@/components/backendskill/BackEnd'
import FrontEnd from '@/components/frontendskill/FrontEnd'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import {CiMenuFries} from 'react-icons/ci'
import { IoMdClose } from "react-icons/io";

const Portfy = () => {
  const [toggle, setToggle] = useState(true)

  return (
    <div className='w-full h-screen mediacontain'>
      <div className='navbar-mobile' style={{display: toggle ? "none" : ""}}>
        <div>
        <div className='flex item-center justify-between w-[100%] pr-8'>
          <h1 className='text-xl font-mono font-bold'>Portfy</h1>
          <IoMdClose size={25} onClick={() => setToggle(false)}/>
          </div>
          <div className='flex flex-col justify-center w-[100%] items-center mt-48 gap-8 cursor-pointer'>
            <Link href="">
              <button className='text-4xl font-bold font-mono'>Portfolio</button>
            </Link>
            <Link href="/contactform">
              <button className='text-4xl font-bold font-mono'>Contact</button>
            </Link>
          </div>
        </div>
          <div className='flex items-center justify-center gap-2'>
            <h1 className='text-2xl font-extrabold'>©</h1><h1 className='text-xl font-mono font-bold'>copyright 2024</h1>
          </div>
      </div>
      <div className='flex gap-10 md:flex mediascreens' style={{display: toggle ? "" : ""}}>
        <section className='w-[100%] flex flex-col gap-12'>
          <div className='w-[60%] namescreen'>
            <div className=''>
              <h3 className='text-lg font-normal'>You can call me</h3><h1 className='text-[81px] font-extrabold names'>Eman</h1>
            </div>
            <div className='menubar'>
              <CiMenuFries size={25} onClick={() => setToggle(true)}/>
            </div>
          </div>
          <div className='w-[45%] border-2'></div>
          <div className='w-[100%]'>
            <div className='gap-5 w-[100%]'>
              <h3 className='text-lg font-normal mt-10'>I'm a</h3>
              <h2 className='text-[54px] font-bold'>Software Developer</h2>
              </div>
          </div>
          <div className='flex items-center w-[40%] gap-7'>
            <Image src="/JavaScript_Logo.webp" alt='group' width={100} height={100} className='w-full h-full bg-white'/>
            <Image src="htmlwordmark.svg" alt='group' width={100} height={100} className='w-full h-full'/>
            <Image src="/css.png" alt='group' width={100} height={100} className='w-full h-full'/>
          </div>
          <div>
            <Abouttext/>
          </div>
        </section>
        <section className='w-[100%] scrollpath'>
          <div className='w-[100%] flex flex-col gap-5'>
            <div className='flex items-center text-black imagescreen w-[100%] p-5 gap-2 rounded-lg shadow-2xl'>
              <div className='w-[50%] flex flex-col gap-5 textscreen'>
                <div className=' bg-slate-400 w-[90%] flex justify-center p-5 rounded-md cursor-pointer buttonwell'>
                  <Link href="/contactform">
                  <button className='text-2xl font-bold cursor-pointer'>
                    Contact
                  </button>
                  </Link>
                </div>
              </div>
              <Image src="/eman.jpeg" alt='header' width={100} height={100} className='w-[100%] md:w-[50%] h-[30vh] object-cover'/>
            </div>
            <div className='flex flex-col gap-5'>
              <FrontEnd/>
              <BackEnd/>
            </div>
            <div className='bg-white text-black flex flex-col items-center p-4 w-[100%] gap-5 shadow-2xl'>
              <h1 className='text-4xl font-bold'>My CV</h1>
              <div className='w-[100%] flex items-center gap-2 justify-center bg-green-300 p-6 rounded-md'>
                <button className='text-xl font-bold'>
                  <a href="/cv.pdf" download="cv">Download CV</a>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className='flex items-center justify-center gap-2 mt-5'>
        <h1 className='text-2xl font-extrabold'>©</h1><h1 className='text-xl font-mono font-bold'>copyright 2024</h1>
      </div>
    </div>
  )
}

export default Portfy