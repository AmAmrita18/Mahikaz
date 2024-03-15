import React , {useState} from "react";
import ImageContact from "/contact.png";
import { MdOutlineFacebook } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { RiWhatsappFill } from "react-icons/ri";
const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
 
  return (
    <div className="w-full bg-white">
      <div className="w-[80%] h-full mx-auto max-w-[1200px] py-32 flex flex-row justify-between ">
        <div
          className="w-[412px] h-[595px] rounded-t-full"
          style={{
            backgroundImage: `url('${ImageContact}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            objectFit: "cover",
          }}
        >
          <div className="w-full h-full bg-[#2A201499] rounded-t-full"></div>
        </div>
        <div>
          <h1 className="text-[50px] leading-[60px]">CONTACT US</h1>
          <div className=" w-full py-16 flex flex-col gap-y-10 ">
            <div className="text-black pb-6  w-full border-b-2 border-black md:text-[18px] text-[16px] font-[500]">
              <input
                type="text"
                id="fullname"
                name="fullname"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                className="bg-transparent lg:w-[100%] md:w-[230px] w-full transition-all duration-700 ease-in-out  hover:scale-95 placeholder:text-black placeholder:text-[18px] border-none !outline-transparent outline-0 focus:outline-0"
              />
            </div>
            <div className="text-black pb-6 w-full border-b-2 border-black md:text-[18px] text-[16px] font-[500]">
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="bg-transparent lg:w-[100%] md:w-[230px] w-full transition-all duration-700 ease-in-out  hover:scale-95 placeholder:text-black  placeholder:text-[18px] border-none !outline-transparent outline-0 focus:outline-0"
              />
            </div>
            <div className="text-black pb-6 w-full border-b-2 border-black md:text-[18px] text-[16px] font-[500]">
              <input
                type="text"
                id="Message"
                name="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
                className="bg-transparent lg:w-[100%] md:w-[230px] w-full transition-all duration-700 ease-in-out  hover:scale-95 placeholder:text-black  placeholder:text-[18px] border-none !outline-transparent outline-0 focus:outline-0"
              />
            </div>
            <div className="flex justify-start">
            <button className="bg-[#251408] transition-all duration-700 ease-in-out  hover:scale-95 w-[200px] text-[17px] leading-[19.58px] tracking-[-0.43px] text-white px-8 py-6 mt-8 rounded-tr-xl">
            CONTACT US
          </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-12 mt-32">
          <div className="flex flex-col gap-y-3">
            <h1 className="text-[25px] text-black leading-[30px]">Contact</h1>
            <h2 className="text-[18px] text-black leading-[30px]"> +230 5123 4567</h2>
          </div>
          <div className="flex flex-col gap-y-3">
            <h1 className="text-[25px] text-black leading-[30px]">Based in</h1>
            <h2 className="text-[18px] text-black leading-[30px]">SH 33, Centrepoint, Trianon, Mauritius</h2>
          </div>
          <div className="flex flex-row gap-x-6 mt-20">
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
  );
};

export default ContactForm;
