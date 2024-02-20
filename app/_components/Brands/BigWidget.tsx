import Image from "next/image";
import Pattern from "../Pattern";
import Link from "next/link";

export default function BigWidget({ data, index }: any) {
  const isEven = index % 2 === 0;

  return (
    <div className="py-20 md:py-[80px]">
      <div className="container mx-auto">
        <div
          className={`flex items-center md:gap-40 gap-20 ${
            isEven ? "flex-row" : "flex-row-reverse"
          }`}
        >
          <Link href={`/brands/${data.slug}`} className="relative aspect-[928/619] bg-white md:w-[calc(100%-400px)]">
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
            <span
              className={`absolute bottom-[20px] z-10 ${
                isEven ? "right-[-34px] rotate-90" : "left-[-25px] -rotate-90"
              }`}
            >
              <Pattern spanWidth={3} color={data.BrandColor} />
            </span>
            <span
              className={`absolute top-[-60px] z-10 ${
                isEven ? "left-[50px]" : "right-[50px]"
              }`}
            >
              <Pattern spanWidth={6} color={data.BrandColor} />
            </span>
          </Link>
          <div className="flex w-auto flex-col gap-[10px] md:w-[400px]">
            <h2 className="text-[36px] font-medium">{data.SmallWidgetTitle}</h2>
            <h5 className="text-xl font-light">{data.SmallWidgetSubTitle}</h5>
            <div className="relative my-20 flex h-[280px] items-center justify-start pl-[50px]">
              <span
                className={`absolute top-0 bottom-0 left-0 w-[5px] rounded-xl bg-${data.BrandColor}`}
              ></span>
              <span>{data?.Logo?.data?.attributes?.formats?.url}</span>
              <Image
                src={
                  process.env.NEXT_PUBLIC_API_URL +
                  data.Logo.data.attributes.url
                }
                alt="img alt"
                width={data.Logo.data.attributes.width}
                height={data.Logo.data.attributes.height}
              />
            </div>
            <p className="text-xs text-gray">{data.SmallWidgetShort}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
