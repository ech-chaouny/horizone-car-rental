import React from "react";
import Image from "next/image";
import { arrowBlack, hidden, speed, twoCars, website } from "@/assets";

const Information = () => {
  return (
    <section className="px-2 flex flex-row gap-4 mb-4">
      <div className="">
        <div className="relative mb-4">
          <Image className="rounded-xl" src={hidden} alt="image-1" />
          <div className="absolute top-7 left-7">
            <div className="p-[18px] max-w-[60px] rounded-lg bg-white bg-opacity-10 backdrop-blur-md">
              <Image className="w-6" src={website} alt="icon" />
            </div>
            <h3 className="mt-8 text-white text-4xl font-medium">
              Explore more to get your comfort zone
            </h3>
            <p className="mt-4 text-[21px] text-slate-200">
              Book you perferct stay with us.
            </p>
            <button
              className="inline-flex items-center mt-8 bg-white rounded-lg px-7 py-3 font-[550] text-[18px]"
              type="button"
            >
              Booking now
              <Image className="ml-3 w-[18px] " src={arrowBlack} alt="arrow" />
            </button>
          </div>
        </div>
        <div className="relative">
          <Image className="rounded-xl w-[38rem]" src={speed} alt="image-2" />
          <div className="absolute bottom-7 left-7">
            <p className="text-[22px] text-white font-[450] mb-1">
              Vehicle Available
            </p>
            <span className="text-5xl text-white font-medium">3,490</span>
          </div>
        </div>
      </div>
      <div className="relative">
        <Image
          className="rounded-xl w-[62.3rem] h-auto"
          src={twoCars}
          alt="image-3"
        />
        <h3 className="absolute text-center content-center top-[43%] leading-snug left-48 text-white text-4xl font-medium">
          Beyond acommodation, creating
          <br /> memories of a lifetime
        </h3>
      </div>
    </section>
  );
};

export default Information;
