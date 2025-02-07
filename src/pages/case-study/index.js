import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically imported components
const Template = dynamic(() => import("../../components/atom/template"));
const ContentWithSideRowCounts = dynamic(() => import("../../components/organisms/ContentWithSideRowCounts"));
const ImageWithSideIconContents = dynamic(() => import("../../components/molecules/imageWithSideIconContents"));
const BrandSlider = dynamic(() => import("../../components/organisms/brandSlider"));
const HeaderDescContainer = dynamic(() => import("../../components/molecules/headerDescContainer"));
const TestimonialsSlider = dynamic(() => import("../../components/organisms/testimonialsSlider"));
const BrandSliderWithSideContent = dynamic(() => import("../../components/organisms/brandSliderWithSideContent"));
const SimpleNewsLetterForm = dynamic(() => import("../../components/molecules/simpleNewsLetterForm"));
const DarkContentWithSideImage = dynamic(() => import("../../components/organisms/darkContentWithSideImage"));
const CaseStudyCardContainer = dynamic(() => import("../../components/molecules/caseStudyCardContaienr"));

// Regular imports for utility and data fetching functions
import { getPageQuery } from "../../services/queryLibrary";
import { registeredPages } from "../../utils/constants";
import { loadHomePageData } from "../../services/siteServies";
import { loadImageFromData } from "../../utils/globalFunctions";


export async function getServerSideProps() {
    const pageQuery = getPageQuery(registeredPages.CASE_STUDY);
    const currentPageData = await loadHomePageData(pageQuery);
    return {
        props: {
            currentPageData,
        },
    };
}

const CaseStudy = ({currentPageData}) => {
    const pageVars = currentPageData.page[registeredPages.CASE_STUDY]
    return (
        <Template urlStrings={[
            {"Case Study": 'null'}
        ]} urlBar={true} urlDetails={{
            title: [currentPageData.page.title],
            desc: pageVars.csBannerPc
        }} currentPageData={currentPageData}>
            <ContentWithSideRowCounts
                heading={pageVars.csHeading1}
                desc={pageVars.csPc1}
                points={pageVars.csImpactHighlights.map((item, index) => ({
                    count: item.csImpactNumber,
                    desc: item.csImpactText,
                    key: index,
                }))}
            />
            <ImageWithSideIconContents
                heading={pageVars.csHeading2}
                content={pageVars.csPc2}
                ImageData={{
                    url: loadImageFromData(pageVars.csImage),
                    altText: "Award winning SEO experts",
                }}
                buttonData={{
                    buttonText: pageVars.csButton.csButtonLabel,
                    action: pageVars.csButton.csButtonLink,
                }}
                pointsArray={pageVars.csHighlightPoints.map((p,i) => {return {header:p.csHighlightPoint, desc:p.csDescription}})}
            />
            <BrandSlider currentPageData={currentPageData}/>

            <HeaderDescContainer
                header={pageVars.csHeading3}
                desc={pageVars.csPc3}
                showButton={true}
                buttonData={{
                    buttonText:pageVars.csCtaButton.csCtaButtonLabel,
                    action:pageVars.csCtaButton.csCtaButtonLink
                }}
            />
            <div className="row">
                {
                    currentPageData.caseStudies.edges.map((caseStudy, index) =>  <div className={"col-lg-6 col-md-12 col-12"}  key={index} ><CaseStudyCardContainer

                        image={caseStudy.node.featuredImage.node.mediaItemUrl}
                        altText={caseStudy.featuredImage?.node?.altText || 'feature image'}
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

            <TestimonialsSlider currentPageData={currentPageData}/>
            <BrandSliderWithSideContent currentPageData={currentPageData}/>

            <div className="row align-items-center">
                <div className="col-lg-7 col-md-6 col-sm-12">
                    <h2>
                        Subscribe to our newsletter and stay updated on the latest news
                    </h2>
                </div>
                <div className="col-lg-5 col-md-6 col-sm-12 ps-lg-5 ps-md-5 ">
                    <SimpleNewsLetterForm/>
                </div>
            </div>
        </Template>
    );
};

export default CaseStudy;

