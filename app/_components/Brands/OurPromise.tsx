import Image from "next/image";
import React from "react";
import SocialMediaLoader from "../SocialMediaLoader";
import { arfont, pt_serif } from "@/app/fonts";
import { useLocale, useTranslations } from "next-intl";

export default function OurPromise({ data }: any) {
  const t = useTranslations('common');
  const locale = useLocale()
  // Check if data or data.HeroImage is null
  if (!data) {
    // You can render a placeholder or handle this case as needed
    return <SocialMediaLoader />;
  }
  return (
    <div className="flex xl:h-screen items-center justify-center bg-black py-[42px] lg:py-100">
      <div className="container mx-auto lg:px-4 px-3 ">
        <div className="flex lg:flex-row flex-col  lg:gap-[47px]  items-center">
          <Image
            src={
              process.env.NEXT_PUBLIC_API_URL +
              data.OurPromiseImage_1.data.attributes.url
            }
            alt="img alt"
            width={data.OurPromiseImage_1.data.attributes.width / 2}
            height={data.OurPromiseImage_1.data.attributes.height / 2}
            className=" object-contain lg:block md:block hidden  "
          />
           <Image
            src={
              process.env.NEXT_PUBLIC_API_URL +
              data.OurPromiseImage_1.data.attributes.url
            }
            alt="img alt"
            width={data.OurPromiseImage_1.data.attributes.width / 2}
            height={data.OurPromiseImage_1.data.attributes.height / 4}
            className={` object-cover md:hidden block h-[250px] `}
          />
          <div className="pt-22 text-center w-[96%]">
            <h3 className="text-[21px] lg:text-2xl font-bold text-white">
              {data.OurPromiseTitle
                ? data.OurPromiseTitle
                : t("our_sweet_promise")}
            </h3>
            <p
              className={`text-goldLight xl:text-[34px] lg:text-[29px] text-[18px] pb-[48px] xl:mt-[50px] mt-[40px] ${
                locale === "ar" ? arfont.className : pt_serif.className
              }`}
            >
              {data.OurPromiseDescription}
            </p>
          </div>
          <Image
            src={
              process.env.NEXT_PUBLIC_API_URL +
              data.OurPromiseImage_2.data.attributes.url
            }
            alt="img alt"
            width={data.OurPromiseImage_2.data.attributes.width / 2}
            height={data.OurPromiseImage_2.data.attributes.height / 2}
            className=" object-contain lg:block md:block hidden"
          />
          <Image
            src={
              process.env.NEXT_PUBLIC_API_URL +
              data.OurPromiseImage_2.data.attributes.url
            }
            alt="img alt"
            width={data.OurPromiseImage_2.data.attributes.width / 2}
            height={data.OurPromiseImage_2.data.attributes.height / 4}
            className=" object-cover md:hidden block h-[250px]"
          />
        </div>
      </div>
    </div>
  );
}
