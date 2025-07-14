import React from 'react'

function Tournament() {
  return (
    <>
      <main className='bg-black text-white flex gap-6 items-center justify-center'>
<section>
    <img src="tournament.png" alt="" />
</section>
<section>
    <h1 className='font-bold text-4xl'>Battlefield-4 Tournament</h1>
    <div className='flex gap-10 mt-6'>
        <button className='bg-red-600 h-[70px] w-[200px]'>32 Players</button>
        <button className='bg-red-600 h-[70px] w-[200px]'>32 Players</button>
    </div>
    <p className='flex flex-col mt-6 font-sans font-semibold text-lg'>
        <span>Quis nostrum exercitationem ullam corporis suscit labor</span>
        <span>Quis nostrum exercitationem ullam corporis suscit labor</span>
        <span>Quis nostrum exercitationem ullam corporis suscit labor</span>
        <span>Quis nostrum exercitationem ullam corporis suscit labor</span>
        <span>Quis nostrum exercitatio</span>
    </p>
    <p className='flex flex-col mt-6 font-sans font-semibold text-lg'>
        <span>Quis nostrum exercitationem ullam corporis suscit labor</span>
        <span>Quis nostrum exercitationem ullam corporis suscit labor</span>
        <span>Quis nostrum exercitationem ullam</span>
    </p>
    <button className='bg-transparent mt-8 border-2 border-red-600 h-[60px] w-[165px] hover:bg-red-600 cursor-pointer'>Join Now</button>
</section>
      </main>
    </>
  )
}

export default Tournament
