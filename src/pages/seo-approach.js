import React from "react";
import dynamic from "next/dynamic";
import { getPageQuery } from "../services/queryLibrary";
import { registeredPages } from "../utils/constants";
import { loadHomePageData } from "../services/siteServies";
import { loadImageFromData } from "../utils/globalFunctions";

// Dynamically imported components
const Template = dynamic(() => import("../components/atom/template"));
const ContentWithSideRowCounts = dynamic(() => import("../components/organisms/ContentWithSideRowCounts"));
const ImageWithSideIconContents = dynamic(() => import("../components/molecules/imageWithSideIconContents"));
const BrandSlider = dynamic(() => import("../components/organisms/brandSlider"));
const ImageWithSideContent = dynamic(() => import("../components/organisms/imageWithSideContent"));
const ThemeButton = dynamic(() => import("../components/atom/themeButton"));
const FeaturePowerUpComponent = dynamic(() => import("../components/organisms/featurePowerUpComponent"));
const TestimonialsSlider = dynamic(() => import("../components/organisms/testimonialsSlider"));
const BrandSliderWithSideContent = dynamic(() => import("../components/organisms/brandSliderWithSideContent"));
const SimpleNewsLetterForm = dynamic(() => import("../components/molecules/simpleNewsLetterForm"));
const DarkContentWithSideImage = dynamic(() => import("../components/organisms/darkContentWithSideImage"));
const CaseStudiesSlider = dynamic(() => import("../components/organisms/caseStudiesSlider"));



export async function getServerSideProps() {
    const currentPageData = await loadHomePageData(getPageQuery(registeredPages.SEO_APPROACH));
    return {
        props: {
            currentPageData,
        },
    };
}
const SeoApproach = ({currentPageData}) => {
    const pageVars = currentPageData.page[registeredPages.SEO_APPROACH]

    return (
        <Template
            urlStrings={[
                {"Seo Approach":'null'}
            ]} urlBar={true} urlDetails={{
            title:[currentPageData.page.title],
            desc:pageVars.approachBannerPc
        }} currentPageData={currentPageData}
        >
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
                heading={pageVars.approachHeading1}
                content={pageVars.approachPc1}
                ImageData={{
                    url: loadImageFromData(pageVars.approachImage1),
                    altText:pageVars.approachImage1.altText,
                }}
                buttonData={{
                    buttonText: pageVars.approachCtaButton1.approachButtonLabel1,
                    action: pageVars.approachCtaButton1.approachButtonLink1,
                }}
                pointsArray={pageVars.approachPc1Hp.map((p,i) => {return {header:p.approachPc1HpName, desc:p.approachPc1HpDescription}})}
            />

            <BrandSlider currentPageData={currentPageData} />

            <FeaturePowerUpComponent
                header={pageVars.approachHeading2}
                desc={pageVars.approachPc2}
                button={{
                    buttonText:pageVars.approachCtaButton2.approachButtonLabel2,
                    action:pageVars.approachCtaButton2.approachButtonLink2
                }}
                pointsArray={pageVars.approachPointsCard.map(p => {return {
                    icon:p.approachPointIcon,
                    name:p.approachPointHeading,
                    desc:p.approachPointDescription
                }})}
            />

            <CaseStudiesSlider currentPageData={currentPageData} />

            <div>
                <div className="row align-items-center pt-5">
                    <div className="col-lg-8 col-md-8">
                       <div dangerouslySetInnerHTML={{ __html:pageVars.approachHeading3 }} />
                       <div dangerouslySetInnerHTML={{ __html:pageVars.approachPc3 }} />

                    </div>

                    <div className="col-lg-4 col-md-4 text-lg-center my-auto d-lg-flex justify-content-end">
                        <ThemeButton text={pageVars.approachCtaButton3.approachButtonLabel3} addStyle={{  minWidth:'30%', fontSize:18 }} href={pageVars.approachCtaButton3.approachButtonLink3} />
                    </div>
                </div>
                <div className="row">
                    {
                        pageVars.approachHighlightsList.map((p,i) => <div key={i} className="col-lg-4 col-md-6 col-sm-12 mt-3">
                                <div  style={{ borderLeft:"0.2px solid white" }} className={"ps-4"}>
                                    <span className="font-b" style={{ fontWeight:'bold', fontSize:20 }}>{(i+1).toString().padStart(2, '0')}</span>
                                    <div className={" mb-1 text-sub-primary font-b"} style={{ fontSize:20, fontWeight:'bold' }} dangerouslySetInnerHTML={{ __html:p.approachHighlightName }} />
                                    <div  style={{ fontSize:20, fontWeight:'bold' }} dangerouslySetInnerHTML={{ __html:p.approachHighlightDescription }} />

                                </div>

                            </div>
                        )
                    }

                </div>
            </div>
            <ImageWithSideContent

                heading={pageVars.approachHeading4}
                content={pageVars.approachPc4}
                ImageData={{
                    url: loadImageFromData(pageVars.approachImage2),
                    altText: pageVars.approachImage2.altText,
                }}
                contentListing={0}
                buttonData={{
                    buttonText: pageVars.approachCtaButton4.approachButtonLabel4,
                    action: pageVars.approachCtaButton4.approachButtonLink4,
                }}
            />

            <TestimonialsSlider currentPageData={currentPageData} />

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
    );
};

export default SeoApproach;
