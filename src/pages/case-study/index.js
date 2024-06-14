import React from 'react';
import Template from "../../components/atom/template";
import ContentWithSideRowCounts from "../../components/organisms/ContentWithSideRowCounts";
import ImageWithSideIconContents from "../../components/molecules/imageWithSideIconContents";
import BrandSlider from "../../components/organisms/brandSlider";
import HeaderDescContainer from "../../components/molecules/headerDescContainer";
import TestimonialsSlider from "../../components/organisms/testimonialsSlider";
import BrandSliderWithSideContent from "../../components/organisms/brandSliderWithSideContent";
import SimpleNewsLetterForm from "../../components/molecules/simpleNewsLetterForm";
import {getPageQuery} from "../../services/queryLibrary";
import {registeredPages} from "../../utils/constants";
import {loadHomePageData} from "../../services/siteServies";
import {loadImageFromData} from "../../utils/globalFunctions";
import CaseStudiesSlider from "../../components/organisms/caseStudiesSlider";
import DarkContentWithSideImage from "../../components/organisms/darkContentWithSideImage";
import CaseStudyCardContainer from "../../components/molecules/caseStudyCardContaienr";

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
                    alert: "Award winning SEO experts",
                }}
                buttonData={{
                    buttonText: pageVars.csButton.csButtonLabel,
                    action: pageVars.csButton.csButtonLink,
                }}

            />
            <BrandSlider currentPageData={currentPageData}/>

            <HeaderDescContainer
                header={pageVars.csHeading3}
                desc={pageVars.csPc3}
            />
            <div className="row">
                {
                    currentPageData.siteOption.siteOptions.caseStudyCards.map((caseStudy, index) =>  <div className={"col-lg-6 col-md-12 col-12"}><CaseStudyCardContainer
                        key={index}
                        image={caseStudy.caseStudyCardImage.mediaItemUrl}
                        category={caseStudy.caseStudyCardCompanyName}
                        header={caseStudy.caseStudyCardHeading}
                        desc={caseStudy.caseStudyCardDescription}
                        column={false}
                        caseStudyHighlightResults={caseStudy.caseStudyHighlightResults}
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

