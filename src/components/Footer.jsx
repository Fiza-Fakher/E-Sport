import React from 'react'
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

function Footer() {
  const link1=['Home','About','Games','Gallery']
  const link2=['Detail','Contact']
 const icons = [Facebook, Twitter, Linkedin, Instagram] 
  return (
    <>
      <footer className='bg-red-600 pt-6 text-white w-full h-[300px] flex flex-col justify-center items-center'>
<div className='flex justify-center items-center gap-25'>
  <ul className='flex gap-4 font-semibold text-xl'>
    {link1.map((items,index)=>(
      <li key={index} className='hover:text-black cursor-pointer'>{items}</li>
    ))}
  </ul>
<img src="logo.png" alt="" />
<div className='flex '>
  <ul className='flex gap-4 font-semibold text-xl'>
    {link2.map((items,index)=>(
      <li key={index}className='hover:text-black cursor-pointer'>{items}</li>
    ))}
  </ul>
<ul className='flex gap-6 ml-6'>
  {icons.map((Icon, index) => (
    <li key={index}>
      <div className="w-10 h-10 flex items-center justify-center border-2 border-white rounded-full hover:bg-black cursor-pointer hover:border-black">
        <Icon  className="text-white " />
      </div>
    </li>
  ))}
</ul>
  </div>
</div>
<div className='w-full pt-4'>
  <div className='h-[2px] w-full bg-gray-400'></div>
<h6 className='text-gray-400  text-lg font-semibold flex justify-center items-center pt-7'>Copyright 2021, Crox Esports. All Rights Reserved.</h6>
</div>
      </footer>
    </>
  )
}

export default Footer
