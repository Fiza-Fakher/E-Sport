import React from 'react'

function Blog() {
    const blog=[
        {'title':'Lorem, ipsum dolor sit amet  elit. Laudantium.','img':'blog1.jpg'},
        {'title':'Lorem, ipsum dolor sit amet  elit. Laudantium.','img':'blog2.jpg'},
        {'title':'Lorem, ipsum dolor sit amet  elit. Laudantium.','img':'blog3.jpg'}
    ]
  return (
    <>
      <main className='flex flex-col justify-center items-center bg-black text-white pt-[10px] min-h-[700px]'>
        <h1 className='font-bold text-4xl'>Latest Blog Posts</h1>
                <div className="flex justify-center items-center mt-5 mb-8">
          <div className="h-[1px] w-[60px] mr-4 bg-white"></div>
          <img src="logo.png" alt="Logo" className="w-[50px] h-[60px]" />
          <div className="h-[1px] w-[60px] ml-4 bg-white"></div>
        </div>
<div className='flex justify-center items-center gap-12 flex-col md:flex-row' >
    {blog.map((items,index)=>(
        <div className='flex flex-col justify-center items-center'key={index}>
            <img src={items.img} alt="" />
            <h1 className='text-md font-bold'>{items.title}</h1>
        </div>
    ))}
        </div>
      </main>
    </>
  )
}

export default Blog
