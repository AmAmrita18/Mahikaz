import React, { useRef, useState } from "react";
import house1 from "../../assets/House1.png";
import house2 from "../../assets/House2.png";
import house3 from "../../assets/House3.png";
import house4 from "../../assets/House4.png";
import house5 from "../../assets/House5.png";
import house6 from "../../assets/House6.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import infoBG from "/footerBG.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Keyboard, Pagination } from "swiper/modules";
import { FaBed, FaHashtag } from "react-icons/fa6";
import { FaBath } from "react-icons/fa";
const SimilarListingSlider = () => {
  return (
    <div
      className="w-full"
      style={{
        backgroundImage: `url('${infoBG}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        objectFit: "cover",
      }}
    >
      <div className="py-12">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          keyboard={{
            enabled: true,
          }}
        //   pagination={{
        //     clickable: true,
        //   }}
          modules={[Keyboard, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="grid gap-x-12 gap-y-8">
              <div className="flex flex-col bg-[#fff] rounded-[32px]">
                <img
                  src={house1}
                  alt="thumbnail"
                  className="w-full h-52 rounded-t-[30px] brightness-50"
                />
                <h3 className="text-black text-[24px] p-8 leading-[27.65px] tracking-[-0.6px] border-b border-[#E4E4E4]">
                  Lorem Ipsum
                </h3>
                <div className="flex justify-between w-full rounded-b-[32px] text-black">
                  <p className="flex gap-x-2 py-3  px-12 items-center">
                    <FaBed />4
                  </p>
                  <p className="flex gap-x-2 py-4  px-12 items-center border-l border-r border-[#E4E4E4]">
                    <FaBath />2
                  </p>
                  <p className="flex gap-x-2 py-3  px-12 items-center">
                    <FaHashtag />2
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid gap-x-12 gap-y-8">
              <div className="flex flex-col   bg-[#fff] rounded-[32px]">
                <img
                  src={house2}
                  alt="thumbnail"
                  className="w-full h-52 rounded-t-[30px] brightness-50"
                />
                <h3 className="text-black text-[24px] p-8 leading-[27.65px] tracking-[-0.6px] border-b border-[#E4E4E4]">
                  Lorem Ipsum
                </h3>
                <div className="flex justify-between w-full rounded-b-[32px] text-black">
                  <p className="flex gap-x-2 py-3  px-12 items-center">
                    <FaBed />4
                  </p>
                  <p className="flex gap-x-2 py-4  px-12 items-center border-l border-r border-[#E4E4E4]">
                    <FaBath />2
                  </p>
                  <p className="flex gap-x-2 py-3  px-12 items-center">
                    <FaHashtag />2
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid gap-x-12 gap-y-8">
              <div className="flex flex-col   bg-[#fff] rounded-[32px]">
                <img
                  src={house3}
                  alt="thumbnail"
                  className="w-full h-52 rounded-t-[30px] brightness-50"
                />
                <h3 className="text-black text-[24px] p-8 leading-[27.65px] tracking-[-0.6px] border-b border-[#E4E4E4]">
                  Lorem Ipsum
                </h3>
                <div className="flex justify-between w-full rounded-b-[32px] text-black">
                  <p className="flex gap-x-2 py-3  px-12 items-center">
                    <FaBed />4
                  </p>
                  <p className="flex gap-x-2 py-4  px-12 items-center border-l border-r border-[#E4E4E4]">
                    <FaBath />2
                  </p>
                  <p className="flex gap-x-2 py-3  px-12 items-center">
                    <FaHashtag />2
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid gap-x-12 gap-y-8">
              <div className="flex flex-col   bg-[#fff] rounded-[32px]">
                <img
                  src={house4}
                  alt="thumbnail"
                  className="w-full h-52 rounded-t-[30px] brightness-50"
                />
                <h3 className="text-black text-[24px] p-8 leading-[27.65px] tracking-[-0.6px] border-b border-[#E4E4E4]">
                  Lorem Ipsum
                </h3>
                <div className="flex justify-between w-full rounded-b-[32px] text-black">
                  <p className="flex gap-x-2 py-3  px-12 items-center">
                    <FaBed />4
                  </p>
                  <p className="flex gap-x-2 py-4  px-12 items-center border-l border-r border-[#E4E4E4]">
                    <FaBath />2
                  </p>
                  <p className="flex gap-x-2 py-3  px-12 items-center">
                    <FaHashtag />2
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid gap-x-12 gap-y-8">
              <div className="flex flex-col   bg-[#fff] rounded-[32px]">
                <img
                  src={house5}
                  alt="thumbnail"
                  className="w-full h-52 rounded-t-[30px] brightness-50"
                />
                <h3 className="text-black text-[24px] p-8 leading-[27.65px] tracking-[-0.6px] border-b border-[#E4E4E4]">
                  Lorem Ipsum
                </h3>
                <div className="flex justify-between w-full rounded-b-[32px] text-black">
                  <p className="flex gap-x-2 py-3  px-12 items-center">
                    <FaBed />4
                  </p>
                  <p className="flex gap-x-2 py-4  px-12 items-center border-l border-r border-[#E4E4E4]">
                    <FaBath />2
                  </p>
                  <p className="flex gap-x-2 py-3  px-12 items-center">
                    <FaHashtag />2
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid gap-x-12 gap-y-8">
              <div className="flex flex-col   bg-[#fff] rounded-[32px]">
                <img
                  src={house6}
                  alt="thumbnail"
                  className="w-full h-52 rounded-t-[30px] brightness-50"
                />
                <h3 className="text-black text-[24px] p-8 leading-[27.65px] tracking-[-0.6px] border-b border-[#E4E4E4]">
                  Lorem Ipsum
                </h3>
                <div className="flex justify-between w-full rounded-b-[32px] text-black">
                  <p className="flex gap-x-2 py-3  px-12 items-center">
                    <FaBed />4
                  </p>
                  <p className="flex gap-x-2 py-4  px-12 items-center border-l border-r border-[#E4E4E4]">
                    <FaBath />2
                  </p>
                  <p className="flex gap-x-2 py-3  px-12 items-center">
                    <FaHashtag />2
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SimilarListingSlider;
