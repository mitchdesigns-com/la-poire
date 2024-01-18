import Image from "next/image";
import React, { Children } from "react";

export default function SectionTextImage({
  image_position,
  image_src,
  color,
  children
}: {
  image_position: string;
  image_src: string;
  color: string;
  children:any
}) {
  let bgColor = "bg-greenBlack";
  let bgColor2 = "bg-goldLight";
  let textColor = "text-white";
  if (color === "bej") {
    bgColor = "bg-nej";
    bgColor2 = "bg-greenBlack";
    textColor = "text-black";
  }
  if (color === "white") {
    bgColor = "bg-white";
    bgColor2 = "bg-greenBlack";
    textColor = "text-black";
  }
  return (
    <div className={`${bgColor} py-110 px-4`}>
      <div className="container mx-auto">
        <div
          className={`flex gap-64 items-center justify-between ${
            image_position === "left" ? "flex-row" : "flex-row-reverse"
          }`}
        >
          <div className={`flex-none relative p-64 before:absolute before:top-0 before:bottom-0 before:${bgColor2} ${
            image_position === "left" ? "before:left-0 before:right-[150px]" : "before:right-0 before:left-[210px]"
          }`}>
            {/* <span className={`${bgColor2} absolute w-[570px] h-[570px] top-0 ${
            image_position === "left" ? "left-0" : "right-0"
          }`} /> */}
            <Image src={image_src} alt="" width={640} height={455} className="relative"/>
          </div>
            {children}
        </div>
      </div>
    </div>
  );
}
