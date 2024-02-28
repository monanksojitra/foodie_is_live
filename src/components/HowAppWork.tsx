import React from "react";
import howmadeappimg1 from "../../public/assets/howmadeappimg.png";
import howmadeappimg2 from "../../public/assets/howmadeappimg2.png";
import howmadeappimg3 from "../../public/assets/howmadeappimg3.png";

const HowAppWork = () => {
  const listdata = [
    {
      id: 1,
      title: "Create an account",
      header: "Create/login to an existing account to get started",
      description:
        " An account is created with your email and a desired password",
      img: howmadeappimg1,
    },
    {
      id: 2,
      title: "Explore while shopping",
      header: "Shop for your favorites meal as e dey hot.",
      description:
        "Shop for your favorite meals or drinks and enjoy while doing it.",
      img: howmadeappimg2,
    },
    {
      id: 3,
      title: "Checkout",
      header: "When you done check out and get it delivered.",
      description: " When you done check out and get it delivered with ease.",
      img: howmadeappimg3,
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="py-12 border-b-4 w-full">
        <p className="text-2xl font-semibold">How the app works</p>
      </div>
      {listdata.map((item) => (
        <div key={item.id}>
          <div className="py-16">
            <p className="text-[#FA4A0C] text-2xl font-bold">{item.title}</p>
            <div className="py-12 px-5">
              <h3 className="text-[#252B42] font-bold text-[40px]  tracking-normal leading-snug ">
                {item.header}
              </h3>
            </div>
            <div className="px-20 pt-3">
              <h3 className=" text-[#737373] text-2xl font-medium leading-normal">
                {item.description}
              </h3>
            </div>
          </div>
          <div>
            <img src={item.img} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default HowAppWork;
