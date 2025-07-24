import React from "react";
import Navbar from "./Navbar";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

function Hero() {
  const icons = [Facebook, Twitter, Linkedin, Instagram];
  return (
    <div className="relative">
      <img src="bg_img.jpg" alt="Background Image" className="w-full min-h-[500px]" />

      <div className="absolute top-0 left-0 z-10 w-full">
        <Navbar />
        <div className="flex">
          {/* icnons */}
          <div className="flex-col mt-[100px] pl-[30px] hidden md:flex">
            {icons.map((Icon, index) => (
              <div
                key={index}
                className="w-12 h-12 rounded-full mt-5 flex items-center justify-center border-white border-2  text-white font-bold hover:bg-red-600 hover:text-white hover:border-red-600 cursor-pointer"
              >
                <Icon className="w-5 h-5" />
              </div>
            ))}
          </div>
          {/* content */}
          <div className="md:mt-20 ml-24 mt-0">
            <h1 className="flex flex-col text-white text-3xl md:text-6xl font-bold">
              <span>A New Place For</span>
              <span> Professional Gamers</span>
            </h1>
            <p className="md:text-xl text-lg  text-white flex flex-col md:mt-[30px] mt-[5px]">
              <span>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
              </span>
              <span>dolore eu fugiat nulla pariatur eiusmod.</span>
            </p>
            <div className=" flex gap-2 text-white text-lg font-semibold cursor-pointer mt-[30px] ">
              <button className="md:h-[54px] md:w-[160px] w-[120px] h-[50px] bg-transparent border-2 border-red-600 hover:bg-red-600 cursor-pointer">
                Read More
              </button>
              <button className="md:h-[54px] md:w-[160px] w-[120px] h-[50px] bg-red-500 hover:bg-transparent border border-red-600 cursor-pointer">
                Join Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
