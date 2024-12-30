export const runtime = "edge";
import News from "@/app/_components/Pages/News";
import { fetchingBlogsPage, fetchingBlogsSEO } from "@/app/api/fetcher";
import { API_ENDPOINT_CORS, FrontEnd_URL } from "@/app/config";

// export async function generateMetadata({ params }: any) {
//   const categoryInfo = await fetchingBlogsSEO(params.locale);
//   const seo = categoryInfo?.data?.attributes?.SEO ?? null;
//   const pageTitle = seo?.metaTitle ?? "Blogs Page";
//   const pageDescription = seo?.metaDescription ?? "Blogs Page";
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
    en: `${canonicalBaseUrl}/blog`,
    ar: `${canonicalBaseUrl}/ar/blog`,
  };

  const locale = params?.locale || "en"; // Default locale is "en"
  const currentPath = locale === "ar" ? `/ar/blog` : `/blog`;
  const canonicalUrl = `${canonicalBaseUrl}${currentPath}`;

  try {
    // Fetch localized "about" page data
    const result = await fetchingBlogsSEO(locale);
    const seo = result?.data?.attributes?.SEO;
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
        images: seo.metaImage?.data?.attributes?.url
          ? `${API_ENDPOINT_CORS}${seo.metaImage.data.attributes.url}`
          : `${API_ENDPOINT_CORS}/uploads/Group_Logo_14f9e1ee67.webp`, // Fallback image URL
      },
      metadataBase: new URL(canonicalBaseUrl),
    };

  } catch (error) {
    console.warn("fetchblogsSEO: ", error);

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
export default async function BlogPage({
  params,
}: {
  params: { locale: string };
}) {
  const dataFetched = await fetchingBlogsPage(params.locale);
  return (
    <div>
      <News data={dataFetched?.data} />
    </div>
  );
}
