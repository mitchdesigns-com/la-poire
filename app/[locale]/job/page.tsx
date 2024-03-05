export const runtime = "edge";
import Jobs from "@/app/_components/Pages/Jobs";
import { fetchingJobsPage } from "@/app/api/fetcher";

export default async function JobPage() {
  const dataFetched = await fetchingJobsPage();
  return (
    <div>
      <Jobs data={dataFetched.data.attributes} />
    </div>
  );
}
