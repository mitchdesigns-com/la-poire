export const runtime = "edge";
import About from "../_components/Pages/About";
import { SITE_TITLE } from "../config";

export function generateMetadata({ params }: any) {
//   const categoryInfo = await fetchingBrandsSEO(params);
//   const seo = categoryInfo.data.attributes?.SEO;
  const pageTitle = 'About';
  const pageDescription = "metaDescription";
  const pageKeywords = `key`;

  return {
    title: `${pageTitle} | ${SITE_TITLE}`,
    description: pageDescription ?? "",
    keywords: pageKeywords ?? "",
  };
}
export default function AboutPage() {
  return (
    <div>
      <About />
    </div>
  );
}
