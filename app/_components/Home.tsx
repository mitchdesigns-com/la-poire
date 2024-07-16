import Link from "next/link";
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
import { useTranslations } from "next-intl";
// import BlogWidget from "./UI/BlogWidget";
// import SectionTitles from "./UI/SectionTitles";

export default function Home({ data }: any) {
  const t = useTranslations("common");

  if (!data) {
    return null;
  }

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
      <OurBrands brandsList={data?.attributes?.OurBrands.data} title={data.attributes?.BrandsTitle} description={data.attributes?.BrandsDescription} />
      <AboutSection description={data?.attributes?.JoyDescription} />
      <MoreAbout data={data.attributes} />
      <div className='container mx-auto mb-30 mt-30 md:mb-95'>
        <span className='hidden h-[5px] w-full bg-gray3 lg:block' />
      </div>
      {/* <Testimonials /> */}

      {/* {data.attributes.FranchiseBox.map((item: any, index: number) => (
        <SectionTextImage
          key={index}
          image_position={item.image_position}
          image_src={
            item.Image.data?.attributes.url
              ? process.env.NEXT_PUBLIC_API_URL +
                item.Image.data?.attributes.url
              : "/images/placeholder.webp"
          }
          color={item.Color}>
          <div className='flex max-w-[580px] flex-col pl-2 text-black md:pl-0'>
            <h2 className='w-[348px] text-xl font-semibold md:w-full md:text-3xl lg:text-[5xl]'>
              {item.Title}
            </h2>
            <h4 className='mt-10 text-gray5'>{item.Subtitle}</h4>
            <p className='mt-30 pb-3 text-[12px] md:text-base'>
              {item.Description}
            </p>
            <h4 className='mr-2 mt-10 text-gray5 hover:text-greenBlack md:mr-0'>
              <div className='flex flex-col gap-10 lg:w-[332px] lg:flex-row-reverse'>
                <Link href={`/franchise/#requestForm`}>
                  <button className='false mt-10 w-full whitespace-nowrap rounded-full bg-gold px-34 py-2 text-sm font-medium uppercase tracking-[0.02em] text-white transition duration-300 ease-in-out hover:bg-goldHover focus:outline-none focus:ring-2 focus:ring-gold focus:ring-opacity-50 md:text-sm md:leading-[21px]'>
                    {t("Applynow")}
                  </button>
                </Link>

                <Link href={`/franchise`}>
                  <button className='mt-10 w-full flex-nowrap whitespace-nowrap rounded-full border-[2px] border-gold px-3 py-2 text-[12px] font-semibold uppercase text-gold transition hover:bg-gold hover:text-white md:text-xs lg:w-[160px] lg:text-sm'>
                    {t("LearnMore")}
                  </button>
                </Link>
              </div>
            </h4>
          </div>
        </SectionTextImage>
      ))} */}

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
