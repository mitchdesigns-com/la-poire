"use client";
import { fetchingAllBrands } from "@/app/api/fetcher";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import mockData from "./mockData.json";

export default function ExploreMore({ parentSlug }: any) {
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
    <div className="container mx-auto py-70 flex justify-center items-center flex-col gap-40">
      <h3 className="text-xl font-light">Explore More Brands</h3>
      <div className="flex justify-center items-center gap-40">
        {Array.isArray(filteredBrands) &&
          filteredBrands.map((item: any, index: any) => (
            <Link
              href={`/brands/${item.attributes.slug}`}
              key={index}
              className="inline-block"
            >
              <Image
                alt=""
                className="object-cover"
                width={
                  item.attributes.Logo.data.attributes.width > 150
                    ? item.attributes.Logo.data.attributes.width / 2
                    : item.attributes.Logo.data.attributes.width
                }
                height={
                  item.attributes.Logo.data.attributes.width > 150
                    ? item.attributes.Logo.data.attributes.height / 2
                    : item.attributes.Logo.data.attributes.height
                }
                src={
                  // process.env.NEXT_PUBLIC_API_URL +
                  item.attributes.Logo.data?.attributes.url
                }
              />
            </Link>
          ))}
      </div>
    </div>
  );
}
