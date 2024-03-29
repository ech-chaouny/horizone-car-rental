import React from "react";
import Image from "next/image";
import { logo } from "@/assets";
import { socialmedia } from "@/constants";

const Footer = () => {
  return (
    <footer className="px-6 py-5 mx-2 mb-2 rounded-xl bg-black">
      <div className="lg:flex lg:flex-row grid md:grid-cols-2 grid-cols-1 lg:justify-between justify-center items-start">
        <div>
          <Image className="w-36" src={logo} alt="logo" />
          <p className="text-zinc-400 tracking-wide my-5">
            Our mission is to equip modern explorers
            <br /> with cutting-edge, functional, and stylish
            <br /> bags that elevate every adventure.
          </p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-white text-[19px] font-medium tracking-wide mb-5">
            About
          </h2>
          <a className="text-zinc-400 text-[17px] tracking-wide mb-4" href="#">
            About Us
          </a>
          <a className="text-zinc-400 text-[17px] tracking-wide mb-4" href="#">
            Blog
          </a>
          <a className="text-zinc-400 text-[17px] tracking-wide mb-4" href="#">
            Career
          </a>
        </div>
        <div className="flex flex-col">
          <h2 className="text-white text-[19px] font-medium tracking-wide mb-5">
            Support
          </h2>
          <a className="text-zinc-400 text-[17px] tracking-wide mb-4" href="#">
            Contact Us
          </a>
          <a className="text-zinc-400 text-[17px] tracking-wide mb-4" href="#">
            Return
          </a>
          <a className="text-zinc-400 text-[17px] tracking-wide mb-4" href="#">
            FAQ
          </a>
        </div>
        <div className="flex flex-col">
          <h2 className="text-white text-[19px] font-medium tracking-wide mb-5">
            Get Updates
          </h2>
          <div className="relative xs:max-w-[360px]">
            <input
              placeholder="Enter your email"
              className="h-[58px] -my-1.5 pl-4 pr-32 bg-white bg-opacity-20 backdrop-blur-sm outline-none placeholder:text-[#8a8a8a]
               border-[1.5px] xs:w-[360px] w-full border-[#5e5e5e] text-[#8a8a8a] font-[450] rounded-[8px] text-[18px]"
              type="email"
              name=""
            />
            <button
              type="button"
              className="absolute rounded-lg font-[550] bg-white inset-y-0 right-2 end-0 flex items-center px-4"
            >
              Subscribe
            </button>
          </div>
          <div className="max-w-[360px] mt-7 flex flex-row items-center justify-between">
            {socialmedia.map((social, index) => (
              <a
                key={index}
                href={social.link}
                className="bg-white flex justify-center items-center bg-opacity-20 sm:w-[55px] sm:h-[55px] w-[50px] h-[50px] backdrop-blur-sm rounded-full"
              >
                <Image
                  className="sm:w-[34px] w-[30px]"
                  src={social.icon}
                  alt="twitter"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-between gap-y-6 mt-10">
        <div>
          <span className="text-white xs:text-[19px] text-[18px] font-medium tracking-wide">
            ©2024 Horizone. All rights reserved.
          </span>
        </div>
        <div className="flex gap-x-6">
          <span className="text-white text-[18px] font-[450] tracking-wide">
            Pivacy Policy
          </span>
          <span className="text-white text-[18px] font-[450] tracking-wide">
            Terms of Service
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
