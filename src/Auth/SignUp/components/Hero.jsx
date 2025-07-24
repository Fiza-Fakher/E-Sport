import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <>
      <main className='bg-black flex flex-col justify-center items-center text-white px-4 py-8 min-h-screen'>
        <Link to='/'>
          <img src="logo.png" alt="Logo" className='w-[100px] md:w-[140px]' />
        </Link>

        <h1 className='text-2xl md:text-4xl font-bold text-center mt-4'>Create Your FREE Account</h1>

        <div className='bg-cyan-950 w-full md:w-[50%] border-2 border-red-600 flex flex-col justify-center items-center mt-6 p-4 md:p-6'>
          <input type="text" placeholder='Name' className='border-2 border-gray-500 h-[50px] w-full mb-3 px-3' required />
          <input type="email" placeholder='Email' required className='border-2 border-gray-500 h-[50px] w-full mb-3 px-3' />
          <input type="password" placeholder='Password' className='border-2 border-gray-500 h-[50px] w-full mb-3 px-3' />
          <input type="password" placeholder='Confirm Password' className='border-2 border-gray-500 h-[50px] w-full mb-3 px-3' />

          <div className='flex items-start gap-2 mt-2 text-sm w-full'>
            <input type="checkbox" />
            <p>Inform me about new features and updates (max. twice a month)</p>
          </div>

          <button className='h-[50px] w-full bg-red-600 mt-4 hover:bg-transparent border-2 border-red-600 cursor-pointer'>
            Register
          </button>
        </div>

        <p className="text-base mt-4 cursor-pointer">
          <Link to="/login">Already have an account?</Link>
        </p>

        <div className="bg-white h-[1px] w-full mt-2"></div>
      </main>
    </>
  )
}

export default Hero
