export const runtime = "edge";
import Jobs from "@/app/_components/Pages/Jobs";
import { fetchingJobsPage, fetchingJobsSEO } from "@/app/api/fetcher";
import { API_ENDPOINT_CORS, FrontEnd_URL } from "@/app/config";


export async function generateMetadata({ params }: { params: { locale?: string } }) {
  const canonicalBaseUrl = FrontEnd_URL;
  const fallbackLocalePaths = {
    "x-default": `${canonicalBaseUrl}/`,
    en: `${canonicalBaseUrl}/job`,
    ar: `${canonicalBaseUrl}/ar/job`,
  };

  const locale = params?.locale || "en"; // Default locale is "en"
  const currentPath = locale === "ar" ? `/ar/job` : `/job`;
  const canonicalUrl = `${canonicalBaseUrl}${currentPath}`;

  try {
    // Fetch localized "about" page data
    const result = await fetchingJobsSEO(locale);
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
export default async function JobPage({ params }: any) {
  const dataFetched = await fetchingJobsPage(params.locale);
  return (
    <div>
      <Jobs data={dataFetched.data.attributes} />
    </div>
  );
}
