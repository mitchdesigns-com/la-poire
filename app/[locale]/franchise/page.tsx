export const runtime = "edge";
import Franchise from "@/app/_components/Pages/Franchise";
import { fetchingFranchisePage, fetchingFranchisePageSEO } from "@/app/api/fetcher";
import { getLocale } from "next-intl/server";
import FranchiseData from "@/app/api/franchise-page.json"
import { API_ENDPOINT_CORS, FrontEnd_URL } from "@/app/config";



export async function generateMetadata({ params }: { params: { locale?: string } }) {
  const canonicalBaseUrl = FrontEnd_URL;
  const fallbackLocalePaths = {
    "x-default": `${canonicalBaseUrl}/`,
    en: `${canonicalBaseUrl}/franchise`,
    ar: `${canonicalBaseUrl}/ar/franchise`,
  };

  const locale = params?.locale || "en"; // Default locale is "en"
  const currentPath = locale === "ar" ? `/ar/franchise` : `/franchise`;
  const canonicalUrl = `${canonicalBaseUrl}${currentPath}`;

  try {
    // Fetch localized "about" page data
    const result = await fetchingFranchisePageSEO(locale);
    const seo = result?.data?.attributes?.SEO;

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
    console.warn("fetchJobSEO: ", error);

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
export default async function FranchisePage() {
  const locale = await getLocale();
  const result = await fetchingFranchisePage(locale);
  return (
    <div>
      <Franchise data={result?.data?.attributes ?? FranchiseData.data.attributes} />
    </div>
  );
}
