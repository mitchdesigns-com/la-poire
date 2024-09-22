export const runtime = "edge";
import Home from "@/app/_components/Home";
import { fetchingHomePage, fetchingHomeSEO } from "../api/fetcher";
import { getLocale } from "next-intl/server";
import HomeData from "@/app/api/home.json"

export async function generateMetadata({ params }: any) {
  const categoryInfo = await fetchingHomeSEO(params.locale);
  const seo = categoryInfo?.data.attributes?.SEO;
  const pageTitle = seo?.metaTitle;
  const pageDescription = seo?.metaDescription;
  const pageKeywords = seo.keywords;

  return {
    title: pageTitle ?? "",
    description: pageDescription ?? "",
    keywords: pageKeywords ?? "",
  };
}
export default async function page() {
  const locale = await getLocale();
  const dataFetched = await fetchingHomePage(locale);
  return <Home data={dataFetched?.data ?? HomeData.data} />;
}
