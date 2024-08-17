import React from 'react';
import Template from "../../components/atom/template";
import ContentWithSideRowCounts from "../../components/organisms/ContentWithSideRowCounts";
import ImageWithSideIconContents from "../../components/molecules/imageWithSideIconContents";
import BrandSlider from "../../components/organisms/brandSlider";
import ImageWithSideContent from "../../components/organisms/imageWithSideContent";
import FeaturePowerUpComponent from "../../components/organisms/featurePowerUpComponent";
import HeaderDescContainer from "../../components/molecules/headerDescContainer";
import IconCardContainer from "../../components/molecules/IconCardContainer";
import TestimonialsSlider from "../../components/organisms/testimonialsSlider";
import FaqQuestions from "../../components/organisms/faqQuestions";
import BrandSliderWithSideContent from "../../components/organisms/brandSliderWithSideContent";
import SimpleNewsLetterForm from "../../components/molecules/simpleNewsLetterForm";
import {loadHomePageData} from "../../services/siteServies";
import {getPageQuery} from "../../services/queryLibrary";
import {registeredPages} from "../../utils/constants";
import {isNotNull, loadImageFromData} from "../../utils/globalFunctions";
import CaseStudiesSlider from "../../components/organisms/caseStudiesSlider";
import DarkContentWithSideImage from "../../components/organisms/darkContentWithSideImage";
import FeaturesSection from "../../components/organisms/featuresSection";

export async function getServerSideProps(context) {
    const { slug } = context.params;
    const currentPageData = await loadHomePageData(getPageQuery(registeredPages.DETAILED_SERVICES, slug));
    // console.log("reyurn =", currentPageData)
    return {
        props: {
            currentPageData,
        },
    };
}
const SeoService = ({ currentPageData }) => {
    const caseStudyVars = currentPageData[registeredPages.SINGLE_SERVICES]

    if (!isNotNull(caseStudyVars))
        return <h1>No Data Found</h1>

    const pageVars = caseStudyVars[registeredPages.DETAILED_SERVICES]
    return (
        <Template
            urlStrings={[
                {"Services":'/services'},
                {[currentPageData[registeredPages.SINGLE_SERVICES].title]:'null'}
            ]} urlBar={true} urlDetails={{
            title:[currentPageData[registeredPages.SINGLE_SERVICES].title],
            desc:pageVars.seoServicesBannerPc
        }} currentPageData={currentPageData} slug={registeredPages.SINGLE_SERVICES}
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
                heading={pageVars.seoServicesHeading1}
                content={pageVars.seoServicesPc1}
                ImageData={{
                    url: loadImageFromData(pageVars.seoServicesImage1),
                    alert: pageVars.seoServicesImage1.altText,
                }}
                addClass="mt-2"
                buttonData={{
                    buttonText:pageVars.seoServicesCtaButton1.seoServicesButtonLabel1,
                    action:pageVars.seoServicesCtaButton1.seoServicesButtonLink1
                }}
                pointsArray={pageVars.seoServicesPc1Points.map((c,i) => {
                    return {
                        header:c.seoServicesPc1PointsName,
                        desc:c.seoServicesPc1PointsDescription
                    }
                })}

            />
            <BrandSlider currentPageData={currentPageData} />

            <ImageWithSideContent

                heading={pageVars.seoServicesHeading2}
                content={pageVars.seoServicesPc2}
                ImageData={{
                    url: loadImageFromData(pageVars.seoServicesImage2),
                    altText: pageVars.seoServicesImage2.altText,
                }}
                contentListing={1}
                buttonData={{
                    buttonText: pageVars.seoServicesCtaButton2.seoServicesButtonLabel2,
                    action: pageVars.seoServicesCtaButton2.seoServicesButtonLink2,
                }}
            />

            <FeaturesSection
                header={pageVars.seoServicesHeading3}
                desc={pageVars.seoServicesPc3}
                button={{ buttonText:pageVars.seoServicesCtaButton3.seoServicesButtonLabel3, action: pageVars.seoServicesCtaButton3.seoServicesButtonLink3}}
                pointArray={pageVars.seoServicesFeaturesComp.map(p => {
                    return{
                        header:p.seoServicesFeatureName,
                        desc:p.seoServicesFeatureDescription
                    }
                })}
            />


            <FeaturePowerUpComponent
                header={pageVars.seoServicesHeading4}
                desc={pageVars.seoServicesPc4}
                button={{
                    buttonText : pageVars.seoServicesCtaButton4.seoServicesButtonLabel4,
                    action : pageVars.seoServicesCtaButton4.seoServicesButtonLink4
                }}
                pointsArray={pageVars.seoServicesOfferings.map(p => {return {
                    icon:p.seoServicesOfferingIcon,
                    name:p.seoServicesOfferingPointName,
                    desc:p.seoServicesOfferingPointDescription
                }})}
            />

           <CaseStudiesSlider currentPageData={currentPageData} />

            {
                pageVars.seoServicesAltContentWithImage.map((card,index) => <ImageWithSideContent
                    heading={card.seoServicesHeading5}
                    content={card.seoServicesPc5}
                    ImageData={{
                        url: loadImageFromData(card.seoServicesImage3),
                        alert: card.seoServicesImage3.altText,
                    }}
                    contentListing={!index%2}
                    buttonData={{
                        buttonText: card.seoServicesCtaButton5.seoServicesButtonLabel5,
                        action: card.seoServicesCtaButton5.seoServicesButtonLink5,
                    }}
                    key={index}
                />)
            }

            <HeaderDescContainer
                header={pageVars.seoServicesHeading6}
                desc={pageVars.seoServicesPc6}
                showButton={true}
                buttonData={{
                    buttonText:pageVars.seoServicesCardCta.seoServicesCardCtaLabel,
                    action:pageVars.seoServicesCardCta.seoServicesCardCtaLink
                }}
            />

            <div className="row">
                {
                    pageVars.seoServicesCardComp.map((card,i) => <div className="col-lg-4 col-md-6 col-sm-12 col-12" key={i}>
                        <IconCardContainer
                            icon={loadImageFromData(card.seoServicesCardIcon)}
                            heading={card.seoServicesCardName}
                            desc={card.seoServicesCardDescription}
                            listData={card.seoServicesCardPoints.map((c,i) => {return {servicePointName: c.seoServicesCardBulletPoints}})}
                        />
                    </div>)
                }

            </div>

            <DarkContentWithSideImage currentPageData={currentPageData} />

            <TestimonialsSlider currentPageData={currentPageData} />

            <FaqQuestions
                header={pageVars.seoServicesHeading7}
                desc={pageVars.seoServicesPc7}
                faqArray={pageVars.seoServicesFaqQuestionAnswer.map(f => {return {
                    question:f.seoServicesFaqQuestion,
                    answer:f.seoServicesFaqAnswer
                }})}
                buttonData={{
                    buttonText:pageVars.seoServicesFaqCta.seoServicesFaqCtaButtonLabel,
                    action:pageVars.seoServicesFaqCta.seoServicesFaqCtaButtonLink
                }}

            />


            <BrandSliderWithSideContent  currentPageData={currentPageData}/>

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

export default SeoService;
