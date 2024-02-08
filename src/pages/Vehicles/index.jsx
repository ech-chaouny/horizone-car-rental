import React from "react";

import { vehicles } from "@/constants";
import Vehicle from "./Vehicle";

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
