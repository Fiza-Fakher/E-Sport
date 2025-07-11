import React from "react";

function Banner3() {
  return (
    <>
      <main className="flex justify-center items-center flex-col bg-yellow-800 pt-8 h-[450px]">
        <h4 className="text-white text-xl font-bold">Join Us As a Super Fans And</h4>
        <h2 className="text-white text-5xl font-bold pt-2">Get All The Benefits</h2>
        <div className="flex justify-center items-center mt-5 mb-8">
          <div className="h-[1px] w-[60px] mr-4 bg-white"></div>
          <img src="logo.png" alt="Logo" className="w-[50px] h-[60px]" />
          <div className="h-[1px] w-[60px] ml-4 bg-white"></div>
        </div>
        <p className="flex flex-col text-white text-lg font-serif">
          <span>
            Quis nostrum exercitationem ullam corporis suscit labor iosam, nisi
            ut aliquid ex ea commodi conse aute irure dolor
          </span>
          <span>
            in reprehenderit in voluptateesse occaecat cuida at non proident,
            sunt in culpa qui officia deserun.
          </span>
        </p>
        <button className="bg-red-600 h-[60px] w-[160px] text-white cursor-pointer mt-6 hover:bg-black hover:border-2 hover:border-red-600">
          Join Now
        </button>
      </main>
    </>
  );
}

export default Banner3;
