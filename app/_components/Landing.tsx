"use client"
import { useEffect, useState } from "react";
import AboutSection from "./AboutSection";
import LandingHero from "./LandingHero";
import MoreAbout from "./MoreAbout";
import Newsletter from "./Newsletter";
import OurBrands from "./OurBrands";
import Testimonials from "./Testimonials";
import { fetchLanding } from "../api/general";

export default function Landing() {
  const [dataFetched, setDataFetched] = useState<null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchLanding();
        setDataFetched(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  // console.log('dataFetched',dataFetched)
  return (
    <div>
      <LandingHero />
      <OurBrands />
      <AboutSection />
      <MoreAbout />
      {/* <div className="container mx-auto mt-30 md:mb-95 mb-30">
        <span className="bg-gray3 h-[5px] w-full block" />
      </div> */}
      {/* <Testimonials /> */}
      <Newsletter />
    </div>
  );
}
