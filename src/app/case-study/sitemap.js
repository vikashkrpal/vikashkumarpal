import { request } from "../../services/http/graphql";

export const revalidate = 3600; // Revalidate every hour

export default async function Sitemap() {
  const query = `
    query {
      caseStudies {
        edges {
          node {
            uri
          }
        }
      }
    }
  `;

  try {
    const res = await request(query);

    if (!res || !res.caseStudies || !res.caseStudies.edges) {
      console.error("GraphQL response is missing expected data:", res);
      return [];
    }

    const timestamps = getUpdatedDates(res.caseStudies.edges.length);

    const sitemap = res.caseStudies.edges.map(({ node }, index) => ({
      url: `https://vikashkumarpal.com${node.uri}`,
      lastModified: timestamps[index],
      changeFrequency: "weekly",
      priority: 0.6,
    }));

    return sitemap;
  } catch (error) {
    console.error("Error fetching case studies:", error);
    return [];
  }
}

function getUpdatedDates(count) {
  const updatedDates = [];
  let baseTime = new Date();
  baseTime.setHours(17, 30, 0, 0);

  for (let i = 0; i < count; i++) {
    const formattedDate = baseTime.toISOString();
    updatedDates.push(formattedDate);
    baseTime = new Date(baseTime.getTime() + 7 * 60 * 1000);
  }

  return updatedDates;
}
