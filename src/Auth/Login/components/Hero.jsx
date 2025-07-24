import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <main className="bg-black text-white flex justify-center items-center flex-col h-[100vh]">
       <Link to='/'> <img src="logo.png" alt="" /></Link>
        <h1 className="font-bold text-4xl">Welcome Back !</h1>
        <div className="border-red-600 border-2 mt-8 h-[310px] w-[445px] flex flex-col justify-center items-center ">
          <input
            type="email"
            placeholder="Email"
            className="h-[60px] w-[80%] border-2 border-gray-400 text-white pl-4"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="h-[60px] w-[80%] border-2 border-gray-400 text-white pl-4 mt-4"
            required
          />
          <button className="bg-red-600 h-[60px] w-[350px] mt-4 hover:bg-transparent border-2 border-red-600 cursor-pointer font-semibold">
            Login
          </button>
          <div className="flex gap-48 mt-2">
            <div className="flex gap-2">
              <input type="checkbox" />
              <span>Remember Me</span>
            </div>
            <span className="text-red-600 cursor-pointer">Lost Password?</span>
          </div>
        </div>
        <div>
          <p className="text-lg mt-2 cursor-pointer">
        <Link to="/signup">Join now, create your FREE account</Link>

          </p>
          <div className="bg-white h-[1px] "></div>
        </div>
      </main>
    </>
  );
}

export default Hero;
