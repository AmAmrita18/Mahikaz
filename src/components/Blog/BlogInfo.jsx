import React from "react";
import card1 from "../../assets/card1.png";
import card2 from "../../assets/card1.png";
import card3 from "../../assets/card3.png";
import card4 from "../../assets/card4.png";
import card5 from "../../assets/card5.png";
import card6 from "../../assets/card6.png";
import card7 from "../../assets/card7.png";
import card8 from "../../assets/card8.png";
import card9 from "../../assets/card9.png";
import peop1 from "../../assets/Ellipse.png";
import peop2 from "../../assets/Ellipse.png";
import peop3 from "../../assets/Ellipse (1).png";
import peop4 from "../../assets/Ellipse (2).png";
import peop5 from "../../assets/Ellipse (3).png";
import peop6 from "../../assets/Ellipse (4).png";
import peop7 from "../../assets/Ellipse (5).png";
import peop8 from "../../assets/Ellipse (6).png";
import peop9 from "../../assets/Ellipse (7).png";

import infoBG from "/footerBG.png";
import { Link } from "react-router-dom";
const BlogInfo = () => {
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
      <div className="w-full bg-[#937D6466]">
        <div className="w-[80%] mx-auto max-w-[1200px] h-full py-24 flex flex-col gap-4">
          <h1 className="text-[60px] leading-[69.12px] text-white">
            Mahikaz Insights: Navigating the Mauritian Property Landscape
          </h1>
          <p className="text-[18px] leading-[29.37px] text-white">
            Dive into Our Expert Blog for the Latest Trends, Tips, and Tales in
            Mauritius Real Estate. Your Journey to Property Excellence Starts
            Here.
          </p>
          <div className="grid grid-cols-3 gap-8 py-6">
            <Link to="/mainblog">
            <div className="bg-white rounded-2xl">
              <img src={card1} alt="" className="w-full rounded-t-2xl" />
              <div className="flex flex-col gap-4 py-8 px-8">
                <h1 className="text-[#25313C] text-[20px] leading-[23.04px]">
                  The Hidden Gems of Mauritius Real Estate: Discovering Unique
                  Properties
                </h1>
                <p className="text-[#25313C] text-[14px] leading-[23.04px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam sagittis, sem in sagittis aliquet, sapien purus
                  ullamcorper metus, a fermentum elit nibh non enim. Aliquam
                  quis sagittis nulla, vehicula suscipit.
                </p>
                <div className="flex flex-row items-center gap-4">
                  <img src={peop1} alt="" />
                  <h1>Bessie Cooper</h1>
                  <h1>|</h1>
                  <h1>2nd February,2024</h1>
                </div>
              </div>
            </div></Link>
            <Link to="/mainblog"><div className="bg-white rounded-2xl">
              <img src={card2} alt="" className="w-full rounded-t-2xl" />
              <div className="flex flex-col gap-4 py-8 px-8">
                <h1 className="text-[#25313C] text-[20px] leading-[23.04px]">
                  Investing in Mauritius: A Guide to the Island's Booming
                  Property Market
                </h1>
                <p className="text-[#25313C] text-[14px] leading-[23.04px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam sagittis, sem in sagittis aliquet, sapien purus
                  ullamcorper metus, a fermentum elit nibh non enim. Aliquam
                  quis sagittis nulla, vehicula suscipit.
                </p>
                <div className="flex flex-row items-center gap-4">
                  <img src={peop2} alt="" />
                  <h1>Bessie Cooper</h1>
                  <h1>|</h1>
                  <h1>5th March,2024</h1>
                </div>
              </div>
            </div></Link>
            <Link to="/mainblog"><div className="bg-white rounded-2xl">
              <img src={card3} alt="" className="w-full rounded-t-2xl" />
              <div className="flex flex-col gap-4 py-8 px-8">
                <h1 className="text-[#25313C] text-[20px] leading-[23.04px]">
                  Coastal Living: Exploring Mauritius' Most Stunning Beachfront
                  Homes
                </h1>
                <p className="text-[#25313C] text-[14px] leading-[23.04px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam sagittis, sem in sagittis aliquet, sapien purus
                  ullamcorper metus, a fermentum elit nibh non enim. Aliquam
                  quis sagittis nulla, vehicula suscipit.
                </p>
                <div className="flex flex-row items-center gap-4">
                  <img src={peop3} alt="" />
                  <h1>Courtney Henry</h1>
                  <h1>|</h1>
                  <h1>13th April, 2024</h1>
                </div>
              </div>
            </div></Link>
            <Link to="/mainblog"><div className="bg-white rounded-2xl">
              <img src={card4} alt="" className="w-full rounded-t-2xl" />
              <div className="flex flex-col gap-4 py-8 px-8">
                <h1 className="text-[#25313C] text-[20px] leading-[23.04px]">
                  Mauritius for Expats: Navigating the Property Market as a
                  Newcomer
                </h1>
                <p className="text-[#25313C] text-[14px] leading-[23.04px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam sagittis, sem in sagittis aliquet, sapien purus
                  ullamcorper metus, a fermentum elit nibh non enim. Aliquam
                  quis sagittis nulla, vehicula suscipit.
                </p>
                <div className="flex flex-row items-center gap-4">
                  <img src={peop4} alt="" />
                  <h1>Darlene Robert</h1>
                  <h1>|</h1>
                  <h1>28th April,2024</h1>
                </div>
              </div>
            </div></Link>
            <Link to="/mainblog"><div className="bg-white rounded-2xl">
              <img src={card5} alt="" className="w-full rounded-t-2xl" />
              <div className="flex flex-col gap-4 py-8 px-8">
                <h1 className="text-[#25313C] text-[20px] leading-[23.04px]">
                  Sustainable Living in Mauritius: Eco-Friendly Homes and Green
                  Initiatives
                </h1>
                <p className="text-[#25313C] text-[14px] leading-[23.04px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam sagittis, sem in sagittis aliquet, sapien purus
                  ullamcorper metus, a fermentum elit nibh non enim. Aliquam
                  quis sagittis nulla, vehicula suscipit.
                </p>
                <div className="flex flex-row items-center gap-4">
                  <img src={peop5} alt="" />
                  <h1>Leslie Alexander</h1>
                  <h1>|</h1>
                  <h1>2nd May,2024</h1>
                </div>
              </div>
            </div></Link>
            <Link to="/mainblog"><div className="bg-white rounded-2xl">
              <img src={card6} alt="" className="w-full rounded-t-2xl" />
              <div className="flex flex-col gap-4 py-8 px-8">
                <h1 className="text-[#25313C] text-[20px] leading-[23.04px]">
                  The Art of Mauritian Architecture: Blending Tradition with
                  Modernity
                </h1>
                <p className="text-[#25313C] text-[14px] leading-[23.04px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam sagittis, sem in sagittis aliquet, sapien purus
                  ullamcorper metus, a fermentum elit nibh non enim. Aliquam
                  quis sagittis nulla, vehicula suscipit.
                </p>
                <div className="flex flex-row items-center gap-4">
                  <img src={peop6} alt="" />
                  <h1>Eleanor Pena</h1>
                  <h1>|</h1>
                  <h1>23rd May,2024</h1>
                </div>
              </div>
            </div></Link>
            <Link to="/mainblog"><div className="bg-white rounded-2xl">
              <img src={card7} alt="" className="w-full rounded-t-2xl" />
              <div className="flex flex-col gap-4 py-8 px-8">
                <h1 className="text-[#25313C] text-[20px] leading-[23.04px]">
                  Inside Mauritius' Luxury Villas: A Peek into High-End Island
                  Living
                </h1>
                <p className="text-[#25313C] text-[14px] leading-[23.04px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam sagittis, sem in sagittis aliquet, sapien purus
                  ullamcorper metus, a fermentum elit nibh non enim. Aliquam
                  quis sagittis nulla, vehicula suscipit.
                </p>
                <div className="flex flex-row items-center gap-4">
                  <img src={peop7} alt="" />
                  <h1>Jane Cooper</h1>
                  <h1>|</h1>
                  <h1>26th June,2024</h1>
                </div>
              </div>
            </div></Link>
            <Link to="/mainblog"><div className="bg-white rounded-2xl">
              <img src={card8} alt="" className="w-full rounded-t-2xl" />
              <div className="flex flex-col gap-4 py-8 px-8">
                <h1 className="text-[#25313C] text-[20px] leading-[23.04px]">
                  Real Estate Market Analysis: Understanding Mauritius' Property
                  Trends
                </h1>
                <p className="text-[#25313C] text-[14px] leading-[23.04px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam sagittis, sem in sagittis aliquet, sapien purus
                  ullamcorper metus, a fermentum elit nibh non enim. Aliquam
                  quis sagittis nulla, vehicula suscipit.
                </p>
                <div className="flex flex-row items-center gap-4">
                  <img src={peop8} alt="" />
                  <h1>Jenny Wilson</h1>
                  <h1>|</h1>
                  <h1>25th July,2024</h1>
                </div>
              </div>
            </div></Link>
            <Link to="/mainblog"><div className="bg-white rounded-2xl">
              <img src={card9} alt="" className="w-full rounded-t-2xl" />
              <div className="flex flex-col gap-4 py-8 px-8">
                <h1 className="text-[#25313C] text-[20px] leading-[23.04px]">
                  Your Dream Vacation Home in Mauritius: What to Know Before You
                  Buy
                </h1>
                <p className="text-[#25313C] text-[14px] leading-[23.04px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam sagittis, sem in sagittis aliquet, sapien purus
                  ullamcorper metus, a fermentum elit nibh non enim. Aliquam
                  quis sagittis nulla, vehicula suscipit.
                </p>
                <div className="flex flex-row items-center gap-4">
                  <img src={peop9} alt="" />
                  <h1>Jacob Jones</h1>
                  <h1>|</h1>
                  <h1>29th August,2024</h1>
                </div>
              </div>
            </div></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogInfo;
