import React from 'react';
import Header from "../layouts/header";
import Footer from "../layouts/footer";
import UrlBar from "../layouts/urlBar";
import Head from "next/head";
import {useSelector} from "react-redux";
import {reducers} from "../../redux/reducers";

const Template = ({
                      children,
                      urlBar = false,
                      urlStrings = [],
                      urlDetails = {title: "page", des: 'page desc'}
                  }) => {
    const { currentPageData } = useSelector(state => state[reducers.SITE_DATA]);

    return (
        <section>
            <Head>
                <link rel="icon" href={currentPageData.siteOption.siteOptions.favicon.mediaItemUrl} />
                <title>{currentPageData.page?.title || "page"}</title>
            </Head>
            <Header/>
            <section className={"mobile-overflow-hidden"}>
                {urlBar && <UrlBar urlStrings={urlStrings} urlDetails={urlDetails}/>}
                <div className="container">
                    {children}
                </div>
                <Footer/>
            </section>
        </section>
    );
};

export default Template;
