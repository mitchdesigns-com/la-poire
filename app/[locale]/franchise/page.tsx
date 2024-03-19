export const runtime = "edge";
import Franchise from "@/app/_components/Pages/Franchise";
import { fetchingFranchisePage } from "@/app/api/fetcher";
import { getLocale } from "next-intl/server";
import FranchiseData from "@/app/api/franchise-page.json"


export default async function FranchisePage() {
  const locale = await getLocale();
  const result = await fetchingFranchisePage(locale);
  return (
    <div>
      <Franchise data={result?.data?.attributes??FranchiseData.data.attributes} />
    </div>
  );
}
