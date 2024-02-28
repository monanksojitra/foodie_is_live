import React from "react";
import twit from "../../public/assets/twit.svg";
import fb from "../../public/assets/fb.svg";
import linedin from "../../public/assets/linedin.svg";
const Footer = () => {
  return (
    <div className="w-full bg-[#252B42] text-center">
      <div className="p-10">
        <div className="pt-10 px-2">
          <h3 className="text-white font-bold text-[40px]  tracking-normal leading-snug ">
            Download the app now.
          </h3>
        </div>
        <div className="py-5">
          <h3 className=" text-[#BDBDBD] text-2xl font-medium leading-normal">
            Most calendars are designed for teams.
          </h3>
        </div>
        <div className="flex items-center justify-center gap-x-4 text-base font-bold text-white py-10">
          <div className="bg-[#FA4A0C] flex items-center justify-center h-16 w-full rounded-2xl">
            <p>Buy now</p>
          </div>
          <div className="border-2 flex items-center justify-center h-16 w-full rounded-2xl">
            <p>Try for free</p>
          </div>
        </div>
      </div>
      <div className="bg-white py-16 space-y-4">
        <ul className="flex gap-x-8 items-center justify-center">
          <li>
            <img src={twit} alt="" />
          </li>
          <li>
            <img src={fb} alt="" />
          </li>
          <li>
            <img src={linedin} alt="" />
          </li>
        </ul>
        <p className="text-[#5C5C5C] text-base font-bold">
          Just type what's on your mind and we'll{" "}
        </p>
      </div>
    </div>
  );
};
export default Footer;
