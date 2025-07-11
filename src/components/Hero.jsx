import React from "react";
import Navbar from "./Navbar";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

function Hero() {
    const icons = [Facebook, Twitter, Linkedin, Instagram];
  return (
    <div className="relative">
      <img src="bg_img.jpg" alt="Background Image" className="w-full h-auto" />

      <div className="absolute top-0 left-0 z-10 w-full">
        <Navbar />
        <div className="flex">
        {/* icnons */}
        <div className="flex flex-col mt-[100px] pl-[30px]">
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
        <div className="mt-20 ml-24">
          <h1 className="flex flex-col text-white text-6xl font-bold">
            <span>A New Place For</span>
            <span> Professional Gamers</span>
          </h1>
          <p className="text-xl  text-white flex flex-col mt-[30px]">
            <span>Duis aute irure dolor in reprehenderit in voluptate velit esse</span>
            <span>dolore eu fugiat nulla pariatur eiusmod.</span>
          </p>
          <div className=" flex gap-2 text-white text-lg font-semibold cursor-pointer mt-[30px] ">
          <button className="h-[54px] w-[160px] bg-transparent border-2 border-red-600 hover:bg-red-600 cursor-pointer">Read More</button>
          <button className="h-[54px] w-[160px] bg-red-500 hover:bg-transparent border border-red-600 cursor-pointer">Join Us</button></div>
        </div>
      </div></div>
    </div>
  );
}

export default Hero;
