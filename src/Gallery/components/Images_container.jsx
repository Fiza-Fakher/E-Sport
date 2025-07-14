import React from 'react'

function Images_container() {
  return (
    <>
    <main className='bg-black flex flex-col justify-center items-center  h-[250vh]'>
        <section className='flex gap-10'>
            <img src="gallery1.jpg" alt="" />
             <img src="gallery2.jpg" alt="" />
        </section>
        <section className='flex gap-10 mt-10'>
             <img src="gallery3.jpg" alt="" />
              <img src="gallery4.jpg" alt="" />
               <img src="gallery5.jpg" alt="" />
        </section>
        <section className='flex gap-10 mt-10'>
             <img src="gallery6.jpg" alt="" />
              <img src="gallery7.jpg" alt="" />
        </section>
    </main>
    </>
  )
}

export default Images_container
