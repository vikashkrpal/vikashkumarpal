import Template from "../components/atom/template";
import React from "react";
import ContentWithSideRowCounts from "../components/organisms/ContentWithSideRowCounts";
import HeaderWithSideButton from "../components/molecules/headerWithSideButton";
import IconCardContainer from "../components/molecules/IconCardContainer";
import BrandSlider from "../components/organisms/brandSlider";
import ImageWithSideSortContent from "../components/organisms/imageWithSideSortContent";
import BrandSliderWithSideContent from "../components/organisms/brandSliderWithSideContent";
import SimpleNewsLetterForm from "../components/molecules/simpleNewsLetterForm";
import ImageWithSideIconContents from "../components/molecules/imageWithSideIconContents";
import {getPageQuery} from "../services/queryLibrary";
import {registeredPages} from "../utils/constants";
import {loadHomePageData} from "../services/siteServies";
import {loadImageFromData} from "../utils/globalFunctions";
import DarkContentWithSideImage from "../components/organisms/darkContentWithSideImage";


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
                            heading={card.abtBenefitsHeading}
                            desc={card.abtBenefitsParagraph  }
                            listData={card.abtBenefitPoints.map((point,i) => {return  {servicePointName: point.abtBenefitPointsName} })}
                        />
                    </div>)
                }


            </div>
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

                <DarkContentWithSideImage currentPageData={currentPageData} />

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
