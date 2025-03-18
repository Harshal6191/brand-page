import React from "react";
import shoe from "../assets/shoe_image.png";
import flipkart from "../assets/flipkart.png";
import amazon from "../assets/amazon.png";

const Hero = () => {
  return (
    <div>
      <div className=" w-[1125px] h-[613px] flex-1/2 flex flex-row mt-5">
        <div className="flex flex-col flex-1/2 shoeText">
          <div className="">
            <h1 className="text-8xl font-extrabold font-(poppins)">YOUR FEET DESERVE THE BEST</h1>
          </div>

          <div className=" w-[404px] mt-8">
            <p className="font-(poppins) font-semibold text-[16px] text-[#5A5959]">
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
            </p>
          </div>

          <div className="flex gap-10 mt-8">
            <button  className='hover:bg-red-950 text-[16px] font-semibold text-white bg-red-700 px-3 items-center py-1 font-(poppins)'>Shop Now</button>
            <button  className='text-[16px] font-semibold text-black bg-white border px-3 py-1 items-center font-(poppins)'>Category</button>
          </div>

          <div className="mt-10">
            <p className="font-(inter) font-normal text-[#5A5959] text-sm">
                Also Available On
                </p>
            <div className="flex gap-4 mt-3">
                <img className="h-[32px] w-[32px]" src={flipkart} alt="flipkart" />
                <img  className="h-[32px] w-[32px]"src={amazon} alt="amazon" />
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
            <img className="shoe transition-all" src={shoe} alt="shoe" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
