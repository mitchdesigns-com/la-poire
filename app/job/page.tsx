import Jobs from "../_components/Pages/Jobs";
import { fetchingJobsPage } from "../api/fetcher";

export default async function JobPage() {
  const dataFetched = await fetchingJobsPage();
  return (
    <div>
      <Jobs data={dataFetched.data.attributes} />
    </div>
  );
}
