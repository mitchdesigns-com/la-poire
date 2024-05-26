import { arfont, gabarito } from "@/app/fonts";
import { useLocale } from "next-intl";
import React from "react";

export default function SectionTitles({
  title,
  sub_title,
  tagline,
  taglineAlt,
  taglineLight,
}: {
  title: string;
  sub_title?: string;
  tagline?: string;
  taglineAlt?: boolean;
  taglineLight?: boolean;
}) {
  const locale = useLocale();
  return (
    <>
      {tagline && <h6 className={`${taglineAlt?"text-green":"text-goldLight"} ${taglineLight?"font-light text-xl":"font-semibold mb-20 text-sm"}`}>{tagline}</h6>}
      {title && <h2 className={`text-[26px] md:text-[36px] font-medium ${locale === "ar"?arfont.className:gabarito.className}`}>{title}</h2>}
      {sub_title && <h5 className="inline-block max-w-[706px] text-[16px] md:text-xl font-light">{sub_title}</h5>}
    </>
  );
}
