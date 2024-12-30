export const runtime = "edge";
import Brands from "@/app/_components/Pages/Brands";
import { fetchingBrandsSEO } from "@/app/api/fetcher";
import { API_ENDPOINT_CORS, FrontEnd_URL } from "@/app/config";

// export async function generateMetadata({ params }: any) {
//   const categoryInfo = await fetchingBrandsSEO(params.locale);
//   const seo = categoryInfo?.data?.attributes?.SEO ?? null;
//   const pageTitle = seo?.metaTitle ?? "Brands Page";
//   const pageDescription = seo?.metaDescription ?? "Brands Page";
//   const pageKeywords = seo.keywords;

//   return {
//     title: `${pageTitle}`,
//     description: pageDescription ?? "",
//     keywords: pageKeywords ?? "",
//   };
// }

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
    const result = await fetchingBrandsSEO(locale);
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
export default function BrandsPage() {
  return (
    <div>
      <Brands />
    </div>
  );
}
