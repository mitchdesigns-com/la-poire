import { gabarito } from "@/app/fonts";
import React from "react";

export default function SectionTitles({
  title,
  sub_title,
}: {
  title: string;
  sub_title: string;
}) {
  return (
    <>
      {title && <h2 className={`text-[36px] font-medium ${gabarito.className}`}>{title}</h2>}
      {sub_title && <h5 className="text-xl font-light">{sub_title}</h5>}
    </>
  );
}
