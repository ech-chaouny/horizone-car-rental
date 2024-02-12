import { popularCars } from "@/constants";
import React from "react";

const Popular = () => {
  return (
    <section className="md:px-8 px-5 w-full my-16">
      <h1 className="font-[530] text-4xl tracking-tight text-black">
        Discover popular car rental in worldwide
      </h1>
      <p className="mt-3 text-[20px] text-secondary font-[470]">
        Explore a diverse and extensive range of rental cars
      </p>
      <div className="flex flex-wrap mt-10 gap-4">
        {popularCars.map((popular, index) => (
          <button
            key={index}
            className="border rounded-lg px-5 py-2 text-[18px] hover:text-white transition-all duration-500 font-[550] bg-white hover:bg-primary"
          >
            {popular}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Popular;
