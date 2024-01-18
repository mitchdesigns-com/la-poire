"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import HeroWithTitles from "../HeroWithTitles";
import MissionVision from "../UI/MissionVision";
import TimeLine from "../UI/TimeLine";
import PlayBtn from "../Icons/PlayBtn";
import OurBrands from "../OurBrands";
import { pt_serif } from "@/app/fonts";
import { motion } from "@/app/lib/motion";
import MoreAboutItem from "../MoreAboutItem";
import AboutSection from "../AboutSection";
import OurTeam from "../UI/OurTeam";
import Newsletter from "../Newsletter";
import SectionTextImage from "../UI/SectionTextImage";

export default function About() {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  const data = {
    herotitle: "About La Poire Group",
    herosubtitle: "Crafting Culinary Masterpieces Since 1975",
    herodescription:
      "Venture into the world of La Poire Group, where tradition meets innovation. From our humble beginnings in the serene Cairo neighborhood of Garden City to becoming Egypt's culinary titan, our journey has been marked by passion, dedication, and an insatiable quest for excellence. Dive deeper to learn about the essence that makes La Poire not just a brand, but a beloved household name.",
  };
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
    <div>
      <HeroWithTitles
        bgColor={"white"}
        title={data.herotitle}
        subtitle={data.herosubtitle}
        description={data.herodescription}
      />
      <TimeLine />
      <div className="bg-goldLight py-64 px-4 mb-[278px]">
        <div className="container mx-auto">
          <div className="flex flex-col gap-50 justify-center items-center">
            <Image
              src="/images/Group-Logo.webp"
              alt=""
              width={252}
              height={51}
            />
            <MissionVision />
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
      </div>
      <OurBrands />

      <div className="container mx-auto max-w-[1000px]">
        <div className="px-4 py-44">
          <div className="flex gap-[52px]">
            <div className="w-[312px] pr-5 shrink-0 flex-grow-0">
              <Image
                alt=""
                src={
                  // process.env.NEXT_PUBLIC_API_URL +
                  "/images/about-brand.webp"
                }
                // width={data.Logo.data.attributes.width}
                // height={data.Logo.data.attributes.height}
                width={312}
                height={390}
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold">{"Brand Story"}</h3>
              <h4 className="text-xl font-light">
                {"The Enchanting Tale of La Poire"}
              </h4>
              <div
                className={`space-y-34 mt-34 ${pt_serif.className} text-greenBlack leading-[28px]`}
              >
                <p>
                  Once upon a time, in the serene Cairo neighborhood of{" "}
                  <b>Garden City</b>, a vision came to life in <b>1975</b>.
                  Nestled amidst the gentle hum of the streets, <b>La Poire</b>{" "}
                  opened its first store, inspired by the time-honored
                  traditions of French patisseries and the rich heritage of
                  Egyptian baking. A dream that blossomed from the fusion of
                  these two worlds.
                </p>
                <p>
                  La Poire wasn&apos;t just a name; it became an emotion, a
                  symbol of exquisite taste and craftsmanship. With a singular
                  vision, we embarked on a mission: to create the most
                  unpretentious yet sophisticated pastry and cafe chains across{" "}
                  <b>Egypt</b>. A haven where the art of balancing textures and
                  flavors wasn&apos;t just a technique but a pledge – a
                  commitment to sprinkle moments of sheer joy into every single
                  day.`
                </p>
                <p>
                  Walking into a La Poire store was like stepping into a
                  storybook. Simplicity and elegance spoke in whispers, setting
                  the stage for the true stars - our delectable delights. The
                  French-inspired design, accentuating our tempting treats,
                  greeted every visitor, making choices tantalizingly tough.
                </p>
                <p>
                  Imagine starting your day with the buttery embrace of a
                  chocolate-filled croissant, or celebrating special moments
                  with our signature La Poirette cake, which would undoubtedly
                  steal the spotlight at any gathering. And during the sacred
                  month of Ramadan, the warmth and tradition of our basbousa
                  offered solace and connection. Indeed, La Poire became the
                  answer to every culinary desire, ensuring that no matter where
                  your cravings led, there was always a piece of perfection
                  waiting just for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-30 md:mb-95 mb-30">
        <span className="bg-gray3 h-[5px] w-full block" />
      </div>

      <div className="container mx-auto">
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
          <div className="flex md:grid-cols-3 grid-cols-2 gap-y-26 justify-between flex-wrap md:gap-x-56 gap-5">
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
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <AboutSection color="pink" />
      <OurTeam />
      <SectionTextImage
        image_position={""}
        image_src={"/images/SectionTextImage_1.webp"}
        color={""}
      >
        <div className="flex flex-col text-white max-w-[515px]">
          <h2 className="text-5xl font-semibold">
            Our Factory, Where Culinary Dreams Take Shape
          </h2>
          <h4 className="text-goldLight mt-10">
            rafting Excellence Behind the Scenes
          </h4>
          <p className="text-base mt-30">
            Nestled in the heart of Egypt, our state-of-the-art factory is the
            birthplace of La Poire&apos;s renowned delicacies. With a perfect
            blend of tradition and innovation, our skilled artisans and
            cutting-edge machinery come together to ensure every creation is
            nothing short of perfection.
          </p>
        </div>
      </SectionTextImage>
      <SectionTextImage
        image_position={"left"}
        image_src={"/images/SectionTextImage_1.webp"}
        color={"bej"}
      >
        <div className="flex flex-col text-black">
          <h2 className="text-5xl font-semibold">
            <span className="text-green">Franchising</span> Opportunities with
            La Poire Group
          </h2>
          <h4 className="text-green mt-10">
            rafting Excellence Behind the Scenes
          </h4>
          <p className="text-base mt-30">
            Nestled in the heart of Egypt, our state-of-the-art factory is the
            birthplace of La Poire&apos;s renowned delicacies. With a perfect
            blend of tradition and innovation, our skilled artisans and
            cutting-edge machinery come together to ensure every creation is
            nothing short of perfection.
          </p>
        </div>
      </SectionTextImage>
      <SectionTextImage
        image_position={""}
        image_src={"/images/SectionTextImage_1.webp"}
        color={""}
      >
        <div className="flex flex-col text-white max-w-[515px]">
          <h2 className="text-5xl font-semibold">
            Giving Back to Beloved Egypt
          </h2>
          <h4 className="text-goldLight mt-10">
            Sustainable Practices, Lasting Impact
          </h4>
          <p className="text-base mt-30">
            La Poire recognizes the importance of giving back. Our commitment to
            sustainability and community welfare drives our operations. By
            integrating eco-friendly practices, supporting local artisans, and
            participating in community upliftment projects, we ensure that our
            success is Egypt&apos;s success.
          </p>
        </div>
      </SectionTextImage>
      <Newsletter />
    </div>
  );
}
