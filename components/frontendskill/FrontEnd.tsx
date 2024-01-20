import React from 'react'

const FrontEnd = () => {
  return (
    <div className='transparentglass w-full flex flex-col gap-11'>
      <h1 className='text-4xl font-bold space-x-1 font-mono'>Frontend Skills</h1>
      <div className='cardtrans flex flex-col gap-7 p-3 rounded-lg'>
        <h1 className='text-2xl font-bold font-mono'>HTML</h1>
        <div className='flex flex-col gap-5'>
          <h2 className='text-xl font-mono font-semibold'>Responsive Design with HTML</h2>
          <p className='text-lg font-mono font-medium w-[90%]'>Dive into the realm of responsive web design, discovering how HTML plays a pivotal role in creating websites that adapt seamlessly to various devices and screen sizes.</p>
        </div>
      </div>
      <div className='cardtrans flex flex-col gap-7 p-3 rounded-lg'>
        <h1 className='text-2xl font-bold font-mono'>CSS</h1>
        <div className='flex flex-col gap-5'>
          <h2 className='text-xl font-mono font-semibold'>Animation and Transitions</h2>
          <p className='text-lg font-mono font-medium w-[90%]'>Dive into the world of CSS animations and transitions. Learn how to breathe life into your web designs with smooth transitions and eye-catching animations that captivate users.</p>
        </div>
      </div>
      <div className='cardtrans flex flex-col gap-7 p-3 rounded-lg'>
        <h1 className='text-2xl font-bold font-mono'>JAVASCRIPT</h1>
        <div  className='flex flex-col gap-5'>
          <h2 className='text-xl font-mono font-semibold'>JavaScript Libraries (jQuery)</h2>
          <p className='text-lg font-mono font-medium w-[90%]'>Explore the utility of JavaScript libraries in simplifying common tasks and cross-browser compatibility. Dive into the features and applications of widely-used libraries like jQuery.</p>
        </div>
      </div>
      <div className='cardtrans flex flex-col gap-7 p-3 rounded-lg'>
        <h1 className='text-2xl font-bold font-mono'>REACT , FRAMEWORK NEXTJS</h1>
        <div className='flex flex-col gap-5'>
          <h2 className='text-xl font-mono font-semibold'>Static Site Generation (SSG) and Server-Side Rendering (SSR) in Next.js, API Routes and Data Fetching in Next.js</h2>
          <p className='text-lg font-mono font-medium w-[90%]'>Explore the benefits of static site generation and server-side rendering in Next.js. Learn how to optimize performance by pre-rendering pages at build time or on-demand.Next.js API routes and data fetching strategies. Understand how to seamlessly integrate backend functionality and fetch data for your applications while maintaining a unified codebase.</p>
        </div>
      </div>
    </div>
  )
}

export default FrontEnd