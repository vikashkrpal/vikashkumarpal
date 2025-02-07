import dynamic from "next/dynamic";
import React from "react";
import { getPageQuery } from "../services/queryLibrary";
import { registeredPages } from "../utils/constants";
import { loadHomePageData } from "../services/siteServies";
import { loadImageFromData } from "../utils/globalFunctions";

// Dynamically imported components
const Template = dynamic(() => import("../components/atom/template"));
const ContentWithSideRowCounts = dynamic(() => import("../components/organisms/ContentWithSideRowCounts"));
const HeaderWithSideButton = dynamic(() => import("../components/molecules/headerWithSideButton"));
const IconCardContainer = dynamic(() => import("../components/molecules/IconCardContainer"));
const BrandSlider = dynamic(() => import("../components/organisms/brandSlider"));
const ImageWithSideSortContent = dynamic(() => import("../components/organisms/imageWithSideSortContent"));
const BrandSliderWithSideContent = dynamic(() => import("../components/organisms/brandSliderWithSideContent"));
const SimpleNewsLetterForm = dynamic(() => import("../components/molecules/simpleNewsLetterForm"));
const ImageWithSideIconContents = dynamic(() => import("../components/molecules/imageWithSideIconContents"));
const DarkContentWithSideImage = dynamic(() => import("../components/organisms/darkContentWithSideImage"));
const TestimonialsSlider = dynamic(() => import("../components/organisms/testimonialsSlider"));



export async function getServerSideProps() {
    const currentPageData = await loadHomePageData(getPageQuery(registeredPages.ABOUT));

    return {
        props: {
            currentPageData,
        },
    };
}

const About = ({ currentPageData }) => {
    const pageVars = currentPageData.page[registeredPages.ABOUT]

    return (
        <Template urlBar={true} urlStrings={[
            {About: "null"}
        ]} urlDetails={{
            title:[currentPageData.page.title],
            desc:pageVars.abtBannerPc
        }} currentPageData={currentPageData} >
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
            <BrandSlider currentPageData={currentPageData} />
            <ImageWithSideIconContents
                heading={pageVars.abtHeading2}
                content={pageVars.abtPc2}
                ImageData={{
                    url: loadImageFromData(pageVars.abtImage1),
                    altText: pageVars.abtImage1.altText,
                }}
                addClass="mt-2"
                buttonData={{
                    buttonText:pageVars.abtButton2.abtButtonLabel2,
                    action:pageVars.abtButton2.abtButtonLink2
                }}
                pointsArray={pageVars.abtPointsSection.map((p,i) => {return {header:p.abtPointName, desc:p.abtPointDescription }})}
            />


            <HeaderWithSideButton
                header={pageVars.abtHeading1}
                buttonDetails={{ buttonText:pageVars.abtButton1.abtButtonLabel1, action:pageVars.abtButton1.abtButtonLink1 }}
                desc={pageVars.abtPc1}
            />
            <div className="row">
                {
                    pageVars.abtBenefitsCard.map((card,index) => <div key={index} className="col-lg-4 col-md-6 col-sm-12 col-12">
                        <IconCardContainer
                            icon={loadImageFromData(card.abtBenefitsIcon)}
                            altText={card.abtBenefitsIcon.altText}
                            heading={card.abtBenefitsHeading}
                            desc={card.abtBenefitsParagraph  }
                            listData={card.abtBenefitPoints.map((point,i) => {return  {servicePointName: point.abtBenefitPointsName} })}
                        />
                    </div>)
                }


            </div>


                <DarkContentWithSideImage currentPageData={currentPageData} />

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
    )
}

export default About;
