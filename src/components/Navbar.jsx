import React from "react";
import Image from "next/image";
import { logo } from "@/assets";

const Navbar = () => {
  return (
    <header className="absolute z-10 p-8 flex flex-row items-center">
      <Image className="w-36 mr-8" src={logo} alt="logo" />
      <nav className="flex gap-6 font-medium text-[18px] text-[#F9FAFA]">
        <a href="#">Hotel</a>
        <a href="#">Flight</a>
        <a href="#">Train</a>
        <a href="#">Travel</a>
        <a href="#">Car Rental</a>
      </nav>
      <div>
        <input className="" type="search" name="" id="" />
      </div>
    </header>
  );
};

export default Navbar;
