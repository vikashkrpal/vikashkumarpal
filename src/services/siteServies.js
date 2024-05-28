import {request} from "./http/graphql";

export const loadHomePageData = async (pageQuery) => {
    try {
        return await request(pageQuery);
    } catch (err) {
        throw new Error(err.message);
    }
}