import React from "react";
import resultsHero from "/resultsHero.png";
const Results = () => {
  return (
    <div
      className="w-full"
      style={{
        backgroundImage: `url('${resultsHero}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        objectFit: "cover",
      }}
    >
      <div className="w-full bg-[#32210DAD]">
      <div className="w-[80%] h-full mx-auto max-w-[1200px] md:py-32 py-12 flex flex-col items-center gap-y-12">
        <h1 className="md:text-[60px] text-[45px] text-center leading-[69.12px] tracking-widest text-white">PROVEN RESULTS</h1>
        <p className="text-[20px] leading-[23.04px] tracking-widest text-white text-center md:px-44">Mahikaz stands on a legacy of unmatched results. More than statistics, our success is etched in the smiles of our clients and the seamless deals we've orchestrated. Trust Mahikaz: where every transaction is a testament to our excellence.</p>
        <div className="flex md:flex-row flex-col md:gap-24 gap-4">
          <div>
            <h1 className="md:text-[60px] text-[45px] text-center leading-[69.12px] tracking-widest text-white">850+</h1>
            <h2 className="text-[19px] text-center leading-[21.89px] tracking-widest text-white">PROPERTIES SOLD</h2>
          </div>
          <div>
            <h1 className="md:text-[60px] text-[45px] text-center leading-[69.12px] tracking-widest text-white">1200+</h1>
            <h2 className="text-[19px] text-center leading-[21.89px] tracking-widest text-white">PROPERTIES RENTED</h2>
          </div>
          <div>
            <h1 className="md:text-[60px] text-[45px] text-center leading-[69.12px] tracking-widest text-white">97%</h1>
            <h2 className="text-[19px] text-center leading-[21.89px] tracking-widest text-white">SATISFIED CLIENTS</h2>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Results;
