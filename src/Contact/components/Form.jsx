import React from "react";

function Form() {
  const data = [
    { title: "Location", des: "King Street, Melbourne,", des1: "Australia",'img':'logo1.png' },
    { title: "Phone", des: "0-589-96369-95823", des1: "0-589-96369-95823",'img':'logo2.png' },
    {title: "Email",des: "Croxesports@gmail.com",des1: "info@croxepsorts@gmail.com",'img':'logo3.png' }
  ];
  return (
    <>
      <main className="bg-gray-900 flex justify-center items-center flex-col h-[200vh]">
        <section className="bg-black text-white w-[80%] h-[100vh] flex flex-col justify-center items-center border-2 border-red-600">
          <h1 className="font-bold text-4xl">Get In Touch With Us</h1>
          <div className="flex justify-center items-center mt-4">
            <div className="h-[1px] w-[60px] mr-[15px] bg-white"></div>
            <img src="logo.png" alt="" className="w-[50px] h-[60px]" />
            <div className="h-[1px] w-[60px] mr-[15px] bg-white"></div>
          </div>
          <div className=" flex gap-4 mt-10">
            <input
              type="text"
              placeholder="Name"
              className="h-[55px] w-[320px] border-2 border-gray-500 pl-2"
            />
            <input
              type="email"
              placeholder="Email"
              className="h-[55px] w-[320px] border-2 border-gray-500 pl-2"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="h-[55px] w-[320px] border-2 border-gray-500 pl-2"
            />
          </div>
          <input
            type="text"
            placeholder="Message"
            className="h-[30vh] w-[92%] border-2 border-gray-600 mt-10 pl-3 pb-30"
          />
          <button className="bg-red-600 h-[60px] w-[170px] font-semibold text-lg hover:bg-transparent cursor-pointer border-2 border-red-600 mt-10">
            Submit Now
          </button>
        </section>
        <section className="flex justify-center items-center gap-6 mt-12">
          {data.map((items, index) => (
            <div
              className="w-[350px] h-[300px] bg-gray-600 flex flex-col justify-center items-center "
              key={index}
            >
              <img src={items.img} alt="" />
              <h1 className="font-bold text-white text-3xl mt-6">{items.title}</h1>
              <h5 className="text-white text-xl mt-2">{items.des}</h5>
              <h5 className="text-white text-xl mt-1">{items.des1}</h5>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

export default Form;
