import React, { useRef, useState } from "react";
import house1 from "../../assets/House1.png";
import house2 from "../../assets/House2.png";
import house3 from "../../assets/House3.png";
import house4 from "../../assets/House4.png";
import house5 from "../../assets/House5.png";
import house6 from "../../assets/House6.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import infoBG from "/footerBG.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Keyboard, Pagination } from "swiper/modules";
// import { FaBed, FaHashtag } from "react-icons/fa6";
// import { FaBath } from "react-icons/fa";
import { estates } from "../About/estates";
import { Link } from "react-router-dom";
const SimilarListingSlider = () => {
  return (
    <div
      className="w-full bg-white"
     
    >
      <div className="pt-12 pb-20">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            515: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          keyboard={{
            enabled: true,
          }}
        //   pagination={{
        //     clickable: true,
        //   }}
          modules={[Keyboard, Pagination]}
          className="mySwiper"
        >
          {estates.map((est, index) =>  (
            <SwiperSlide key={est.id}>
              <Link to={`/property/${est.id}`} key={est.id}>
                <div
                  key={est.id}
                  className="flex flex-col shadow-2xl mb-10 md:mx-0 mx-4  bg-[#fff] rounded-[32px]"
                >
                  <img
                    src={est.images[0]}
                    alt="thumbnail"
                    className="w-full h-52 object-cover rounded-t-[30px] brightness-50"
                  />
                  <h3 className="text-black text-[24px] p-8 leading-[27.65px] tracking-[-0.6px] ">
                    {est.title}
                  </h3>
                  {/* <div className="flex justify-between w-full rounded-b-[32px] text-black">
                    <p className="flex gap-x-2 py-3  px-8 items-center">
                      <FaBed />
                      {est.beds}
                    </p>
                    <p className="flex gap-x-2 py-4  px-8 items-center border-l border-r border-[#E4E4E4]">
                      <FaBath />
                      {est.washroom}
                    </p>
                    <p className="flex gap-x-2 py-3  md:px-8 px-4 items-center">
                      <FaHashtag />
                      {est.livingroom}
                    </p>
                  </div> */}
                </div>
              </Link>
              </SwiperSlide>
            ))}


          {/* <SwiperSlide>
          <div className="flex flex-col mb-12  shadow-xl bg-[#fff] rounded-2xl">
                <img
                  src={house1}
                  alt="thumbnail"
                  className="w-full h-52 rounded-t-2xl brightness-50"
                />
                <h3 className="text-black text-[24px] p-8 leading-[27.65px] tracking-[-0.6px] border-b border-[#E4E4E4]">
                  Lorem Ipsum
                </h3>
                <div className="flex justify-between w-full rounded-b-[32px] text-black">
                  <p className="flex gap-x-2 py-3  px-6 items-center">
                    <FaBed />4
                  </p>
                  <p className="flex gap-x-2 py-4  px-6 items-center border-l border-r border-[#E4E4E4]">
                    <FaBath />2
                  </p>
                  <p className="flex gap-x-2 py-3  px-6 items-center">
                    <FaHashtag />2
                  </p>
                </div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
            
              <div className="flex flex-col mb-12  shadow-xl bg-[#fff] rounded-2xl">
                <img
                  src={house2}
                  alt="thumbnail"
                  className="w-full h-52 rounded-t-2xl brightness-50"
                />
                <h3 className="text-black text-[24px] p-8 leading-[27.65px] tracking-[-0.6px] border-b border-[#E4E4E4]">
                  Lorem Ipsum
                </h3>
                <div className="flex justify-between w-full rounded-b-[32px] text-black">
                  <p className="flex gap-x-2 py-3  px-6 items-center">
                    <FaBed />4
                  </p>
                  <p className="flex gap-x-2 py-4  px-6 items-center border-l border-r border-[#E4E4E4]">
                    <FaBath />2
                  </p>
                  <p className="flex gap-x-2 py-3  px-6 items-center">
                    <FaHashtag />2
                  </p>
                </div>
              </div>
            
          </SwiperSlide>
          <SwiperSlide>
            
              <div className="flex flex-col mb-12  shadow-xl  bg-[#fff] rounded-2xl">
                <img
                  src={house3}
                  alt="thumbnail"
                  className="w-full h-52 rounded-t-2xl brightness-50"
                />
                <h3 className="text-black text-[24px] p-8 leading-[27.65px] tracking-[-0.6px] border-b border-[#E4E4E4]">
                  Lorem Ipsum
                </h3>
                <div className="flex justify-between w-full rounded-b-[32px] text-black">
                  <p className="flex gap-x-2 py-3  px-6 items-center">
                    <FaBed />4
                  </p>
                  <p className="flex gap-x-2 py-4  px-6 items-center border-l border-r border-[#E4E4E4]">
                    <FaBath />2
                  </p>
                  <p className="flex gap-x-2 py-3  px-6 items-center">
                    <FaHashtag />2
                  </p>
                </div>
              </div>
            
          </SwiperSlide>
          <SwiperSlide>
           
              <div className="flex flex-col mb-12  shadow-xl  bg-[#fff] rounded-2xl">
                <img
                  src={house4}
                  alt="thumbnail"
                  className="w-full h-52 rounded-t-2xl brightness-50"
                />
                <h3 className="text-black text-[24px] p-8 leading-[27.65px] tracking-[-0.6px] border-b border-[#E4E4E4]">
                  Lorem Ipsum
                </h3>
                <div className="flex justify-between w-full rounded-b-[32px] text-black">
                  <p className="flex gap-x-2 py-3  px-6 items-center">
                    <FaBed />4
                  </p>
                  <p className="flex gap-x-2 py-4  px-6 items-center border-l border-r border-[#E4E4E4]">
                    <FaBath />2
                  </p>
                  <p className="flex gap-x-2 py-3  px-6 items-center">
                    <FaHashtag />2
                  </p>
                </div>
              </div>
            
          </SwiperSlide>
          <SwiperSlide>
            
              <div className="flex flex-col mb-12  shadow-xl  bg-[#fff] rounded-2xl">
                <img
                  src={house5}
                  alt="thumbnail"
                  className="w-full h-52 rounded-t-2xl brightness-50"
                />
                <h3 className="text-black text-[24px] p-8 leading-[27.65px] tracking-[-0.6px] border-b border-[#E4E4E4]">
                  Lorem Ipsum
                </h3>
                <div className="flex justify-between w-full rounded-b-[32px] text-black">
                  <p className="flex gap-x-2 py-3  px-6 items-center">
                    <FaBed />4
                  </p>
                  <p className="flex gap-x-2 py-4  px-6 items-center border-l border-r border-[#E4E4E4]">
                    <FaBath />2
                  </p>
                  <p className="flex gap-x-2 py-3  px-6 items-center">
                    <FaHashtag />2
                  </p>
                </div>
              </div>
           
          </SwiperSlide>
          <SwiperSlide>
            
              <div className="flex flex-col mb-12  shadow-xl   bg-[#fff] rounded-2xl">
                <img
                  src={house6}
                  alt="thumbnail"
                  className="w-full h-52 rounded-t-2xl brightness-50"
                />
                <h3 className="text-black text-[24px] p-8 leading-[27.65px] tracking-[-0.6px] border-b border-[#E4E4E4]">
                  Lorem Ipsum
                </h3>
                <div className="flex justify-between w-full rounded-b-[32px] text-black">
                  <p className="flex gap-x-2 py-3  px-6 items-center">
                    <FaBed />4
                  </p>
                  <p className="flex gap-x-2 py-4  px-6 items-center border-l border-r border-[#E4E4E4]">
                    <FaBath />2
                  </p>
                  <p className="flex gap-x-2 py-3  px-6 items-center">
                    <FaHashtag />2
                  </p>
                </div>
              </div>
           
          </SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
};

export default SimilarListingSlider;
