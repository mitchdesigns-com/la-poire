"use client";
import Image from "next/image";
import { motion } from "@/app/lib/motion";
import { arfont, poppins, pt_serif } from "@/app/fonts";
import { Link } from "@/navigation";
import { useLocale, useTranslations } from "next-intl";
export default function OurBrands({
  title,
  description,
  brandsList,
  noLinks,
}: {
  title?: string;
  description?: string;
  brandsList?: any;
  noLinks?: boolean;
}) {
  const t = useTranslations("common");
  const locale = useLocale();
  let mainTitle = t("our_brands");
  if (title) {
    mainTitle = title;
  }

  return (
    <div className="container mx-auto flex flex-col gap-20 pb-[64px] pt-26 text-center md:gap-40 md:pt-100 lg:py-100">
      <h4 className="text-xl font-light text-black">{mainTitle}</h4>
      {description && (
        <div
          className={`${
            locale === "ar"
              ? `${arfont.className} space-y-22`
              : `${poppins.className} space-y-34 text-center mx-auto`
          } text-greenBlack max-w-[540px] text-sm font-light`}
        >
          {description}
        </div>
      )}
      <div className="flex flex-nowrap items-center justify-center gap-20 px-4 lg:gap-40 lg:p-[30px]">
        {brandsList?.map((card: any, index: number) => (
          <motion.div
            key={index}
            className="relative h-[114px] w-[calc(100%/2-20px)] lg:h-[124px] lg:w-[142px]"
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
                className="m-auto max-w-[120px] object-contain"
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
                className="m-auto max-w-[120px] object-contain"
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
