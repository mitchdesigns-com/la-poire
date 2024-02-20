import React from "react";
import News from "../_components/Pages/News";
import { fetchingBlogsPage } from "../api/fetcher";

export default async function BlogPage() {
  const dataFetched = await fetchingBlogsPage();
  return (
    <div>
      <News data={dataFetched.data} />
    </div>
  );
}
