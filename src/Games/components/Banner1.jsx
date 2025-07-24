import React from "react";

function Banner1() {
  return (
    <>
      <main className="bg-black text-white flex gap-14 justify-center flex-col md:flex- pb-4">
        <div>
        <img src="b_img.jpg" alt="" /></div>
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-4xl font-bold flex flex-col mt-12">
            <span>Play Any Game Which</span>
            <span className="mt-2">You Want</span>
          </h1>
          <div className="flex justify-center items-center mt-5 mr-48">
            <div className="h-[1px] w-[60px] mr-[15px] bg-white"></div>
            <img src="logo.png" alt="" className="w-[50px] h-[60px]" />
            <div className="h-[1px] w-[60px] mr-[15px] bg-white"></div>
          </div>
          <p className="flex flex-col mt-4 font-semibold text-lg font-sans">
            <span>Quis nostrum exercitationem ullam corporis suscit labor</span>
            <span>Quis nostrum exercitationem ullam corporis suscit labor</span>
            <span>Quis nostrum exercitationem ullam corporis suscit labor</span>
            <span>Quis nostrum exercitationem ullam corporis suscit labor</span>
            <span>anim id est laborum.</span>
          </p>

          <p className="flex flex-col mt-4 font-semibold text-lg font-sans">
            <span>Quis nostrum exercitationem ullam corporis suscit labor</span>
            <span>anim id est laborum.</span>
          </p>
          <button className="bg-red-600 text-white w-[165px] h-[60px] mt-14 hover:bg-transparent border-2 border-red-600 cursor-pointer">
            Join Now
          </button>
        </div>
      </main>
    </>
  );
}

export default Banner1;
