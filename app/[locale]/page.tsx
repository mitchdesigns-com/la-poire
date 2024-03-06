export const runtime = "edge";
import Home from "@/app/_components/Home";
import { fetchingHomePage } from "../api/fetcher";
import { getLocale } from "next-intl/server";

export default async function page() {
  const locale = await getLocale();
  const dataFetched = await fetchingHomePage(locale);
  return <Home data={dataFetched.data} />;
}
