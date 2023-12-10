import AboutSection from "./AboutSection";
import LandingHero from "./LandingHero";
import MoreAbout from "./MoreAbout";
import Newsletter from "./Newsletter";
import OurBrands from "./OurBrands";
import Testimonials from "./Testimonials";

export default function Landing() {
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
