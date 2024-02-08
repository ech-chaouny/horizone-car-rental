import React from "react";

import Image from "next/image";
import { arrowBlack, icon, imageone, imagetwo } from "@/assets";

const Deals = () => {
  return (
    <section className="px-8 w-full my-16">
      <div className="flex justify-between items-center">
        <h1 className="font-[530] text-4xl tracking-tight text-black">
          Enjoy extra miles with our best deal
        </h1>
        <button
          className="ml-5 inline-flex items-center border bg-white rounded-lg px-7 py-3 font-[550] text-[18px]"
          type="button"
        >
          See All
          <Image className="ml-3 w-[18px] " src={arrowBlack} alt="arrow" />
        </button>
      </div>
      <div className="grid md:grid-cols-2 gap-5 mt-9">
        <div className="relative">
          <Image
            className="w-full h-full object-contain rounded-xl"
            src={imageone}
            alt="image-2"
          />
          <div className="absolute w-full top-6 px-6">
            <div className="flex justify-between items-center">
              <Image className="w-10" src={icon} alt="icon" />
              <div className="bg-white rounded-full font-medium px-4 py-2">
                Valid only on 12 Jan - 19 Jan 2024
              </div>
            </div>
            <h5 className="font-medium mt-5 text-[22px] text-white max-w-80">
              Experience the Holidays with Our Festive Promotions{" "}
            </h5>
            <span className="text-8xl tracking-tight font-medium text-white">
              40%
            </span>
            <p className="mt-5 text-white font-[16px]">
              *with Terms and Condition
            </p>
          </div>
        </div>
        <div>
          <Image
            className="w-full h-full object-contain rounded-xl"
            src={imagetwo}
            alt="image-1"
          />
        </div>
      </div>
    </section>
  );
};

export default Deals;
