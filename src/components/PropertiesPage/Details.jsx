import infoBG from "/footerBG.png";
import React, { useState } from "react";
import { FaBed, FaHashtag } from "react-icons/fa6";
import { FaBath } from "react-icons/fa";
import { ImHome } from "react-icons/im";
import { SlCalender } from "react-icons/sl";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import propertyHouse from "../../assets/Property House.png";
import facility1 from "../../assets/Rectangle (1).png";
import facility2 from "../../assets/Rectangle (2).png";
import facility3 from "../../assets/Rectangle (3).png";
import facility4 from "../../assets/Rectangle (4).png";
import facility5 from "../../assets/Rectangle (5).png";
import facility6 from "../../assets/Rectangle (6).png";
import facility7 from "../../assets/Rectangle (7).png";
import profile from "../../assets/profile.png";
const Details = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
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
      <div className="w-[80%] h-full mx-auto max-w-[1200px] pt-28 pb-12 flex flex-row">
        <div className="w-[60%]">
          <div className="">
            <img src={propertyHouse} className="shadow-2xl" alt="" />
          </div>
          <div className="flex flex-row gap-6 py-6">
            <div className="shadow-2xl">
              <img src={facility1} alt="" />
            </div>
            <div className="shadow-2xl">
              <img src={facility2} alt="" />
            </div>
            <div className="shadow-2xl">
              <img src={facility3} alt="" />
            </div>
            <div className="shadow-2xl">
              <img src={facility4} alt="" />
            </div>
            <div className="shadow-2xl">
              <img src={facility5} alt="" />
            </div>
            <div className="shadow-2xl">
              <img src={facility6} alt="" />
            </div>
            <div className="shadow-2xl">
              <img src={facility7} alt="" />
            </div>
          </div>
          <div className=" bg-white shadow-2xl  rounded-xl">
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
          </div>
          <div className=" my-12 shadow-2xl   bg-white rounded-xl ">
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
          </div>
        </div>
        <div className="w-[40%] h-[520px] mx-6 bg-white shadow-2xl rounded-3xl py-3">
          <div>
            <div className="flex flex-row gap-3 items-center bg-[#F5F5F5] mx-6 my-3 rounded-xl px-3 py-4">
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
          <div>
            <div className="mt-12 bg-white rounded-xl ">
              <div className="flex justify-between px-6 py-8 mx-6 border-b border-[#E4E4E4]">
                <h1 className="text-black text-[20px] leading-[23.04px] tracking-[-0.5px]">
                  Description
                </h1>
              </div>
              <div className="flex flex-col px-6 py-6 gap-4 ">
                <p className="text-black text-[15px] leading-[22px] tracking-[-0.38px]">
                  At vero eos et iusto odio dignissimos ducimus, qui haec putat,
                  ut ipsi auctori huius disciplinae placet: constituam, quid sit
                  numeranda nec me ab illo inventore veritatis et expedita
                  distinctio nam libero tempore, cum memoriter, tum etiam ac
                  ratione.
                </p>
                <p className="text-black text-[15px] leading-[22px] tracking-[-0.38px]">
                  Si sine metu degendae praesidia firmissima filium morte
                  multavit si sine causa? quae fuerit causa, mox videro; interea
                  hoc tenebo, si ob rem voluptas assumenda est, quid sit
                  extremum et inter mediocrem animadversionem atque natum sit, a
                  natura incorrupte.
                </p>
                <p className="text-black text-[15px] leading-[22px] tracking-[-0.38px]">
                  Omne animal, simul atque in sanguinem suum tam inportuno
                  tamque crudeli; sin, ut earum motus et accusamus et
                  argumentandum et dolore suo sanciret militaris imperii
                  disciplinam exercitumque in liberos atque haec ratio late
                  patet in quo pertineant non possim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
