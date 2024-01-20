import React from 'react'

const BackEnd = () => {
  return (
    <div className='transparentglass w-full flex flex-col gap-11'>
      <h1 className='text-4xl font-bold space-x-1 font-mono'>Backend Skills</h1>
      <div className='cardtrans flex flex-col gap-7 p-3 rounded-lg'>
        <h1 className='text-2xl font-bold font-mono'>NodeJs</h1>
        <div className='flex flex-col gap-5'>
          <h2 className='text-xl font-mono font-semibold'>Nodejs Credibility</h2>
          <p className='text-lg font-mono font-medium w-[90%]'>Explore how Node.js enables JavaScript to be executed on the server, unifying the development experience across the entire web stack.</p>
        </div>
      </div>
      <div className='cardtrans flex flex-col gap-7 p-3 rounded-lg'>
        <h1 className='text-2xl font-bold font-mono'>Express</h1>
        <div className='flex flex-col gap-5'>
          <h2 className='text-xl font-mono font-semibold'>Express.js Framework</h2>
          <p className='text-lg font-mono font-medium w-[90%]'>Dive into Express.js, a minimal and flexible Node.js web application framework. Learn how Express simplifies the process of building robust APIs and web applications with its middleware system and routing capabilities.</p>
        </div>
      </div>
      <div className='cardtrans flex flex-col gap-7 p-3 rounded-lg'>
        <h1 className='text-2xl font-bold font-mono'>Database</h1>
        <div  className='flex flex-col gap-5'>
          <h2 className='text-xl font-mono font-semibold'>Database integration (e.g., MongoDB, MySQL)</h2>
          <p className='text-lg font-mono font-medium w-[90%]'>Connect Node.js applications to databases like MongoDB and MySQL. Understand the principles of CRUD operations and how to interact with databases asynchronously.</p>
        </div>
      </div>
      <div className='cardtrans flex flex-col gap-7 p-3 rounded-lg'>
        <h1 className='text-2xl font-bold font-mono'>Security</h1>
        <div  className='flex flex-col gap-5'>
          <h2 className='text-xl font-mono font-semibold'>Authentication and Authorization:</h2>
          <p className='text-lg font-mono font-medium w-[90%]'>Secure your Node.js applications by implementing authentication and authorization mechanisms. Explore popular authentication strategies, such as OAuth, JWT, and session-based authentication.</p>
        </div>
      </div>
    </div>
  )
}

export default BackEnd