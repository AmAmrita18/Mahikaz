import React from "react";
import blog1 from "../../assets/Blog Image.png";
import blog2 from "../../assets/Blog Image (1).png";
import blog3 from "../../assets/Blog Image (2).png";
import blog4 from "../../assets/Blog Image (3).png";
const RelatedPost = () => {
  return (
    <div className="bg-[#E5E5E54D] w-full">
      <div className="w-[80%] mx-auto max-w-[1200px] h-full py-24">
        <h1 className="text-[18px] leading-[25px] text-[#495057] py-8 font-bold">Related Posts</h1>
        <div className="grid grid-cols-4 gap-x-6">
          <div className="rounded-xl  flex flex-col gap-y-4">
            <img src={blog1} alt="" className="rounted-t-xl" />
            <h2 className="text-[12px] text-[#6C757D leading-[13px]">
              08.08.2021
            </h2>
            <h1 className="text-[18px] text-[#495057] leading-[25px]">
              Investing in Mauritius: A Guide to the Island's Booming Property
              Market
            </h1>
            <p className="text-[12px] leading-[20px] text-[#6C757D]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </div>
          <div className="rounded-xl  flex flex-col gap-y-4">
            <img src={blog2} alt="" className="rounted-t-xl" />
            <h2 className="text-[12px] text-[#6C757D leading-[13px]">
              08.08.2021
            </h2>
            <h1 className="text-[18px] text-[#495057] leading-[25px]">
              Mauritius for Expats: Navigating the Property Market as a Newcomer
            </h1>
            <p className="text-[12px] leading-[20px] text-[#6C757D]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </div>
          <div className="rounded-xl  flex flex-col gap-y-4">
            <img src={blog3} alt="" className="rounted-t-xl" />
            <h2 className="text-[12px] text-[#6C757D leading-[13px]">
              08.08.2021
            </h2>
            <h1 className="text-[18px] text-[#495057] leading-[25px]">
              Your Dream Vacation Home in Mauritius: What to Know Before You Buy
            </h1>
            <p className="text-[12px] leading-[20px] text-[#6C757D]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </div>
          <div className="rounded-xl p flex flex-col gap-y-4">
            <img src={blog4} alt="" className="rounted-t-xl" />
            <h2 className="text-[12px] text-[#6C757D leading-[13px]">
              08.08.2021
            </h2>
            <h1 className="text-[18px] text-[#495057] leading-[25px]">
              The Art of Mauritian Architecture: Blending Tradition with
              Modernity
            </h1>
            <p className="text-[12px] leading-[20px] text-[#6C757D]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedPost;
