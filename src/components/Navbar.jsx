"use client";

import React, { useState } from "react";
import Image from "next/image";
import { search, logo, lang, menu, close } from "@/assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <header className="absolute z-10 px-8 py-[25px] flex w-full justify-between items-center">
        <div className="flex gap-8 items-center">
          <a href="#hero">
            <Image className="w-36" src={logo} alt="logo" />
          </a>
          <nav className="xl:flex hidden gap-6 font-medium text-[18px] text-[#F9FAFA]">
            <a href="#">Hotel</a>
            <a href="#">Flight</a>
            <a href="#">Train</a>
            <a href="#">Travel</a>
            <a href="#">Car Rental</a>
          </nav>
        </div>
        <div className="relative sd:flex hidden">
          <input
            placeholder="Search destination.."
            className="h-[51px] pl-6 pr-14 bg-white bg-opacity-20 backdrop-blur-sm outline-none placeholder:text-[#EDEDED]
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
        <div className="sd:flex hidden items-center">
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
        <div className="flex sd:hidden">
          <Image
            className="w-7"
            src={menu}
            alt="menu"
            onClick={() => {
              setToggle(!toggle);
            }}
          />
        </div>
      </header>

      <div
        className={`fixed h-screen z-10 bg-primary text-white origin-top top-0 ${
          !toggle ? "-left-[100%]" : "left-0"
        } duration-500 ease-in-out w-full`}
      >
        <div className="absolute flex w-full justify-end px-8 py-7">
          <Image
            className="w-7"
            src={close}
            alt="menu"
            onClick={() => {
              setToggle(!toggle);
            }}
          />
        </div>
        <nav className="flex flex-col h-full justify-center items-center gap-y-7 text-[28px] text-white-100 font-[450]">
          <a
            href="#"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            Hotel
          </a>
          <a
            href="#"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            Flight
          </a>
          <a
            href="#"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            Train
          </a>
          <a
            href="#"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            Travel
          </a>
          <a
            href="#"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            Car Rental
          </a>
          <a
            href="#"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            Log In
          </a>
          <a
            href="#"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            Sign Up
          </a>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
