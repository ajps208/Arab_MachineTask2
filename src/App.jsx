import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "./Assets/1.jpg";
import img2 from "./Assets/2.jpg";
import img3 from "./Assets/3.jpg";
import img4 from "./Assets/4.jpg";
import img5 from "./Assets/5.jpg";
import img6 from "./Assets/6.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./App.css";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";
// slide detailes
const slides = [
  {
    title: "Tiger",
    text: "Powerful, majestic, carnivorous, striped, elusive.",
    imageUrl: img1,
  },
  {
    title: "Lion",
    text: "Majestic, carnivorous, social, mane, fierce.",
    imageUrl: img2,
  },
  {
    title: "Wolf",
    text: "Wild, pack-oriented, cunning, adaptable, howling.",
    imageUrl: img3,
  },
  {
    title: "Cat",
    text: "Graceful, independent, agile, playful, domesticated.",
    imageUrl: img4,
  },
  {
    title: "Elephant",
    text: "Gentle, intelligent, social, massive, trunked.",
    imageUrl: img5,
  },
  {
    title: "Zebra",
    text: "Striped, herbivorous, social, African, distinctive.",
    imageUrl: img6,
  },
];


function App() {
  const [imgParallax, setImgParallax] = useState(23);
  const [titleParallax, setTitleParallax] = useState(300);
  const [textParallax, setTextParallax] = useState(200);
  return (
    <>
      <div className="maindiv flex flex-col md:flex-row justify-center items-center">
        {/* image slider */}
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          speed={600}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Parallax, Pagination, Navigation]}
          className="mySwiper rounded-xl"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                slot="container-start"
                className="parallax-bg"
                style={{
                  backgroundImage: `url(${slide.imageUrl})`,
                }}
                data-swiper-parallax={`-${imgParallax}%`}
              ></div>
              <div className="title " data-swiper-parallax={`-${titleParallax}`}>
                {slide.title}
              </div>
              
              <div className="text" data-swiper-parallax={`-${textParallax}`}>
                <p className=" text-base font-sans">{slide.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* customisation */}
        <div className="flex flex-col shadow rounded me-10 p-5 mt-5 ms-6">
          <h1 className="text-center text-base font-bold mb-2">Customize</h1>
          {/* first customisation */}
          <div className="flex justify-center items-center border p-2 rounded-md shadow-md">
            <label htmlFor="" className="text-sm font-bold mr-2">
              Choose your image parallax
            </label>
            <div className="relative">
              <input
                value={imgParallax}
                type="number"
                max={100}
                onChange={(e) => setImgParallax(e.target.value)}
                className="mt-2 block w-16 h-10  p-1 rounded-md border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
              />
              <div className="absolute bottom-0 left-0 h-1 w-full bg-blue-500 transition-transform transform scale-x-0 origin-bottom"></div>
            </div>
         
          </div>
          {/* second customisation */}
          <div className="flex justify-center items-center border p-2 rounded-md shadow-md">
            <label htmlFor="" className="text-sm font-bold mr-2">
              Choose your title parallax
            </label>
            <div className="relative">
              <input
                value={titleParallax}
                type="number"
                onChange={(e) => setTitleParallax(e.target.value)}
                className="mt-2 block w-16 h-10  p-1 rounded-md border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
              />
              <div className="absolute bottom-0 left-0 h-1 w-full bg-blue-500 transition-transform transform scale-x-0 origin-bottom"></div>
            </div>
         
          </div>
          {/* thrid customisation */}
          <div className="flex justify-center items-center border p-2 rounded-md shadow-md">
            <label htmlFor="" className="text-sm font-bold mr-2">
              Choose your text parallax
            </label>
            <div className="relative">
              <input
                value={textParallax}
                type="number"
                onChange={(e) => setTextParallax(e.target.value)}
                className="mt-2block w-16 h-10  p-1 rounded-md border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
              />
              <div className="absolute bottom-0 left-0 h-1 w-full bg-blue-500 transition-transform transform scale-x-0 origin-bottom"></div>
            </div>
         
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
