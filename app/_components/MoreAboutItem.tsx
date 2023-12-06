import Image from "next/image";
import React from "react";

export default function MoreAboutItem({ img, title, desc }: any) {
  return (
    <div className="w-320 max-w-full">
      <Image src={img} alt={title} width="67" height="65" />
      <h4 className="text-base font-medium text-black">{title}</h4>
      <p className="text-gray text-xs mt-10">{desc}</p>
    </div>
  );
}
