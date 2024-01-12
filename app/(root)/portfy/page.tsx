import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Portfy = () => {
  return (
    <div className='w-full h-screen p-20'>
      <div className='flex gap-10'>
        <section className='w-[100%] flex flex-col gap-12'>
          <div className='w-[50%]'>
            <h1 className='text-[81px] font-extrabold'>Augustine Emmanuel</h1>
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
        </section>
        <section className='w-[100%]'>
          <div className='w-[100%] flex flex-col gap-5'>
            <div className='bg-white flex items-center text-black p-5'>
              <div className='w-[50%] flex flex-col gap-5'>
                <h1 className='text-4xl font-bold'>Reliable</h1>
                <p className='font-normal'>
                  Consistency and Timeliness,
                  Adaptability and Problem-Solving
                  Quality of Work
                  Communication and Collaboration,
                  Feedback and Improvement.
                </p>
                <div className=' bg-slate-400 w-[35%] flex justify-center p-3 rounded-md cursor-pointer'>
                  <Link href="/contactform">
                  <button>
                    Contact me
                  </button>
                  </Link>

                </div>
              </div>
              <Image src="/eman.jpeg" alt='header' width={100} height={100} className='w-[50%] h-[30vh]'/>
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
            <div className='bg-white text-black flex flex-col items-center p-4 h-[30vh] w-[100%]'>
              <h1 className='text-4xl font-bold'>Certified</h1>
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