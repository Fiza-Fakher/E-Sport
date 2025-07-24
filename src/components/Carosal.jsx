"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Dummy Product Data
const dummyProducts = [
  { id: 1, name: "GTA", des: "Set 1", image: "game1.jpg" },
  { id: 2, name: "RDR 2", des: "Set 2", image: "game2.jpg" },
  { id: 3, name: "GTA 5", des: "Set 3", image: "game3.jpg" },
  { id: 4, name: "Free Fire", des: "Set 4", image: "game4.jpg" },
  { id: 5, name: "Fortnite", des: "Set 5", image: "game1.jpg" },
  { id: 6, name: "Anthem", des: "Set 6", image: "game2.jpg" },
  { id: 7, name: "Pubg", des: "Set 7", image: "game3.jpg" },
  { id: 8, name: "Call of Duty", des: "Set 8", image: "game4.jpg" },
];

// Dummy Card Component
const DummyCard = ({ product }) => (
  <div className="w-full max-w-[300px] flex flex-col p-2 text-center">
    <div className="relative w-full h-[250px] sm:h-[280px] mb-4 group cursor-pointer">
      <img
        src={product.image}
        alt={product.name}
        className=""
      />
      <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-60 transition duration-300 h-[500px] w-[258px]"></div>
    </div>
    <h3 className="text-xl sm:text-2xl font-semibold text-white">{product.name}</h3>
    <p className="text-gray-500 font-serif text-base sm:text-lg mt-1">{product.des}</p>
  </div>
);

// Slider Component
const Carosal = () => {
  const items = ['All', 'Origin', 'Playstation4', 'Steam', 'Uplay', 'Xbox One'];

  return (
    <div className="bg-black pt-16 px-4 sm:px-8">
      <div className="flex flex-col items-center">
        <h1 className="text-white text-3xl sm:text-4xl font-bold text-center">
          Trending Games
        </h1>
        <div className="flex justify-center items-center mt-5">
          <div className="h-[1px] w-[40px] sm:w-[60px] mr-4 bg-white"></div>
          <img src="logo.png" alt="Logo" className="" />
          <div className="h-[1px] w-[40px] sm:w-[60px] ml-4 bg-white"></div>
        </div>
        <ul className="flex flex-wrap justify-center items-center gap-6 sm:gap-12 font-bold text-white uppercase pt-6 text-sm sm:text-lg">
          {items.map((item, index) => (
            <li key={index} className="hover:text-red-600 cursor-pointer">{item}</li>
          ))}
        </ul>
      </div>

      <section className="py-10">
        <div className="max-w-screen-2xl mx-auto">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={10}
            slidesPerView={1.2}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              425: { slidesPerView: 1.5 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
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
  );
};

export default Carosal;
