import Image from "next/image";
import React from "react";
import SocialMediaLoader from "../SocialMediaLoader";
import { pt_serif } from "@/app/fonts";

export default function OurPromise({ data }: any) {
  // Check if data or data.HeroImage is null
  if (!data) {
    // You can render a placeholder or handle this case as needed
    return <SocialMediaLoader />;
  }
  return (
    <div className="h-screen py-100 flex justify-center items-center bg-black">
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
          <div className="text-center pt-22">
            <h3 className="text-2xl font-bold text-white">Our Sweet Promise</h3>
            <p className={`text-goldLight text-[34px] mt-[50px] ${pt_serif.className}`}>{data.OurPromiseDescription}</p>
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
