import React from "react";

function Form() {
  return (
    <>
      <main className="bg-black flex justify-center items-center flex-col text-white min-h-[500px] pt-10 pb-4">
        <h1 className="text-white font-bold md:text-4xl text-xl text-center">
          Get In Touch With Us
        </h1>
        <div className="flex justify-center items-center mt-5 mb-8">
          <div className="h-[1px] w-[60px] mr-4 bg-white"></div>
          <img src="logo.png" alt="Logo" className="w-[50px] h-[60px]" />
          <div className="h-[1px] w-[60px] ml-4 bg-white"></div>
        </div>

        {/* Form Starts Here */}
        <form className="w-full max-w-4xl">
          <div className="flex flex-col md:flex-row gap-4 mb-4 justify-center items-center">
            <input
              type="text"
              placeholder="Name"
              className="flex-1 px-4 py-2 bg-black text-white border-2 border-gray-500 focus:outline-none w-[60%] "
            />
            <input
              type="email"
              placeholder="Email"
              className="flex-1 px-4 py-2 bg-black text-white border-2 border-gray-500 focus:outline-none w-[60%]"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="flex-1 px-4 py-2 bg-black text-white border-2 border-gray-500 focus:outline-none w-[60%]"
            />
          </div>
<div className="flex justify-center items-center">
          <textarea
            placeholder="Message"
            rows="5"
            className="md:w-full px-4 py-2 bg-black text-white border-2 border-gray-500  mb-6 focus:outline-none w-[60%] "
          ></textarea></div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-red-600 text-white h-[60px] w-[170px] font-semibold cursor-pointer hover:border-red-600 hover:border-2 hover:bg-transparent "
            >
              Submit Now
            </button>
          </div>
        </form>
      </main>
    </>
  );
}

export default Form;
