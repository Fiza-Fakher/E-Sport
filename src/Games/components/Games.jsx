import React from "react";

function Games() {
  const items = ["All", "Origin", "Playstation4", "Steam", "Uplay", "Xbox One"];
  const games1 = [
    { title: "Pubg", img: "game1.jpg" },
    { title: "Call Of Duty", img: "game2.jpg" },
    { title: "Fortnite", img: "game3.jpg" },
    { title: "Anthem", img: "game4.jpg" },
  ];
  const games2 = [
    { title: "Battle Field", img: "game4.jpg" },
    { title: "Mass Effect", img: "game1.jpg" },
    { title: "A Way Out", img: "game2.jpg" },
    { title: "War Friends", img: "game3.jpg" },
  ];
  return (
    <>
      <main className="bg-black text-white flex flex-col justify-center items-center h-[200vh]">
        <h1 className="text-white text-4xl font-bold flex justify-center items-center">
          Most Popular Games
        </h1>
        <div className="flex justify-center items-center mt-5">
          <div className="h-[1px] w-[60px] mr-[15px] bg-white"></div>
          <img src="logo.png" alt="" className="w-[50px] h-[60px]" />
          <div className="h-[1px] w-[60px] mr-[15px] bg-white"></div>
        </div>
        <ul className="flex justify-center items-center gap-12 font-bold text-white uppercase pt-[20px] text-xl ">
          {items.map((item, index) => (
            <li className="hover:text-red-600 cursor-pointer" key={index}>
              {item}
            </li>
          ))}
        </ul>
        <div className="flex gap-10 mt-20">
          {games1.map((items, index) => (
            <div key={index}>
              <div className="relative w-[275px] h-[300px] mb-4 group cursor-pointer">
                <img src={items.img} alt="" />
                <div className="absolute bg-red-600 opacity-0 group-hover:opacity-60 transition duration-300"></div>
              </div>
              <h3 className="text-white">{items.title}</h3>
            </div>
          ))}
        </div>

        <div className="flex gap-10 mt-30">
          
          {games2.map((items, index) => (
            <div key={index}>
              <div className="relative w-[275px] h-[300px] mb-4 group cursor-pointer">
                <img src={items.img} alt="" />
                <div className="absolute bg-red-600 opacity-0 group-hover:opacity-60 transition duration-300"></div>
              </div>
              <h3>{items.title}</h3>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default Games;
