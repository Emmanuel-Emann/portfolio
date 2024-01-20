import BackEnd from '@/components/backendskill/BackEnd'
import FrontEnd from '@/components/frontendskill/FrontEnd'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Portfy = () => {
  return (
    <div className='w-full h-screen p-20 mediacontain'>
      <div className='flex gap-10 md:flex mediascreens'>
        <section className='w-[100%] flex flex-col gap-12'>
          <div className='w-[50%] namescreen'>
            <h1 className='text-[81px] font-extrabold names'>Augustine Emmanuel</h1>
          </div>
          <div className='w-[35%] border-2'></div>
          <div className='w-[100%]'>
            <h2 className='text-[54px] font-bold'>Software Developer</h2>
          </div>
          <div className='flex items-center w-[40%] gap-7'>
            <Image src="/JavaScript_Logo.webp" alt='group' width={100} height={100} className='w-full h-full bg-white'/>
            <Image src="htmlwordmark.svg" alt='group' width={100} height={100} className='w-full h-full'/>
            <Image src="/css.png" alt='group' width={100} height={100} className='w-full h-full'/>
          </div>
          {/* <div className='flex items-center w-[40%] gap-7'>
            <Image src="/mern.png" alt='mern' width={100} height={100} className='w-full h-full'/>
          </div> */}
          <div>
            About Me
          </div>
        </section>
        <section className='w-[100%] scrollpath'>
          <div className='w-[100%] flex flex-col gap-5'>
            <div className='bg-white flex items-center text-black imagescreen w-[100%] p-5 gap-2 rounded-lg shadow-2xl'>
              <div className='w-[50%] flex flex-col gap-5 textscreen'>
                <h1 className='text-4xl font-bold'>Reliable</h1>
                <p className='font-normal'>
                  {/* Consistency and Timeliness,
                  Adaptability and Problem-Solving
                  Quality of Work
                  Communication and Collaboration,
                  Feedback and Improvement. */}
                </p>
                <div className=' bg-slate-400 w-[100%] flex justify-center p-3 rounded-md cursor-pointer'>
                  <Link href="/contactform">
                  <button>
                    Contact Us
                  </button>
                  </Link>
                </div>
              </div>
              <Image src="/eman.jpeg" alt='header' width={100} height={100} className=' w-[100%] md:w-[50%] h-[30vh]'/>
            </div>
            <div className='flex flex-col gap-5'>
              <FrontEnd/>
              <BackEnd/>
            </div>
            {/* <div className='bg-white text-black p-5 flex-col gap-5 flex'>
              <h1 className='text-4xl font-bold'>Front-end Skills</h1>
              <div className='flex flex-col gap-7'>
                <div>
                  <h1 className='text-2xl font-semibold'>UI/UX Design</h1>
                  <p className=' font-normal'>Get a beautiful User Interface(UI) and User Experience(UX) design from an experienced designer with good years of experience</p>
                </div>
                <div>
                  <h1 className='text-2xl font-semibold'>HTML, CSS, JAVASCRIPT</h1>
                  <p className='font-normal'>
                    Good code base, save, clean and  great result
                  </p>
                </div>
              </div>
            </div>
              <div className='bg-white text-black p-5 flex-col gap-5 flex'>
              <h1 className='text-4xl font-bold'>Back-end Skills</h1>
              <div className='flex flex-col gap-7'>
                <div>
                  <h1 className='text-2xl font-semibold'>Javascript</h1>
                  <p className=' font-normal'>
                    We provide you with detailed, comprehensive requirements for the project. The more specific you are, the better we understands what you needs. We maintain open lines of communication. Regular check-ins allow you to address any issues early on and ensure the project is on track.
                  </p>
                </div>
                <div>
                  <h1 className='text-2xl font-semibold'>NodeJs</h1>
                  <p className='font-normal'>No stress to the importance of security practices, including input validation, authentication, authorization, and protecting against common vulnerabilities like injection attacks.</p>
                </div>
                <div>
                  <h1 className='text-2xl font-semibold'>Database</h1>
                  <p className='font-normal'>
                    Request comprehensive documentation for the database schema, relationships, data flow, and any necessary guidelines for maintenance and troubleshooting.
                  </p>
                </div>
              </div>
            </div> */}
            <div className='bg-white text-black flex flex-col items-center p-4 w-[100%] gap-5 shadow-2xl'>
              <h1 className='text-4xl font-bold'>My CV</h1>
              <div className='w-[100%] flex items-center gap-2 justify-center bg-green-300 p-6 rounded-md'>
                <Link href="/submitemail" download="name cd.pdf">
                <button className='text-xl font-bold'>
                  Download CV
                </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Portfy