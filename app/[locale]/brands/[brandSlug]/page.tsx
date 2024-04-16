export const runtime = "edge";
import SingleBrand from "@/app/_components/Brands/SingleBrand";
import { fetchingSingleBrand, fetchingSingleBrandSEO } from "@/app/api/fetcher";

export async function generateMetadata({ params }: any) {
  const categoryInfo = await fetchingSingleBrandSEO(params.locale, params.brandSlug);
  const seo = categoryInfo?.data[0]?.attributes?.SEO;
  // console.log('categoryInfo',categoryInfo)
  // console.log('seo',seo)
  const pageTitle = seo?.metaTitle??"Single Brand Page";
  const pageDescription = seo?.metaDescription??"Single Brand metaDescription";
  const pageKeywords = `key`;

  return {
    title: `${pageTitle}`,
    description: pageDescription ?? "",
    keywords: pageKeywords ?? "",
  };
}

export default async function SingleBrandPage({
  params,
}: {
  params: { brandSlug: string; locale: string };
}) {
  const result = await fetchingSingleBrand(params.brandSlug, params.locale);
  return (
    <div className="">
      <SingleBrand
        params={params.brandSlug}
        dataFetched={result?.data[0]?.attributes}
      />
    </div>
  );
}
