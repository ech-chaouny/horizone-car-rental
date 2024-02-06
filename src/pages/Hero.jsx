import React from "react";
import Image from "next/image";
import { heroImage, local, selectIcon } from "@/assets";

const Hero = () => {
  return (
    <div className="">
      <div className="px-8 absolute z-0">
        <div className="h-[85vh] flex flex-col justify-end items-start">
          <h1 className="text-[64px] text-white font-medium">
            Rent a Car for Every Journey
          </h1>
        </div>
        <div className="bg-white rounded-[20px] flex flex-row w-full px-7 mt-6 py-5 gap-5">
          <div>
            <h5 className="font-medium text-[18px]">Departure</h5>
            <div className="flex bg-[#F6F6F6] rounded-xl p-4">
              <Image className="w-[18px] mr-3" src={local} alt="icon" />
              <span className="font-normal text-[17.5px]">
                City, airport or station
              </span>
              <Image
                className="w-[25px] ml-[66px]"
                src={selectIcon}
                alt="icon"
              />
            </div>
          </div>
          <div>
            <h5 className="font-medium text-[18px]">Return Location</h5>
            <div className="flex bg-[#F6F6F6] rounded-xl p-4">
              <Image className="w-[18px] mr-3" src={local} alt="icon" />
              <span className="font-normal text-[17.5px]">
                City, airport or station
              </span>
              <Image
                className="w-[25px] ml-[66px]"
                src={selectIcon}
                alt="icon"
              />
            </div>
          </div>
          <div>
            <h5 className="font-medium text-[18px]">Pick Up Date & Time</h5>
            <div className="flex bg-[#F6F6F6] rounded-xl p-4">
              <Image className="w-[18px] mr-3" src={local} alt="icon" />
              <span className="font-normal text-[17.5px]">
                City, airport or station
              </span>
              <Image
                className="w-[25px] ml-[66px]"
                src={selectIcon}
                alt="icon"
              />
            </div>
          </div>
          <div>
            <h5 className="font-medium text-[18px]">Return Date & Time</h5>
            <div className="flex bg-[#F6F6F6] rounded-xl p-4">
              <Image className="w-[18px] mr-3" src={local} alt="icon" />
              <span className="font-normal text-[17.5px]">
                City, airport or station
              </span>
              <Image
                className="w-[25px] ml-[66px]"
                src={selectIcon}
                alt="icon"
              />
            </div>
          </div>
        </div>
      </div>
      <Image className="w-full rounded-[20px] p-2" src={heroImage} alt="logo" />
    </div>
  );
};

export default Hero;
