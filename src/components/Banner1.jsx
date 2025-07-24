import React from "react";

function Banner1() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center bg-yellow-600 pt-14 gap-8 min-h-[700px] pb-[20px]">
      
      {/* Image Section */}
      <div>
        <img
          src="b_img.jpg"
          alt="Banner"
          className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[450px] h-auto object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col text-white text-center md:text-left max-w-xl">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl font-sans leading-tight">
          <span>Gaming Tournaments</span>
          <span className="block">On One Place.</span>
        </h1>

        <div className="flex justify-center md:justify-start items-center mt-5">
          <div className="h-[1px] w-[40px] sm:w-[60px] mr-4 bg-white"></div>
          <img src="logo.png" alt="Logo" className="w-[40px] sm:w-[50px] h-[50px] sm:h-[60px]" />
          <div className="h-[1px] w-[40px] sm:w-[60px] ml-4 bg-white"></div>
        </div>

        <p className="text-base sm:text-lg font-serif mt-4 space-y-1">
          <span>Quis nostrum exercitationem ullam corporis suscit</span>
          <span>labor iosam, nisi ut aliquid ex ea commodi conse aute</span>
          <span>irure dolor in reprehenderit in voluptateesse occaecat</span>
          <span>cuida at non proident, sunt in culpa qui officia deserunt</span>
        </p>

        <p className="text-base sm:text-lg font-serif pt-4 space-y-1">
          <span>Duis aute irure dolor in reprehenderit in voluptate velit</span>
          <span>esse cillum dolore eu fugiat nulle ariatur.</span>
        </p>

        <button className="bg-red-600 mt-6 font-semibold text-base sm:text-lg h-[50px] w-[150px] mx-auto md:mx-0 hover:bg-transparent hover:border-2 hover:border-red-600  text-white cursor-pointer">
          Read More
        </button>
      </div>
    </div>
  );
}

export default Banner1;
