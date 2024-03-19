export const runtime = "edge";
import About from "@/app/_components/Pages/About";
import { fetchingAboutPage, fetchingBrandsSEO } from "@/app/api/fetcher";
import { SITE_TITLE } from "@/app/config";
import { getLocale } from "next-intl/server";
import AboutData from "@/app/api/about-page.json"

export async function  generateMetadata({ params }: any) {
  const categoryInfo = await fetchingBrandsSEO(params);
  const seo = categoryInfo?.data.attributes?.SEO;
  const pageTitle = 'About';
  const pageDescription = "metaDescription";
  const pageKeywords = `key`;

  return {
    title: `${pageTitle} | ${SITE_TITLE}`,
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
