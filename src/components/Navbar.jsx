import React from "react";

function Navbar() {
  const link1=['Home','About','Gallery','Games']
const link2=['Detail','Contact']
  const buttons=['Log In','Sign Up']
  return (
    <>
      <nav className="flex justify-center items-center gap-10 text-xl font-sans text-white h-[180px] cursor-pointer font-semibold">
        
        <ul className="flex justify-center items-center gap-8 ">
         {link1.map((items,index)=>(
             <li key={index} className="hover:text-red-600">{items}</li>
         ))}
        </ul>
        <img src="logo.png" alt="Logo" />
        <ul className="flex justify-center items-center gap-8">
          {link2.map((items,index)=>(
            <li key={index} className="hover:text-red-600">{items}</li>
          ))}
        </ul>
        <div className="flex justify-center items-center gap-7">
        {buttons.map((button,index)=>(
          <button key={index} className=" bg-black text-white w-[105px] h-[43px] hover:bg-red-600 cursor-pointer ">{button}</button>
        ))} </div>
      </nav>
    </>
  );
}

export default Navbar;
