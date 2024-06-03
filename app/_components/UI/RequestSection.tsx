import { arfont, roboto } from "@/app/fonts";
import Image from "next/image";
import React from "react";
import RequestForm from "../RequestForm";
import { useLocale, useTranslations } from "next-intl";

export default function RequestSection() {
  const t = useTranslations("franchise");
  const locale = useLocale();
  return (
    <div
      className={`px-4 py-32 bg-gold ${
        locale === "ar" ? arfont.className : roboto.className
      }`}>
      <div className='container mx-auto'>
        <div className='flex flex-col-reverse md:max-lg:flex-col-reverse  lg:flex-row  flex-wrap items-center justify-center gap-[71px]'>
          <div className='w-full md:w-[474px]'>
            <div className='w-full rounded-xl bg-white px-32 py-26 shadow-md shadow-[#034A3080]'>
              <RequestForm />
            </div>
          </div>
          <div className='flex flex-col gap-[70px]'>
            <Image
              src='/images/logo-white.webp'
              alt='La Poire Logo'
              width='205'
              height='57'
            />
            <div className='flex max-w-[550px] md:max-w-[384px] flex-col gap-10'>
              <h6 className='text-xl text-goldLight'>{t("req_subtitle")}</h6>
              <h2 className='text-[30px] md:text-[53px] lg:text-[76px] font-bold leading-[56px] lg:leading-[90px] text-white'>
                {t("req_title")}
              </h2>
              <p className='text-sm leading-[21px] text-gray3'>
                {t("req_paragraph")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
