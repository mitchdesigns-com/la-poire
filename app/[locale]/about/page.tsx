export const runtime = "edge";
import About from "@/app/_components/Pages/About";
import AboutData from "@/app/api/about-page.json";
import { fetchingAboutPage, fetchingAboutSEO } from "@/app/api/fetcher";
import { getLocale } from "next-intl/server";

export async function generateMetadata({ params }: any) {
  const categoryInfo = await fetchingAboutSEO();
  const seo = categoryInfo?.data?.attributes?.SEO[0];
  // console.log('categoryInfo',categoryInfo)
  // console.log('seo',seo)
  const pageTitle = seo.metaTitle;
  const pageDescription = seo.metaDescription;
  const pageKeywords = `key`;
  
  return {
    title: pageTitle ?? "",
    description: pageDescription ?? "",
    keywords: pageKeywords ?? "",
  };
}
export default async function AboutPage() {
  const locale = await getLocale();
  const result = await fetchingAboutPage(locale);
  return (
    <div>
      <About data={result?.data?.attributes??AboutData.data.attributes} />
    </div>
  );
}
