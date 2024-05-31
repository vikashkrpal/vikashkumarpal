import { request } from "./http/graphql";



export const loadHomePageData = async (pageQuery) => {
    try {
        const response = await request(pageQuery);
        // console.log("got response", response)
        return response;
    } catch (err) {
        throw new Error(err.message);
    }
}
