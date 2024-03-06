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
    <div className="flex h-screen items-center justify-center bg-black py-100">
      <div className="container mx-auto">
        <div className="flex gap-[47px]">
          <Image
            src={
              process.env.NEXT_PUBLIC_API_URL +
              data.OurPromiseImage_1.data.attributes.url
            }
            alt="img alt"
            width={data.OurPromiseImage_1.data.attributes.width}
            height={data.OurPromiseImage_1.data.attributes.height}
          />
          <div className="pt-22 text-center">
            <h3 className="text-2xl font-bold text-white">{t('our_sweet_promise')}</h3>
            <p className={`text-goldLight text-[34px] mt-[50px] ${locale === "ar"?arfont.className:pt_serif.className}`}>{data.OurPromiseDescription}</p>
          </div>
          <Image
            src={
              process.env.NEXT_PUBLIC_API_URL +
              data.OurPromiseImage_2.data.attributes.url
            }
            alt="img alt"
            width={data.OurPromiseImage_2.data.attributes.width}
            height={data.OurPromiseImage_2.data.attributes.height}
          />
        </div>
      </div>
    </div>
  );
}
