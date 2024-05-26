"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import PlayBtn from "./Icons/PlayBtn";
import { arfont, pt_serif } from "../fonts";
import MoreAboutItem from "./MoreAboutItem";
import { motion } from "@/app/lib/motion";
import { useLocale } from "next-intl";

export default function MoreAbout({ data }: any) {
  const locale = useLocale();
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  const moreAboutData = [
    {
      img: "/images/more-about/more-about_01.webp",
      title: "Pioneering Legacy",
      desc: "With roots dating back to 1975, La Poire boasts a time-honored tradition in Egypt, melding expertise with culinary innovation.",
    },
    {
      img: "/images/more-about/more-about_02.webp",
      title: "Diverse Portfolio",
      desc: "Spanning patisseries to cafes, La Poire group's wide-ranging brand lineup offers a comprehensive experience for every palate and preference.",
    },
    {
      img: "/images/more-about/more-about_03.webp",
      title: "Quality Commitment",
      desc: "La Poire stands as a hallmark of premium ingredients, masterful craftsmanship, and a consistent, delightful taste profile cherished by many.",
    },
    {
      img: "/images/more-about/more-about_04.webp",
      title: "Cultural Integration",
      desc: "Merging international culinary flair with Egypt's deep-rooted heritage, the group curates unique offerings that appeal to both local and international tastes.",
    },
    {
      img: "/images/more-about/more-about_05.webp",
      title: "Economy of Scope",
      desc: "With its broad array of brands, La Poire adeptly caters to diverse market demands, ensuring a dynamic and ever-evolving presence in the culinary scene.",
    },
    {
      img: "/images/more-about/more-about_06.webp",
      title: "Sustainable Growth",
      desc: "La Poire's commitment to environmental and societal well-being, coupled with business expansion, ensures a sustainable and positive impact on the communities they serve.",
    },
  ];
  return (
    <div className="px-4 pt-20 md:px-70 md:pt-100">
      <div className="container mx-auto">
        {hasWindow && (
          <div className="aspect-video w-full">
            <ReactPlayer
              width="100%"
              height="100%"
              url={`https://www.youtube.com/watch?v=${data.YoutubeID}`}
              playing
              // light="/images/more-about.webp"
              light={
                process.env.NEXT_PUBLIC_API_URL +
                data.YoutubeCover.data?.attributes.url
              }
              playIcon={
                <span className="z-10 h-[100px] w-[100px] md:h-[141px] md:w-[140px]">
                  <PlayBtn />
                </span>
              }
            />
          </div>
        )}
        <div className="flex flex-col gap-70 py-30">
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-20 text-black lg:flex-nowrap md:gap-0">
            <div>
              <h3 className="text-[18px] font-bold md:text-2xl">{data.FeatureTitle}</h3>
              <p className="text-[14px] md:text-xl font-light">
                {data.FeatureSubtitle}
              </p>
            </div>
            <div className="w-634">
              <p className={`italic text-[12px] md:text-base ${locale === "ar"?arfont.className:pt_serif.className}`}>{data.FeatureDescription}</p>
            </div>
          </div>
          <div className="flex grid-cols-2 flex-wrap justify-evenly  gap-5 gap-y-26 lg:grid-cols-3 lg:gap-x-56">
            {data.FeatureItem.map((item: any, index: number) => (
              <motion.div
                key={index}
                className="w-[calc(50%-10px)] md:w-320"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <MoreAboutItem
                  img={
                    process.env.NEXT_PUBLIC_API_URL +
                    item.Image.data?.attributes.url
                  }
                  title={item.Title}
                  desc={item.Description}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
