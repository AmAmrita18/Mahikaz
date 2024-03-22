import infoBG from "/footerBG.png";
import React, { useState } from "react";
import { FaBed, FaHashtag } from "react-icons/fa6";
import { FaBath } from "react-icons/fa";
import { ImHome } from "react-icons/im";
import { SlCalender } from "react-icons/sl";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
// import propertyHouse from "../../assets/Property House.png";
// import facility1 from "../../assets/Rectangle (1).png";
// import facility2 from "../../assets/Rectangle (2).png";
// import facility3 from "../../assets/Rectangle (3).png";
// import facility4 from "../../assets/Rectangle (4).png";
// import facility5 from "../../assets/Rectangle (5).png";
// import facility6 from "../../assets/Rectangle (6).png";
// import facility7 from "../../assets/Rectangle (7).png";
import profile from "../../assets/profile.png";
import Header from "../Header";
import { beachfront } from "../../assets/Mahikaz assets/Beachfront Penthouse";

const Details = ({ estate }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [displayImage, setDisplayImage] = useState(0);
  const {
    title,
    description,
    features,
    beds,
    washroom,
    livingroom,
    images,
    address,
    price,
    averageprice,
  } = estate;

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
      <div className="w-full h-full bg-[#937D6480]">
      <Header transparent={false} />
      <div className="w-[80%] h-full mx-auto max-w-[1200px] md:pt-28 pt-12 pb-12 flex flex-col">
        <div className="flex flex-row justify-between mb-10 ">
          <div className="flex flex-col md:gap-y-8 gap-y-4">
            <h1 className="text-[#251408] md:text-[50px] text-[28px] md:font-normal font-bold leading-[25.6px] tracking-[-0.8px]">
              {title}
            </h1>
            <h2 className="text-[#251408] text-[18px] leading-[24px] tracking-[-0.38px]">
              {address}
            </h2>
          </div>
          <div className="flex flex-col gap-y-8">
            <h1 className="text-[#251408] md:text-[50px] text-[20px] leading-[25.6px] tracking-[-0.8px]">
              {price}
            </h1>
            <h2 className="text-[#251408] text-[18px] leading-[24px] text-end tracking-[-0.38px]">
              {averageprice}
            </h2>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col">
          <div className="lg:w-[60%]">
            <div className="">
              <img
                src={images[displayImage]}
                width={704}
                height={520}
                className="md:w-[704px] md:h-[520px] w-[500px] h-[400px] shadow-2xl rounded-tr-[57px] object-cover"
                alt=""
              />
            </div>

            <div className="flex w-full flex-row md:gap-6 gap-2 py-6">
              {images.map(
                (image, index) =>
                  index != displayImage && (
                    <div
                      onClick={() => setDisplayImage(index)}
                      key={`img` + index}
                      className="shadow-2xl  cursor-pointer"
                    >
                      <img
                        src={image}
                        alt=""
                        className="md:w-[80px] md:h-[80px] w-[60px] h-[50px] object-cover rounded-tr-2xl"
                      />
                    </div>
                  )
              )}
            </div>

            {/* details div  */}
            {/* <div className=" bg-white shadow-2xl  rounded-xl">
              <div className="flex justify-between px-6 py-6 border-b border-[#E4E4E4]">
                <h1 className="text-black text-[20px] leading-[23.04px] tracking-[-0.5px]">
                  Details
                </h1>
                <h1 className="text-black text-[20px] leading-[23.04px] tracking-[-0.5px]">
                  Rs 80000
                </h1>
              </div>
              <div className="flex flex-row justify-between ">
                <div className="mx-auto text-center pr-16 border-r border-[#E4E4E4] py-4">
                  <h1 className="flex flex-row gap-2 items-center text-black text-[17px] leading-[23.04px] tracking-[-0.5px]">
                    <FaBed />4
                  </h1>
                </div>
                <div className="mx-auto text-center pr-16 border-r border-[#E4E4E4] py-4">
                  <h1 className="flex flex-row gap-2 items-center text-black text-[17px] leading-[23.04px] tracking-[-0.5px]">
                    <FaBath />2
                  </h1>
                </div>
                <div className="mx-auto text-center pr-16 border-r border-[#E4E4E4] py-4">
                  <h1 className="flex flex-row gap-2 items-center text-black text-[17px] leading-[23.04px] tracking-[-0.5px]">
                    <FaHashtag />2
                  </h1>
                </div>
                <div className="mx-auto text-center pr-16 border-r border-[#E4E4E4] py-4">
                  <h1 className="flex flex-row gap-2 items-center text-black text-[17px] leading-[23.04px] tracking-[-0.5px]">
                    <ImHome />1
                  </h1>
                </div>
                <div className="mx-auto  py-4">
                  <h1 className="flex flex-row gap-2 items-center text-black text-[17px] leading-[23.04px] tracking-[-0.5px]">
                    <SlCalender />
                    2007
                  </h1>
                </div>
              </div>
            </div> */}

            {/* features div  */}
            {/* <div className=" my-12 shadow-2xl   bg-white rounded-xl ">
              <div className="flex justify-between px-6 py-8 border-b border-[#E4E4E4]">
                <h1 className="text-black text-[20px] leading-[23.04px] tracking-[-0.5px]">
                  Features
                </h1>
              </div>
              <div className="flex flex-row  px-6 py-8 justify-between ">
                <ul className="flex flex-col gap-y-4 text-[15px] text-black leading-[22px] tracking-[-0.38px]">
                  <li className="flex flex-row gap-2 items-center">
                    <FaCircleCheck />
                    Air Conditioning
                  </li>
                  <li className="flex flex-row gap-2 items-center">
                    <FaCircleCheck />
                    Swimming Pool
                  </li>
                  <li className="flex flex-row gap-2 items-center">
                    <FaCircleCheck />
                    Garage
                  </li>
                  <li className="flex flex-row gap-2 items-center">
                    <FaCircleCheck />
                    Sea Access
                  </li>
                  <li className="flex flex-row gap-2 items-center">
                    <FaCircleCheck />
                    Pet Friendly
                  </li>
                </ul>
                <ul className="flex flex-col gap-y-4 text-[15px] text-black leading-[22px] tracking-[-0.38px]">
                  <li className="flex flex-row gap-2 items-center">
                    <FaCircleCheck />
                    Jacuzzi
                  </li>
                  <li className="flex flex-row gap-2 items-center">
                    <FaCircleCheck />
                    Parking Facilities
                  </li>
                  <li className="flex flex-row gap-2 items-center">
                    <FaCircleCheck />
                    Home Office
                  </li>
                  <li className="flex flex-row gap-2 items-center">
                    <FaCircleCheck />
                    Fenced-property
                  </li>
                  <li className="flex flex-row gap-2 items-center">
                    <FaCircleCheck />
                    Alarm system
                  </li>
                </ul>
                <ul className="flex flex-col gap-y-4 text-[15px] text-black leading-[22px] tracking-[-0.38px]">
                  <li className="flex flex-row gap-2 items-center">
                    <FaCircleCheck />
                    CCTV Cameras
                  </li>
                  <li className="flex flex-row gap-2 items-center">
                    <FaCircleCheck />
                    Water Tank
                  </li>
                  <li className="flex flex-row gap-2 items-center">
                    <FaCircleCheck />
                    Solar power
                  </li>
                  <li className="flex flex-row gap-2 items-center">
                    <FaCircleCheck />
                    Wifi
                  </li>
                  <li className="flex flex-row gap-2 items-center">
                    <FaCircleCheck />
                    School Nearby
                  </li>
                </ul>
              </div>
            </div> */}
          </div>

          <div className="lg:w-[40%] lg:py-0 md:py-16 ">
            {/* mahikaz form  */}
            <div
              className="w-full bg-white
            lg:mx-6  shadow-2xl rounded-2xl py-6 md:mt-0 mt-8"
            >
              <div className="flex flex-row gap-3 items-center bg-[#F5F5F5] mx-6 my-3 rounded-xl px-3 py-4">
                <div>
                  <img
                    src={profile}
                    width={40}
                    height={40}
                    alt=""
                    className="object-cover w-[40px] h-[40px]"
                  />
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
              <form className="flex flex-col items-end gap-y-2 mx-6 ">
                <div className="text-[#0A385A] w-full py-2  border rounded-xl">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    className="bg-transparent tracking-wider pl-3 text-[14px]  font-[500] mb-2 w-full border-none  placeholder:text-black outline outline-0 focus:outline-0"
                  />
                </div>
                <div className="text-[#0A385A]  w-full py-2  border rounded-xl  ">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="bg-transparent tracking-wider pl-3 mb-2 text-[14px] font-[500]  w-full border-none placeholder:text-black outline outline-0 focus:outline-0"
                  />
                </div>
                <div className="text-[#0A385A] w-full py-2  border rounded-xl">
                  <input
                    type="text"
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Message"
                    className="bg-transparent tracking-wider pl-3 mb-2 text-[14px] font-[500]  w-full border-none  placeholder:text-black outline outline-0 focus:outline-0"
                  />
                </div>
                <div className="text-[#0A385A] w-full py-2  border rounded-xl">
                  <textarea
                    id="w3review"
                    name="w3review"
                    rows="2"
                    cols="50"
                    placeholder="Hello, Iám interested in..."
                    className="bg-transparent tracking-wider pl-3 text-[14px]  font-[500]  w-full border-none  placeholder:text-black outline outline-0 focus:outline-0"
                  ></textarea>
                </div>
                <button className="bg-[#251408] flex flex-row gap-8 justify-center items-center w-full text-[17px] leading-[19.58px] tracking-[-0.43px] text-white px-8 py-6 rounded-tr-xl">
                  Contact Us <FaLongArrowAltRight className="w-[20px]" />
                </button>
              </form>
            </div>
            <br />

            {/* description  */}
            <div className="w-full  mb-10 lg:mx-6  shadow-2xl rounded-2xl ">
              <div className="mt-4 bg-white rounded-xl ">
                <div className="flex justify-between px-6 py-8 mx-6 border-b border-[#E4E4E4]">
                  <h1 className="text-black text-[20px] leading-[23.04px] tracking-[-0.5px]">
                    Description
                  </h1>
                </div>
                <div className="flex flex-col px-6 py-6 gap-4 ">
                  {estate.description.map((desc, index) => (
                    <div key={`PAR${estate.title + index}`}>
                      <p className="text-black text-[15px] leading-[22px] tracking-[-0.38px]">
                        {desc}
                      </p>
                      <br />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Details;
