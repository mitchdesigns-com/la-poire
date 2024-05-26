"use client";
import { motion } from "@/app/lib/motion";
import { arfont, pt_serif } from "../fonts";
import CompanyStats from "./CompanyStats";
import CardBackground from "./Widgets/CardBackground";
import { useEffect, useState } from "react";
import { fetchingAllBrands } from "../api/fetcher";
import brandsAllMock from "./Brands/mockData.json";
import { useLocale } from "next-intl";

const HeroText = ({ title }: any) => (
  <motion.h1
    className="text-center text-3xl text-white md:text-4xl lg:text-6xl"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.2, delay: 1 * 0.2 }}
    viewport={{ once: true }}
    dangerouslySetInnerHTML={{ __html: title }}
  />
);

const CompanyInfo = ({ cardData, brandBrief,locale }: any) => (
  <div className="flex w-full flex-col justify-between gap-4 px-4 py-14 md:flex-row md:px-0">
    <div className="flex">
      <div className={`text-center md:w-28 md:text-start`}>
        <motion.p
          className={`text-base pb-4  ${locale === "ar"?arfont.className:pt_serif.className} italic`}
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, delay: 1 * 0.2 }}
          viewport={{ once: true }}
          dangerouslySetInnerHTML={{ __html: brandBrief }}
        />
      </div>
    </div>
    <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto p-4 md:m-0 md:-mr-4 md:p-0 md:pr-4">
      {cardData?.map((card: any, index: number) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <CardBackground
            img={
              card.attributes.thumbnail.data
                ? process.env.NEXT_PUBLIC_API_URL +
                  card.attributes.thumbnail.data?.attributes.url
                : "/images/placeholder.webp"
            }
            text={card.attributes.Title ?? ""}
            color={card.attributes.BrandColor}
            slug={card.attributes.slug}
          />
        </motion.div>
      ))}
    </div>
  </div>
);

export default function LandingHero({
  brandsList,
  title,
  brandsNum,
  employeesNum,
  locationsNum,
  numbersTitle,
  numbersDescription,
  brandBrief
}: any) {
  const locale = useLocale();
  const cardData = [
    {
      img: "/images/cards/card_01.webp",
      text: "La Poire Patisserie",
      color: "green",
    },
    {
      img: "/images/cards/card_02.webp",
      text: "La Poire Bistro",
      color: "green",
    },
    {
      img: "/images/cards/card_03.webp",
      text: "Beano’s Cafe",
      color: "orange",
    },
    {
      img: "/images/cards/card_04.webp",
      text: "Stavolta Ice Cream",
      color: "black",
    },
  ];

  const brands = brandsList;
  // console.log("brands", brands);
  return (
    <div className="sm:px-4">
      <div className="container mx-auto">
        <div className=" h-[284px] bg-[url(/images/landing-hero.webp)] bg-cover md:h-688">
          <div className="flex h-full w-full items-center justify-center px-4 py-8 lg:px-240">
            <HeroText title={title} />
          </div>
        </div>
        <div className="relative flex flex-col items-end">
          <CompanyInfo
            cardData={brands}
            brandBrief={brandBrief}
            locale={locale}
          />
        <div className="container mx-auto pl-[52px] md:pl-320">
            <div className="1xl:max-w-[calc(100vw-388px)] relative flex w-[1004px] max-w-full md:justify-end bg-black p-4 md:max-w-[calc(100vw-276px)] md:pb-56 md:pt-22 ltr:pr-0 md:ltr:pl-48 rtl:pl-0 md:rtl:pr-48">
             <span className="pointer-events-none absolute bottom-0 z-[-1]  md:h-[3000vh] w-[100vw] select-none bg-black h-[691px] ltr:left-0 rtl:right-0" />
               <CompanyStats
                brandsNum={brandsNum}
                employeesNum={employeesNum}
                locationsNum={locationsNum}
                numbersTitle={numbersTitle}
                numbersDescription={numbersDescription}
               />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
