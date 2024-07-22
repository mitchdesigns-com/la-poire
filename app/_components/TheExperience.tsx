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
    <div className="container mx-auto mb-[33%] px-20 pt-[29px] xl:container sm:pb-0 md:pb-0 lg:px-0 lg:py-110">
      <div className="relative aspect-[1280/717] lg:aspect-[1373/720] lg:bg-bej">
        <div className="md:absolute"></div>
        {data?.TheExperienceImage.data?.attributes.url && (
          <Image
            alt=""
            fill
            className="z-10 object-cover lg:z-0"
            src={
              process.env.NEXT_PUBLIC_API_URL +
              data.TheExperienceImage.data?.attributes.url
            }
          />
        )}
        <span className={`hidden lg:absolute lg:left-[51px] lg:top-[-40px] lg:z-10 lg:block`}>
          <Pattern spanWidth={6} color={data?.BrandColor} />
        </span>
        <span className={`absolute left-[-9px] top-[-24.15px] z-0 lg:hidden`}>
          <Pattern spanWidth={3} color={data?.BrandColor} />
        </span>
        <div className="relative top-[146px] z-40 mx-auto mb-[208px] flex w-[68%] flex-col justify-center drop-shadow-md md:top-[121px] md:mb-0 md:pt-[400px] lg:absolute lg:right-[60px] lg:top-[-43px] lg:w-[385px] lg:p-0 lg:px-0">
          <div className={`bg-${data?.BrandColor} text-white md:px-[38px] px-20 md:py-4 py-1`}>
            <h3 className="text-[13px] font-bold md:text-2xl">{data?.TheExperienceTitle}</h3>
            <p className="text-xs font-light md:text-xl">{data?.TheExperienceSubTitle}</p>
          </div>
          <div className="mb-4 h-[320px] bg-white py-[20px] pl-[14px] pr-[14px] sm:h-[360px] md:pl-30 md:pr-[46px] lg:h-full">
            <div className={`border-l-[5px] border-${data?.BrandColor} py-15 pl-26 overflow-y-auto h-full` }>
              <div className={`md:space-y-20 space-y-10 md:text-xl text-xs ${locale === "ar" ? arfont.className : pt_serif.className} text-greenBlack md:leading-[28px] leading-5 !font-normal`}>
                {paragraphs}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
