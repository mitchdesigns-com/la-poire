import Image from "next/image";
import React from "react";
import LeftUp from "../Icons/LeftUp";
import Link from "next/link";

export default function CardBackground({ img, text, color, slug }: any) {
  return (
    <div className="relative w-265 before:inline-block before:pt-[124%] before:content-['']">
      <Image
        alt="card alt"
        src={img}
        fill
        sizes="100%"
        className="object-cover"
      />
      <span
        className={`text-l flex justify-between gap-1 items-center absolute right-0 bottom-20 z-10 py-1 px-2 text-white bg-opacity-80 bg-${
          color ? color : "black"
        }`}
      >
        {text}
        <span className="h-[24px] w-[25px]">
          <LeftUp />
        </span>
      </span>
      <Link href={`/brands/${slug}`}>
        <span aria-hidden="true" className="absolute inset-0 z-[11]"></span>
      </Link>
    </div>
  );
}
