import React from 'react'

function Review() {
  return (
    <>
      <main className='text-white flex flex-col justify-center items-center bg-blue-950 h-[100vh]'>
        <section>
            <h1 className='text-5xl font-bold'>Clients Reviews</h1>
            <div className="flex justify-center items-center mt-8">
          <div className="h-[1px] w-[60px] mr-[15px] bg-white"></div>
          <img src="logo.png" alt="" className="w-[50px] h-[60px]" />
          <div className="h-[1px] w-[60px] mr-[15px] bg-white"></div>
        </div>
        </section>
      </main>
    </>
  )
}

export default Review
