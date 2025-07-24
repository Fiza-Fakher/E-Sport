import React from 'react'
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

function Footer() {
  const link1 = ['Home', 'About', 'Games', 'Gallery']
  const link2 = ['Detail', 'Contact']
  const icons = [Facebook, Twitter, Linkedin, Instagram]

  return (
    <>
      <footer className="bg-red-600 pt-6 text-white w-full">
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 px-4">
          {/* Navigation Links Left */}
          <ul className="flex gap-4 font-semibold text-xl flex-wrap justify-center">
            {link1.map((item, index) => (
              <li key={index} className="hover:text-black cursor-pointer">{item}</li>
            ))}
          </ul>

          {/* Logo */}
          <img src="logo.png" alt="Logo" className="w-[90px]" />

          {/* Navigation Links Right and Icons */}
          <div className="flex flex-col items-center md:items-start">
            <ul className="flex gap-4 font-semibold text-xl flex-wrap justify-center">
              {link2.map((item, index) => (
                <li key={index} className="hover:text-black cursor-pointer">{item}</li>
              ))}
            </ul>

            {/* Social Icons */}
            <ul className="flex gap-4 mt-4">
              {icons.map((Icon, index) => (
                <li key={index}>
                  <div className="w-10 h-10 flex items-center justify-center border-2 border-white rounded-full hover:bg-black cursor-pointer hover:border-black">
                    <Icon className="text-white" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="w-full pt-6">
          <div className="h-[2px] w-full bg-gray-400" />
          <h6 className="text-gray-300 text-sm font-semibold text-center pt-6 px-4">
            © 2021 Crox Esports. All Rights Reserved.
          </h6>
        </div>
      </footer>
    </>
  )
}

export default Footer
