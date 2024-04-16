export const runtime = "edge";
import News from "@/app/_components/Pages/News";
import { fetchingBlogsPage, fetchingBlogsSEO } from "@/app/api/fetcher";

export async function generateMetadata({ params }: any) {
  const categoryInfo = await fetchingBlogsSEO(params.locale);
  const seo = categoryInfo?.data?.attributes?.SEO??null;
  const pageTitle = seo?.metaTitle??"Blogs Page";
  const pageDescription = seo?.metaDescription??"Blogs Page";
  const pageKeywords = `key`;

  return {
    title: `${pageTitle}`,
    description: pageDescription ?? "",
    keywords: pageKeywords ?? "",
  };
}
export default async function BlogPage({
  params,
}: {
  params: { locale: string };
}) {
  const dataFetched = await fetchingBlogsPage(params.locale);
  return (
    <div>
      <News data={dataFetched?.data} />
    </div>
  );
}
