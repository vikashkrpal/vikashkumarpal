import React from 'react';
import { loadHomePageData } from '../services/siteServies';
import { getPageQuery } from '../services/queryLibrary';
import {checkNotUndefined, formatDate, loadImageFromData} from '../utils/globalFunctions';
import { registeredPages } from '../utils/constants';
import Template from '../components/atom/template';
import ContentWithSideRowCounts from "../components/organisms/ContentWithSideRowCounts";
import BlogCardContainer from "../components/molecules/blogCardContainer";
import BrandSliderWithSideContent from "../components/organisms/brandSliderWithSideContent";
import SimpleNewsLetterForm from "../components/molecules/simpleNewsLetterForm";
import ImageWithSideContent from "../components/organisms/imageWithSideContent";
import BrandSlider from "../components/organisms/brandSlider";
import HeaderDescContainer from "../components/molecules/headerDescContainer";
import IconCardContainer from "../components/molecules/IconCardContainer";
import CaseStudiesSlider from "../components/organisms/caseStudiesSlider";
import ContentWithSidePoint from "../components/organisms/contentWithSidePoints";
import TestimonialsSlider from "../components/organisms/testimonialsSlider";
import ThemeButton from "../components/atom/themeButton";
import DarkContentWithSideImage from "../components/organisms/darkContentWithSideImage";

export async function getServerSideProps() {
    const currentPageData = await loadHomePageData(getPageQuery(registeredPages.HOMEPAGE));
    return {
        props: {
            currentPageData,
        },
    };
}

const HomePageContent = ({ currentPageData }) => {
    const pageData = currentPageData.page[registeredPages.HOMEPAGE];

    return (
        <Template currentPageData={currentPageData}>
            <ImageWithSideContent
                headingHighlight={pageData.hpHh1}
                heading={pageData.hpHeading1}
                content={pageData.hpPc1}
                ImageData={{
                    url: pageData.hpImage1.mediaItemUrl,
                    altText: "Award winning SEO experts",
                }}
                contentListing={0}
                buttonData={{
                    buttonText: pageData.hpCtaButton1.hpCtaButtonLabel1,
                    action: pageData.hpCtaButton1.hpCtaButtonLink1
                }}
            />

            <BrandSlider currentPageData={currentPageData} />

            <HeaderDescContainer
                highligter={pageData.hpHh2}
                header={pageData.hpHeading2}
                desc={pageData.hpPc2}
                showButton={true}
                buttonData={{
                    buttonText:pageData.hpCtaButton1.hpCtaButtonLabel1,
                    action:pageData.hpCtaButton1.hpCtaButtonLink1
                }}
            />

            <div className="row">
                {currentPageData.siteOption.siteOptions.serviceCards.map((serviceCard, index) => (
                    <div key={index} className="col-lg-4 col-md-6 col-sm-12 col-12">
                        <IconCardContainer
                            icon={serviceCard.serviceIcon.mediaItemUrl}
                            altText={serviceCard.serviceIcon.altText}
                            heading={serviceCard.serviceName}
                            desc={serviceCard.serviceDescription}
                            listData={serviceCard.servicePoints}
                        />
                    </div>
                ))}
            </div>

            {checkNotUndefined(pageData.hpContentArea1) && pageData.hpContentArea1.map((data, index) => (
                <ImageWithSideContent
                    headingHighlight={data.hpHh3}
                    heading={data.hpHeading3}
                    content={data.hpPc3}
                    ImageData={{
                        url: loadImageFromData(data.hpImage2),
                        altText: "Award winning SEO experts",
                    }}
                    contentListing={index % 2}
                    buttonData={{
                        buttonText: data.hpCtaButton2.hpCtaButtonLabel2,
                        action: data.hpCtaButton2.hpCtaButtonLink2,
                    }}
                    key={index}
                />
            ))}

            <ContentWithSideRowCounts
                heading={currentPageData.siteOption.siteOptions.resultsHighlightHeading}
                desc={currentPageData.siteOption.siteOptions.resultsHighlightPara}
                points={currentPageData.siteOption.siteOptions.deliveredNumbers.map((item, index) => ({
                    count: item.highlightNumbers,
                    desc: item.highlightTxt,
                    key: index,
                }))}
            />

            <CaseStudiesSlider currentPageData={currentPageData} />

            <ContentWithSidePoint
                headerDetails={{
                    highligter: pageData.hpHh4,
                    header: pageData.hpHeading4,
                    desc: pageData.hpPc4,
                    textAlignCenter: false,
                }}
                buttonDetails={{
                    text: pageData.hpCtaButton3.hpCtaButtonLabel3,
                    action: pageData.hpCtaButton3.hpCtaButtonLink3,
                }}
                pointsArray={pageData.hpPointComp}
            />

            <TestimonialsSlider currentPageData={currentPageData} />

            <DarkContentWithSideImage currentPageData={currentPageData} />

            <div className="row align-items-center pt-5">
                <div className="col-lg-6 col-md-8">
                    <h2>Explore Our Expert SEO Blog Posts</h2>
                </div>
                <div className="col-lg-6 col-md-4 text-lg-center my-auto d-flex justify-content-end">
                    <ThemeButton text="Visit our blog >" href={"/seo-insights"} />
                </div>
            </div>

            <div className="row">
                {
                    checkNotUndefined(currentPageData.posts) && (currentPageData.posts.edges).map((post,index) => <BlogCardContainer
                        image={post.node.featuredImage.node.mediaItemUrl}
                        altText={post.node.featuredImage.node.altText}
                        category={post.node.categories.nodes[0].name}
                        avtar={post.node.author.node.avatar.url}
                        header={post.node.title}
                        desc={post.node.excerpt}
                        key={index}
                        time={formatDate(post.node.date)}
                        slug={post.node.categories.nodes[0].slug}
                        authorSlug={post.node.author.node.slug}
                        postSlug={post.node.slug}
                    />)
                }

            </div>

            <BrandSliderWithSideContent currentPageData={currentPageData} />

            <div className="row align-items-center">
                <div className="col-lg-7 col-md-6 col-sm-12">
                    <h2>{currentPageData.siteOption.siteOptions.newsletterHeading}</h2>
                </div>
                <div className="col-lg-5 col-md-6 col-sm-12 ps-lg-5 ps-md-5">
                    <SimpleNewsLetterForm />
                </div>
            </div>
        </Template>
    );
};

export default HomePageContent;
