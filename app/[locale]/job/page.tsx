export const runtime = "edge";
import Jobs from "@/app/_components/Pages/Jobs";
import { fetchingJobsPage, fetchingJobsSEO } from "@/app/api/fetcher";

export async function generateMetadata({ params }: any) {
  const categoryInfo = await fetchingJobsSEO(params.locale);
  const seo = categoryInfo?.data?.attributes?.SEO ?? null;
  const pageTitle = seo?.metaTitle ?? "Jobs Page";
  const pageDescription = seo?.metaDescription ?? "Jobs Page";
  const pageKeywords = seo.keywords;

  return {
    title: `${pageTitle}`,
    description: pageDescription ?? "",
    keywords: pageKeywords ?? "",
  };
}
export default async function JobPage({ params }: any) {
  const dataFetched = await fetchingJobsPage(params.locale);
  return (
    <div>
      <Jobs data={dataFetched.data.attributes} />
    </div>
  );
}
