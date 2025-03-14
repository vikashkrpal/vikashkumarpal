import React from 'react';
import Template from "../components/atom/template";
import ContentWithSideRowCounts from "../components/organisms/ContentWithSideRowCounts";
import ImageWithSideIconContents from "../components/molecules/imageWithSideIconContents";
import BrandSlider from "../components/organisms/brandSlider";
import HeaderDescContainer from "../components/molecules/headerDescContainer";
import CaseStudiesSlider from "../components/organisms/caseStudiesSlider";
import TestimonialsSlider from "../components/organisms/testimonialsSlider";
import BrandSliderWithSideContent from "../components/organisms/brandSliderWithSideContent";
import SimpleNewsLetterForm from "../components/molecules/simpleNewsLetterForm";
import IconCardContainer from "../components/molecules/IconCardContainer";
import FeaturePowerUpComponent from "../components/organisms/featurePowerUpComponent";
import {getPageQuery} from "../services/queryLibrary";
import {registeredPages} from "../utils/constants";
import {loadHomePageData} from "../services/siteServies";
import {loadImageFromData} from "../utils/globalFunctions";
import DarkContentWithSideImage from "../components/organisms/darkContentWithSideImage";
import FaqQuestions from "../components/organisms/faqQuestions";


export async function getServerSideProps() {
    const currentPageData = await loadHomePageData(getPageQuery(registeredPages.WORK_WITH_ME));
    return {
        props: {
            currentPageData,
        },
    };
}
const WorkWithMe = ({ currentPageData }) => {
    const pageVars = currentPageData.page[registeredPages.WORK_WITH_ME]

    return (
        <Template urlStrings={[
            {"Work With Me":'null'}
        ]} urlBar={true} urlDetails={{
            title:[currentPageData.page.title],
            desc:pageVars.wwmBannerPc
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

            <ImageWithSideIconContents
                heading={pageVars.wwmHeading1}
                content={pageVars.wwmPc1 }
                pointsArray={pageVars.wwmContentPoints.map((p,i) => ({header:p.wwmContentPointHeading, desc:p.wwmContentPointDesc}))}
                ImageData={{
                    url: loadImageFromData(pageVars.wwmImage1),
                    altText: pageVars.wwmImage1.altText,
                }}
                buttonData={{
                    buttonText:pageVars.wwmButton1.wwmButtonLabel1,
                    action:pageVars.wwmButton1.wwmButtonLink1
                }}
            />
            <BrandSlider currentPageData={currentPageData} />

            <HeaderDescContainer
                header={pageVars.wwmHeading2}
                desc={pageVars.wwmPc2}
                showButton={true}
                buttonData={{
                    buttonText:pageVars.wwmCardCompCtaButton.wwmCardCompCtaButtonLabel,
                    action:pageVars.wwmCardCompCtaButton.wwmCardCompCtaButtonLink
                }}
            />

            <div className="row">
                {
                    pageVars.wwmCards.map((card,i) => <div className="col-lg-4 col-md-6 col-sm-12 col-12" key={i}>
                        <IconCardContainer
                            icon={loadImageFromData(card.wwmCardIcon)}
                            altText={card.wwmCardIcon.altText}
                            heading={card.wwmCardHeading}
                            desc={card.wwmCardDescription}
                            listData={card.wwmCardPoints.map((c,i) => {return {servicePointName: c.wwmCardPointName}})}
                        />
                    </div>)
                }

            </div>


            <CaseStudiesSlider currentPageData={currentPageData}  />

            <FeaturePowerUpComponent
                header={pageVars.wwmHeading3}
                desc={pageVars.wwmPc3}
                button={{
                    buttonText:pageVars.wwmButton2.wwmButtonLabel2,
                    action:pageVars.wwmButton2.wwmButtonLink2
                }}
                pointsArray={pageVars.wwmPoints.map((p,i) => {return {
                    icon:p.wwmPointIcon,
                    name:p.wwmPointName,
                    desc:p.wwmPointDescription
                }})}
            />

            <TestimonialsSlider currentPageData={currentPageData} />

            <DarkContentWithSideImage currentPageData={currentPageData} />


            <FaqQuestions
                header={pageVars.wwmHeading4}
                desc={pageVars.wwmPc4}
                faqArray={pageVars.wwmFaqs.map(f => {return {
                    question:f.wwmFaqQuestion,
                    answer:f.wwmFaqAnswer
                }})}
                buttonData={{
                    buttonText:pageVars.wwmFaqCtaButton.wwmFaqCtaButtonLabel,
                    action:pageVars.wwmFaqCtaButton.wwmFaqCtaButtonLink
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

export default WorkWithMe;
