export const runtime = "edge";
import SingleBlog from "@/app/_components/Pages/SingleBlog";
import { fetchingSingleBlog } from "@/app/api/fetcher";
export default async function SingleBlogPage({
  params,
}: {
  params: { blogSlug: string };
}) {
  const blogSlug = params.blogSlug;
  const dataFetched = await fetchingSingleBlog(blogSlug);
  return (
    <div className="">
      <SingleBlog data={dataFetched?.data[0]?.attributes} />
    </div>
  );
}
