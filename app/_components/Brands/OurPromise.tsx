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
    <div className="flex xl:h-screen items-center justify-center bg-black py-100">
      <div className="container mx-auto px-4">
        <div className="flex lg:flex-row flex-col gap-[47px] items-center">
          <Image
            src={
              process.env.NEXT_PUBLIC_API_URL +
              data.OurPromiseImage_1.data.attributes.url
            }
            alt="img alt"
            width={data.OurPromiseImage_1.data.attributes.width / 2}
            height={data.OurPromiseImage_1.data.attributes.height / 2}
            className=" object-contain"
          />
          <div className="pt-22 text-center">
            <h3 className="text-2xl font-bold text-white">
              {data.OurPromiseTitle
                ? data.OurPromiseTitle
                : t("our_sweet_promise")}
            </h3>
            <p
              className={`text-goldLight xl:text-[34px] text-[29px] xl:mt-[50px] mt-[40px] ${
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
            className=" object-contain"
          />
        </div>
      </div>
    </div>
  );
}
