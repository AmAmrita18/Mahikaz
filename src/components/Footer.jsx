import React from "react";
import bg2 from "/footerBG.png";
import footerLogo from "/footerLogo.png";
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
      <div className="w-[80%] h-full mx-auto max-w-[1200px] py-28">
        <div className="flex flex-col gap-y-6">
          <h1 className="text-[#1E1E1E] text-[40px] leading-[46.08px] tracking-widest">
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
        <div className="flex flex-row gap-28 py-16">
          <div>
            <img src={footerLogo} alt="" />
          </div>
          <div className="flex flex-col gap-y-8">
            <div>
              <h1 className="text-[#1E1E1E] text-[24px] leading-[27.65px] tracking-widest">
                Agents
              </h1>
              <h2 className=" text-[#1E1E1E] text-[16px] leading-[32px] tracking-widest">
                kumaravel | +230 5123 4567
              </h2>
              <h2 className=" text-[#1E1E1E] text-[16px] leading-[32px] tracking-widest">
                kumaravel | +230 5123 4567
              </h2>
            </div>
            <div>
              <h1 className="text-[#1E1E1E] text-[24px] leading-[27.65px] tracking-widest">
                EMAIL
              </h1>
              <h2 className=" text-[#1E1E1E] text-[16px] leading-[32px] tracking-widest">
                info@mahikazproperties.com
              </h2>
            </div>
          </div>
          <div>
            <h1 className="text-[#1E1E1E] text-[24px] leading-[27.65px] tracking-widest">
              ADDRESS
            </h1>
            <h2 className="uppercase tracking-widest">
              hillcrest avenue, sodnac, <br />
              quatre bornes, mauritius
            </h2>
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <div className="w-[30px] h-[30px] border border-[#1E1E1E] rounded-full"></div>
          <div className="w-[30px] h-[30px] border border-[#1E1E1E] rounded-full"></div>
          <div className="w-[30px] h-[30px] border border-[#1E1E1E] rounded-full"></div>
        </div>
        <div className="flex flex-row justify-between mt-20">
          <h1 className="text-16px] text-[#1E1E1E] tracking-widest leading-[18.43px]">Built With Passion by <span>The Meraki Studio</span></h1>
          <h1 className="text-16px] text-[#1E1E1E] tracking-widest leading-[18.43px]">© Copyright 2024 MahiKaz Limited  |  Privacy Policy</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
