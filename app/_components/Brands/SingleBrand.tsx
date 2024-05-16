"use client";
// import { fetchingSingleBrand } from "@/app/api/fetcher";
import React, { useEffect, useState } from "react";
import HeroWithTitles from "../HeroWithTitles";
import Story from "./Story";
import Signature from "./Signature";
import CompanyStats from "../CompanyStats";
import TheExperience from "../TheExperience";
// import Testimonials from "../Testimonials";
import SocialMedia from "../SocialMedia";
import OurPromise from "./OurPromise";
import ExploreMore from "./ExploreMore";
import ExtraMoreAbout from "../ExtraMoreAbout";
import Newsletter from "../Newsletter";
// import mockData from "./mockData.json";
import { useLocale, useTranslations } from "next-intl";
// import { fetchingSingleBrand } from "@/app/api/fetcher";

interface BrandData {
  BrandColor: string;
  Title: string;
  Subtitle: string;
  Description: string;
  slug: string;
  MoreAbout: any;
  // Add other properties if needed
}

export default function SingleBrand({ dataFetched }: any) {
  const locale = useLocale();
  const t = useTranslations("common");

  const products = dataFetched?.products;
  const productsSectionData = {
    SignatureDelightsDescription: dataFetched?.SignatureDelightsDescription,
    BrandColor: dataFetched?.BrandColor,
    ProductsSectionTitle: dataFetched?.ProductsSectionTitle,
    ProductsSectionSubTitle_1: dataFetched?.ProductsSectionSubTitle_1,
    ProductsSectionSubTitle_2: dataFetched?.ProductsSectionSubTitle_2,
  };
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
      <Signature products={products} data={productsSectionData} />
      <CompanyStats
        fullWidth
        sinceYear={dataFetched?.SinceYear ?? null}
        employeesNum={dataFetched?.EmployeesNum}
        locationsNum={dataFetched?.LocationsNum}
        numbersTitle={dataFetched?.BlackSectionTitle}
        numbersDescription={dataFetched?.BlackSectionDescription}
      />
      <TheExperience data={dataFetched} />
      {/* <Testimonials /> */}
      <SocialMedia data={dataFetched} />
      <OurPromise data={dataFetched} />
      <ExploreMore parentSlug={dataFetched?.slug ?? ""} />
      <div className="container mr-auto">
        <div className="max-w-[930px]">
          <ExtraMoreAbout
            title={t("la_poire_brands")}
            content={dataFetched?.MoreAbout ?? ""}
          />
        </div>
      </div>
      <Newsletter />
    </div>
  );
}
