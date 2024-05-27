import {request} from "./http/graphql";

export const loadHomePageData = async (pageQuery, dispatcher, dataState, loaderState, errorState) => {
    try {
        // console.log("request query", pageQuery)
        const response = await request(pageQuery);
        // console.log("got data",response.testimonialSlider)
        dispatcher(dataState.setState(response));
    } catch (err) {
        dispatcher(errorState.setState(err.message));
    } finally {
        dispatcher(loaderState.setState(false));
    }

}
