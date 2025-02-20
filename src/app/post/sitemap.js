import { request } from "../../services/http/graphql";

export default async function sitemap() {
  const allPosts = await fetchAllPosts();
  // console.log("Total Posts:", allPosts.length);
  

  const timestamps = getUpdatedDates(allPosts.length);

  return allPosts.map(({ node }, index) => ({
    url: `https://vikashkumarpal.com${node.uri}`,
    lastModified: timestamps[index],
    changeFrequency: "daily",
    priority: 0.8,
  }));
}

// Recursive function to fetch all posts using cursor-based pagination
async function fetchAllPosts(cursor = null, accumulatedPosts = []) {
  const query = `
    query FetchPosts($after: String) {
      posts(first: 100, after: $after) {
        edges {
          node {
            uri
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  `;

  const variables = { after: cursor };
  const res = await request(query, variables);

  // Debug response to check structure
  // console.log("API Response:", JSON.stringify(res, null, 2));

  const newPosts = res?.posts?.edges || [];
  const allPosts = [...accumulatedPosts, ...newPosts];

  // Continue fetching if more pages exist
  if (res?.posts?.pageInfo?.hasNextPage) {
    return fetchAllPosts(res.posts.pageInfo.endCursor, allPosts);
  }

  return allPosts;
}

// Helper to generate timestamps
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
