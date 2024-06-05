"use client";
import React, { useEffect, useState } from "react";
import HeroWithTitles from "../HeroWithTitles";
import { arfont, roboto } from "@/app/fonts";
import PhoneCall from "../Icons/PhoneCall";
import Mail from "../Icons/Mail";
import SectionTitles from "../UI/SectionTitles";
import ReactPlayer from "react-player";
import PlayBtn from "../Icons/PlayBtn";
import ContactForm from "../ContactForm";
import SectionTextImage from "../UI/SectionTextImage";
import Button from "../Button";
import Image from "next/image";
import Newsletter from "../Newsletter";
import { Link } from "@/navigation";
import { useLocale, useTranslations } from "next-intl";

export default function Contact({ data }: any) {
  const [hasWindow, setHasWindow] = useState(false);
  const t = useTranslations("common");
  const locale = useLocale();
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  // const data = {
  //   herotitle: "Medium length hero headline goes here",
  //   herosubtitle: "Your Inquiries Matter to Us – Reach Out Today!",
  //   herodescription:
  //     "Whether you have questions, feedback, or require assistance, our team is ready to provide you with the support you need. Contact La Poire for a taste of dedication and response as prompt and pleasing as our desserts.",
  // };
  // console.log("data", data);
  return (
    <div>
      <HeroWithTitles
        bgColor={"white"}
        title={data.Title}
        subtitle={data.Subtitle}
        description={data.Description}
        max_width
        height_auto={false}
      />
      <div className='container mx-auto md:mb-30 md:mt-30'>
        <span className='block h-[5px] w-full bg-gray3' />
      </div>
      <div className='bg-white px-4 pb-[70px] pt-[50px] md:pb-140 md:pt-[70px]'>
        <div className='container mx-auto'>
          <div className='grid lg:grid-cols-3'>
            {data.ContactInfos.map((item: any, index: number) => (
              <div className='flex flex-col items-start gap-30' key={index}>
                <div>
                  <h4
                    className={`text-greenBlack ${
                      locale === "ar" ? arfont.className : roboto.className
                    } text-xl font-semibold`}>
                    {item.Title}
                  </h4>
                  <p className='mt-5 text-green'>{item.Subtitle}</p>
                </div>
                <div className='flex flex-col gap-5 text-sm text-gray5'>
                  <h5 className='flex items-center gap-5 font-semibold'>
                    <PhoneCall />
                    Phone
                  </h5>
                  {item.Phones.map((item: any, index: number) => (
                    <p key={index}>{item.number}</p>
                  ))}
                </div>
                <div className='flex flex-col gap-5 text-sm text-gray5'>
                  <h5 className='flex items-center gap-5 font-semibold'>
                    <Mail />
                    Email Address
                  </h5>
                  {item.Emails.map((item: any, index: number) => (
                    <p key={index}>{item.email}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='bg-goldLight px-4 pt-64'>
        <div className='container mx-auto -mb-140'>
          <div className='mb-7 flex flex-col items-center justify-center gap-20'>
            <section className='text-center text-black'>
              <SectionTitles
                title={data.FeedbackTitle}
                sub_title={data.FeedbackSubtitle}
              />
            </section>
            <p className='mx-auto max-w-3xl text-center text-sm text-gray5'>
              {data.FeedbackDescription}
            </p>
          </div>
          <div className='mx-auto md:w-[474px]'>
            <div
              className='relative w-full rounded-xl bg-white px-32 py-26'
              style={{ boxShadow: "0px 10px 20px rgba(51, 20, 27, 0.1)" }}>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <div className='h-[174px] md:h-140 bg-white' />
      <div className='md:mr-0  mr-[26px]'>
        <SectionTextImage
          image_position={"left"}
          image_src={
            data.MapImage.data?.attributes.url
              ? process.env.NEXT_PUBLIC_API_URL +
                data.MapImage.data?.attributes.url
              : "/images/placeholder.webp"
          }
          color={"white"}>
          <div className='flex max-w-[515px] flex-col text-black'>
            <h2 className='text-2xl md:text-5xl font-semibold'>
              {data.MapTitle}
            </h2>
            <h4 className='mt-10 text-green'>{data.MapSubtitle}</h4>
            <p className='mt-10 border-t-[3px] border-gray3 pt-10 text-base text-black'>
              {data.MapAddress}
            </p>
            {data.Directions && (
              <div className='pt-40'>
                <Button
                  type='submit'
                  variant='border'
                  size='normal'
                  pill
                  uppercase
                  className='flex items-start gap-10'>
                  <Image
                    src='/images/pin.webp'
                    alt='google pin'
                    width={16}
                    height={23}
                  />
                  <Link href={data.Directions} target='_blank' prefetch={false}>
                    {t("get_direction")}
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </SectionTextImage>
      </div>
      <Newsletter />
    </div>
  );
}
