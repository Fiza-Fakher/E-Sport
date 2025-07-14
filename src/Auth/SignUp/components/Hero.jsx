import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <>
      <main className='bg-black  flex flex-col justify-center items-center text-white'>
        <img src="logo.png" alt="" />
        <h1 className='text-4xl font-bold'>Create Your FREE Account</h1>
        <div className='bg-cyan-950 h-[80vh] w-[50%] border-2 border-red-600 flex flex-col justify-center items-center mt-2'>
          <input type="text" placeholder='Name' className='border-2 border-gray-500 h-[60px] w-[80%]' required/>
          <input type="email" placeholder='Email' required className='border-2 border-gray-500 h-[60px] w-[80%] mt-2' />
          <input type="password" placeholder='Password' className='border-2 border-gray-500 h-[60px] w-[80%] mt-2'/>
          <input type="password" placeholder=' Confirm Password' className='border-2 border-gray-500 h-[60px] w-[80%] mt-2'/>
          <div className='flex gap-1 mt-2 text-lg pr-24'>
            <input type="checkbox" />
            <p className=''>Inform me about new features and updates (max. twice a month)</p>
          </div>
          <button className='h-[60px] w-[80%] bg-red-600 mt-2 hover:bg-transparent border-2 border-red-600 cursor-pointer'> Register</button>
        </div>
        <div>
          <p className="text-lg mt-2 cursor-pointer">
        <Link to="/login">Already have an account</Link>

          </p>
          <div className="bg-white h-[1px] "></div>
        </div>
      </main>
    </>
  )
}

export default Hero
