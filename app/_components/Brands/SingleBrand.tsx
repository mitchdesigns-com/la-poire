"use client";
import { fetchingSingleBrand } from "@/app/api/fetcher";
import React, { useEffect, useState } from "react";
import HeroWithTitles from "../HeroWithTitles";
import Story from "./Story";
import Signature from "./Signature";
import CompanyStats from "../CompanyStats";
import TheExperience from "../TheExperience";
import Testimonials from "../Testimonials";
import SocialMedia from "../SocialMedia";
import OurPromise from "./OurPromise";
import ExploreMore from "./ExploreMore";
import ExtraMoreAbout from "../ExtraMoreAbout";
import Newsletter from "../Newsletter";
import mockData from './mockData.json';


interface BrandData {
  BrandColor: string;
  Title: string;
  Subtitle: string;
  Description: string;
  slug: string;
  MoreAbout: any;
  // Add other properties if needed
}

export default function SingleBrand({ params }: any) {
  const [dataFetched, setDataFetched] = useState<BrandData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchingSingleBrand(params);
      setDataFetched(result?.data[0]?.attributes ?? mockData.data[0]?.attributes);
    };

    fetchData();
  }, [params]);

  // console.log("dataFetched>>", dataFetched);

  return (
    <div>
      <HeroWithTitles
        bgColor={dataFetched?.BrandColor ?? "white"}
        title={dataFetched?.Title ?? ""}
        subtitle={dataFetched?.Subtitle ?? ""}
        description={dataFetched?.Description ?? ""}
      />
      <section className="-translate-y-64">
      <Story data={dataFetched} />
      </section>
      <Signature data={dataFetched} />
      <CompanyStats fullWidth />
      <TheExperience data={dataFetched} />
      <Testimonials />
      <SocialMedia data={dataFetched} />
      <OurPromise data={dataFetched} />
      <ExploreMore parentSlug={dataFetched?.slug ??""}/>
      <div className="container mr-auto">
        <div className="max-w-[930px]">
          <ExtraMoreAbout
            title="La Poire Brands"
            content={dataFetched?.MoreAbout ?? ""}
          />
        </div>
      </div>
      <Newsletter />
    </div>
  );
}
