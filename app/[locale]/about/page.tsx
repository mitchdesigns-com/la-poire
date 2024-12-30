export const runtime = "edge";
import About from "@/app/_components/Pages/About";
import AboutData from "@/app/api/about-page.json";
import { fetchingAboutPage, fetchingAboutSEO } from "@/app/api/fetcher";
import { API_ENDPOINT_CORS, FrontEnd_URL } from "@/app/config";
import { getLocale } from "next-intl/server";

export async function generateMetadata({ params }: { params: { locale?: string } }) {
  const canonicalBaseUrl = FrontEnd_URL;
  const fallbackLocalePaths = {
    "x-default": `${canonicalBaseUrl}/`,
    en: `${canonicalBaseUrl}/about`,
    ar: `${canonicalBaseUrl}/ar/about`,
  };

  const locale = params?.locale || "en"; // Default locale is "en"
  const currentPath = locale === "ar" ? `/ar/about` : `/about`;
  const canonicalUrl = `${canonicalBaseUrl}${currentPath}`;

  try {
    // Fetch localized "about" page data
    const result = await fetchingAboutSEO(locale);
    const seo = result?.data?.attributes?.SEO[0];

    if (!seo) {
      return {
        title: "Not Found",
        description: "The page not found",
        alternates: {
          canonical: canonicalUrl,
          languages: fallbackLocalePaths,
        },
        metadataBase: new URL(canonicalBaseUrl),
      };
    }

    const alternates = {
      canonical: canonicalUrl,
      languages: {
        "x-default": fallbackLocalePaths["x-default"],
        en: fallbackLocalePaths.en,
        ar: fallbackLocalePaths.ar,
      },
    };

    return {
      title: seo.metaTitle,
      description: seo.metaDescription,
      keywords: seo.keywords,
      alternates,
      openGraph: {
        title: seo.metaTitle,
        description: seo.metaDescription,
        images: `${API_ENDPOINT_CORS}${seo?.metaImage.data.attributes.url}`,
      },
      metadataBase: new URL(canonicalBaseUrl),
    };
  } catch (error) {
    console.warn("fetchAboutPageSEO: ", error);

    return {
      title: "Not Found",
      description: "The page not found",
      alternates: {
        canonical: canonicalUrl,
        languages: fallbackLocalePaths,
      },
      metadataBase: new URL(canonicalBaseUrl),
    };
  }
}
export default async function AboutPage() {
  const locale = await getLocale();
  const result = await fetchingAboutPage(locale);
  return (
    <div>
      <About data={result?.data?.attributes ?? AboutData.data.attributes} />
    </div>
  );
}
