"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Poppins } from "next/font/google";
import Image from "next/image";
import { arrowBlack, icon, imageone, imagetwo } from "@/assets";
import TrustUs from "@/components/TrustUs";

const poppins = Poppins({ weight: ["500"], subsets: ["latin"] });

const Deals = () => {
  return (
    <>
      <section className={`md:px-8 px-5 w-full my-16`}>
        <div className="flex md:flex-row flex-col justify-between items-start gap-5">
          <h1 className="font-[530] text-4xl tracking-tight text-black">
            Enjoy extra miles with our best deal
          </h1>
          <button
            className="inline-flex items-center border bg-white rounded-lg px-7 py-3 font-[550] text-[18px]"
            type="button"
          >
            See All
            <Image className="ml-3 w-[18px] " src={arrowBlack} alt="arrow" />
          </button>
        </div>
        <Swiper
          className="mt-9"
          spaceBetween={25}
          navigation
          breakpoints={{
            768: {
              slidesPerView: 1,
            },
            1100: {
              slidesPerView: 2,
            },
          }}
        >
          <SwiperSlide>
            <a href="#" className="relative">
              <Image
                className="md:h-full h-[20rem] w-full object-cover object-left rounded-xl"
                src={imageone}
                alt="image-1"
              />
              <div className="absolute w-full top-6 md:px-6 px-4">
                <div className="flex justify-between items-center">
                  <Image className="md:w-10 w-8" src={icon} alt="icon" />
                  <div className="bg-black xs:text-[16px] text-[14px] bg-opacity-20 tracking-wider backdrop-blur-md rounded-full text-white font-normal px-4 py-2">
                    Valid only on 12 Jan - 19 Jan 2024
                  </div>
                </div>
                <h5 className="font-[460] mt-5 text-[22px] text-white max-w-80">
                  Experience the Holidays with Our Festive Promotions{" "}
                </h5>
                <div
                  className={`${poppins.className} pt-5 text-7xl tracking-tight font-medium text-white`}
                >
                  40%
                </div>
                <p className="mt-6 text-white font-[16px]">
                  *with Terms and Condition
                </p>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className="relative">
              <Image
                className="md:h-full h-[20rem] w-full object-cover object-left rounded-xl"
                src={imagetwo}
                alt="image-2"
              />
              <div className="absolute w-full top-6 md:px-6 px-4">
                <div className="flex justify-between items-center">
                  <Image className="md:w-10 w-8" src={icon} alt="icon" />
                  <div className="bg-black bg-opacity-20 text-[14px] xs:text-[16px] tracking-wider text-white backdrop-blur-md rounded-full font-normal px-4 py-2">
                    Valid only on 8 Jan - 22 Jan 2024
                  </div>
                </div>
                <h5 className="font-[460] mt-5 md:text-[22px] text-[20px] text-white max-w-96">
                  Unlock Online-Only Discounts for a Seamless Booking Experience
                </h5>
                <div
                  className={`${poppins.className} text-7xl mt-5 tracking-tight font-medium text-white`}
                >
                  65%
                </div>
                <p className="mt-6 text-white font-[16px]">
                  *with Terms and Condition
                </p>
              </div>
            </a>
          </SwiperSlide>
        </Swiper>
      </section>
      <TrustUs />
    </>
  );
};

export default Deals;
