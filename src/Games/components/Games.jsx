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
    <main className="bg-black text-white flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold text-center">Most Popular Games</h1>

      <div className="flex justify-center items-center mt-5">
        <div className="h-[1px] w-[60px] mr-[15px] bg-white"></div>
        <img src="logo.png" alt="Logo" className="w-[50px] h-[60px]" />
        <div className="h-[1px] w-[60px] ml-[15px] bg-white"></div>
      </div>

      <ul className="flex flex-wrap justify-center gap-6 font-bold uppercase pt-5 text-xl">
        {items.map((item, index) => (
          <li className="hover:text-red-600 cursor-pointer" key={index}>
            {item}
          </li>
        ))}
      </ul>

      {/* Games 1 - 4 images: 2 per row on small, 4 per row on md+ */}
      <div className="flex flex-wrap justify-center mt-10 w-full max-w-7xl">
        {games1.map((item, index) => (
          <div
            key={index}
            className="w-1/2 md:w-1/4 flex flex-col items-center mb-10"
          >
            <div className="relative w-[275px] h-[300px] mb-4 group cursor-pointer">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-60 transition duration-300"></div>
            </div>
            <h3 className="text-white">{item.title}</h3>
          </div>
        ))}
      </div>

      {/* Games 2 - Same structure */}
      <div className="flex flex-wrap justify-center mt-10 w-full max-w-7xl">
        {games2.map((item, index) => (
          <div
            key={index}
            className="w-1/2 md:w-1/4 flex flex-col items-center mb-10"
          >
            <div className="relative w-[275px] h-[300px] mb-4 group cursor-pointer">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-60 transition duration-300"></div>
            </div>
            <h3 className="text-white">{item.title}</h3>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Games;
