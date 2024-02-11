import { trusts } from "@/constants";
import React from "react";
import Image from "next/image";

const TrustUs = () => {
  return (
    <div className="px-8 mb-16 grid md:grid-cols-6 grid-cols-3  justify-center items-center gap-24">
      {trusts.map((trust, index) => (
        <Image
          key={index}
          className="w-40 h-full object-contain"
          src={trust}
          alt="{trust}"
        />
      ))}
    </div>
  );
};

export default TrustUs;
