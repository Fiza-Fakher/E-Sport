import React from "react";

function Form() {
  const data = [
    { title: "Location", des: "King Street, Melbourne,", des1: "Australia", img: "logo1.png" },
    { title: "Phone", des: "0-589-96369-95823", des1: "0-589-96369-95823", img: "logo2.png" },
    { title: "Email", des: "Croxesports@gmail.com", des1: "info@croxepsorts@gmail.com", img: "logo3.png" }
  ];

  return (
    <main className="bg-gray-900 flex flex-col items-center py-12 px-4">
      <section className="bg-black text-white w-full max-w-6xl flex flex-col justify-center items-center border-2 border-red-600 p-6">
        <h1 className="font-bold text-3xl sm:text-4xl text-center">Get In Touch With Us</h1>

        <div className="flex items-center mt-4">
          <div className="h-[1px] w-[40px] sm:w-[60px] mr-3 bg-white"></div>
          <img src="logo.png" alt="" className="w-[40px] sm:w-[50px] h-[50px] sm:h-[60px]" />
          <div className="h-[1px] w-[40px] sm:w-[60px] ml-3 bg-white"></div>
        </div>

        {/* Responsive Inputs */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10 w-full">
          <input
            type="text"
            placeholder="Name"
            className="h-[55px] w-full sm:w-[320px] border-2 border-gray-500 pl-2"
          />
          <input
            type="email"
            placeholder="Email"
            className="h-[55px] w-full sm:w-[320px] border-2 border-gray-500 pl-2"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="h-[55px] w-full sm:w-[320px] border-2 border-gray-500 pl-2"
          />
        </div>

        <textarea
          placeholder="Message"
          className="h-[30vh] w-full border-2 border-gray-600 mt-10 pl-3 pt-3 resize-none"
        />

        <button className="bg-red-600 h-[50px] w-[150px] font-semibold text-lg hover:bg-transparent cursor-pointer border-2 border-red-600 mt-10">
          Submit Now
        </button>
      </section>

      {/* Info Cards */}
      <section className="flex flex-wrap justify-center items-center gap-6 mt-12 w-full px-2">
        {data.map((items, index) => (
          <div
            className="w-full sm:w-[300px] h-[300px] bg-gray-600 flex flex-col justify-center items-center text-center p-4"
            key={index}
          >
            <img src={items.img} alt="" className="w-[50px]" />
            <h1 className="font-bold text-white text-2xl mt-6">{items.title}</h1>
            <h5 className="text-white text-lg mt-2">{items.des}</h5>
            <h5 className="text-white text-lg mt-1">{items.des1}</h5>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Form;
