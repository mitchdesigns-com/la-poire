"use client";
import Image from "next/image";
import { motion } from "@/app/lib/motion";
import Link from "next/link";
export default function OurBrands({
  title,
  brandsList,
}: {
  title?: string;
  brandsList?: any;
}) {
  let mainTitle = "Our Brands";
  if (title) {
    mainTitle = title;
  }
// console.log('brandsList',brandsList)
  return (
    <div className="container mx-auto flex flex-col gap-20 py-50 text-center md:gap-40 md:py-100">
      <h4 className="text-xl font-light text-black">{mainTitle}</h4>
      <div className="flex flex-wrap items-center justify-center gap-40 md:flex-nowrap">
        {brandsList?.map((card: any, index:number) => (
          <motion.div
            key={index}
            className="relative h-[124px] w-[142px]"
            initial={{ opacity: 0, x: -100 * (index + 1) }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: index * 0.5 }}
            viewport={{ once: true }}
          >
            <Image
              // src={process.env.NEXT_PUBLIC_API_URL + imageData?.attributes.url}
              src={card.attributes.Logo.data? 
                process.env.NEXT_PUBLIC_API_URL +
                card.attributes.Logo.data?.attributes.url
                :"/images/placeholder.webp"}
              alt="brand logo alt"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              // style={{ objectFit: "contain" }}
              className="max-w-[120px] object-contain"
            />
            <Link href={`/brands/${card.attributes.slug}`}>
              <span aria-hidden="true" className="absolute inset-0 z-[11]"></span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
