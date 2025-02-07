import dynamic from "next/dynamic";
import React from 'react';
import { getPageQuery } from "../../services/queryLibrary";
import { registeredPages } from "../../utils/constants";
import { loadHomePageData } from "../../services/siteServies";
import { loadImageFromData } from "../../utils/globalFunctions";

// Dynamically imported components
const Template = dynamic(() => import("../../components/atom/template"));
const ContentWithSideRowCounts = dynamic(() => import("../../components/organisms/ContentWithSideRowCounts"));
const ImageWithSideIconContents = dynamic(() => import("../../components/molecules/imageWithSideIconContents"));
const BrandSlider = dynamic(() => import("../../components/organisms/brandSlider"));
const HeaderDescContainer = dynamic(() => import("../../components/molecules/headerDescContainer"));
const IconCardContainer = dynamic(() => import("../../components/molecules/IconCardContainer"));
const CaseStudiesSlider = dynamic(() => import("../../components/organisms/caseStudiesSlider"));
const TestimonialsSlider = dynamic(() => import("../../components/organisms/testimonialsSlider"));
const BrandSliderWithSideContent = dynamic(() => import("../../components/organisms/brandSliderWithSideContent"));
const SimpleNewsLetterForm = dynamic(() => import("../../components/molecules/simpleNewsLetterForm"));
const FaqQuestions = dynamic(() => import("../../components/organisms/faqQuestions"));
const DarkContentWithSideImage = dynamic(() => import("../../components/organisms/darkContentWithSideImage"));


export async function getServerSideProps() {
    const currentPageData = await loadHomePageData(getPageQuery(registeredPages.SERVICES));
    return {
        props: {
            currentPageData,
        },
    };
}

const Index = ({ currentPageData }) => {
    const pageVars = currentPageData.page[registeredPages.SERVICES]

    return (
        <Template
            urlStrings={[
                { "Services": 'null' }
            ]} urlBar={true} urlDetails={{
                title: [currentPageData.page.title],
                desc: pageVars.servicesBannerPc
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
                heading={pageVars.servicesHeading1}
                content={pageVars.servicesPc1}
                ImageData={{
                    url: loadImageFromData(pageVars.servicesImage1),
                    altText: pageVars.servicesImage1.altText,
                }}
                buttonData={{
                    buttonText: pageVars.servicesCtaButton1.servicesCtaButtonLabel1,
                    action: pageVars.servicesCtaButton1.servicesCtaButtonLink1
                }}
                pointsArray={pageVars.servicesPcHighlightPoints.map((p, i) => {
                    return {
                        header: p.servicesPcPointName,
                        desc: p.servicesPcPointDescription
                    }
                })}
            />

            <BrandSlider currentPageData={currentPageData} />

            <HeaderDescContainer
                header={pageVars.servicesHeading2}
                desc={pageVars.servicesPc2}
                showButton={true}
                buttonData={{
                    buttonText: pageVars.servicesCardSecCtaButton.servicesCardSecCtaButtonLabel,
                    action: pageVars.servicesCardSecCtaButton.servicesCardSecCtaButtonLink
                }}
            />
            <div className="row">
                {
                    pageVars.serviceCardsComp.map((card, i) => <div className="col-lg-4 col-md-6 col-sm-12 col-12" key={i}>
                        <IconCardContainer
                            icon={loadImageFromData(card.servicesCardCompIcon)}
                            altText={card.servicesCardCompIcon.altText}
                            heading={card.servicesCardCompServiceName}
                            desc={card.servicesCardCompServiceDescription}
                            listData={card.servicesCardCompHighlightPoints.map((c, i) => { return { servicePointName: c.servicesCardCompHighlight } })}
                        />
                    </div>)
                }
            </div>


            <CaseStudiesSlider currentPageData={currentPageData} />
            <TestimonialsSlider currentPageData={currentPageData} />

            <DarkContentWithSideImage currentPageData={currentPageData} />

            <FaqQuestions
                header={pageVars.servicesHeading3}
                desc={pageVars.servicesPc3}
                faqArray={pageVars.servicesFaqs.map(f => {
                    return {
                        question: f.servicesFaqQuestion,
                        answer: f.servicesFaqAnswer
                    }
                })}
                buttonData={{
                    buttonText: pageVars.servicesFaqCtaButton.servicesFaqCtaButtonLabel,
                    action: pageVars.servicesFaqCtaButton.servicesFaqCtaButtonLink
                }}
            />

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

export default Index;
