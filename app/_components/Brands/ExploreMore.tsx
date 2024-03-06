"use client";
import { fetchingAllBrands } from "@/app/api/fetcher";
import Image from "next/image";
import { Link } from "@/navigation";
import { useEffect, useState } from "react";
import mockData from "./mockData.json";
import { useTranslations } from "next-intl";

export default function ExploreMore({ parentSlug }: any) {
  const t = useTranslations("common");
  const [brands, setBrands] = useState<any | null>(null);
  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const allBrands = await fetchingAllBrands();
        setBrands(allBrands.data ?? mockData.data);
      } catch (error) {
        console.error("Error fetching home page data:", error);
      }
    };

    fetchBrands();
  }, []);
  //   console.log("brands", brands);
  const filteredBrands = brands?.filter(
    (brand: any) => brand.attributes.slug !== parentSlug
  );
  return (
    <div className="container mx-auto flex flex-col items-center justify-center gap-40 py-70">
      <h3 className="text-xl font-light">{t("explore_more_brands")}</h3>
      <div className="flex items-center justify-center gap-40">
        {Array.isArray(filteredBrands) &&
          filteredBrands.map((item: any, index: any) => (
            <Link
              href={`/brands/${item.attributes.slug}`}
              key={index}
              className="relative inline-block h-[124px] w-[142px]"
            >
              <Image
                alt="brand logo alt"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="max-w-[120px] object-contain"
                src={
                  process.env.NEXT_PUBLIC_API_URL +
                  item.attributes.Logo.data?.attributes.url
                }
              />
            </Link>
          ))}
      </div>
    </div>
  );
}
