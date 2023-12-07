"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import PlayBtn from "./Icons/PlayBtn";
import { pt_serif } from "../fonts";
import MoreAboutItem from "./MoreAboutItem";
import { motion } from "@/app/lib/motion";

export default function MoreAbout() {
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
    <div className="md:pt-100 md:px-70 px-4 pt-20">
      <div className="container mx-auto">
        {hasWindow && (
          <div className="w-full aspect-video">
            <ReactPlayer
              width="100%"
              height="100%"
              url="https://www.youtube.com/watch?v=G1LRs3-dmTw"
              playing
              light="/images/more-about.webp"
              playIcon={<PlayBtn />}
            />
          </div>
        )}
        <div className="flex flex-col gap-70 py-30">
          <div className="flex justify-between items-center text-black md:flex-nowrap flex-wrap-reverse md:gap-0 gap-20">
            <div>
              <h3 className="text-2xl">Distinctive Excellence</h3>
              <p className="text-xl font-light">
                The Pillars of Our Prestige: Six Reasons We Shine
              </p>
            </div>
            <div className="w-634">
              <p className={`${pt_serif.className} italic text-base`}>
                Dive into the essence of what makes La Poire group exceptional.
                With a tapestry woven from pioneering legacies to unparalleled
                quality, our unique selling propositions distinguish us in
                Egypt&apos;s culinary landscape. Discover the cornerstones that
                have shaped our journey, transforming ordinary moments into
                extraordinary experiences.
              </p>
            </div>
          </div>
          <div className="flex grid-cols-3 gap-y-26 justify-between flex-wrap gap-x-56">
            {moreAboutData.map((item, index) => (
              <motion.div
                key={index}
                className="md:w-320"
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <MoreAboutItem
                  img={item.img}
                  title={item.title}
                  desc={item.desc}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
