"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Dummy Product Data
const dummyProducts = [
  { id: 1, name: "GTA", des: "Set 1",  image: "game1.jpg"},
  { id: 2, name: "RDR 2", des: "Set 2", image: "game2.jpg"},
  { id: 3, name: "GTA 5", des: "Set 3",image: "game3.jpg"  },
  { id: 4, name: "Free Fire", des: "Set 4", image: "game4.jpg"},
  { id: 5, name: "Fortnite", des: "Set 5", image: "game1.jpg" },
  { id: 6, name: "Anthem", des: "Set 6",  image: "game2.jpg"},
  { id: 7, name: "Pubg", des: "Set 7",  image: "game3.jpg"},
  { id: 8, name: "Call of Duty", des: "Set 8", image: "game4.jpg"},
];

// Dummy Card Component
const DummyCard = ({ product }) => (
  <div className="w-[400px] flex flex-col h-auto p-0 transition-all duration-300 text-center">
    <div className="relative w-[275px] h-[300px] mb-4 group cursor-pointer">
  <img
    src={product.image}
    alt={product.name}
    className="w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-60 transition duration-300"></div>
</div>
    <h3 className="text-3xl flex justify-center items-center mr-[120px] font-semibold text-white">{product.name}</h3>
    <p className="text-gray-500 font-serif text-lg mt-1 mr-[120px]">{product.des}</p>
  </div>
);

// Slider Component
const Carosal = () => {
  const items=['All','Origin','Playstation4','Steam','Uplay','Xbox One']
  return (
    <>
    <div className="bg-black  pt-16">
      <div className="flex flex-col">
    <h1 className="text-white text-4xl font-bold flex justify-center items-center">Trending Games</h1>
    <div className="flex justify-center items-center mt-5">
      <div className="h-[1px] w-[60px] mr-[15px] bg-white"></div>
      <img src="logo.png" alt="" className="w-[50px] h-[60px]" />
      <div className="h-[1px] w-[60px] mr-[15px] bg-white"></div>
    </div>
    <ul className="flex justify-center items-center gap-12 font-bold text-white uppercase pt-[20px] text-xl ">
    {items.map((item,index)=>(
      <li className="hover:text-red-600 cursor-pointer" key={index}>{item}</li>
    ))}
    </ul>
    </div>
    <section className="py-12 overflow-x-hidden">
      <div
        className="max-w-screen-2xl mx-auto pl-[110px]"
      >
        <Swiper
          modules={[Autoplay]}
          spaceBetween={5}
          slidesPerView={1}
          loop={false}
          autoplay={{ delay: 7000, disableOnInteraction: false }}
          breakpoints={{
            375: { slidesPerView: 1.2 },
            425: { slidesPerView: 1.4 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="pb-8"
        >
          {dummyProducts.map((product) => (
            <SwiperSlide key={product.id} className="flex justify-center">
              <DummyCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
    </div>
    </>
  );
};

export default Carosal;
