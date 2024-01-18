"use client";
import React, { useEffect, useState } from "react";
import HeroWithTitles from "../HeroWithTitles";
import { motion } from "@/app/lib/motion";
import MoreAboutItem from "../MoreAboutItem";
import SectionTitles from "../UI/SectionTitles";
import ReactPlayer from "react-player";
import PlayBtn from "../Icons/PlayBtn";
import OurBrands from "../OurBrands";
import Testimonials from "../Testimonials";
import RequestSection from "../UI/RequestSection";
import FAQsSection from "../UI/FAQsSection";
import Newsletter from "../Newsletter";

export default function Franchise() {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  const data = {
    herotitle:
      "Unravel <span><b>Franchise Opportunities</b></span> in Egypt's Culinary Landscape",
    herosubtitle: "A Partnership Rooted in Excellence",
    herodescription:
      "Franchising with La Poire is not just a business venture; it's an immersion into Egypt's rich culinary culture. Become part of our growth story and carry forward the tradition of quality and joy we've nurtured for decades.",
  };
  const moreAboutData = [
    {
      img: "/images/franchise/franchise_01.webp",
      title: "Business Model Excellence",
      desc: "Launch with a proven, growth-focused business model.",
    },
    {
      img: "/images/franchise/franchise_02.webp",
      title: "Support & Training",
      desc: "Access comprehensive support and expert-led training.",
    },
    {
      img: "/images/franchise/franchise_03.webp",
      title: "Exclusive Recipes",
      desc: "Offer unique delicacies from our exclusive recipe collections.",
    },
    {
      img: "/images/franchise/franchise_04.webp",
      title: "Brand Recognition",
      desc: "Leverage our strong brand presence and marketing.",
    },
    {
      img: "/images/franchise/franchise_05.webp",
      title: "Operational Efficiency",
      desc: "Benefit from streamlined, effective operational systems.",
    },
    {
      img: "/images/franchise/franchise_06.webp",
      title: "Site & Design",
      desc: "Receive help in selecting prime locations and design.",
    },
  ];
  return (
    <div>
      <HeroWithTitles
        bgColor={"white"}
        title={data.herotitle}
        subtitle={data.herosubtitle}
        description={data.herodescription}
        max_width
      />

      <div className="bg-greenBlack py-72">
        <div className="container mx-auto">
          <div className="flex flex-col gap-50">
            <section className="text-center text-white">
              <SectionTitles
                tagline={"Why Franchise with La Poire"}
                title={"The Gold Standard in Franchising"}
                sub_title={"Where Vision Meets Expertise"}
              />
            </section>
            <div className="flex md:grid-cols-3 grid-cols-2 gap-y-[80px] justify-between flex-wrap md:gap-x-56 gap-5">
              {moreAboutData.map((item, index) => (
                <motion.div
                  key={index}
                  className="md:w-320 w-[calc(50%-10px)]"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <MoreAboutItem
                    img={item.img}
                    title={item.title}
                    desc={item.desc}
                    colorAlt
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-goldLight py-64 px-4 mb-[278px]">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center gap-20 mb-7">
            <section className="text-center text-black">
              <SectionTitles
                tagline={"How to Franchise"}
                taglineAlt
                title={"Begin Your La Poire Journey"}
                sub_title={"Seamless Steps to Success"}
              />
            </section>
            <p className="max-w-3xl mx-auto text-sm text-center text-gray5">
              {
                "Franchising with us is a streamlined process. Whether you're in Egypt or expanding our legacy abroad, our team guides you through every phase, ensuring a smooth transition and setup for your new venture."
              }
            </p>
          </div>
          {hasWindow && (
            <div className="w-full aspect-video -mb-[278px]">
              <ReactPlayer
                width="100%"
                height="100%"
                url="https://www.youtube.com/watch?v=K2fHBRPT1VY"
                playing
                light="/images/more-about.webp"
                playIcon={
                  <span className="md:w-[140px] md:h-[141px] w-[100px] h-[100px] z-10">
                    <PlayBtn />
                  </span>
                }
              />
            </div>
          )}
        </div>
      </div>

      <OurBrands title="Our Franchised Brands" />

      <div className="container mx-auto mt-30 md:mb-95 mb-30">
        <span className="bg-gray3 h-[5px] w-full block" />
      </div>
      <Testimonials />

      <RequestSection />

      <FAQsSection />

      <Newsletter />
    </div>
  );
}
