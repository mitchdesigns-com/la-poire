export const runtime = "edge";
import SingleJob from "@/app/_components/Pages/SingleJob";
import { fetchingJobsSEO, fetchingSingleJob } from "@/app/api/fetcher";

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
export default async function SinglejobPage({
  params,
}: {
  params: { jobSlug: string; locale: string };
}) {
  const jobSlug = params.jobSlug;
  const dataFetched = await fetchingSingleJob(jobSlug, params.locale);
  return (
    <div className="">
      <SingleJob data={dataFetched?.data[0]?.attributes} />
    </div>
  );
}
