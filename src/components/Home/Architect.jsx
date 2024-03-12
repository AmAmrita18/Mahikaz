import React from "react";
import bgWhite from "/BG1.png";
import architect from "../../assets/architect.png";

const Architect = () => {
  return (
    <div className="w-full bg-[#937D64AD] ">
      <div className="relative w-[80%] h-full mx-auto max-w-[1200px] flex flex-row gap-20">

        <div className="w-[55%] py-28 flex flex-col gap-12">
          <h1 className="text-[32px] text-white leading-[36.86px] tracking-widest">
            MEET KUMARAVEL, THE ARCHITECT BEHIND THE MAHIKAZ VISION
          </h1>
          <p className="text-[21px] leading-[33px] text-white">
            Kumaravel stands as a beacon in real estate, curating homes that
            echo with stories and character. Through Mahikaz, Kumaravel
            introduces properties that are more than just spaces – they are
            memories waiting to be made. Every listing curated by Mahikaz
            carries Kumaravel's stamp of authenticity and value.
          </p>
          <p className="text-[21px] leading-[33px] text-white">
            Dive into the world of Mahikaz, where finding a home becomes a
            journey of discovery and connection.
          </p>
        </div>

        <div className="w-[45%] pt-28 absolute right-0 pl-20">
          <img src={architect} width={445} height={651} className="w-[445px] brightness-75" alt="" />
        </div>
      </div>

      <div
        className="w-full h-60"
        style={{
          backgroundImage: `url('${bgWhite}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          objectFit: "cover",
        }}
      ></div>
    </div>
  );
};

export default Architect;
