export const runtime = "edge";
import Brands from "@/app/_components/Pages/Brands";
import { fetchingBrandsPage, fetchingBrandsSEO } from "@/app/api/fetcher";
import { SITE_TITLE } from "@/app/config";

export async function generateMetadata({ params }: any) {
  const categoryInfo = await fetchingBrandsSEO(params);
  const seo = categoryInfo?.data?.attributes?.SEO??null;
  const pageTitle = seo?.metaTitle??"Brands Page";
  const pageDescription = seo?.metaDescription??"Brands Page";
  const pageKeywords = `key`;

  return {
    title: `${pageTitle} | ${SITE_TITLE}`,
    description: pageDescription ?? "",
    keywords: pageKeywords ?? "",
  };
}
export default function BrandsPage() {
  return (
    <div>
      <Brands />
    </div>
  );
}
