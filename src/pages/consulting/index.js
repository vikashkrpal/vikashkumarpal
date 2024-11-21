import React from 'react';
import Template from "../../components/atom/template";
import ContentWithSideRowCounts from "../../components/organisms/ContentWithSideRowCounts";
import ImageWithSideIconContents from "../../components/molecules/imageWithSideIconContents";
import BrandSlider from "../../components/organisms/brandSlider";
import HeaderDescContainer from "../../components/molecules/headerDescContainer";
import IconCardContainer from "../../components/molecules/IconCardContainer";
import CaseStudiesSlider from "../../components/organisms/caseStudiesSlider";
import TestimonialsSlider from "../../components/organisms/testimonialsSlider";
import BrandSliderWithSideContent from "../../components/organisms/brandSliderWithSideContent";
import SimpleNewsLetterForm from "../../components/molecules/simpleNewsLetterForm";
import FaqQuestions from "../../components/organisms/faqQuestions";
import {getPageQuery} from "../../services/queryLibrary";
import {registeredPages} from "../../utils/constants";
import {loadHomePageData} from "../../services/siteServies";
import {loadImageFromData} from "../../utils/globalFunctions";
import DarkContentWithSideImage from "../../components/organisms/darkContentWithSideImage";

export async function getServerSideProps() {
    const currentPageData = await loadHomePageData(getPageQuery(registeredPages.CONSULTING));
    return {
        props: {
            currentPageData,
        },
    };
}

const Index = ({ currentPageData }) => {
    const pageVars = currentPageData.page[registeredPages.CONSULTING]

    return (
        <Template
            urlStrings={[
                {"Consulting":'null'}
            ]} urlBar={true} urlDetails={{
            title:[currentPageData.page.title],
            desc:pageVars.consultingBannerPc
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
                heading={pageVars.consultingHeading1}
                content={pageVars.consultingPc1 }
                ImageData={{
                    url: loadImageFromData(pageVars.consultingImage1),
                    altText: pageVars.consultingImage1.altText,
                }}
                buttonData={{
                    buttonText:pageVars.consultingCtaButton1.consultingCtaButtonLabel1,
                    action:pageVars.consultingCtaButton1.consultingCtaButtonLink1
                }}
                pointsArray={pageVars.consultingPcHighlightPoints.map((p,i) => {return {
                    header:p.consultingPcPointName,
                    desc:p.consultingPcPointDescription
                }})}
            />

            <BrandSlider currentPageData={currentPageData} />

            <HeaderDescContainer
                header={pageVars.consultingHeading2}
                desc={pageVars.consultingPc2}
                showButton={true}
                buttonData={{
                    buttonText:pageVars.consultingCardSecCtaButton.consultingCardSecCtaButtonLabel,
                    action:pageVars.consultingCardSecCtaButton.consultingCardSecCtaButtonLink
                }}
            />
            <div className="row">
                {
                    pageVars.consultingCardsComp.map((card,i) => <div className="col-lg-4 col-md-6 col-sm-12 col-12" key={i}>
                        <IconCardContainer
                            icon={loadImageFromData(card.consultingCardCompIcon)}
                            altText={card.consultingCardCompIcon.altText}
                            heading={card.consultingCardCompServiceName}
                            desc={card.consultingCardCompServiceDescription}
                            listData={card.consultingCardCompHighlightPoints.map((c,i) => {return {servicePointName: c.consultingCardCompHighlight}})}
                        />
                    </div>)
                }
            </div>


            <CaseStudiesSlider currentPageData={currentPageData} />
            <TestimonialsSlider currentPageData={currentPageData} />

            <DarkContentWithSideImage currentPageData={currentPageData} />

          <FaqQuestions
              header={pageVars.consultingHeading3}
              desc={pageVars.consultingPc3}
              faqArray={pageVars.consultingFaqs.map(f => {return {
                  question:f.consultingFaqQuestion,
                  answer:f.consultingFaqAnswer
              }})}
              buttonData={{
                  buttonText:pageVars.consultingFaqCtaButton.consultingFaqCtaButtonLabel,
                  action:pageVars.consultingFaqCtaButton.consultingFaqCtaButtonLink
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
