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
    bgColor = "bg-bej";
    bgColor2 = "bg-greenBlack";
    textColor = "text-black";
  }
  if (color === "white") {
    bgColor = "bg-white";
    bgColor2 = "bg-greenBlack";
    textColor = "text-black";
  }
  if (color === "lightgold") {
    bgColor = "bg-goldLight";
    bgColor2 = "bg-gold";
    textColor = "text-black"
  }
  return (
    <div className={`${bgColor} pb-[45px]  lg:py-[115px]  lg:px-4`}>
      <div className="container mx-auto">
        <div
          className={`flex gap-[42px]  lg:pl-[64px] lg:gap-64 items-center justify-between flex-col  ${
            image_position === "left" ? "lg:flex-row " : "lg:flex-row-reverse"
          }`}
        >
          <div className={`flex-none relative py-[30px] px-[46px] lg:p-[57px] before:absolute before:top-0 md:w-auto lg:w-[764px] before:bottom-0 before:${bgColor2} ${
            image_position === "left" ? "before:left-0 before:right-[150px] before:mr-[-95px] before:md:mr-0 pr-0 lg:pr-[64px] " : "before:right-0 before:left-[210px] lg:pl-[64px] pl-0 before:ml-[-121px]  before:md:ml-0"
          }`}> 
            {/* <span className={`${bgColor2} absolute w-[570px] h-[570px] top-0 ${
            image_position === "left" ? "left-0" : "right-0"
          }`} /> */}
            <Image src={image_src} alt="" width={640} height={455} className="relative lg:h-[455px]"/>
          </div>
            {children}
        </div>
      </div>
    </div>
  );
}
