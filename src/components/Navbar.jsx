import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const link1 = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Games', path: '/games' }]

const link2 = [
  { name: 'Detail', path: '/detail' },
  { name: 'Contact', path: '/contact' }
];

const buttons = [
  { name: 'Log In', path: '/login' },
  { name: 'Sign Up', path: '/signup' }
];

  return (
    <>
      <nav className="flex justify-center items-center gap-10 text-xl font-sans text-white h-[180px] cursor-pointer font-semibold">
        
        <ul className="flex justify-center items-center gap-8">
  {link1.map((item, index) => (
    <li key={index} className="hover:text-red-600">
      <Link to={item.path}>{item.name}</Link>
    </li>
  ))}
</ul>

        <img src="logo.png" alt="Logo" />
        <ul className="flex justify-center items-center gap-8">
  {link2.map((item, index) => (
    <li key={index} className="hover:text-red-600">
      <Link to={item.path}>{item.name}</Link>
    </li>
  ))}
</ul>
        <div className="flex justify-center items-center gap-7">
        {buttons.map((button,index)=>(
          <Link to={button.path} key={index}>
      <button className="bg-black text-white w-[105px] h-[43px] hover:bg-red-600 cursor-pointer">
        {button.name}
      </button>
    </Link>
        ))} </div>
      </nav>
    </>
  );
}

export default Navbar;
