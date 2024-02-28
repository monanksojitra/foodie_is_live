import React from "react";
import phonegropimg from "../../public/assets/phonegropimg.png";

const Hero = () => {
  return (
    <div className="flex w-full container">
      <div className="px-2 py-12 flex items-center justify-center w-full flex-col gap-y-5">
        <p className="text-[#737373] text-base font-bold">Food app</p>
        <div>
          <h3 className="text-[#252B42] font-bold text-4xl text-center tracking-normal leading-10 ">
            Why stay hungry when you can order form Bella Onojie
          </h3>
        </div>
        <div className="px-7 pt-5">
          <h3 className="text-center text-[#737373] text-2xl font-medium">
            Download the bella onoje’s food app now on{" "}
          </h3>
        </div>
        <div className="py-5 space-y-3">
          <div className="bg-[#FA4A0C] px-16 text-white rounded-full h-16 text-2xl font-bold flex items-center justify-center">
            <p>Playstore</p>
          </div>
          <div className="border-2 px-16 h-16 flex items-center justify-center border-[#FA4A0C] text-[#FA4A0C] rounded-full text-2xl font-bold">
            <p>App store</p>
          </div>
        </div>
        <div className="mt-6">
          <img src={phonegropimg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
