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
    <div className="container mx-auto py-110">
      <div className="relative aspect-[1373/720] bg-bej">
        <div className="md:absolute"></div>
        {data?.TheExperienceImage.data?.attributes.url && (
          <Image
            alt=""
            fill
            className="object-cover"
            src={
              process.env.NEXT_PUBLIC_API_URL +
              data.TheExperienceImage.data?.attributes.url
            }
          />
        )}
        <span className={`absolute left-[51px] top-[-40px] z-10`}>
          <Pattern spanWidth={6} color={data?.BrandColor} />
        </span>
        <div className="absolute right-[60px] top-[-43px] flex w-[385px] flex-col">
          <div className={`bg-${data?.BrandColor} text-white px-[38px] py-4`}>
            <h3 className="text-2xl font-bold">{data?.TheExperienceTitle}</h3>
            <p className="text-xl font-light">{data?.TheExperienceSubTitle}</p>
          </div>
          <div className="bg-white py-[38px] pl-30 pr-[46px]">
            <div
              className={`border-l-[5px] border-${data?.BrandColor} py-30 pl-26`}
            >
              <div
                className={`space-y-20 ${locale === "ar"?arfont.className:pt_serif.className} text-greenBlack leading-[28px]`}
              >
                {paragraphs}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
