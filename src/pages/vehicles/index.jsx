import React from "react";
import Image from "next/image";

import { vehicles } from "@/constants";
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

const Vehicles = () => {
  return (
    <section className="px-8 w-full my-10">
      <h1 className="font-[530] text-4xl tracking-tight text-black">
        Top picks vehicle this month
      </h1>
      <p className="mt-3 text-[20px] text-secondary font-[470]">
        Experience the epitome of amazing journey with our top picks.
      </p>
      <div className="mt-10 grid w-full gap-6 md:grid-cols-4">
        {vehicles.map((vehicle, index) => (
          <Vehicle key={index} vehicle={vehicle} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-14">
        <button className="border rounded-lg px-6 py-3 text-[18px] hover:text-white transition-all duration-500 font-[550] bg-white hover:bg-primary">
          See More
        </button>
      </div>
    </section>
  );
};

export default Vehicles;
