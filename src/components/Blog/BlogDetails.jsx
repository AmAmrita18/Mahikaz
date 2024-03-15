import React from "react";
import image1 from "../../assets/Image1.png";
import image2 from "../../assets/Image2.png";
import profile from "../../assets/blogPeop.png";
import { MdOutlineFacebook } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { RiWhatsappFill } from "react-icons/ri";
const BlogDetails = () => {
  return (
    <div className="w-full">
      <div className="w-[80%] mx-auto max-w-[1200px] h-full py-24 flex flex-row items-start">
        <div className="w-[15%] flex flex-row justify-center items-center">
          <h1 className="text-[12px] text-[#495057] leading-[25px] ">
            08.08.2024
          </h1>
          <div className="w-[35px] h-[1px] border border-[#495057]"></div>
          <h1 className="text-[12px] text-[#495057] leading-[25px] ">
            4 minutes
          </h1>
        </div>
        <div className="w-[85%] flex flex-col gap-y-8 px-20">
          <p className="text-[#495057] text-[16px] leading-[25px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatu
          </p>
          <p className="text-[#495057] text-[16px] leading-[25px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est lab
          </p>
          <div className="flex py-6 flex-row justify-between">
            <div>
              <img src={image1} alt="" />
            </div>
            <div className="flex flex-row ">
              <img src={image2} alt="" />
            </div>
          </div>
          <p className="text-[#495057] text-[16px] leading-[25px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore. Ut enim ad minim veniam. Quis
            nostrud ex
          </p>
          <h1 className="text-[#D4A373] text-[38px] leading-[43px]">
            “Lorem ipsum dolor sit amet, consectetur adipiscing. Elit. Elit.
            Elit. Eli”{" "}
          </h1>
          <p className="text-[#495057] text-[16px] leading-[25px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Ut enim ad minim ven
          </p>
          <div className="flex flex-row gap-3">
            <div className="border-[#E5E5E5] border rounded-xl">
              <h1 className="px-4 py-2 text-[#6C757D] text-[10px] leading-[11.52px] text-center">
                TRAVEL
              </h1>
            </div>
            <div className="border-[#E5E5E5] border rounded-xl">
              <h1 className="px-4 py-2 text-[#6C757D] text-[10px] leading-[11.52px] text-center">
                REAL ESTATE
              </h1>
            </div>
            <div className="border-[#E5E5E5] border rounded-xl">
              <h1 className="px-4 py-2 text-[#6C757D] text-[10px] leading-[11.52px] text-center">
                MAURITIUS
              </h1>
            </div>
          </div>
          <div className="border-t w-full h-2 my-6 border-[#C4C4C4]"></div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-4 items-center   my-3 rounded-xl px-3 py-4">
              <div>
                <img src={profile} width={40} height={40} alt="" />
              </div>
              <div className="flex flex-col gap-1">
                <h1 className="text-black text-[15px] leading-[17.28px] tracking-[-0.38px]">
                  Mahikaz Properties
                </h1>
                <h2 className="text-black text-[13px] leading-[17.28px] tracking-[-0.38px]">
                  View Profile
                </h2>
              </div>
            </div>
            <div className="flex flex-row gap-x-6 ">
            <div className="w-[30px] h-[30px]  py-1 rounded-full">
              <MdOutlineFacebook className="w-[25px] h-[25px] mx-auto" />
            </div>
            <div className="w-[30px] h-[30px]  py-1 rounded-full">
              <RiInstagramFill className="w-[25px] h-[25px] mx-auto" />
            </div>
            <div className="w-[30px] h-[30px]  py-1 rounded-full">
              <RiWhatsappFill className="w-[25px] h-[25px] mx-auto" />
            </div>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
