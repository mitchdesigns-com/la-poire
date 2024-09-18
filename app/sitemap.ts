import { MetadataRoute } from "next";
import { fetchingAllBrands, fetchingAllJobs, fetchingBlogsPage } from "./api/fetcher";


const WEBSITE_HOST_URL = "https://www.lapoire-group.com";

type changeFrequency = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allblogs = await fetchingBlogsPage();
  const allbrands = await fetchingAllBrands("en");
  const alljobs = await fetchingAllJobs("en");



  const changeFrequency: changeFrequency = "daily";


  const allBrands = allbrands.data.map((blog: any) => ({
    url: `${WEBSITE_HOST_URL}/brands/${blog.attributes.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency,
  }));
  const allJobs = alljobs.data.map((blog: any) => ({
    url: `${WEBSITE_HOST_URL}/job/${blog.attributes.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency,
  }));
  const allBlogs = allblogs.data.map((blog: any) => ({
    url: `${WEBSITE_HOST_URL}/blog/${blog.attributes.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency,
  }));


  const routes = [
    { url: WEBSITE_HOST_URL, priority: 1.0 },
    { url: `${WEBSITE_HOST_URL}/about`, priority: 0.8 },
    // { url: `${WEBSITE_HOST_URL}/blog`, priority: 0.8 },
    { url: `${WEBSITE_HOST_URL}/brands`, priority: 0.8 },
    { url: `${WEBSITE_HOST_URL}/contact-us`, priority: 0.8 },
    { url: `${WEBSITE_HOST_URL}/franchise`, priority: 0.8 },
    { url: `${WEBSITE_HOST_URL}/job`, priority: 0.8 },

  ].map((route) => ({
    url: route.url,
    lastModified: new Date().toISOString(),
    changeFrequency,
    priority: route.priority || 0.5,
  }));
  // const routesWithArabicLanguage = routes.map((route) => {
  //   const { url, ...rest } = route;
  //   const germanUrl = url.startsWith(WEBSITE_HOST_URL) ? `${WEBSITE_HOST_URL}/ar${url.slice(WEBSITE_HOST_URL.length)}` : `${WEBSITE_HOST_URL}/de${url}`;
  //   return { url: germanUrl, ...rest };
  // });

  return [
    ...routes,
    // ...routesWithArabicLanguage,
	...allBrands,
  ...allJobs,
  // ...allBlogs
  ];
}
