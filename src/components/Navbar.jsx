import React from "react";
import Image from "next/image";
import { search, logo, lang } from "@/assets";

const Navbar = () => {
  return (
    <header className="absolute z-10 px-8 py-[25px] flex flex-row items-center">
      <Image className="w-36 mr-8" src={logo} alt="logo" />
      <nav className="flex gap-6 font-medium text-[18px] text-[#F9FAFA]">
        <a href="#">Hotel</a>
        <a href="#">Flight</a>
        <a href="#">Train</a>
        <a href="#">Travel</a>
        <a href="#">Car Rental</a>
      </nav>
      <div className="relative mx-[140px]">
        <input
          placeholder="Search destination.."
          className="h-[51px] px-6 bg-white bg-opacity-20 backdrop-blur-sm outline-none placeholder:text-[#EDEDED]
              w-[340px] border-[1px] border-[#e6e6e69c] text-white rounded-[10px] text-[18px]"
          type="text"
          name=""
          id=""
        />
        <button
          type="button"
          className="absolute inset-y-0 end-0 flex items-center pr-7"
        >
          <Image className="w-[21px]" src={search} alt="icon" />
        </button>
      </div>
      <div className="flex items-center">
        <div className="bg-white rounded-full">
          <Image className="w-9 h-full p-[7.5px]" src={lang} alt="icon" />
        </div>
        <span className="text-white font-medium text-[18px] ml-2.5">EN</span>
        <a className="ml-10 text-white font-medium text-[18px]" href="#">
          Log In
        </a>
        <a
          className="ml-5 bg-white rounded-lg px-6 py-3 text-black font-medium text-[18px]"
          href="#"
        >
          Sign Up
        </a>
      </div>
    </header>
  );
};

export default Navbar;
