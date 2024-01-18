export const runtime = "edge";
import SingleBrand from "@/app/_components/Brands/SingleBrand";
export default function SingleBrandPage({
  params,
}: {
  params: { brandSlug: string };
}) {
  return (
    <div className="">
      <SingleBrand params={params.brandSlug} />
    </div>
  );
}
