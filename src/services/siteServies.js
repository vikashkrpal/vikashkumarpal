import {request} from "./http/graphql";
import {registeredPages} from "../utils/constants";


export const loadHomePageData = async (pageQuery, dataState, loaderState, errorState) => {
    try {
        const response = await request(pageQuery);
        // console.log("got data",response)
        dataState.setState(response);
    } catch (err) {
        errorState.setState(err.message);
    } finally {
        loaderState.setState(false);
    }

}