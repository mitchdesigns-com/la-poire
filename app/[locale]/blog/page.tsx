export const runtime = "edge";
import News from "@/app/_components/Pages/News";
import { fetchingBlogsPage } from "@/app/api/fetcher";

export default async function BlogPage() {
  const dataFetched = await fetchingBlogsPage();
  return (
    <div>
      <News data={dataFetched.data} />
    </div>
  );
}
