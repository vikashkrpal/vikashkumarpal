import React from 'react';
import Header from "../layouts/header";
import Footer from "../layouts/footer";
import UrlBar from "../layouts/urlBar";
import Head from "next/head";
import {replaceAdminUrl} from "../../utils/globalFunctions";

const Template = ({
                      children,
                      urlBar = false,
                      urlStrings = [],
                      urlDetails = {title: "page", des: 'page desc'},
                      currentPageData
                  }) => {

    const jsonLd = replaceAdminUrl(currentPageData.page.seo.jsonLd.raw);
    const headContent = currentPageData.siteOption.siteOptions.head;
    return (
        <section className={"bg-black text-light"}>
            <Head>
                <link rel="icon" href={currentPageData.siteOption.siteOptions.favicon.mediaItemUrl} />
                <title>{currentPageData.page.seo.openGraph.title}</title>
                <meta name="description" content={ currentPageData.page.seo.description } />
                <link rel="canonical" href={(currentPageData.page.seo.canonicalUrl).replace('/admin', '/')} />
                <meta property="og:title" content={ currentPageData.page.seo.openGraph.title } />
                <meta property="og:site_name" content="viashkumarpal" />
                <meta property="og:type" content="article"/>
                <meta property="og:description" content={ currentPageData.page.seo.description} />
                <meta property="og:image" content={ currentPageData.page.featuredImage.node.mediaItemUrl }/>
                <meta property="og:url" content={(currentPageData.page.seo.canonicalUrl).replace('/admin', '/')} />
                <meta property="og:locale" content="en_US" />
                <meta name='locale' content={(currentPageData.page.seo.openGraph.locale).replace('/admin', '/') } />
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:site" content="@viashkumarpal"/>
                <meta name="twitter:url" content={(currentPageData.page.seo.canonicalUrl).replace('/admin', '/')} />
                <meta name="twitter:title" content={currentPageData.page.seo.openGraph.title } />
                <meta name="twitter:description" content={ currentPageData.page.seo.description } />
                <meta name="twitter:image" content={ currentPageData.page.featuredImage.node.mediaItemUrl } />
                <meta name="twitter:label1" content="Written by"/>
                <meta name="twitter:data1" content={ currentPageData.page.author.node.name } />
                <meta name="twitter:site" content="@viashkumarpal"/>
                <meta name="date" content={currentPageData.page.dateGmt } />
                <meta name="last-modified" content={currentPageData.page.seo.openGraph.updatedTime } />

                <script type="application/ld+json" className="rank-math-schema" dangerouslySetInnerHTML={{ __html:(jsonLd.replace('<script type="application/ld+json" class="rank-math-schema">', '')).replace('</script>', '') }} />
                <style dangerouslySetInnerHTML={{ __html: headContent }} />

            </Head>
            <div className={"body"} dangerouslySetInnerHTML={{ __html:currentPageData.siteOption.siteOptions.body }} />
            <Header currentPageData={currentPageData} />
            <section className={"mobile-overflow-hidden"}>
                {urlBar && <UrlBar urlStrings={urlStrings} urlDetails={urlDetails}/>}
                <div className="container">
                    {children}
                </div>
                <Footer currentPageData={currentPageData} />
            </section>
        </section>
    );
};

export default Template;
