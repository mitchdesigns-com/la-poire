import Image from "next/image";
import React from "react";
import StoryLoader from "./StoryLoader";
import { pt_serif } from "@/app/fonts";

export default function Story({ data }: any) {
  // Check if data or data.HeroImage is null
  if (!data) {
    // You can render a placeholder or handle this case as needed
    return <StoryLoader />;
  }
  const paragraphs = data.StoryDescription.split("\n\n").map(
    (paragraph: string, index: number) => (
      <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
    )
  );
  return (
    <div>
      <div className="container mx-auto max-w-[1000px]">
        <div className="aspect-[2/1] relative">
          {data.HeroImage.data?.attributes.url && (
            <Image
              alt=""
              fill
              className="object-cover"
              src={
                process.env.NEXT_PUBLIC_API_URL +
                data.HeroImage.data?.attributes.url
              }
            />
          )}
        </div>
        <div className="px-4 py-44">
          <div className="flex">
            <div className="w-[300px] pr-5 shrink-0 flex-grow-0">
              <Image
                alt=""
                src={
                  process.env.NEXT_PUBLIC_API_URL +
                  data.Logo.data?.attributes.url
                }
                // width={data.Logo.data.attributes.width}
                // height={data.Logo.data.attributes.height}
                width={data.Logo.data.attributes.width > 150 ? data.Logo.data.attributes.width / 2 : data.Logo.data.attributes.width}
                height={data.Logo.data.attributes.width > 150 ? data.Logo.data.attributes.height / 2 : data.Logo.data.attributes.height}
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold">{data.StoryTitle}</h3>
              <h4 className="text-xl font-light">{data.StorySubTitle}</h4>
              <div className={`space-y-34 mt-34 ${pt_serif.className} text-greenBlack leading-[28px]`}>{paragraphs}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
