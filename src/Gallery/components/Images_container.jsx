import React from 'react'

function Images_container() {
  return (
    <>
    <main className='bg-black flex flex-col justify-center items-center min-h-[250vh] pt-6 pb-4 '>
        <section className='flex gap-10 flex-col md:flex-row'>
            <img src="gallery1.jpg" alt="" />
             <img src="gallery2.jpg" alt="" />
        </section>
        <section className='flex gap-10 mt-10 flex-col md:flex-row'>
             <img src="gallery3.jpg" alt="" />
              <img src="gallery4.jpg" alt="" />
               <img src="gallery5.jpg" alt="" />
        </section>
        <section className='flex gap-10 mt-10 flex-col md:flex-row'>
             <img src="gallery6.jpg" alt="" />
              <img src="gallery7.jpg" alt="" />
        </section>
    </main>
    </>
  )
}

export default Images_container
