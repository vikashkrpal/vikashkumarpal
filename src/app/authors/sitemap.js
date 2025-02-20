import { request } from "../../services/http/graphql";

export default async function sitemap() {
  const query = `
  query {
    users {
      edges {
        node {
          slug
        }
      }
    }
  }
`;
  const res = await request(query);
  // console.log("res", JSON.stringify(res.users.edges, null, 2));
  return res.users.edges.map(({ node }) => ({
    url: `https://vikashkumarpal.com/author/${node.slug}/`,
  }));
}
