"use client";
import { fetchingAllBrands, fetchingBrandsPage } from "@/app/api/fetcher";
import React, { useEffect, useState } from "react";
import HeroWithTitles from "../HeroWithTitles";
import List from "../Brands/List";
import ExtraMoreAbout from "../ExtraMoreAbout";
import Newsletter from "../Newsletter";
import brandsMock from "./brands.json"
import brandsAllMock from "../Brands/mockData.json"
import { useLocale, useTranslations } from "next-intl";

export default function Brands() {
  const locale = useLocale();
  const t = useTranslations();
  const [data, setData] = useState<any | null>(null);
  const [brandsList, setBrands] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const homeData = await fetchingBrandsPage(locale);
        // console.log('homeData',homeData)
        setData(homeData);
        // debugger
      } catch (error) {
        console.error("Error fetching home page data:", error);
      }
    };

    fetchData();
    const fetchBrands = async () => {
      try {
        const allBrands = await fetchingAllBrands(locale);
        // console.log('allBrands',allBrands)
        setBrands(allBrands);
      } catch (error) {
        console.error("Error fetching home page data:", error);
        setBrands(brandsAllMock);
      }
    };

    fetchBrands();
  }, [locale]);
  const brandsData = data?.data?.attributes;
  const brands = brandsList;
  // console.log("brandsData", brandsData);
  // console.log("brands", brands);
  return (
    <div>
      <HeroWithTitles
        bgColor={"white"}
        title={brandsData?.Title ?? ""}
        subtitle={brandsData?.Subtitle ?? ""}
        description={brandsData?.Description ?? ""}
      />
      <List data={brands?.data} />
      <div className="container mx-auto h-[5px] bg-gray3" />
      <ExtraMoreAbout
        title={t('common.about')+' '+t('common.la_poire_brands')}
        content={brandsData?.MoreAbout ?? ""}
      />
      <Newsletter />
    </div>
  );
}
