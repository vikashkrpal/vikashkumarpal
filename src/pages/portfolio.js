import React from 'react';
import Template from "../components/atom/template";
import ContentWithSideRowCounts from "../components/organisms/ContentWithSideRowCounts";
import ImageWithSideIconContents from "../components/molecules/imageWithSideIconContents";
import BrandSlider from "../components/organisms/brandSlider";
import HeaderDescContainer from "../components/molecules/headerDescContainer";
import TestimonialsSlider from "../components/organisms/testimonialsSlider";
import BrandSliderWithSideContent from "../components/organisms/brandSliderWithSideContent";
import SimpleNewsLetterForm from "../components/molecules/simpleNewsLetterForm";
import {getPageQuery} from "../services/queryLibrary";
import {registeredPages} from "../utils/constants";
import {loadHomePageData} from "../services/siteServies";
import {loadImageFromData} from "../utils/globalFunctions";
import CaseStudyCardContainer from "../components/molecules/caseStudyCardContaienr";
import DarkContentWithSideImage from "../components/organisms/darkContentWithSideImage";


export async function getServerSideProps() {
    const currentPageData = await loadHomePageData(getPageQuery(registeredPages.PORTFOLIO));
    return {
        props: {
            currentPageData,
        },
    };
}

const Portfolio = ({ currentPageData }) => {
    const pageVars = currentPageData.page[registeredPages.PORTFOLIO]

    return (
        <Template urlStrings={[
            {Portfolio:'null'}
        ]} urlBar={true} urlDetails={{
            title:[currentPageData.page.title],
            desc:pageVars.portfolioBannerPc
        }} currentPageData={currentPageData}>
            <div className="pt-5">
                <ContentWithSideRowCounts
                    heading={currentPageData.siteOption.siteOptions.resultsHighlightHeading}
                    desc={currentPageData.siteOption.siteOptions.resultsHighlightPara}
                    points={currentPageData.siteOption.siteOptions.deliveredNumbers.map((item, index) => ({
                        count: item.highlightNumbers,
                        desc: item.highlightTxt,
                        key: index,
                    }))}
                />

            </div>
            <ImageWithSideIconContents
                heading={pageVars.portfolioHeading1 }
                content={pageVars.portfolioPc1}
                ImageData={{
                    url: loadImageFromData(pageVars.portfolioImage1),
                    altText: pageVars.portfolioImage1.altText,
                }}
                buttonData={{
                    buttonText:pageVars.portfolioButton.portfolioButtonLabel,
                    action:pageVars.portfolioButton.portfolioButtonLink
                }}
                pointsArray={pageVars.portfolioHighlightPoints.map((p,i) => {
                    return {header:p.portfolioHpName, desc:p.portfolioHpDescription}
                })}
            />
            <BrandSlider currentPageData={currentPageData} />

            <HeaderDescContainer
                header={pageVars.portfolioHeading2}
                desc={pageVars.portfolioPc2}
                showButton={true}
                buttonData={{
                    buttonText:pageVars.portfolioCtaButton.portfolioCtaButtonLabel,
                    action:pageVars.portfolioCtaButton.portfolioCtaButtonLink
                }}
            />
            <div className="row">
                {
                    currentPageData.caseStudies.edges.map((caseStudy, index) =>  <div className={"col-lg-6 col-md-12 col-12"}  key={index} ><CaseStudyCardContainer

                        image={caseStudy.node.featuredImage.node.mediaItemUrl}
                        altText={caseStudy.node.featuredImage.node.altText}
                        category={caseStudy.node.detailedCaseStudy.dcsCompanyName}
                        header={caseStudy.node.title}
                        desc={caseStudy.node.detailedCaseStudy.dcsBannerPc}
                        column={false}
                        caseStudyHighlightResults={caseStudy.node.detailedCaseStudy.dcsImpactNumbers.map((p,i) => ({
                            caseStudyCardResultNumbers:p.dcsHighlightNumber,
                            caseStudyCardResultHighlightText:p.dcsHighlightText
                        })) }
                        categorySlug={caseStudy.node.slug}
                    /></div> )
                }
            </div>

            <DarkContentWithSideImage currentPageData={currentPageData}/>
            <TestimonialsSlider currentPageData={currentPageData} />
            <BrandSliderWithSideContent currentPageData={currentPageData} />

            <div className="row align-items-center">
                <div className="col-lg-7 col-md-6 col-sm-12">
                    <h2>
                        Subscribe to our newsletter and stay updated on the latest news
                    </h2>
                </div>
                <div className="col-lg-5 col-md-6 col-sm-12 ps-lg-5 ps-md-5 ">
                    <SimpleNewsLetterForm />
                </div>
            </div>
        </Template>
    );
};

export default Portfolio;
