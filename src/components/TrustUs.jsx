import { trusts } from "@/constants";
import React from "react";
import Image from "next/image";

const TrustUs = () => {
  return (
    <div className="px-8 mb-16 xs:flex xs:flex-wrap grid grid-cols-2 justify-center items-center gap-x-16 gap-y-10">
      {trusts.map((trust, index) => (
        <Image
          key={index}
          className="w-40 h-full object-contain"
          src={trust}
          alt={trust}
        />
      ))}
    </div>
  );
};

export default TrustUs;
