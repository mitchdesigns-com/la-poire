"use client";
import Image from "next/image";
import HeroWithTitles from "../HeroWithTitles";
import { Link } from "@/navigation";
import LongArrow from "../Icons/LongArrow";
import SectionTitles from "../UI/SectionTitles";
import Newsletter from "../Newsletter";
import { useEffect, useState } from "react";
import { fetchingAllJobs } from "@/app/api/fetcher";
import { useLocale } from "next-intl";
import SectionTextImage from "../UI/SectionTextImage";
import Button from "../Button";

export default function Jobs({ data }: any) {
  const mediaUrl = process.env.NEXT_PUBLIC_API_URL;

  const locale = useLocale();

  const [dataJobs, setDataJobs] = useState<any | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchingAllJobs(locale);
        setDataJobs(result.data);
      } catch (error) {
        console.error("Error fetching home page data:", error);
      }
    };

    fetchData();
  }, []);

  // console.log(dataJobs, "job data");
  return (
    <div>
      <HeroWithTitles
        bgColor={"white"}
        title={data.Title}
        subtitle={data.Subtitle}
        description={""}
        max_width
        subtitle_max_width="max-w-[485px]"
        height_auto={false}
      />
      <SectionTextImage
        image_position={"left"}
        image_src={
          data.SectionTextImagePicture.data?.attributes.url
            ? process.env.NEXT_PUBLIC_API_URL +
              data.SectionTextImagePicture.data?.attributes.url
            : "/images/placeholder.webp"
        }
        color={"bej"}
      >
        <div className="flex max-w-[527px] flex-none flex-col text-black">
          <h2
            className="pe-2 text-2xl font-semibold md:text-5xl"
            dangerouslySetInnerHTML={{ __html: data.SectionTextImageTitle }}
          />
          <p className="mt-10 pt-10 text-base text-black">
            {data.SectionTextImageDescription}
          </p>
        </div>
      </SectionTextImage>
      <div className="relative before:absolute before:left-0 before:right-0 before:h-[167px] before:bg-bej before:content-['']">
        <div className="container relative mx-auto px-2 pb-100">
          <div className="flex justify-center gap-5">
            <div className="w-[210px] flex-none md:w-auto">
              <Image
                src={`${mediaUrl}${data.Image_01.data?.attributes.url}`}
                alt=""
                width={296}
                height={409}
                className="overflow-hidden rounded-xl"
              />
            </div>
            <div className="hidden flex-none lg:block">
              <Image
                src={`${mediaUrl}${data.Image_02.data?.attributes.url}`}
                alt=""
                width={667}
                height={409}
                className="overflow-hidden rounded-xl"
              />
            </div>
            <div className="flex max-w-[36%] flex-none flex-col gap-5 md:max-w-[100%]">
              <Image
                src={`${mediaUrl}${data.Image_03.data?.attributes.url}`}
                alt=""
                width={206}
                height={258}
                className="overflow-hidden rounded-xl"
              />
              <Image
                src={`${mediaUrl}${data.Image_04.data?.attributes.url}`}
                alt=""
                width={206}
                height={146}
                className="overflow-hidden rounded-xl"
              />
            </div>
          </div>
          <h2
            className="mt-100 text-center text-3xl font-semibold lg:text-5xl"
            dangerouslySetInnerHTML={{ __html: data.JoinTitle }}
          />
          <div className="mt-60 grid gap-x-[25px] gap-y-[50px] px-3 lg:grid-cols-3">
            {data.WhyJoin.map((item: any, index: number) => (
              <div key={index}>
                <h4 className="mb-10 text-xl font-bold md:text-2xl">
                  {item.Title}
                </h4>
                <p className="text-l text-gray5">{item.Description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {dataJobs.lenght > 1 && (
      <div className="bg-gold px-3 py-[80px] text-white md:py-[150px]">
        <div className="">
          <h2 className="mb-40 text-center text-3xl font-bold md:text-5xl">
            {data.JobTitle}
          </h2>
          <p className="mx-auto max-w-[825px] pb-3 text-center text-l">
            {data.JobDescription}
          </p>
          <ul className="mx-auto max-w-6xl text-gray3 lg:mt-[90px]">
            {dataJobs?.map((item: any, index: number) => (
              <li key={index}>
                <Link
                  href={`/job/${item.attributes.slug}`}
                  prefetch={false}
                  className="flex items-center justify-between border-b pb-20 pt-[27px]"
                >
                  <div className="flex flex-col">
                    <span className="text-[25px] font-bold md:text-[34px]">
                      {item.attributes.Name}
                    </span>
                    <span>{item.attributes.Location}</span>
                  </div>
                  <span className="inline-block w-[26px]">
                    <span className="inline-block w-[26px]">
                      <LongArrow
                        direction={locale === "ar" ? "left" : "right"}
                      />
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      )}

      <div className="hidden px-4 py-[100px] lg:pb-140 lg:pt-[200px]">
        <div className="container mx-auto">
          <section className="text-center text-black">
            <SectionTitles
              title={data.TestimonialsTitle}
              sub_title={data.TestimonialsDescription}
            />
          </section>
          <div className="mt-[60px] grid gap-[60px] lg:grid-cols-3">
            <div className="flex flex-col items-center justify-center bg-yellow2 px-[26px] py-50 text-center">
              <Image src="/images/stars.webp" width={99} height={18} alt="" />
              <p className="mb-10 mt-18 text-gray5">
                {
                  "Franchising with La Poire is not just a business venture; it's an immersion into Egypt's rich culinary culture. Become part of our growth story and carry "
                }
              </p>
              <span className="text-xs font-semibold text-gray">
                Joe - UI & UX Designer
              </span>
            </div>
            <div className="flex flex-col items-center justify-center bg-yellow2 px-[26px] py-50 text-center lg:scale-110">
              <Image src="/images/stars.webp" width={99} height={18} alt="" />
              <p className="mb-10 mt-18 text-gray5">
                {
                  "Franchising with La Poire is not just a business venture; it's an immersion into Egypt's rich culinary culture. Become part of our growth story and carry "
                }
              </p>
              <span className="text-xs font-semibold text-gray">
                Joe - UI & UX Designer
              </span>
            </div>
            <div className="flex flex-col items-center justify-center bg-yellow2 px-[26px] py-50 text-center">
              <Image src="/images/stars.webp" width={99} height={18} alt="" />
              <p className="mb-10 mt-18 text-gray5">
                {
                  "Franchising with La Poire is not just a business venture; it's an immersion into Egypt's rich culinary culture. Become part of our growth story and carry "
                }
              </p>
              <span className="text-xs font-semibold text-gray">
                Joe - UI & UX Designer
              </span>
            </div>
          </div>
        </div>
      </div>

      <Newsletter />
    </div>
  );
}
