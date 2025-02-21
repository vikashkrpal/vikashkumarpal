import { request } from "../../services/http/graphql";

export default async function sitemap() {
  const query = `
  query {
    categories {
      edges {
        node {
          uri
        }
      }
    }
  }
`;
  const res = await request(query);
  // console.log("res", JSON.stringify(res.categories.edges, null, 2));

  const timestamps = getUpdatedDates(res.categories.edges.length);
  return res.categories.edges.map(({ node }, index) => ({
    url: `https://vikashkumarpal.com${node.uri}`,
    lastModified: timestamps[index],
    changeFrequency: "monthly",
    priority: 0.5,
  }));
}

function getUpdatedDates(count) {
  const now = new Date();
  const updatedDates = [];
  let baseTime = new Date();
  baseTime.setHours(18, 30, 0, 0);

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
