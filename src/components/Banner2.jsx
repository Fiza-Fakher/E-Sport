import React from 'react';
import { Calendar, Timer } from 'lucide-react';

function Banner2() {
  const items = [
    'Call Of Duty Tournament',
    'Battlefield-4 Tournament',
    'Anthem Tournament',
    'Pubg Classic Tournament',
  ];

  return (
    <div className="bg-black text-white flex flex-col items-center py-10 px-4 sm:px-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">Upcoming Matches</h1>

      <div className="flex justify-center items-center mt-5 mb-8">
        <div className="h-[1px] w-[40px] sm:w-[60px] mr-3 bg-white"></div>
        <img src="logo.png" alt="Logo" className="w-[40px] sm:w-[50px] h-[50px] sm:h-[60px]" />
        <div className="h-[1px] w-[40px] sm:w-[60px] ml-3 bg-white"></div>
      </div>

      {items.map((title, index) => (
        <div
          key={index}
          className="bg-[#161616] w-full max-w-5xl p-4 rounded-md mb-4 flex flex-col md:flex-row justify-between items-center gap-4 hover:border-2 border-red-600"
        >
          {/* Left: Team Logos and VS */}
          <div className="flex items-center gap-4">
            <img src="g1.png" alt="Team 1" className="w-[40px] sm:w-[50px]" />
            <div className="w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] rounded-full bg-gray-700 text-white flex justify-center items-center font-bold">VS</div>
            <img src="g2.png" alt="Team 2" className="w-[40px] sm:w-[50px]" />
          </div>

          {/* Middle: Match Details */}
          <div className="flex flex-col items-center md:items-start text-sm text-center md:text-left">
            <h2 className="text-base sm:text-lg font-semibold">{title}</h2>
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 mt-1 text-gray-400">
              <span className="flex items-center gap-1"><Calendar size={16} /> March 29, 2021</span>
              <span className="flex items-center gap-1"><Timer size={16} /> 4:00 PM</span>
            </div>
          </div>

          {/* Right: Stats */}
          <div className="flex gap-3 sm:gap-4 flex-wrap justify-center md:justify-end">
            <div className="bg-red-600 text-white p-2 px-3 sm:px-4 rounded text-center">
              <p className="text-xs">2 Groups</p>
              <h3 className="text-base sm:text-lg font-bold">32 Players</h3>
            </div>
            <div className="bg-red-600 text-white p-2 px-3 sm:px-4 rounded text-center">
              <p className="text-xs">Prize Pool</p>
              <h3 className="text-base sm:text-lg font-bold">$5000</h3>
            </div>
            <div className="text-white text-xl sm:text-2xl flex items-center cursor-pointer ml-2">→</div>
          </div>
        </div>
      ))}

      <button className="mt-4 bg-black text-white border-2 border-red-600 w-[140px] h-[50px] sm:w-[155px] sm:h-[55px] cursor-pointer hover:bg-red-600 transition">
        View All
      </button>
    </div>
  );
}

export default Banner2;
