// api/fetcher.ts
const apiUrl = process.env.NEXT_PUBLIC_STRAPI_URL; // Replace with your Strapi API base URL
// const strapiToken = process.env.NEXT_PUBLIC_STRAPI_TOKEN; // Replace with your Strapi API token
// const tlsUnAuthorized = process.env.NODE_TLS_REJECT_UNAUTHORIZED;

const sendRequest = async (
  endpoint: string,
  options: RequestInit = {}
): Promise<any> => {
  const url = `${apiUrl}/${endpoint}`;
  try {
    // process.env.NODE_TLS_REJECT_UNAUTHORIZED='0';
    const response = await fetch(url, {
      method: "GET",
      headers: {
        ...options.headers,
        // "Cache-Control": "no-cache",
        // "Access-Control-Request-Headers": "cache-control",
      },
      redirect: "follow",
      next: {revalidate: 5000}
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof TypeError) {
      console.error(`Failed to fetch data from ${url}:`, error);
      return null;
    } else {
      console.error(`Error during API request to ${url}:`, error);
      return null;
    }
  }
};

export const fetchingAboutPage = async (lang:string ='en') => {
  const endpoint = `about-page?populate=deep&locale=${lang}`;
  return sendRequest(endpoint);
};
export const fetchingFranchisePage = async (lang:string ='en') => {
  const endpoint = `franchise-page?populate=deep&locale=${lang}`;
  return sendRequest(endpoint);
};
export const fetchingContactUsPage = async (lang:string ='en') => {
  const endpoint = `contact-us-page?populate=deep&locale=${lang}`;
  return sendRequest(endpoint);
};
export const fetchingJobsPage = async (lang:string ='en') => {
  const endpoint = `jobs-page?populate=deep&locale=${lang}`;
  return sendRequest(endpoint);
};

export const fetchingBlogsPage = async (lang:string ='en') => {
  const endpoint = `blogs?populate=deep&locale=${lang}`;
  return sendRequest(endpoint);
};
export const fetchingAllJobs = async () => {
  const endpoint = `jobs?populate=deep&locale=en`;
  return sendRequest(endpoint);
};
export const fetchingBrandsPage = async (lang:string ='en') => {
  const endpoint = `brands-page?populate=deep&locale=${lang}`;
  return sendRequest(endpoint);
};
export const fetchingHomePage = async (lang:string ='en') => {
  const endpoint = `home?populate=deep&locale=${lang}`;
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  return sendRequest(endpoint);
};
export const fetchingAllBrands = async (lang:string ='en') => {
  const endpoint = `our-brands?populate=deep&locale=${lang}`;
  return sendRequest(endpoint);
};
export const fetchingFAQs = async (lang:string ='en') => {
  const endpoint = `faqs?populate=deep&locale=${lang}`;
  return sendRequest(endpoint);
};

// export const fetchingBrandsSEO = async () => {
//   const endpoint = 'our-brands?populate=deep';
//   return sendRequest(endpoint);
// };

export const fetchingAboutSEO = async (lang:string ='en') => {
  return sendRequest(`about-page?populate[0]=SEO&locale=${lang}`, {});
};
export const fetchingBlogsSEO = async (lang:string ='en') => {
  return sendRequest(`blogs-page?populate[0]=SEO&locale=${lang}`, {});
};
export const fetchingFranchisePageSEO = async (lang:string ='en') => {
  return sendRequest(`franchise-page?populate[0]=SEO&locale=${lang}`, {});
};
export const fetchingHomeSEO = async (lang:string ='en') => {
  return sendRequest(`home?populate[0]=SEO&locale=${lang}`, {});
};
export const fetchingSingleBrandSEO = async (lang:string ='en',slug: string) => {
  // return sendRequest("brands-page?populate[0]=SEO", {});
  return sendRequest(`our-brands?filters[slug][$eq]=${slug}&populate[0]=SEO&locale=${lang}`, {});
};
export const fetchingJobsSEO = async (lang:string ='en') => {
  return sendRequest(`jobs-page?populate[0]=SEO&locale=${lang}`, {});
};
const fetchingBrandsSEO = async (lang:string ='en') => {
  return sendRequest(`brands-page?populate[0]=SEO&locale=${lang}`, {});
};
const fetchingSingleBrand = async (slug: string,lang:string ='en') => {
  return sendRequest(`our-brands?filters[slug][$eq]=${slug}&populate=deep&locale=${lang}`, {});
};
export const fetchingSingleBlog = async (slug: string) => {
  return sendRequest(`blogs?filters[slug][$eq]=${slug}&populate=deep`, {});
};
export const fetchingSingleJob = async (slug: string,lang:string ='en') => {
  return sendRequest(`jobs?filters[slug][$eq]=${slug}&populate=deep&locale=${lang}`, {});
};

export const fetchingGeneralPage = async () => {
  const endpoint = `settings?populate=deep`;
  return sendRequest(endpoint);
};

export { fetchingBrandsSEO, fetchingSingleBrand };
