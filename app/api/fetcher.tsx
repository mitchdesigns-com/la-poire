// api/fetcher.ts
const apiUrl = process.env.NEXT_PUBLIC_STRAPI_URL; // Replace with your Strapi API base URL
const strapiToken = process.env.NEXT_PUBLIC_STRAPI_TOKEN; // Replace with your Strapi API token

const sendRequest = async (
  endpoint: string,
  options: RequestInit = {}
): Promise<any> => {
  const url = `${apiUrl}/${endpoint}`;

  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        // Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof TypeError) {
      // console.error(`Failed to fetch data from ${url}:`, error);
      return null;
    } else {
      // console.error(`Error during API request to ${url}:`, error);
      return null;
    }
  }
};

export const fetchingAboutPage = async () => {
  const endpoint = "about-page?populate=deep";
  return sendRequest(endpoint);
};
export const fetchingFranchisePage = async () => {
  const endpoint = "franchise-page?populate=deep";
  return sendRequest(endpoint);
};
export const fetchingJobsPage = async () => {
  const endpoint = "jobs-page?populate=deep";
  return sendRequest(endpoint);
};
export const fetchingBlogsPage = async () => {
  const endpoint = "blogs?populate=deep";
  return sendRequest(endpoint);
};
export const fetchingAllJobs = async () => {
  const endpoint = "jobs?populate=deep";
  return sendRequest(endpoint);
};
export const fetchingBrandsPage = async () => {
  const endpoint = "brands-page?populate=deep";
  return sendRequest(endpoint);
};
export const fetchingAllBrands = async () => {
  const endpoint = "our-brands?populate=deep";
  return sendRequest(endpoint);
};

// export const fetchingBrandsSEO = async () => {
//   const endpoint = 'our-brands?populate=deep';
//   return sendRequest(endpoint);
// };

const fetchingBrandsSEO = async (slug: string) => {
  // const requestData = { slug: slug };
  // console.log("params", slug);
  return sendRequest("brands-page?populate[0]=SEO", {});
};
const fetchingSingleBrand = async (slug: string) => {
  return sendRequest(`our-brands?filters[slug][$eq]=${slug}&populate=deep`, {});
};
export const fetchingSingleBlog = async (slug: string) => {
  return sendRequest(`blogs?filters[slug][$eq]=${slug}&populate=deep`, {});
};
export const fetchingSingleJob = async (slug: string) => {
  return sendRequest(`jobs?filters[slug][$eq]=${slug}&populate=deep`, {});
};

export { fetchingBrandsSEO, fetchingSingleBrand };
