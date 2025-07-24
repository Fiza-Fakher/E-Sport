import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { X } from "lucide-react";

function Navbar() {
  const link1 = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Games", path: "/games" },
  ];

  const link2 = [
    { name: "Detail", path: "/detail" },
    { name: "Contact", path: "/contact" },
  ];

  const buttons = [
    { name: "Log In", path: "/login" },
    { name: "Sign Up", path: "/signup" },
  ];

  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <>
     <nav className="relative flex justify-center items-center gap-10 text-xl font-sans text-white h-[180px] cursor-pointer font-semibold">
        {/* Mobile menu toggle button */}
        {!open && (
          <div className="absolute right-5 top-5 cursor-pointer md:hidden z-50" onClick={toggleMenu}>
            <Menu size={40} />
          </div>
        )}

        {open && (
          <div className="absolute right-5 top-5 cursor-pointer md:hidden z-[999]" onClick={toggleMenu}>
            <X size={40} />
          </div>
        )}

    {open && (
  <div className="absolute right-5 mt-[250px] flex flex-col gap-4 items-center text-white bg-black py-4 px-6 rounded-md md:hidden z-50">
    {/* link1 items */}
    <ul className="flex flex-col items-center gap-4">
      {link1.map((item, index) => (
        <li key={index} className="hover:text-red-600">
          <Link to={item.path}>{item.name}</Link>
        </li>
      ))}
    </ul>

    {/* link2 items */}
    <ul className="flex flex-col items-center gap-4">
      {link2.map((item, index) => (
        <li key={index} className="hover:text-red-600">
          <Link to={item.path}>{item.name}</Link>
        </li>
      ))}
    </ul>

    {/* buttons */}
    <div className="flex flex-col items-center gap-4">
      {buttons.map((button, index) => (
        <Link to={button.path} key={index}>
          <button className="bg-black text-white w-[105px] h-[43px] hover:bg-red-600 cursor-pointer">
            {button.name}
          </button>
        </Link>
      ))}
    </div>
  </div>
)}


        {/* desktop menu */}
        <ul className=" justify-center items-center gap-8 hidden md:flex">
          {link1.map((item, index) => (
            <li key={index} className="hover:text-red-600">
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
       <Link to="/"><img src="logo.png" alt="Logo" className="md:w-[140px] w-[70px]"/></Link>
        <ul className="justify-center items-center gap-8 hidden md:flex">
          {link2.map((item, index) => (
            <li key={index} className="hover:text-red-600">
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <div className="justify-center items-center gap-7 hidden md:flex">
          {buttons.map((button, index) => (
            <Link to={button.path} key={index}>
              <button className="bg-black text-white w-[105px] h-[43px] hover:bg-red-600 cursor-pointer">
                {button.name}
              </button>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
