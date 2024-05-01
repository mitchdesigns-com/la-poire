// "use client";
// import { useEffect, useState } from "react";
import AboutSection from "./AboutSection";
import LandingHero from "./LandingHero";
import MoreAbout from "./MoreAbout";
import Newsletter from "./Newsletter";
import OurBrands from "./OurBrands";
// import Testimonials from "./Testimonials";
// import { fetchLanding } from "../api/general";
// import { fetchingAllBrands } from "../api/fetcher";
// import { useLocale } from "next-intl";
import SectionTextImage from "./UI/SectionTextImage";
// import BlogWidget from "./UI/BlogWidget";
// import SectionTitles from "./UI/SectionTitles";

export default function Home({ data }: any) {
  if (!data) {
    return null;
  }
  // console.log("data Home", data);
  return (
    <div>
      <LandingHero
        brandsList={data.attributes?.OurBrands.data}
        title={data.attributes?.Title}
        brandsNum={data.attributes?.BrandsNum}
        brandBrief={data.attributes?.brandBrief}
        employeesNum={data.attributes?.EmployeesNum}
        locationsNum={data.attributes?.LocationsNum}
        numbersTitle={data.attributes?.numbersTitle}
        numbersDescription={data.attributes?.numbersDescription}
      />
      <OurBrands brandsList={data?.attributes?.OurBrands.data} />
      <AboutSection />
      <MoreAbout data={data.attributes} />
      <div className="container mx-auto mb-30 mt-30 md:mb-95">
        <span className="block h-[5px] w-full bg-gray3" />
      </div>
      {/* <Testimonials /> */}

      {data.attributes.FranchiseBox.map((item: any, index: number) => (
        <SectionTextImage
          key={index}
          image_position={item.image_position}
          image_src={
            item.Image.data?.attributes.url
              ? process.env.NEXT_PUBLIC_API_URL +
                item.Image.data?.attributes.url
              : "/images/placeholder.webp"
          }
          color={item.Color}
        >
          <div className="flex max-w-[580px] flex-col text-black">
            <h2 className="text-5xl font-semibold">{item.Title}</h2>
            <h4 className="mt-10 text-gray5">{item.Subtitle}</h4>
            <p className="mt-30 text-base">{item.Description}</p>
          </div>
        </SectionTextImage>
      ))}

      {/* <div className="container mx-auto flex flex-col gap-40 py-72">
        <section>
          <SectionTitles
            title={data.attributes.blogTitle}
            tagline={data.attributes.blogSubTitle}
            taglineAlt
            taglineLight
          />
        </section>
        <div className="grid gap-x-[25px] gap-y-[50px] md:grid-cols-4">
          {data.attributes.blogs.data.map((item: any, index: number) => (
            <BlogWidget key={index} data={item.attributes} />
          ))}
        </div>
      </div> */}
      <Newsletter />
    </div>
  );
}
