export const runtime = "edge";
import SingleJob from "@/app/_components/Pages/SingleJob";

export default function SinglejobPage({
  params,
}: {
  params: { jobSlug: string };
}) {
  return (
    <div className="">
      <SingleJob />
    </div>
  );
}
