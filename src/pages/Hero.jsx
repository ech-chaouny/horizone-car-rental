import React from "react";
import Image from "next/image";
import { Return, arrow, heroImage, local, pickUp, selectIcon } from "@/assets";

const Hero = () => {
  return (
    <>
      <div className="relative w-full h-full">
        <Image
          className="rounded-[20px] xl:h-full h-[120vh] object-cover p-2"
          src={heroImage}
          alt="logo"
        />
        <div className="absolute w-full md:bottom-8 bottom-5 md:px-8 px-5">
          <h1 className="xl:text-[64px] lg:text-[55px] md:text-text-[50px] text-[45px] md:text-start text-center leading-tight text-white font-medium">
            Rent a Car for Every Journey
          </h1>
          <div className="px-6 w-full bg-white rounded-[12px] shadow-md">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 mt-6 pt-6 pb-4 gap-6">
              <div className="w-full">
                <div className="flex w-full justify-between items-center">
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
                <div className="flex w-full justify-between bg-[#F6F6F6] rounded-[10px] px-4 py-[18px]">
                  <div className="flex gap-3">
                    <Image className="w-[18px]" src={local} alt="icon" />
                    <span className="font-[450] sm:text-[17.5px]">
                      City, airport or station
                    </span>
                  </div>
                  <Image className="w-[25px]" src={selectIcon} alt="icon" />
                </div>
              </div>
              <div className="w-full">
                <h5 className="font-medium text-[18px]">Return Location</h5>
                <div className="flex w-full justify-between bg-[#F6F6F6] rounded-[10px] px-4 py-[18px]">
                  <div className="flex gap-3">
                    <Image className="w-[18px]" src={local} alt="icon" />
                    <span className="font-[450] sm:text-[17.5px]">
                      City, airport or station
                    </span>
                  </div>
                  <Image className="w-[25px]" src={selectIcon} alt="icon" />
                </div>
              </div>
              <div className="w-full">
                <h5 className="font-medium text-[18px]">Pick Up Date & Time</h5>
                <div className="flex w-full justify-between bg-[#F6F6F6] rounded-[10px] px-4 py-[18px]">
                  <div className="flex gap-3">
                    <Image className="w-[18px]" src={pickUp} alt="icon" />
                    <span className="font-[450] sm:text-[17.5px] tracking-wide">
                      20 Jan 2024
                      <span className="mx-3 border-r-2 border-neutral-300 py-1"></span>
                      09:30 AM
                    </span>
                  </div>
                  <Image className="w-[25px]" src={selectIcon} alt="icon" />
                </div>
              </div>
              <div className="w-full">
                <h5 className="font-medium text-[18px]">Return Date & Time</h5>
                <div className="flex w-full justify-between bg-[#F6F6F6] rounded-[10px] px-4 py-[18px]">
                  <div className="flex gap-3">
                    <Image className="w-[18px]" src={Return} alt="icon" />
                    <span className="font-[450] sm:text-[17.5px] tracking-wide">
                      27 Jan 2024
                      <span className="mx-3 border-r-2 border-neutral-300 py-1"></span>
                      04:30 AM
                    </span>
                  </div>
                  <Image className="w-[25px]" src={selectIcon} alt="icon" />
                </div>
              </div>
            </div>
            <div className="flex sm:flex-row flex-col sm:justify-between items-start pb-6">
              <div className="inline-flex items-center xs:space-x-4 space-x-3">
                <span className="font-medium xs:text-[18px]">Filter :</span>
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
                    className="xs:text-[14px] text-[12px] font-medium cursor-pointer peer-checked:bg-primary peer-checked:text-white py-1.5 px-3 border text-black rounded-full"
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
                    className="xs:text-[14px] text-[12px] font-medium cursor-pointer peer-checked:bg-primary peer-checked:text-white py-1.5 px-3 border text-black rounded-full"
                  >
                    With Driver
                  </label>
                </div>
              </div>
              <a
                href="#vehicles"
                className="sm:w-auto sm:mt-auto mt-5 w-full inline-flex justify-center items-center bg-primary rounded-lg px-7 py-3 text-white font-medium text-[18px]"
                type="button"
              >
                Search
                <Image className="ml-3 w-[18px]" src={arrow} alt="arrow" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
