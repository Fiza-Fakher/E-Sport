import React from "react";
import Navbar from "../../components/Navbar";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { ArrowRightIcon } from "lucide-react";

function Hero() {
  const icons = [Facebook, Twitter, Linkedin, Instagram];
  return (
    <div className="relative ">
      <img src="about_bg.jpg" alt="Background Image" className="w-full h-[700px]" />

      <div className="absolute top-0 left-0 z-10 w-full">
        <Navbar />
        <div className="flex">
          {/* icnons */}
          <div className="flex flex-col mt-[100px] pl-[30px]">
            {icons.map((Icon, index) => (
              <div
                key={index}
                className="w-12 h-12 rounded-full mt-3 flex items-center justify-center border-white border-2  text-white font-bold hover:bg-red-600 hover:text-white hover:border-red-600 cursor-pointer"
              >
                <Icon className="w-5 h-5" />
              </div>
            ))}
          </div>
          {/* content */}
          <div className="mt-20 ml-24">
            <h1 className="flex flex-col text-white text-6xl font-bold">
              Our Gallery
            </h1>
            <button className="w-[190px] h-[45px] border flex justify-center items-center mt-10 text-white font-bold text-lg bg-[#211A1A] border-[#211A1A]">
              
              Home <ArrowRightIcon className="ml-2 mr-2 text-xl font-bold"  /> Gallery
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
