import React from "react";

function Upcoming() {
  return (
    <>
      <main className="bg-emerald-900 text-white flex justify-center items-center flex-col min-h-screen py-10">
        <h1 className="font-bold text-4xl text-center">Upcoming Games</h1>

        <div className="flex justify-center items-center mt-8">
          <div className="h-[1px] w-[60px] mr-[15px] bg-white"></div>
          <img src="logo.png" alt="" className="w-[50px] h-[60px]" />
          <div className="h-[1px] w-[60px] ml-[15px] bg-white"></div>
        </div>

        {/* Container for both rows */}
        <div className="flex flex-col items-center w-full px-4 mt-10 space-y-10">
          {/* Row 1 */}
          <div className="flex flex-wrap justify-center gap-6 w-full">
            <div className="relative w-full md:w-[45%]">
              <img src="upcoming1.png" alt="" className="w-full h-auto" />
              <h3 className="absolute bottom-4 left-4 text-white font-semibold text-2xl md:text-3xl">
                Iron Force
              </h3>
            </div>
            <div className="relative w-full md:w-[45%]">
              <img src="upcoming2.png" alt="" className="w-full h-auto" />
              <h3 className="absolute bottom-4 left-4 text-white font-semibold text-2xl md:text-3xl">
                Inquisition
              </h3>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap justify-center gap-6 w-full">
            <div className="relative w-full md:w-[45%]">
              <img src="upcoming1.png" alt="" className="w-full h-auto" />
              <h3 className="absolute bottom-4 left-4 text-white font-semibold text-2xl md:text-3xl">
                Iron Force
              </h3>
            </div>
            <div className="relative w-full md:w-[45%]">
              <img src="upcoming2.png" alt="" className="w-full h-auto" />
              <h3 className="absolute bottom-4 left-4 text-white font-semibold text-2xl md:text-3xl">
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
