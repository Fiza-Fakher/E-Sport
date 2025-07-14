import React from "react";

function Upcoming() {
  return (
    <>
      <main className="bg-emerald-900 text-white flex justify-center items-center flex-col  h-[200vh] ">
        <h1 className="font-bold text-4xl ">Upcoming Games</h1>
        <div className="flex justify-center items-center mt-8">
          <div className="h-[1px] w-[60px] mr-[15px] bg-white"></div>
          <img src="logo.png" alt="" className="w-[50px] h-[60px]" />
          <div className="h-[1px] w-[60px] mr-[15px] bg-white"></div>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-14 mt-8">
            <div className="relative">
              <img src="upcoming1.png" alt="" className="w-full" />
              <h3 className="absolute bottom-4 left-4 text-white font-semibold text-3xl">
                Iron Force
              </h3>
            </div>

            <div className="relative">
              <img src="upcoming2.png" alt="" className="w-full" />
              <h3 className="absolute bottom-4 left-4 text-white font-semibold text-3xl">
                Inquisition
              </h3>
            </div>
          </div>

          <div className="flex gap-14 mt-8">
            <div className="relative">
              <img src="upcoming1.png" alt="" className="w-full" />
              <h3 className="absolute bottom-4 left-4 text-white font-semibold text-3xl">
                Iron Force
              </h3>
            </div>

            <div className="relative">
              <img src="upcoming2.png" alt="" className="w-full" />
              <h3 className="absolute bottom-4 left-4 text-white font-semibold text-3xl">
                Inquisition
              </h3>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Upcoming;