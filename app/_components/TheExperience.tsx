import React from "react";
import Pattern from "./Pattern";
import { arfont, pt_serif } from "../fonts";
import Image from "next/image";
import { useLocale } from "next-intl";

export default function TheExperience({ data }: any) {
  const locale = useLocale();
  const paragraphs = data?.TheExperienceDescription.split("\n").map(
    (paragraph: string, index: number) => (
      <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
    )
  );

  return (
    <div className="container xl:container mx-auto pt-[29px] mb-[33%] sm:pb-0 md:pb-0 lg:py-110 lg:px-0 px-20">
      <div className="relative aspect-[1280/717] lg:aspect-[1373/720]   lg:bg-bej">
        <div className="md:absolute"></div>
        {data?.TheExperienceImage.data?.attributes.url && (
          <Image
            alt=""
            fill
            className="object-cover z-10 lg:z-0 "
            src={
              process.env.NEXT_PUBLIC_API_URL +
              data.TheExperienceImage.data?.attributes.url
            }
          />
        )}
        <span className={`lg:absolute hidden lg:block  lg:left-[51px]  lg:top-[-40px]  lg:z-10`}>
          <Pattern spanWidth={6} color={data?.BrandColor} />
        </span>
        <span className={`absolute lg:hidden top-[-24.15px] left-[-9px]  z-0 `}>
          <Pattern spanWidth={3} color={data?.BrandColor} />
        </span>
        <div className="relative lg:absolute flex md:top-[121px] md:pt-[400px] lg:p-0 mx-auto top-[146px] mb-[208px] z-40 md:mb-0 w-[68%] justify-center lg:right-[60px] lg:top-[-43px] lg:px-0 lg:w-[385px] drop-shadow-md flex-col">
          <div className={`bg-${data?.BrandColor} text-white md:px-[38px] px-20 md:py-4 py-1`}>
            <h3 className="md:text-2xl text-[13px] font-bold">{data?.TheExperienceTitle}</h3>
            <p className="md:text-xl text-xs font-light">{data?.TheExperienceSubTitle}</p>
          </div>
          <div className="bg-white py-[20px] md:pl-30 pl-[14px] md:pr-[46px] pr-[14px] sm:h-[360px] h-[320px] lg:h-full mb-4">
            <div className={`border-l-[5px] border-${data?.BrandColor} py-15 pl-26 overflow-y-auto h-full` }>
              <div className={`md:space-y-20 space-y-10 md:text-xl text-xs ${locale === "ar" ? arfont.className : pt_serif.className} text-greenBlack md:leading-[28px] leading-5`}>
                {paragraphs}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
