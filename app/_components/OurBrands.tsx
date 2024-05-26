"use client";
import Image from "next/image";
import { motion } from "@/app/lib/motion";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
export default function OurBrands({
  title,
  brandsList,
  noLinks,
}: {
  title?: string;
  brandsList?: any;
  noLinks?: boolean;
}) {
  const t = useTranslations("common");
  let mainTitle = t("our_brands");
  if (title) {
    mainTitle = title;
  }

  return (
    <div className="container  mx-auto flex flex-col  md:pt-100 gap-20 text-center pt-26 pb-[64px] md:gap-40 lg:py-100">
      <h4 className="text-xl font-light text-black">{mainTitle}</h4>
      <div className="flex flex-nowrap items-center justify-center lg:p-[30px] px-4   lg:gap-40 gap-20 ">
        {brandsList?.map((card: any, index: number) => (
          <motion.div
            key={index}
            className="relative lg:h-[124px] h-[114px] w-[calc(100%/2-20px)] lg:w-[142px]"
            initial={{ opacity: 0, x: -100 * (index + 1) }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: index * 0.5 }}
            viewport={{ once: true }}
          >
            {card.attributes.Logo ? (
              <Image
                src={
                  card.attributes.Logo.data
                    ? process.env.NEXT_PUBLIC_API_URL +
                      card.attributes.Logo.data?.attributes.url
                    : "/images/placeholder.webp"
                }
                alt="brand logo alt has logo"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                // style={{ objectFit: "contain" }}
                className="max-w-[120px] object-contain m-auto" 
              />
            ) : (
              <Image
                src={
                  card.attributes
                    ? process.env.NEXT_PUBLIC_API_URL + card.attributes.url
                    : "/images/placeholder.webp"
                }
                alt="brand logo alt no logo"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                // style={{ objectFit: "contain" }}
                className="max-w-[120px] object-contain m-auto"
              />
            )}
            {!noLinks && (
              <Link href={`/brands/${card.attributes.slug}`} prefetch={false}>
                <span
                  aria-hidden="true"
                  className="absolute inset-0 z-[11]"
                ></span>
              </Link>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
