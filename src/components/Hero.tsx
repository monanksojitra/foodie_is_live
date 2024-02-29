import React from "react";
import phonegropimg from "../../public/assets/phonegropimg.png";

const Hero = () => {
  return (
    <div className=" w-full  ">
      <div className="px-2 py-12 lg:py-[70px]  lg:bg-[url('/assets/heroimg.png')] bg-no-repeat bg-cover mx-auto flex items-center justify-center w-full flex-col gap-y-5">
        <p className="text-[#737373] lg:text-white text-base font-bold lg:text-2xl">
          Food app
        </p>
        <div className="">
          <h3 className="text-[#252B42] font-bold lg:leading-snug text-4xl lg:text-6xl lg:px-60 text-center tracking-normal leading-10 lg:text-white">
            Why stay hungry when you can order form Bella Onojie
          </h3>
        </div>
        <div className="px-7 pt-5 lg:pt-2">
          <h3 className="text-center text-[#737373] text-2xl font-medium lg:text-white">
            Download the bella onoje’s food app now on
          </h3>
        </div>
        <div className="py-5 lg:py-8 max-lg:space-y-3 lg:flex gap-x-7">
          <div className="bg-[#FA4A0C] px-16 text-white rounded-full h-16 text-2xl font-bold flex items-center justify-center">
            <p>Playstore</p>
          </div>
          <div className="border-2 px-16 h-16 flex items-center justify-center border-[#FA4A0C] text-[#FA4A0C] lg:text-white rounded-full text-2xl font-bold">
            <p>App store</p>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-center">
        <img src={phonegropimg} alt="" className="lg:scale-125" />
      </div>
    </div>
  );
};

export default Hero;
