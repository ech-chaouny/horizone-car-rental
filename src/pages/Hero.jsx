import React from "react";
import Image from "next/image";
import { arrow, heroImage, local, selectIcon } from "@/assets";

const Hero = () => {
  return (
    <>
      <div className="px-8 absolute z-0">
        <div className="h-[85vh] flex flex-col justify-end items-start">
          <h1 className="text-[64px] text-white font-medium">
            Rent a Car for Every Journey
          </h1>
        </div>
        <div className="px-6 w-full bg-white rounded-[12px]">
          <div className="flex flex-row w-full mt-6 pt-6 pb-4 gap-6">
            <div>
              <div className="flex justify-between items-center">
                <h5 className="font-medium text-[18px]">Departure</h5>
                <div className="inline-flex items-center space-x-2">
                  <span className="font-medium text-[16px]">Round-trip?</span>
                  <label htmlFor="check" className="relative cursor-pointer">
                    <input
                      type="checkbox"
                      id="check"
                      value=""
                      className="sr-only peer"
                    />
                    <div
                      className="w-9 h-[22px] bg-gray-200 rounded-full transition-all duration-500
                      after:absolute after:top-[2px] after:left-[2px] after:peer-checked:left-[16px] after:bg-black after:duration-300 after:peer-checked:bg-white
                      after:rounded-full after:h-[18px] after:w-[18px] peer-checked:bg-black"
                    />
                  </label>
                </div>
              </div>
              <div className="flex bg-[#F6F6F6] rounded-[10px] px-4 py-[18px]">
                <Image className="w-[18px] mr-3" src={local} alt="icon" />
                <span className="font-[450] text-[17.5px]">
                  City, airport or station
                </span>
                <Image
                  className="w-[25px] ml-[72px]"
                  src={selectIcon}
                  alt="icon"
                />
              </div>
            </div>
            <div>
              <h5 className="font-medium text-[18px]">Return Location</h5>
              <div className="flex bg-[#F6F6F6] rounded-[10px] px-4 py-[18px]">
                <Image className="w-[18px] mr-3" src={local} alt="icon" />
                <span className="font-[450] text-[17.5px]">
                  City, airport or station
                </span>
                <Image
                  className="w-[25px] ml-[72px]"
                  src={selectIcon}
                  alt="icon"
                />
              </div>
            </div>
            <div>
              <h5 className="font-medium text-[18px]">Pick Up Date & Time</h5>
              <div className="flex bg-[#F6F6F6] rounded-[10px] px-4 py-[18px]">
                <Image className="w-[18px] mr-3" src={local} alt="icon" />
                <span className="font-[450] text-[17.5px]">
                  City, airport or station
                </span>
                <Image
                  className="w-[25px] ml-[72px]"
                  src={selectIcon}
                  alt="icon"
                />
              </div>
            </div>
            <div>
              <h5 className="font-medium text-[18px]">Return Date & Time</h5>
              <div className="flex bg-[#F6F6F6] rounded-[10px] px-4 py-[18px]">
                <Image className="w-[18px] mr-3" src={local} alt="icon" />
                <span className="font-[450] text-[17.5px]">
                  City, airport or station
                </span>
                <Image
                  className="w-[25px] ml-[72px]"
                  src={selectIcon}
                  alt="icon"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between items-start pb-6">
            <div className="inline-flex items-center space-x-4">
              <span className="font-medium text-[18px]">Filter :</span>
              <div>
                <input
                  type="radio"
                  id="without"
                  name="driver"
                  value="without-driver"
                  className="hidden peer"
                  defaultChecked
                />
                <label
                  htmlFor="without"
                  type="button"
                  className="text-[14px] font-medium cursor-pointer peer-checked:bg-primary peer-checked:text-white py-1.5 px-3 border text-black rounded-full"
                >
                  Without Driver
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="with"
                  name="driver"
                  value="with-driver"
                  className="hidden peer"
                />
                <label
                  type="button"
                  htmlFor="with"
                  className="text-[14px] font-medium cursor-pointer peer-checked:bg-primary peer-checked:text-white py-1.5 px-3 border text-black rounded-full"
                >
                  With Driver
                </label>
              </div>
            </div>
            <button
              className="ml-5 inline-flex items-center bg-primary rounded-lg px-7 py-3 text-white font-medium text-[18px]"
              type="button"
            >
              Search
              <Image className="ml-3 w-[18px]" src={arrow} alt="arrow" />
            </button>
          </div>
        </div>
      </div>
      <Image className="w-full rounded-[20px] p-2" src={heroImage} alt="logo" />
    </>
  );
};

export default Hero;
