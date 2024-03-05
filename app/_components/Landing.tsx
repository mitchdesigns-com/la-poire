"use client"
import { useEffect, useState } from "react";
import AboutSection from "./AboutSection";
import LandingHero from "./LandingHero";
import MoreAbout from "./MoreAbout";
import Newsletter from "./Newsletter";
import OurBrands from "./OurBrands";
import Testimonials from "./Testimonials";
import { fetchLanding } from "../api/general";
import { fetchingAllBrands } from "../api/fetcher";

export default function Landing() {
  const [dataFetched, setDataFetched] = useState<null>(null);
  const [brandsList, setBrands] = useState<any | null>(null);
  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const allBrands = await fetchingAllBrands();
        setBrands(allBrands.data);
      } catch (error) {
        console.error("Error fetching home page data:", error);
        // setBrands(brandsAllMock);
      }
    };

    fetchBrands();
  }, []);
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
      <LandingHero brandsList={brandsList} />
      <OurBrands brandsList={brandsList} />
      <AboutSection />
      <MoreAbout />
      {/* <div className="container mx-auto mb-30 mt-30 md:mb-95">
        <span className="block h-[5px] w-full bg-gray3" />
      </div> */}
      {/* <Testimonials /> */}
      <Newsletter />
    </div>
  );
}
