"use client"
import React, { useState } from 'react'

const Abouttext = () => {
  const [isReadMore, setReadMore] = useState(false)

  const toggleRead = () => {
    setReadMore(prevState => !prevState)
  }
  return (
  <div className='flex items-center gap-5 flex-col w-[100%] transparentglass justify-center'>
    <h1 className='text-4xl font-bold font-mono'>
      About
    </h1>
    <div>
      {isReadMore ? <p className='font-mono text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam repudiandae atque vel libero odio ab maxime eum ut, quasi quo totam doloremque? Nam, corrupti quisquam tempore exercitationem voluptate atque nisi facere enim excepturi culpa nobis. Quaerat illo debitis expedita cum porro a. Sapiente nesciunt quis qui ab eius, dolor dolore. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero rem sapiente maiores natus aliquam veniam ipsum suscipit delectus! Nesciunt labore, nisi esse qui, possimus eos distinctio debitis ad, iste error voluptates neque laudantium expedita tempore impedit sed velit provident dignissimos placeat culpa repellat beatae. Voluptatum voluptatem quas inventore accusamus molestias!</p> : <p className='font-mono text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam repudiandae atque vel libero odio ab maxime eum ut, quasi quo totam doloremque? Nam, corrupti quisquam tempore exercitationem voluptate atque nisi facere enim excepturi culpa nobis. Quaerat illo debitis expedita cum porro a. Sapiente nesciunt quis qui ab eius, dolor dolore.</p>}
      <span onClick={toggleRead} style={{fontSize:".7rem", fontWeight:"bold", cursor:"pointer"}}>{isReadMore ? "Read less" : "...Read more"}</span>
    </div>
  </div>
  )
}

export default Abouttext