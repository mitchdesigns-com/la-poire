export const runtime = "edge";
import Franchise from "@/app/_components/Pages/Franchise";
import { fetchingFranchisePage } from "@/app/api/fetcher";
import { getLocale } from "next-intl/server";

export default async function FranchisePage() {
  const locale = await getLocale();
  const result = await fetchingFranchisePage(locale);
  return (
    <div>
      <Franchise data={result.data.attributes} />
    </div>
  );
}
