import { gabarito } from "@/app/fonts";
import React from "react";

export default function SectionTitles({
  title,
  sub_title,
  tagline,
  taglineAlt,
}: {
  title: string;
  sub_title: string;
  tagline?: string;
  taglineAlt?: boolean;
}) {
  return (
    <>
      {tagline && <h6 className={`text-sm font-semibold mb-20 ${taglineAlt?"text-green":"text-goldLight"}`}>{tagline}</h6>}
      {title && <h2 className={`text-[36px] font-medium ${gabarito.className}`}>{title}</h2>}
      {sub_title && <h5 className="inline-block max-w-[706px] text-xl font-light">{sub_title}</h5>}
    </>
  );
}
