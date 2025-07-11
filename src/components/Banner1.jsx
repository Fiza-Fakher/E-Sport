import React from "react";

function Banner1() {
  return (
    <> 
        <div className="flex justify-center items-center bg-yellow-600 pt-[70px] gap-8 h-[600px]">
          {/* <div className="bg-black flex flex-row w-[400px]"> */}
          <img src="b_img.jpg" alt="" className="h-[450px] w-[450px]" />
          <div className="flex flex-col text-white">
            <h1 className="flex flex-col text-white font-bold text-5xl font-sans">
              <span>Gaming Tournaments</span>
              <span>On One Place.</span>
            </h1>
            <div className="flex justify-center items-center mt-5">
              <div className="h-[1px] w-[60px] mr-[15px] bg-white"></div>
              <img src="logo.png" alt="" className="w-[50px] h-[60px]" />
              <div className="h-[1px] w-[60px] mr-[15px] bg-white"></div>
            </div>
            <p className="flex flex-col text-xl font-serif">
              <span>Quis nostrum exercitationem ullam corporis suscit</span>{" "}
              <span>labor iosam, nisi ut aliquid ex ea commodi conse aute</span>{" "}
              <span>
                irure dolor in reprehenderit in voluptateesse occaecat
              </span>
              <span>
                cuida at non proident, sunt in culpa qui officia deserunt
              </span>
            </p>

            <p className="flex flex-col text-xl font-serif pt-[20px]">
              <span>
                Duis aute irure dolor in reprehenderit in voluptate velit
              </span>
              <span>esse cillum dolore eu fugiat nulle ariatur.</span>
            </p>
            <button className="bg-red-600 mt-[30px] font-semibold text-lg h-[55px] w-[160px] cursor-pointer hover:bg-transparent hover:border-2 hover:border-red-600 text-white">
              Read More
            </button>
          </div>
          {/* </div> */}
        </div>
     
    </>
  );
}

export default Banner1;
