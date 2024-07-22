export const runtime = "edge";
import Brands from "@/app/_components/Pages/Brands";
import { fetchingBrandsSEO } from "@/app/api/fetcher";

export async function generateMetadata({ params }: any) {
  const categoryInfo = await fetchingBrandsSEO(params.locale);
  const seo = categoryInfo?.data?.attributes?.SEO??null;
  const pageTitle = seo?.metaTitle??"Brands Page";
  const pageDescription = seo?.metaDescription??"Brands Page";
  const pageKeywords = `key`;

  return {
    title: `${pageTitle}`,
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
