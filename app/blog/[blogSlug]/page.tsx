export const runtime = "edge";
import SingleBlog from "@/app/_components/Pages/SingleBlog";
export default function SingleBlogPage({
  params,
}: {
  params: { blogSlug: string };
}) {
  return (
    <div className="">
      <SingleBlog />
    </div>
  );
}
