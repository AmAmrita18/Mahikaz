import React from "react";
import bg2 from "/footerBG.png";
import footerLogo from "/footerLogo.png";
import { MdOutlineFacebook } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { RiWhatsappFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div
      className="w-full"
      style={{
        backgroundImage: `url('${bg2}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        objectFit: "cover",
      }}
    >
      <div className="w-[80%] h-full mx-auto max-w-[1200px] md:pt-28 md:pb-16 py-12">
        <div className="flex flex-col gap-y-6">
          <h1 className="text-[#1E1E1E] md:text-[40px] text-[30px] leading-[46.08px] tracking-widest">
            MAHIKAZ PROPERTIES{" "}
          </h1>
          <p className="text-[#1E1E1E] text-[18px] leading-[20.74px] tracking-widest">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="text-[#1E1E1E] text-[18px] leading-[20.74px] tracking-widest">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
        <div className="flex md:flex-row flex-col lg:gap-28 gap-8 md:py-16 py-12">
          <div>
            <img
              src={footerLogo}
              width={150}
              height={150}
              className="md:w-[150px] md:h-[150px] w-[100px] h-[100px]"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-y-8">
            <div className="flex flex-col gap-2">
              <h1 className="text-[#1E1E1E] md:text-[24px] text-[20px] leading-[27.65px] tracking-widest">
                AGENTS
              </h1>
              <h2 className=" text-[#1E1E1E] uppercase text-[16px] leading-[32px] tracking-widest">
                kumaravel | +230 5123 4567
              </h2>
              <h2 className=" text-[#1E1E1E] uppercase text-[16px] leading-[32px] tracking-widest">
                kumaravel | +230 5123 4567
              </h2>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-[#1E1E1E] md:text-[24px] text-[20px] leading-[27.65px] tracking-widest">
                EMAIL
              </h1>
              <h2 className=" text-[#1E1E1E] uppercase text-[16px] leading-[32px] tracking-widest">
                info@mahikazproperties.com
              </h2>
            </div>
          </div>
          <div className="flex flex-col gap-y-8">
            <div className="flex flex-col gap-2">
              <h1 className="text-[#1E1E1E] md:text-[24px] text-[20px] leading-[27.65px] tracking-widest">
                ADDRESS
              </h1>
              <h2 className="uppercase text-[#1E1E1E] text-[16px] leading-[32px] tracking-widest">
                hillcrest avenue, sodnac, <br />
                quatre bornes, mauritius
              </h2>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-[#1E1E1E] md:text-[24px] text-[20px] leading-[27.65px] tracking-widest pb-2">
                SOCIALS
              </h1>
              <div className="flex flex-row gap-2">
                <div className="w-[30px] h-[30px] border border-[#1E1E1E] py-1 rounded-full">
                  <MdOutlineFacebook className="w-[20px] h-[19px] mx-auto" />
                </div>
                <div className="w-[30px] h-[30px] border border-[#1E1E1E] py-1 rounded-full">
                  <RiInstagramFill className="w-[20px] h-[19px] mx-auto" />
                </div>
                <div className="w-[30px] h-[30px] border border-[#1E1E1E] py-1 rounded-full">
                  <RiWhatsappFill className="w-[20px] h-[19px] mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Footer;
