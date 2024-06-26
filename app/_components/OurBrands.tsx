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
    <div className="container mx-auto flex flex-col gap-20 py-50 text-center md:gap-40 md:py-100">
      <h4 className="text-xl font-light text-black">{mainTitle}</h4>
      <div className="flex flex-wrap items-center justify-center gap-40 md:flex-nowrap">
        {brandsList?.map((card: any, index: number) => (
          <motion.div
            key={index}
            className="relative h-[124px] w-[142px]"
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
                className="max-w-[120px] object-contain"
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
                className="max-w-[120px] object-contain"
              />
            )}
            {!noLinks && (
              <Link href={`/brands/${card.attributes.slug}`}>
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
