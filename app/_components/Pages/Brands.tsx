"use client";
import { fetchingAllBrands, fetchingBrandsPage } from "@/app/api/fetcher";
import React, { useEffect, useState } from "react";
import HeroWithTitles from "../HeroWithTitles";
import List from "../Brands/List";
import ExtraMoreAbout from "../ExtraMoreAbout";
import Newsletter from "../Newsletter";
import brandsMock from "./brands.json"
import brandsAllMock from "../Brands/mockData.json"

export default function Brands() {
  const [data, setData] = useState<any | null>(null);
  const [brandsList, setBrands] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const homeData = await fetchingBrandsPage();
        setData(homeData);
      } catch (error) {
        console.error("Error fetching home page data:", error);
      }
    };

    fetchData();
    const fetchBrands = async () => {
      try {
        const allBrands = await fetchingAllBrands();
        setBrands(allBrands);
      } catch (error) {
        console.error("Error fetching home page data:", error);
        setBrands(brandsAllMock);
      }
    };

    fetchBrands();
  }, []);
  const brandsData = data?.data?.attributes??brandsMock.data?.attributes;
  const brands = brandsList??brandsAllMock;
  // console.log("brandsData", brandsData);
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
        title="La Poire Brands"
        content={brandsData?.MoreAbout ?? ""}
      />
      <Newsletter />
    </div>
  );
}
