export const runtime = "edge";
import Franchise from "@/app/_components/Pages/Franchise";
import { fetchingFranchisePage, fetchingFranchisePageSEO } from "@/app/api/fetcher";
import { getLocale } from "next-intl/server";
import FranchiseData from "@/app/api/franchise-page.json"


export async function generateMetadata({ params }: any) {
  const categoryInfo = await fetchingFranchisePageSEO(params.locale);
  const seo = categoryInfo?.data?.attributes?.SEO??null;
  const pageTitle = seo?.metaTitle??"Franchise Page";
  const pageDescription = seo?.metaDescription??"Franchise Page";
  const pageKeywords = `key`;

  return {
    title: `${pageTitle}`,
    description: pageDescription ?? "",
    keywords: pageKeywords ?? "",
  };
}
export default async function FranchisePage() {
  const locale = await getLocale();
  const result = await fetchingFranchisePage(locale);
  return (
    <div>
      <Franchise data={result?.data?.attributes??FranchiseData.data.attributes} />
    </div>
  );
}
