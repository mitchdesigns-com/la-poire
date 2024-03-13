export const runtime = "edge";
import SingleBrand from "@/app/_components/Brands/SingleBrand";
import { fetchingSingleBrand } from "@/app/api/fetcher";
export default async function SingleBrandPage({
  params,
}: {
  params: { brandSlug: string; locale: string };
}) {
  const result = await fetchingSingleBrand(params.brandSlug, params.locale);
  return (
    <div className="">
      <SingleBrand params={params.brandSlug} dataFetched={result?.data[0]?.attributes} />
    </div>
  );
}
