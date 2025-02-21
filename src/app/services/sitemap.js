import { request } from "../../services/http/graphql";
export const revalidate = 3600;
export default async function sitemap() {
  const query = `
    query {
      services {
        edges {
          node {
            uri
          }
        }
      }
    }
  `;

  const res = await request(query);
  const timestamps = getUpdatedDates(res.services.edges.length);

  return res.services.edges.map(({ node }, index) => ({
    url: `https://vikashkumarpal.com${node.uri}`,
    lastModified: timestamps[index],
    changeFrequency: "daily",
    priority: 0.9,
  }));
}

function getUpdatedDates(count) {
  const now = new Date();
  const updatedDates = [];
  let baseTime = new Date();
  baseTime.setHours(12, 30, 0, 0);

  for (let i = 0; i < count; i++) {
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");

    const hours = String(baseTime.getHours()).padStart(2, "0");
    const minutes = String(baseTime.getMinutes()).padStart(2, "0");
    const seconds = String(baseTime.getSeconds()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}+05:30`;
    updatedDates.push(formattedDate);

    baseTime = new Date(baseTime.getTime() + 7 * 60 * 1000);
  }

  return updatedDates;
}
