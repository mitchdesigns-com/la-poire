export const runtime = "edge";
import News from "@/app/_components/Pages/News";
import { fetchingBlogsPage } from "@/app/api/fetcher";

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
