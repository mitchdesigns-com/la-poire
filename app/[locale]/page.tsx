export const runtime = "edge";
import Home from "@/app/_components/Home";
import { fetchingHomePage, fetchingHomeSEO } from "../api/fetcher";
import { getLocale } from "next-intl/server";
import HomeData from "@/app/api/home.json"
import { API_ENDPOINT_CORS, FrontEnd_URL } from "../config";

// export async function generateMetadata({ params }: any) {
//   const categoryInfo = await fetchingHomeSEO(params.locale);
//   const seo = categoryInfo?.data.attributes?.SEO;
//   const pageTitle = seo?.metaTitle;
//   const pageDescription = seo?.metaDescription;
//   const pageKeywords = seo.keywords;

//   return {
//     title: pageTitle ?? "",
//     description: pageDescription ?? "",
//     keywords: pageKeywords ?? "",
//   };
// }

export async function generateMetadata({ params: { locale } }: { params: { locale: keyof typeof fallbackLocalePaths } }) {
  const fallbackLocalePaths = {
    "x-default": "/",
    en: "/",
    ar: "/ar",
  };

  const canonicalBaseUrl = FrontEnd_URL;
  const currentPath = fallbackLocalePaths[locale] ?? "/";
  const canonicalUrl = `${canonicalBaseUrl}${currentPath}`;

  try {
    // Fetch SEO data for the homepage based on the locale
    const dataSEO = await fetchingHomeSEO(locale);
    // Extract SEO attributes safely
    const seoAttributes = dataSEO?.data?.attributes?.SEO;
    const seoTitle = seoAttributes?.metaTitle || "Default Title"; // Provide default values as fallback
    const seoDescription = seoAttributes?.metaDescription || "Default description";
    const seoImage = seoAttributes?.metaImage?.data?.attributes?.url || "";

    // Define hreflang alternates
    const alternates = {
      canonical: canonicalUrl,
      languages: {
        "x-default": `${canonicalBaseUrl}/`,
        en: `${canonicalBaseUrl}/`,
        ar: `${canonicalBaseUrl}/ar`,
      },
    };

    return {
      title: seoTitle,
      description: seoDescription,
      alternates,
      openGraph: {
        title: seoTitle,
        description: seoDescription,
        images: seoImage ? `${API_ENDPOINT_CORS}${seoImage}` : undefined,
      },
      metadataBase: new URL(canonicalBaseUrl),
    };
  } catch (error) {
    console.warn("fetchHomeSEO Error: ", error);

    // Fallback in case of errors
    return {
      title: "Default Title",
      description: "Default description",
      alternates: {
        canonical: canonicalUrl,
        languages: {
          "x-default": `${canonicalBaseUrl}/`,
          en: `${canonicalBaseUrl}/`,
          ar: `${canonicalBaseUrl}/ar`,
        },
      },
      metadataBase: new URL(canonicalBaseUrl),
    };
  }
}

export default async function page() {
  const locale = await getLocale();
  const dataFetched = await fetchingHomePage(locale);
  return <Home data={dataFetched?.data ?? HomeData.data} />;
}
