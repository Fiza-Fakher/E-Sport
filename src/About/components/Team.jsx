import React from "react";

function Team() {
  const team = [
    { name: "Senchy Dark", des: "Pro-Player", img: "t1.jpg" },
    { name: "Eleten Rampel", des: "Pro-Player", img: "t2.jpg" },
    { name: "Andre Park", des: "Pro-Player", img: "t3.jpg" },
  ];
  return (
    <>
      <main className="flex justify-center items-center flex-col bg-black text-white md:pt-14 min-h-[200vh] pt-4 pb-4">
        <h1 className="font-bold text-5xl">Our Team Members</h1>
        <div className="flex justify-center items-center mt-8">
          <div className="h-[1px] w-[60px] mr-[15px] bg-white"></div>
          <img src="logo.png" alt="" className="w-[50px] h-[60px]" />
          <div className="h-[1px] w-[60px] mr-[15px] bg-white"></div>
        </div>
        <div className="mt-14 flex gap-14 flex-col md:flex-row">
  {team.map((items, index) => (
    <div key={index} className="relative ">
      <img src={items.img} alt=""/>
      <h3 className="absolute top-80 left-4 text-white font-bold text-2xl">{items.name}</h3>
      <p className="absolute top-88 left-4 text-white text-lg">{items.des}</p>
    </div>
  ))}
</div>

        <div className="mt-12 flex gap-14 flex-col md:flex-row">
          {team.map((items, index) => (
            <div key={index} className="relative">
              <img src={items.img} alt="" />
              <h3 className="absolute top-80 left-4 text-white font-bold text-2xl">{items.name}</h3>
              <p className="absolute top-88 left-4 text-white text-lg">{items.des}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default Team;
