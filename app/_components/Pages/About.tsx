"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import HeroWithTitles from "../HeroWithTitles";
import MissionVision from "../UI/MissionVision";
// import TimeLine from "../UI/TimeLine";
import PlayBtn from "../Icons/PlayBtn";
import OurBrands from "../OurBrands";
import { arfont, pt_serif } from "@/app/fonts";
import { motion } from "@/app/lib/motion";
import MoreAboutItem from "../MoreAboutItem";
import AboutSection from "../AboutSection";
// import OurTeam from "../UI/OurTeam";
import Newsletter from "../Newsletter";
import SectionTextImage from "../UI/SectionTextImage";
import { fetchingAboutPage } from "@/app/api/fetcher";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export default function About({ data }: any) {
  const t = useTranslations("common");
  const locale = useLocale();
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const result = await fetchingAboutPage(locale);
  //       setData(result.data.attributes);
  //     } catch (error) {
  //       console.error("Error fetching home page data:", error);
  //     }
  //   };

  //   fetchData();
  // }, [locale]);
  if (!data) {
    return null;
  }
  // const data = {
  //   herotitle: "About La Poire Group",
  //   herosubtitle: "Crafting Culinary Masterpieces Since 1975",
  //   herodescription:
  //     "Venture into the world of La Poire Group, where tradition meets innovation. From our humble beginnings in the serene Cairo neighborhood of Garden City to becoming Egypt's culinary titan, our journey has been marked by passion, dedication, and an insatiable quest for excellence. Dive deeper to learn about the essence that makes La Poire not just a brand, but a beloved household name.",
  // };
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
  const timeLineData = {
    title: data.TimelineTitle,
    desc: data.TimelineSubtitle,
    process: data.Timeline,
  };
  const ourMissionVisionData = {
    missionDescription: data.OurMissionDescription,
    visionDescription: data.OurVisionDescription,
  };

  const storyParagraphs = data.StoryDescription.split("\n\n").map(
    (paragraph: string, index: number) => (
      <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
    )
  );
  // console.log("dataAbout", data);
  return (
    <div>
      <HeroWithTitles
        bgColor={"white"}
        title={data.Title}
        subtitle={data.Subtitle}
        description={data.Description}
        height_auto={true}
      />
      {/* <TimeLine data={timeLineData} /> */}

      <div className='md:mb-[278px] mb-[40%] lg:h-auto bg-goldLight px-4 pt-[45px] pb-[150px] sm:pb-[134px] md:py-64'>
        <div className='container mx-auto'>
          <div className='flex flex-col items-center justify-center gap-20 lg:gap-50'>
            <Image
              src={
                process.env.NEXT_PUBLIC_API_URL + data.Logo.data?.attributes.url
              }
              alt=''
              width={data.Logo.data.attributes.width}
              height={data.Logo.data.attributes.height}
            />
            <MissionVision data={ourMissionVisionData} />
            {hasWindow && (
              <div className='-mb-[278px] aspect-video w-full '>
                <ReactPlayer
                  width='100%'
                  height='100%'
                  url={`https://www.youtube.com/watch?v=${data.YoutubeID}`}
                  playing
                  light={
                    process.env.NEXT_PUBLIC_API_URL +
                    data.YoutubeCover.data?.attributes.url
                  }
                  playIcon={
                    <span className='z-10 h-[100px] w-[100px] md:h-[141px] md:w-[140px]'>
                      <PlayBtn />
                    </span>
                  }
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <OurBrands brandsList={data.OurBrandsLogos.data} noLinks />

      <div className='container mx-auto  max-w-[1000px]'>
        <div className='px-4 pb-44 lg:py-44'>
          <div className='flex flex-col lg:flex-row gap-[52px] m-auto lg:m-0'>
            <div className='lg:w-[312px]  shrink-0 flex-grow-0 pr-5 m-auto lg:m-0 w-auto inline-block '>
              <Image
                alt=''
                src={
                  process.env.NEXT_PUBLIC_API_URL +
                  data.StoryImage.data?.attributes.url
                }
                width={data.StoryImage.data.attributes.width}
                height={data.StoryImage.data.attributes.height}
                className='object-cover lg:h-[390px] h-[300px] '
              />
            </div>
            <div>
              <h3 className='text-2xl font-bold'>{data.StoryTitle}</h3>
              <h4 className='text-xl font-light'>{data.StorySubTitle}</h4>
              <div
                className={`mt-34 ${
                  locale === "ar"
                    ? `${arfont.className} leading-[28px] space-y-22`
                    : `${pt_serif.className} leading-[28px] space-y-34`
                } text-greenBlack`}>
                {storyParagraphs}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container mx-auto mb-30 mt-30 md:mb-95'>
        <span className='lg:block hidden h-[5px] w-full bg-gray3' />
      </div>

      <div className='container mx-auto'>
        <div className='flex flex-col gap-70 px-3  lg:py-[64px]'>
          <div className='flex flex-wrap lg:flex-wrap-reverse items-center justify-between gap-20 text-black md:flex-nowrap md:gap-0'>
            <div>
              <h3 className='text-2xl'>{data.FeaturesTitle}</h3>
              <p className='text-xl font-light'>{data.FeaturesSubtitle}</p>
            </div>
            <div className='w-634'>
              <p
                className={`${
                  locale === "ar" ? arfont.className : pt_serif.className
                } italic text-base`}>
                {data.FeaturesDescription}
              </p>
            </div>
          </div>
          <div className='flex grid-cols-2 flex-wrap justify-between gap-5 gap-y-26 md:grid-cols-3 md:gap-x-56'>
            {data.FeatureItem.map((item: any, index: number) => (
              <motion.div
                key={index}
                className='w-[calc(50%-10px)] md:w-320'
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.2 }}
                viewport={{ once: true }}>
                {item.Image.data && (
                  <MoreAboutItem
                    img={
                      process.env.NEXT_PUBLIC_API_URL +
                      item.Image.data?.attributes.url
                    }
                    title={item.Title}
                    desc={item.Description}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <AboutSection color='pink' />

      {/* <OurTeam /> */}

      {data.SectionTextImage.map((item: any, index: number) => (
        <SectionTextImage
          key={index}
          image_position={item.image_position}
          image_src={
            item.Image.data?.attributes.url
              ? process.env.NEXT_PUBLIC_API_URL +
                item.Image.data?.attributes.url
              : "/images/placeholder.webp"
          }
          color={item.Color}>
          <div className='flex max-w-[515px] px-3 flex-col text-white'>
            <h2 className='text-2xl lg:text-5xl md:text-3xl font-semibold'>
              {item.Title}
            </h2>
            <h4 className='mt-10 text-goldLight'>{item.Subtitle}</h4>
            <p className='mt-30 text-[14px] lg:text-base pb-1 leading-8'>
              {item.Description}
            </p>

            {item.Buttonlink && (
              <Link
                className=' hover:bg-greenDark hover:text-white transition border-greenDark flex-nowrap border-[2px] rounded-full font-semibold uppercase w-fit text-greenDark text-[12px] md:text-xs lg:text-sm py-2 px-3 mt-10'
                href={`/${
                  locale == "en"
                    ? `${item.Buttonlink}`
                    : `ar/${item.Buttonlink}`
                }`}>
                {t("LearnMore")}
              </Link>
            )}
          </div>
        </SectionTextImage>
      ))}

      <Newsletter />
    </div>
  );
}
