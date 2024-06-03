import React from 'react';
import Header from "../layouts/header";
import Footer from "../layouts/footer";
import UrlBar from "../layouts/urlBar";
import Head from "next/head";
import {checkNotUndefined, replaceAdminUrl} from "../../utils/globalFunctions";
import {registeredPages} from "../../utils/constants";

const Template = ({
                      children,
                      urlBar = false,
                      urlStrings = [],
                      urlDetails = {title: "page", des: 'page desc'},
                      currentPageData,
                        slug = false
                  }) => {

    const jsonLd = replaceAdminUrl(slug ? currentPageData[slug].seo.jsonLd.raw : currentPageData.page.seo.jsonLd.raw);
    const headContent = currentPageData.siteOption.siteOptions.head;

    return (
        <section className={"bg-black text-light"}>
            <Head>

                <meta name='robots' content={ (slug ? currentPageData[slug].seo.robots : currentPageData.page.seo.robots).join(',') } />
                <link rel="icon" href={currentPageData.siteOption.siteOptions.favicon.mediaItemUrl} />

                {
                    (slug === registeredPages.AUTHOR) ?
                        <>
                            <title>{currentPageData[slug].seo.openGraph.title}</title>
                            <meta name="description" content={  currentPageData[slug].seo.openGraph.description } />
                        </>
                        :
                        <>
                            <title>{slug ? currentPageData[slug].seo.title :currentPageData.page.seo.openGraph.title}</title>
                            <link rel="canonical" href={(slug ? currentPageData[slug].seo.canonicalUrl : currentPageData.page.seo.canonicalUrl).replace('/admin.', '/')} />
                        </>

                }

                <meta property="og:title" content={ slug ? currentPageData[slug].seo.openGraph.title : currentPageData.page.seo.openGraph.title } />
                <meta property="og:site_name" content="VikashKumarPal" />
                <meta property="og:type" content="article"/>
                <meta property="og:description" content={  currentPageData.page.seo.description } />
                <meta property="og:image" content={ currentPageData.page.featuredImage.node.mediaItemUrl }/>
                <meta property="og:url" content={(slug ? currentPageData[slug].seo.canonicalUrl : currentPageData.page.seo.canonicalUrl).replace('/admin.', '/')} />
                <meta property="og:locale" content="en_US" />
                <meta name='locale' content={(slug ? currentPageData[slug].seo.openGraph.locale : currentPageData.page.seo.openGraph.locale).replace('/admin.', '/') } />
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:site" content="@viashkumarpal"/>
                <meta name="twitter:url" content={(slug ? currentPageData[slug].seo.canonicalUrl : currentPageData.page.seo.canonicalUrl).replace('/admin.', '/')} />
                <meta name="twitter:title" content={slug ? currentPageData[slug].seo.openGraph.title : currentPageData.page.seo.openGraph.title } />
                <meta name="twitter:description" content={ slug ? currentPageData[slug].seo.description : currentPageData.page.seo.description } />
                <meta name="twitter:image" content={ currentPageData.page.featuredImage.node.mediaItemUrl } />
                <meta name="twitter:label1" content="Written by"/>
                <meta name="twitter:data1" content={ currentPageData.page.author.node.name } />
                <meta name="twitter:site" content="@viashkumarpal"/>
                <meta name="date" content={currentPageData.page.dateGmt } />
                <meta name="last-modified" content={slug ? currentPageData[slug].seo.openGraph.updatedTime : currentPageData.page.seo.openGraph.updatedTime } />

                <script type="application/ld+json" className="rank-math-schema" dangerouslySetInnerHTML={{ __html:(jsonLd.replace('<script type="application/ld+json" class="rank-math-schema">', '')).replace('</script>', '') }} />
                <style dangerouslySetInnerHTML={{ __html: headContent }} />

            </Head>

            { checkNotUndefined(currentPageData.siteOption.siteOptions) && <div className={"body"} dangerouslySetInnerHTML={{__html: currentPageData.siteOption.siteOptions.body}}/>}

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
