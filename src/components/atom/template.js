import React from 'react';
import Header from "../layouts/header";
import Footer from "../layouts/footer";
import UrlBar from "../layouts/urlBar";
import {getStateFromSelector} from "../../redux/store";
import {reducers} from "../../redux/reducers";
import {loadHomePageData} from "../../services/siteServies";
import {getPageQuery} from "../../services/queryLibrary";
import {bindState} from "../../utils/globalFunctions";
import {useDispatch} from "react-redux";
import actionFunctions from "../../redux/actions";

const Template = ({
                      children,
                      urlBar = false,
                      urlStrings = [],
                      urlDetails = {title: "page", des: 'page desc'},
                      pageName = " "
                  }) => {
    const {dataLoading, errorResponse, currentPageData} = getStateFromSelector(reducers.SITE_DATA);
    const dis = useDispatch()
    React.useEffect( () => {
        dis(actionFunctions.SET_RESET_STATE(pageName))
        loadHomePageData(
            getPageQuery(pageName),
            dis,
            bindState(currentPageData, actionFunctions.SET_CURRENT_PAGE_DATA),
            bindState(dataLoading, actionFunctions.SET_DATA_LOADING),
            bindState(errorResponse, actionFunctions.SET_ERROR_RESPONSE)
        ).then()
    }, []);

    if (errorResponse) return <p>Error: {errorResponse}</p>;
    return (
        <section>
            <Header/>
            <section className={"mobile-overflow-hidden"}>
                {urlBar && <UrlBar urlStrings={urlStrings} urlDetails={urlDetails}/>}
                <div className="container">
                    {currentPageData.page !== undefined ? children :
                        <div className={"mx-auto mt-5"}>
                            <div className="spinner-grow d-flex justify-content-center" style={{width: 50, height: 50}} role="status">
                                <span className="sr-only ms-3 mt-5">Loading...</span>
                            </div>
                        </div>
                    }
                </div>
                <Footer/>
            </section>
        </section>
    );
};

export default Template;
