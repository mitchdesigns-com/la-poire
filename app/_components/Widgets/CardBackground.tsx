import Image from "next/image";
import React from "react";
import LeftUp from "../Icons/LeftUp";

export default function CardBackground({ img, text, color }: any) {
  return (
    <div className="w-265 relative before:content-[''] before:inline-block before:pt-[124%]">
      <Image alt="card alt" src={img} fill sizes="100%" />
      <span
        className={`text-l flex justify-between gap-1 items-center absolute right-0 bottom-20 z-10 py-1 px-2 text-white bg-opacity-80 bg-${
          color ? color : "black"
        }`}
      >
        {text}
        <span className="w-[25px] h-[24px]">
          <LeftUp />
        </span>
      </span>
    </div>
  );
}
