"use-client";
export const runtime = "edge";
import SingleBrand from "@/app/_components/Brands/SingleBrand";
import { fetchingSingleBrand, fetchingSingleBrandSEO } from "@/app/api/fetcher";
import { API_ENDPOINT_CORS, FrontEnd_URL } from "@/app/config";

// export async function generateMetadata({ params }: any) {
//   const categoryInfo = await fetchingSingleBrandSEO(params.locale, params.brandSlug);
//   const seo = categoryInfo?.data[0]?.attributes?.SEO;
//   const pageTitle = seo?.metaTitle ?? "Single Brand Page";
//   const pageDescription = seo?.metaDescription ?? "Single Brand metaDescription";
//   const pageKeywords = seo.keywords;

//   return {
//     title: `${pageTitle}`,
//     description: pageDescription ?? "",
//     keywords: pageKeywords ?? "",
//   };
// }
export async function generateMetadata({ params }: { params: { locale?: string; brandSlug: string } }) {
  const fallbackLocalePaths = {
    "x-default": "/",
    en: "/",
    ar: "/ar",
  };

  const locale = params?.locale || "en"; // Default locale is "en"
  const canonicalBaseUrl = FrontEnd_URL;
  const currentPath = `brands/${params.brandSlug}`;
  const canonicalUrl = `${canonicalBaseUrl}${locale === "en" ? '' : 'ar/'}${currentPath}`;

  try {
    // Fetch SEO data for the specific service
    const content = await fetchingSingleBrandSEO(locale, params.brandSlug);
    const serviceData = content?.data?.[0]?.attributes;
    const seo = serviceData?.SEO;

    if (!seo) {
      return {
        title: "Not Found",
        description: "The page not found",
        alternates: {
          canonical: canonicalUrl,
          languages: {
            "x-default": canonicalUrl,
            en: `${canonicalBaseUrl}${currentPath}`,
            ar: `${canonicalBaseUrl}ar/${currentPath}`,
          },
        },
        metadataBase: new URL(canonicalBaseUrl),
      };
    }

    const alternates = {
      canonical: canonicalUrl,
      languages: {
        "x-default": canonicalUrl,
        en: `${canonicalBaseUrl}${currentPath}`,
        ar: `${canonicalBaseUrl}ar/${currentPath}`,
      },
    };

    return {
      title: seo.metaTitle || "Default Service Title",
      description: seo.metaDescription || "Default Service Description",
      keywords: seo.keywords || "",
      alternates,
      openGraph: {
        title: seo.metaTitle || "Default Service Title",
        description: seo.metaDescription || "Default Service Description",
        images: seo.metaImage.data.attributes?.url
          ? `${API_ENDPOINT_CORS}${seo.metaImage.data.attributes.url}`
          : `${API_ENDPOINT_CORS}/uploads/Group_Logo_14f9e1ee67.webp`,
      },
      metadataBase: new URL(canonicalBaseUrl),
    };
  } catch (error) {
    console.warn("fetchbrandssEO Error: ", error);

    // Fallback metadata in case of errors
    const fallbackAlternates = {
      canonical: canonicalUrl,
      languages: {
        "x-default": canonicalUrl,
        en: `${canonicalBaseUrl}${currentPath}`,
        ar: `${canonicalBaseUrl}ar/${currentPath}`,
      },
    };

    return {
      title: "Not Found",
      description: "The page not found",
      alternates: fallbackAlternates,
      metadataBase: new URL(canonicalBaseUrl),
    };
  }
}
export default async function SingleBrandPage({
  params,
}: {
  params: { brandSlug: string; locale: string };
}) {
  const result = await fetchingSingleBrand(params.brandSlug, params.locale);
  return (
    <div className="">
      <SingleBrand
        params={params.brandSlug}
        dataFetched={result?.data[0]?.attributes}
      />
    </div>
  );
}
