import React from 'react'

function Banner2() {
    const data=[
        {'numbers':'80+','title':'Team Members'},
        {'numbers':'30+','title':'Featured Games'},
        {'numbers':'40+','title':'Regular Clinets'},
        {'numbers':'50+','title':'Win Awards'}
    ]
  return (
    <>
      <main className='bg-yellow-900 flex flex-col  justify-center items-center text-white h-[840px]'>
        <section className='gap-14 flex '>
        <div>
            <h1 className='flex flex-col text-5xl font-bold'>
                <span>Play Fun And Enjoy</span>
                <span className='mt-2'>The Games</span>
            </h1>
            <div className="flex justify-center items-center mt-5 mr-[200px]">
      <div className="h-[1px] w-[60px] mr-[15px] bg-white"></div>
      <img src="logo.png" alt="" className="w-[50px] h-[60px]" />
      <div className="h-[1px] w-[60px] mr-[15px] bg-white"></div>
    </div>
    <p className='flex flex-col mt-2 font-semibold font-sans text-lg'>
        <span>Quis nostrum exercitationem ullam corporis suscit labor</span>
    <span>iosam, nisi ut aliquid ex ea commodi conse aute irure</span>
    <span>iosam, nisi ut aliquid ex ea commodi conse aute irure</span>
    <span>iosam, nisi ut aliquid ex ea commodi conse aute irure</span>
    <span>anim id est laborum.</span>
    </p>

<p className='flex flex-col font-semibold font-sans text-lg mt-3'>
    <span>iosam, nisi ut aliquid ex ea commodi conse aute irure</span>
    <span>iosam, nisi ut aliquid ex ea commodi conse aute irure</span>
    <span>iosam, nisi ut aliquid ex ea commodi conse aute irure</span>
    <span>nisi ut aliuid ex ea commodi conseuatur.</span>
</p>
<button className='bg-red-600 text-white h-[60px] w-[168px] mt-6 font-bold text-lg hover:bg-transparent hover:border-2 hover:border-red-600 cursor-pointer'>Join Now</button>
        </div>
        <div>
            <img src="about_img.jpg" alt="" className='h-[550px]' /> </div>
            </section>
        <section>
            <div className='flex gap-8 mt-28 font-bold'>
{data.map((items,index)=>(
    <div key={index} className='flex flex-col justify-center items-center mr-[90px]'>
    <h5 className='text-5xl'>{items.numbers}</h5>
    <h3 className='mt-4 text-xl'>{items.title}</h3>
   </div>
))}
</div>
        </section>
      </main>

        
    </>
  )
}

export default Banner2
