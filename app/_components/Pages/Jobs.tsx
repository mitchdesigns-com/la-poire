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

export default function Jobs({ data }: any) {
  const mediaUrl = process.env.NEXT_PUBLIC_API_URL;
  // console.log(mediaUrl);
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

  // console.log(data);
  return (
    <div>
      <HeroWithTitles
        bgColor={"white"}
        title={data.Title}
        subtitle={data.Subtitle}
        description={""}
        max_width
        subtitle_max_width='max-w-[485px]'
        height_auto={false}
      />
      <div className='container mx-auto px-2 pb-100'>
        <div className='flex justify-center gap-5'>
          <div className='flex-none w-[210px] md:w-auto'>
            <Image
              src={`${mediaUrl}${data.Image_01.data?.attributes.url}`}
              alt=''
              width={296}
              height={409}
            />
          </div>
          <div className='flex-none hidden lg:block'>
            <Image
              src={`${mediaUrl}${data.Image_02.data?.attributes.url}`}
              alt=''
              width={667}
              height={409}
            />
          </div>
          <div className='flex flex-none flex-col gap-5 max-w-[36%] md:max-w-[100%]'>
            <Image
              src={`${mediaUrl}${data.Image_03.data?.attributes.url}`}
              alt=''
              width={206}
              height={258}
            />
            <Image
              src={`${mediaUrl}${data.Image_04.data?.attributes.url}`}
              alt=''
              width={206}
              height={146}
            />
          </div>
        </div>
        <h2
          className='mt-100 text-center text-3xl lg:text-5xl font-semibold'
          dangerouslySetInnerHTML={{ __html: data.JoinTitle }}
        />
        <div className='mt-60 grid gap-x-[25px] gap-y-[50px] px-3 lg:grid-cols-3'>
          {data.WhyJoin.map((item: any, index: number) => (
            <div key={index}>
              <h4 className='mb-10 text-xl md:text-2xl font-bold'>
                {item.Title}
              </h4>
              <p className='text-l text-gray5'>{item.Description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='bg-gold  py-[80px] md:py-[150px] px-3 text-white'>
        <div className=''>
          <h2 className='mb-40 text-center text-3xl md:text-5xl font-bold'>
            {data.JobTitle}
          </h2>
          <p className='mx-auto max-w-[825px] text-center text-l pb-3'>
            {data.JobDescription}
          </p>
          <ul className='mx-auto lg:mt-[90px] max-w-6xl text-gray3'>
            {dataJobs?.map((item: any, index: number) => (
              <li key={index}>
                <Link
                  href={`/job/${item.attributes.slug}`}
                  prefetch={false}
                  className='flex items-center justify-between border-b pb-20 pt-[27px]'>
                  <div className='flex flex-col'>
                    <span className='text-[25px] md:text-[34px] font-bold'>
                      {item.attributes.Name}
                    </span>
                    <span>{item.attributes.Location}</span>
                  </div>
                  <span className='inline-block w-[26px]'>
                    <span className='inline-block w-[26px]'>
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

      <div className='px-4 py-[100px] hidden lg:pb-140 lg:pt-[200px]'>
        <div className='container mx-auto'>
          <section className='text-center text-black'>
            <SectionTitles
              title={data.TestimonialsTitle}
              sub_title={data.TestimonialsDescription}
            />
          </section>
          <div className='mt-[60px] grid lg:grid-cols-3 gap-[60px]'>
            <div className='flex flex-col items-center justify-center bg-yellow2 px-[26px] py-50 text-center'>
              <Image src='/images/stars.webp' width={99} height={18} alt='' />
              <p className='mb-10 mt-18 text-gray5'>
                {
                  "Franchising with La Poire is not just a business venture; it's an immersion into Egypt's rich culinary culture. Become part of our growth story and carry "
                }
              </p>
              <span className='text-xs font-semibold text-gray'>
                Joe - UI & UX Designer
              </span>
            </div>
            <div className='flex lg:scale-110 flex-col items-center justify-center bg-yellow2 px-[26px] py-50 text-center'>
              <Image src='/images/stars.webp' width={99} height={18} alt='' />
              <p className='mb-10 mt-18 text-gray5'>
                {
                  "Franchising with La Poire is not just a business venture; it's an immersion into Egypt's rich culinary culture. Become part of our growth story and carry "
                }
              </p>
              <span className='text-xs font-semibold text-gray'>
                Joe - UI & UX Designer
              </span>
            </div>
            <div className='flex flex-col items-center justify-center bg-yellow2 px-[26px] py-50 text-center'>
              <Image src='/images/stars.webp' width={99} height={18} alt='' />
              <p className='mb-10 mt-18 text-gray5'>
                {
                  "Franchising with La Poire is not just a business venture; it's an immersion into Egypt's rich culinary culture. Become part of our growth story and carry "
                }
              </p>
              <span className='text-xs font-semibold text-gray'>
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
