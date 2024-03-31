export const runtime = "edge";
import NoData from "@/app/_components/NoData";
import Contact from "@/app/_components/Pages/Contact";
import { fetchingContactUsPage } from "@/app/api/fetcher";
import { getLocale } from "next-intl/server";

export default async function ContactUsPage() {
  const locale = await getLocale();
  const result = await fetchingContactUsPage(locale);
  if (!result) {
    return <NoData />;
  }
  if (!result.data) {
    return <NoData />;
  }
  return (
    <div>
      <Contact data={result.data.attributes} />
    </div>
  );
}
