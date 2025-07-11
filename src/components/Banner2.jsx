import React from 'react';
import { Calendar, Timer } from 'lucide-react';

function Banner2() {
  const items = ['Call Of Duty Tournament', 'Battlefield-4 Tournament', 'Anthem Tournament', 'Pubg Classic Tournament'];

  return (
    <div className="bg-black text-white flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold">Upcoming Matches</h1>
      <div className="flex justify-center items-center mt-5 mb-8">
        <div className="h-[1px] w-[60px] mr-4 bg-white"></div>
        <img src="logo.png" alt="Logo" className="w-[50px] h-[60px]" />
        <div className="h-[1px] w-[60px] ml-4 bg-white"></div>
      </div>

      {items.map((title, index) => (
        <div key={index} className="bg-[#161616] h-[140px] w-[90%] md:w-[80%] p-4 rounded-md mb-4 flex justify-between items-center hover:border-2  border-red-600">
          {/* Left: Team Logos and VS */}
          <div className="flex items-center gap-4 pl-[30px]">
            <img src="g1.png" alt="Team 1" className="" />
            <div className="w-[40px] h-[40px] rounded-full bg-gray-700 text-white flex justify-center items-center font-bold">VS</div>
            <img src="g2.png" alt="Team 2" className="" />
          </div>

          {/* Middle: Match Details */}
          <div className="flex flex-col items-start text-white text-sm">
            <h2 className="text-lg font-semibold">{title}</h2>
            <div className="flex items-center gap-4 mt-1">
              <span className="flex items-center gap-1 text-gray-400"><Calendar size={16} /> March 29, 2021</span>
              <span className="flex items-center gap-1 text-gray-400"><Timer size={16} /> 4:00 PM</span>
            </div>
          </div>

          {/* Right: Stats */}
          <div className="flex gap-4 pr-[30px]">
            <div className="bg-red-600 text-white p-2 px-4 rounded text-center">
              <p className="text-xs">2 Groups</p>
              <h3 className="text-lg font-bold">32 Players</h3>
            </div>
            <div className="bg-red-600 text-white p-2 px-4 rounded text-center">
              <p className="text-xs">Prize Pool</p>
              <h3 className="text-lg font-bold">$5000</h3>
            </div>
            <div className="text-white text-2xl flex items-center cursor-pointer ml-2">→</div>
          </div>
        </div>
      ))}

      <button className='bg-black text-white border-2 border-red-600 w-[155px] h-[55px] cursor-pointer hover:bg-red-600'>View All</button>
    </div>
  );
}

export default Banner2;
