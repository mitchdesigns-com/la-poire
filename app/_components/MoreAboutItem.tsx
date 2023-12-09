import Image from "next/image";
import React from "react";

export default function MoreAboutItem({ img, title, desc }: any) {
  return (
    <div className="md:w-320 max-w-full">
      <Image src={img} alt={title} width="67" height="65" />
      <h4 className="md:text-base text-sm font-medium text-black md:mt-0 mt-5">{title}</h4>
      <p className="text-gray text-xs md:mt-10 mt-5">{desc}</p>
    </div>
  );
}
