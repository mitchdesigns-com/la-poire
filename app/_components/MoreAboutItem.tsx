import Image from "next/image";
import React from "react";

export default function MoreAboutItem({ img, title, desc,colorAlt }: any) {
  return (
    <div className="md:w-320 max-w-full">
      <span className="block relative w-[70px] h-[70px]">
        <Image
          src={img}
          alt={title}
          fill
          style={{ objectFit: "contain" }}
          sizes="77px"
        />
      </span>
      <h4 className={`md:text-base text-sm font-medium md:mt-0 mt-5 leading-6 ${colorAlt?"text-goldLight":"text-black"}`}>
        {title}
      </h4>
      <p className={`text-xs md:mt-10 leading-6 mt-5 ${colorAlt?"text-gray3":"text-gray"}`}>{desc}</p>
    </div>
  );
}
