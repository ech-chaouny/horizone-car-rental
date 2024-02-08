import React from "react";
import Image from "next/image";

import { bag, chair, gearbox, star } from "@/assets";

const Vehicle = ({ vehicle }) => {
  return (
    <div className="w-full h-auto">
      <div className="relative">
        <Image
          className="w-full h-full rounded-xl"
          src={vehicle.image}
          alt={vehicle.brand}
        />
        <div className="rounded-full absolute px-3.5 py-2 font-[550] top-3 left-3 bg-[#dbdbdb] ">
          {vehicle.type}
        </div>
      </div>
      <h2 className="font-[550] text-[22px] mt-4">{vehicle.brand}</h2>
      <div className="flex gap-2 mt-1.5">
        <Image className="w-[19px]" src={gearbox} alt="" />
        <span className="font-[450] text-[19.5px] text-secondary">
          {vehicle.transmission}
        </span>
      </div>
      <div className="flex gap-5 mt-1.5 mb-3">
        <div className="inline-flex space-x-2">
          <Image className="w-[21px]" src={chair} alt="" />
          <span className="font-[450] text-[22px] text-secondary">
            {vehicle.place}
          </span>
        </div>
        <div className="inline-flex space-x-2">
          <Image className="w-3.5" src={bag} alt="" />
          <span className="font-[450] text-[22px] text-secondary">
            {vehicle.bags}
          </span>
        </div>
        <div className="inline-flex space-x-2">
          <Image className="w-[23px]" src={star} alt="" />
          <span className="font-[450] text-[22px] text-secondary">
            {vehicle.star}
          </span>
        </div>
      </div>
      <span className="font-[470] text-[15px] text-secondary">Start from</span>
      <div>
        <span className="text-black font-semibold text-3xl">
          {vehicle.price}{" "}
        </span>
        <span className="text-secondary font-[480]">/ day</span>
      </div>
    </div>
  );
};

export default Vehicle;
