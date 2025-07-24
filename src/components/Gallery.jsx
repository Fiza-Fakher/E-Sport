import React from "react";

function Gallery() {
  return (
    <>
      <main className="bg-gray-500 h-[80%] pt-[40px]">
        <h1 className="flex justify-center items-center text-white text-4xl font-bold">
          Check Our Live Streaming
        </h1>
        <div className="flex justify-center items-center mt-5 mb-8">
          <div className="h-[1px] w-[60px] mr-4 bg-white"></div>
          <img src="logo.png" alt="Logo" className="w-[50px] h-[60px]" />
          <div className="h-[1px] w-[60px] ml-4 bg-white"></div>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className="relative">
            <a href="https://youtu.be/CWOb5HxurO4?si=hvJylmrJrit7_Zg5" target="blank"><img src="stream1.png" alt="" className="relative z-0" /></a>
            <div className="absolute md:top-120 md:left-30 left-10 top-60 z-10">
              <button className="bg-red-600 h-[35px] w-[75px] text-white font-semibold">
                Match
              </button>
              <h1 className="text-white text-3xl font-bold pt-2 ">
                Team League - Fortnite Game
              </h1>
            </div>
          </div>
          <div className="md:flex md:flex-row flex-col">
            <div className="relative">
            <a href="https://youtu.be/CWOb5HxurO4?si=hvJylmrJrit7_Zg5" target="blank"><img src="stream2.png" alt="" /></a>
            <div className="absolute top-121 left-20 z-10">
                <button className="bg-red-600 h-[35px] w-[75px] text-white font-semibold">
                  Match
                </button>
                <h1 className="text-white text-3xl pt-5 ">
           Call of Duty Tournament
                </h1>
              </div></div>
            <div className="relative">
            <a href="https://youtu.be/CWOb5HxurO4?si=hvJylmrJrit7_Zg5" target="blank"><img src="stream3.png" alt="" /></a>
            <div className="absolute top-121 left-20 z-10">
                <button className="bg-red-600 h-[35px] w-[75px] text-white font-semibold">
                  Match
                </button>
                <h1 className="text-white text-3xl pt-5 ">
                 Anthem Game War
                </h1>
              </div></div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Gallery;
