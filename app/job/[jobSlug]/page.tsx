export const runtime = "edge";
import SingleJob from "@/app/_components/Pages/SingleJob";
import { fetchingSingleJob } from "@/app/api/fetcher";

export default async function SinglejobPage({
  params,
}: {
  params: { jobSlug: string };
}) {
  const jobSlug = params.jobSlug;
  const dataFetched = await fetchingSingleJob(jobSlug);
  return (
    <div className="">
      <SingleJob data={dataFetched?.data[0]?.attributes} />
    </div>
  );
}
