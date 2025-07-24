import React from 'react'

function Banner1() {
    const logos=['about_logo1.png','about_logo2.png','about_logo3.png','about_logo4.png','about_logo4.png']
  return (
    <>
      <main className=' min-h-[870px] bg-black text-white flex flex-col justify-center items-center pb-4 '>
<img src="about_pic.png" alt="" className=' cursor-pointer' />
<div className='flex gap-25 mt-2 md:flex-row flex-col'>
    {logos.map((item,index)=>(
        <img src={item} alt="" key={index} />
    ))}
</div>
      </main>
    </>
  )
}

export default Banner1
